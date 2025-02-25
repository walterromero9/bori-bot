# Bori Bot

Bori Bot es un chatbot simple desarrollado con LangChain y OpenAI GPT-3.5 Turbo. Cuenta con una interfaz de usuario moderna construida con Next.js y shadcn/ui, y un backend potente con FastAPI y LangChain.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

- **frontend**: Interfaz de usuario construida con Next.js y shadcn/ui
- **backend**: API construida con FastAPI y LangChain

## Características

- Chatbot en tiempo real con WebSockets
- Mantiene el contexto de la conversación
- Interfaz de usuario moderna y responsiva
- Animaciones de escritura
- Indicador de estado de conexión
- Personalizable a través de prompts del sistema

## Configuración

### Backend

1. Navega al directorio del backend:
```bash
cd backend
```

2. Instala las dependencias:
```bash
pip install -r requirements.txt
```

3. Configura tu archivo `.env` con tu clave API de OpenAI:
```
OPENAI_API_KEY=your_openai_api_key_here
```

4. Inicia el servidor:
```bash
python main.py
```

El servidor se iniciará en http://localhost:8000

### Frontend

1. Navega al directorio del frontend:
```bash
cd frontend
```

2. Instala las dependencias:
```bash
npm install
npm install uuid @types/uuid
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

El frontend se iniciará en http://localhost:3000

## Personalización

Puedes personalizar el comportamiento del chatbot modificando el archivo `backend/prompts.py`. Este archivo contiene el prompt del sistema que define cómo debe comportarse el chatbot.

## Desarrollado por

Walter Romero 