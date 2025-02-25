"""
Configuration settings for the application
"""
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# API settings
API_TITLE = "Bori Bot API"
API_DESCRIPTION = "A simple chatbot API powered by LangChain and OpenAI"
API_VERSION = "0.1.0"

# OpenAI settings
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
OPENAI_MODEL = "gpt-4o-mini"
OPENAI_TEMPERATURE = 0.7

# CORS settings
CORS_ORIGINS = ["*"]
CORS_METHODS = ["*"]
CORS_HEADERS = ["*"] 