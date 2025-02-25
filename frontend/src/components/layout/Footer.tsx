"use client";

import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
    <span>Desarrollado con</span>
    <ExternalLink className="h-4 w-4" />
    <a
      href="https://js.langchain.com"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium hover:underline"
    >
      LangChain
    </a>
  </div>
  )
}

export default Footer