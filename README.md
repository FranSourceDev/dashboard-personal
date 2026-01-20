# 🌌 PRISMA - Life Balance System

**Prisma** es una aplicación web interactiva diseñada para ayudarte a visualizar, calibrar y registrar el equilibrio en las diferentes áreas de tu vida. A través de una interfaz moderna y estética, puedes evaluar tu estado actual y guardar tu progreso a lo largo del tiempo.

![Prisma Dashboard](./public/screenshot-placeholder.png)
*(Nota: Asegúrate de añadir una captura de pantalla del dashboard en la carpeta public o actualizar esta ruta)*

## ✨ Características Principales

*   **Calibración de Áreas**: Sliders interactivos para evaluar 9 dimensiones clave: Alma, Cuerpo, Mente, Familia, Amigos, Amor, Dinero, Propósito y Crecimiento.
*   **Visualización Radar**: Gráfico de radar en tiempo real que proyecta tu balance actual de forma visual e impactante.
*   **Historial y Seguimiento**: Guarda tus evaluaciones ("sesiones") para ver tu evolución en el tiempo.
*   **Cálculo de Promedio**: Indicador automático del promedio general de equilibrio.
*   **Modo Demo/Offline**: Funciona completamente en local incluso sin conexión a base de datos (guarda en memoria).
*   **Persistencia Robusta**: Integración con backend PostgreSQL para almacenamiento seguro y persistente de tus datos.

## 🛠️ Tecnologías Utilizadas

### Frontend
*   **React + Vite**: Rendimiento y velocidad de desarrollo.
*   **Tailwind CSS**: Diseño moderno, responsivo y estético (Dark Theme personalizado).
*   **Recharts**: Librería de visualización de datos para el gráfico de radar.
*   **Lucide React**: Iconografía elegante y consistente.

### Backend
*   **Node.js + Express**: Servidor ligero para gestionar la API.
*   **PostgreSQL**: Base de datos relacional robusta.
*   **Node-Postgres (pg)**: Driver para la conexión con la base de datos.
*   **Railway Ready**: Configurado para despliegue automático en la plataforma Railway.

## 🚀 Instalación y Ejecución Local

1.  **Clonar el repositorio**
    ```bash
    git clone https://github.com/tu-usuario/prisma.git
    cd prisma
    ```

2.  **Instalar dependencias**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno (.env)**
    Crea un archivo `.env` en la raíz del proyecto para conectar tu base de datos local o remota.
    ```env
    DATABASE_URL=postgresql://usuario:password@localhost:5432/prisma_db
    PORT=3001
    ```
    *Si no configuras esto, la app no podrá guardar datos en la BD, pero podrías usar el frontend en modo desconectado si se revierte la lógica o se manejan errores.*

4.  **Iniciar Servidor de Desarrollo**
    ```bash
    # Ejecutar frontend y backend concurrentemente (si configuras script 'dev:all')
    # O por separado:
    
    # Terminal 1 (Backend)
    npm run start 
    
    # Terminal 2 (Frontend)
    npm run dev
    ```

5.  **Abrir en el navegador**
    Visita `http://localhost:5173`

## 📦 Despliegue en Railway

Este proyecto está optimizado para Railway.

1.  Conecta tu repositorio de GitHub a Railway.
2.  Añade un servicio de **PostgreSQL** dentro de tu proyecto en Railway.
3.  La variable `DATABASE_URL` se inyectará automáticamente.
4.  Railway detectará el `Procfile` y ejecutará `npm start` para levantar el servidor, el cual servirá el frontend construido (asegúrate de que el build se ejecute).

## 📄 Licencia

Este proyecto es de uso personal y educativo.
