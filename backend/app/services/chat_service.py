"""
Chat service for handling conversations
"""
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain
from app.services.llm import create_llm, create_prompt
from datetime import datetime, timedelta
import logging

logger = logging.getLogger(__name__)

conversation_store = {}
MAX_CONVERSATIONS = 1000  
CONVERSATION_TIMEOUT = timedelta(hours=24) 

def cleanup_old_conversations():
    """
    Clean old conversations to avoid memory leaks
    """
    current_time = datetime.now()
    expired_ids = []
    
    for conv_id, conv_data in conversation_store.items():
        if current_time - conv_data["last_access"] > CONVERSATION_TIMEOUT:
            expired_ids.append(conv_id)
    
    for conv_id in expired_ids:
        del conversation_store[conv_id]
        
    logger.info(f"Memory cleanup: {len(expired_ids)} conversations removed")
    
    if len(conversation_store) > MAX_CONVERSATIONS:
        sorted_convs = sorted(conversation_store.items(), 
                             key=lambda x: x[1]["last_access"])
        
        to_remove = sorted_convs[:int(MAX_CONVERSATIONS * 0.2)]
        for conv_id, _ in to_remove:
            del conversation_store[conv_id]
        
        logger.info(f"Additional cleanup: {len(to_remove)} conversations removed due to memory limit")


def get_conversation(conversation_id: str):
    """
    Get or create a conversation chain for a client
    """

    if len(conversation_store) % 10 == 0:  
        cleanup_old_conversations()
        
    current_time = datetime.now()
    
    if conversation_id not in conversation_store:
        llm = create_llm()
        prompt = create_prompt()
        memory = ConversationBufferMemory(return_messages=True)
        
        conversation = ConversationChain(
            llm=llm,
            prompt=prompt,
            memory=memory,
            verbose=False
        )
        
        conversation_store[conversation_id] = {
            "conversation": conversation,
            "created_at": current_time,
            "last_access": current_time
        }
    else:
        conversation_store[conversation_id]["last_access"] = current_time
    
    return conversation_store[conversation_id]["conversation"]


def process_message(message: str, conversation_id: str) -> str:
    """
    Process a message using the conversation chain
    """
    try:
        conversation = get_conversation(conversation_id)
        response = conversation.predict(input=message)
        return response
    except Exception as e:
        logger.error(f"Error processing message: {str(e)}")
        return "Sorry, an error occurred while processing your message. Please try again." 