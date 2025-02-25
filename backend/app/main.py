"""
Main application entry point
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config.settings import API_TITLE, API_DESCRIPTION, API_VERSION, CORS_ORIGINS, CORS_METHODS, CORS_HEADERS
from app.routes import health, chat

app = FastAPI(
    title=API_TITLE,
    description=API_DESCRIPTION,
    version=API_VERSION,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=CORS_METHODS,
    allow_headers=CORS_HEADERS,
)

app.include_router(health.router)
app.include_router(chat.router) 