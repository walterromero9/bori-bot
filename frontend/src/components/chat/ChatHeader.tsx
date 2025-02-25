"use client";

import {  Github, BotMessageSquare, PlusCircle} from "lucide-react"
import { Button } from '@/components/ui/button';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const ChatHeader = ({newChat}: {newChat: () => void}) => {
  return (
    <CardHeader className="border-b bg-muted/50">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback><BotMessageSquare className="h-4 w-4" /></AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg">Bori Bot</CardTitle>
          <a href="https://github.com/walterromero9" target="_blank" rel="noopener noreferrer">
            <p className="text-sm text-muted-foreground">Powered by Walter Romero</p>
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={newChat} title="New Chat">
            <PlusCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" asChild title="GitHub">
            <a href="https://github.com/walterromero9" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            </a>
        </Button>
      </div>
    </div>
  </CardHeader>
  )
}

export default ChatHeader