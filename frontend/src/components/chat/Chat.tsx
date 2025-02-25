'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react';
import InputBox from './InputBox';
import ChatHeader from './ChatHeader';
import Message from './Message';
import { toast } from "sonner"


type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const clientId = useRef<string>('');

  useEffect(() => {
    const storedClientId = localStorage.getItem('chatClientId');
    if (storedClientId) {
      clientId.current = storedClientId;
    } else {
      clientId.current = crypto.randomUUID();
      localStorage.setItem('chatClientId', clientId.current);
    }

    const storedMessages = localStorage.getItem(`chatMessages_${clientId.current}`);
    if (storedMessages) {
      try {
        setMessages(JSON.parse(storedMessages));
      } catch (e) {
        console.error('Error loading saved messages:', e);
        localStorage.removeItem(`chatMessages_${clientId.current}`);
      }
    }
    
    setTimeout(() => {
      setIsInitialLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (messages.length > 0 && clientId.current) {
      localStorage.setItem(`chatMessages_${clientId.current}`, JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { id: crypto.randomUUID(), content: input, role: 'user' as const };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          conversation_id: clientId.current
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ detail: 'Unknown error' }));
        throw new Error(errorData.detail || `Error ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), content: data.response, role: 'assistant' as const },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast( "Could not connect to server");
      
      setMessages((prev) => prev.filter(msg => msg.id !== userMessage.id));
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  const newChat = () => {
      setMessages([]);
      localStorage.removeItem(`chatMessages_${clientId.current}`);
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-3xl mx-auto border rounded-lg overflow-hidden bg-background">
        <ChatHeader newChat={newChat} />

        <Message 
          messages={messages} 
          isLoading={isLoading} 
          isInitialLoading={isInitialLoading}
          messagesEndRef={messagesEndRef as React.RefObject<HTMLDivElement>} 
        />

        <InputBox input={input} setInput={setInput} handleSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
} 