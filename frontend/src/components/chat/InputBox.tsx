"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

const InputBox = ({input, setInput, handleSubmit, isLoading}: {input: string, setInput: (input: string) => void, handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void, isLoading: boolean}) => {
  return (
    <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
    <Input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Type a message..."
      disabled={isLoading}
      className="flex-1"
    />
    <Button 
      type="submit" 
      size="icon" 
      disabled={isLoading || !input.trim()}
    >
      <Send className="h-4 w-4" />
    </Button>
  </form>
  )
}

export default InputBox