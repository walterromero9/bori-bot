# Bori Bot Frontend

A simple chatbot frontend built with Next.js and shadcn/ui.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

The frontend will start on http://localhost:3000

## Features

- Clean and intuitive chat interface
- Responsive design with shadcn/ui components
- Loading animation while waiting for responses
- Message history with user and bot messages

## How it works

The frontend sends HTTP requests to the backend API and displays the responses in a chat interface. Each conversation has a unique ID that is used to maintain context on the server side.

## Dependencies

- Next.js
- React
- shadcn/ui
- Tailwind CSS
- Lucide React (for icons)
