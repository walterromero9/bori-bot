"""
Pydantic models for chat API
"""
from pydantic import BaseModel


class ChatRequest(BaseModel):
    """
    Request model for chat endpoint
    """
    message: str
    conversation_id: str


class ChatResponse(BaseModel):
    """
    Response model for chat endpoint
    """
    response: str 