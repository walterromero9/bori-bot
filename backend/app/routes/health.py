"""
Health check routes
"""
from fastapi import APIRouter

router = APIRouter(tags=["Health"])


@router.get("/")
async def health_check():
    """
    Health check endpoint
    """
    return {"message": "Bori Bot API is running"} 