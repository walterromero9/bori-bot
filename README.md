# Bori Bot

Bori Bot is a simple chatbot developed with LangChain and OpenAI GPT-3.5 Turbo. It features a modern user interface built with Next.js and shadcn/ui, and a powerful backend with FastAPI and LangChain.

## Project Structure

The project is divided into two main parts:

- **frontend**: User interface built with Next.js and shadcn/ui
- **backend**: API built with FastAPI and LangChain

## Features

- Real-time chat
- Message persistence in the browser
- Modern and responsive user interface
- Loading and typing animations
- Customizable through system prompts

## Setup

### Backend

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Configure your `.env` file with your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key_here
```

4. Start the server:
```bash
python main.py
```

The server will start at http://localhost:8000

### Frontend

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000

## Customization

You can customize the chatbot's behavior by modifying the `backend/prompts.py` file. This file contains the system prompt that defines how the chatbot should behave.

## Technologies Used

- **Frontend**:
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - shadcn/ui
  - Lucide Icons

- **Backend**:
  - FastAPI
  - LangChain
  - OpenAI GPT-4o-mini

## Developed by

Walter Romero 
