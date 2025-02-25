# Bori Bot Backend

A simple chatbot backend built with FastAPI and LangChain.

## Project Structure

```
backend/
│── app/
│   ├── routes/
│   │   ├── chat.py   # Chat-related routes
│   │   ├── health.py # Health check route
│   │   
│   ├── services/
│   │   ├── chat_service.py  # Conversation handling logic
│   │   ├── llm.py  # LLM configuration
│   │
│   ├── config/
│   │   ├── settings.py  # Environment variables configuration
│   │   ├── prompts.py  # LangChain prompts
│   │
│   ├── models/
│   │   ├── chat_models.py  # Pydantic schemas for validation
│   │
│   ├── __init__.py  # Module definition
│   ├── main.py  # API entry point
│
│── .env  # Environment variables (API Keys)
│── requirements.txt  # Dependencies
│── main.py  # Application runner
│── README.md  # Project documentation
```

## Setup

### Option 1: Standard Installation

1. Install dependencies:
```bash
pip install -r requirements.txt

# If you encounter permission errors, try:
pip install -r requirements.txt --user
```

### Option 2: Using Virtual Environment (Recommended)

1. Create a virtual environment:
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment (Windows)
venv\Scripts\activate

# Activate virtual environment (macOS/Linux)
# source venv/bin/activate
```

2. Install dependencies in the virtual environment:
```bash
pip install -r requirements.txt
```

3. When you're done, you can deactivate the virtual environment:
```bash
deactivate
```

### Option 3: Run as Administrator

If you're on Windows and still encountering permission issues, you can:
1. Open Command Prompt or PowerShell as Administrator
2. Navigate to your project directory
3. Run the installation command

### Option 4: For Projects on Secondary Drives (D:, E:, etc.)

If your project is on a secondary drive and you're experiencing permission issues:

1. Create a local virtual environment on the same drive:
```bash
# Navigate to your project folder on drive D:
D:
cd \path\to\your\project

# Create virtual environment in the project folder
python -m venv .venv
```

2. Activate the virtual environment:
```bash
# Windows
.venv\Scripts\activate
```

3. Install dependencies with the `--no-cache-dir` flag to avoid using the cache on C:
```bash
pip install --no-cache-dir -r requirements.txt
```

## Configuration

1. Configure your `.env` file:
```
OPENAI_API_KEY=your_openai_api_key_here
```

## Running the Server

1. Run the server:
```bash
python main.py
```

The server will start on http://localhost:8000

## API Endpoints

- `GET /`: Health check endpoint
- `POST /chat`: Chat endpoint that receives messages and returns responses
  - Request body: `{ "message": "Your message here", "conversation_id": "unique-id" }`
  - Response: `{ "response": "Bot response here" }`

## How it works

The backend uses LangChain with OpenAI's GPT-4o-mini model to power the chatbot. It maintains conversation context for each client using a conversation store that maps client IDs to LangChain conversation chains. 