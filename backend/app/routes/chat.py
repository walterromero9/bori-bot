"""
Chat routes
"""
from fastapi import APIRouter, HTTPException, Depends
from app.models.chat_models import ChatRequest, ChatResponse
from app.services.chat_service import process_message
import logging

logger = logging.getLogger(__name__)

router = APIRouter(tags=["Chat"])

def validate_request(request: ChatRequest) -> ChatRequest:
    """
    Validate the chat request
    """
    if not request.conversation_id:
        raise HTTPException(status_code=400, detail="Conversation ID is required")
    
    if not request.message or not request.message.strip():
        raise HTTPException(status_code=400, detail="The message cannot be empty")
    
    if len(request.message) > 300:
        raise HTTPException(status_code=400, detail="The message is too long (maximum 300 characters)")
    
    return request

@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest = Depends(validate_request)):
    """
    Chat endpoint
    """
    try:
        logger.info(f"Processing message for conversation: {request.conversation_id[:8]}...")
        response = process_message(request.message, request.conversation_id)
        return ChatResponse(response=response)
    except Exception as e:
        logger.error(f"Error in chat endpoint: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error") 