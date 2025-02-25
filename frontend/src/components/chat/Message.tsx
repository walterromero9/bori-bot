'use client';
import { Bot, Loader2 } from "lucide-react"

const Message = ({
  messages, 
  isLoading, 
  isInitialLoading = false,
  messagesEndRef
}: {
  messages: {id: string, content: string, role: 'user' | 'assistant'}[], 
  isLoading: boolean, 
  isInitialLoading?: boolean,
  messagesEndRef: React.RefObject<HTMLDivElement> | null
}) => {

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
    {isInitialLoading ? (
      <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
        <Loader2 className="h-12 w-12 mb-4 opacity-50 animate-spin" />
      </div>
    ) : messages.length === 0 ? (
      <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
        <Bot className="h-12 w-12 mb-4 opacity-50" />
        <h3 className="text-lg font-medium">Welcome to Bori Bot!</h3>
        <p className="max-w-md">
          I'm a chatbot developed by Walter Romero. How can I help you today?
        </p>
      </div>
    ) : (
      <>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}
            >
              <div className="flex items-center mb-1">
                {message.role === 'assistant' && (
                  <Bot className="h-4 w-4 mr-2" />
                )}
                <span className="text-xs font-medium">
                  {message.role === 'assistant' && 'Bori'}
                </span>
              </div>
              <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
      </>
    )}
    
    {isLoading && (
      <div className="flex justify-start">
        <div className="max-w-[80%] rounded-lg p-3 bg-muted">
          <div className="flex items-center">
            <Bot className="h-4 w-4 mr-2" />
            <span className="text-xs font-medium">Bori</span>
          </div>
          <div className="flex space-x-1 mt-2">
            <div className="h-2 w-2 rounded-full bg-current animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="h-2 w-2 rounded-full bg-current animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="h-2 w-2 rounded-full bg-current animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    )}
    
    <div ref={messagesEndRef} />
  </div>
  )
};

export default Message;