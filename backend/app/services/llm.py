"""
LLM service configuration
"""
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate, MessagesPlaceholder, HumanMessagePromptTemplate, SystemMessagePromptTemplate
from app.config.settings import OPENAI_API_KEY, OPENAI_MODEL, OPENAI_TEMPERATURE
from app.config.prompts import SYSTEM_PROMPT


def create_llm():
    """
    Create and configure the LLM
    """
    return ChatOpenAI(
        model_name=OPENAI_MODEL,
        temperature=OPENAI_TEMPERATURE,
        api_key=OPENAI_API_KEY
    )


def create_prompt():
    """
    Create the chat prompt template
    """
    return ChatPromptTemplate.from_messages([
        SystemMessagePromptTemplate.from_template(SYSTEM_PROMPT),
        MessagesPlaceholder(variable_name="history"),
        HumanMessagePromptTemplate.from_template("{input}")
    ]) 