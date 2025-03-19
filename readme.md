# 🚀 Guía de Configuración del Proyecto

<div align="center">

![Banner de Configuración del Proyecto](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000)

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)]()
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)]()
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)]()

</div>

## 📋 Tabla de Contenidos

- [Requisitos Previos](#-requisitos-previos)
- [Configuración del Frontend](#-configuración-del-frontend)
- [Configuración del Backend (JavaScript)](#-configuración-del-backend-javascript)
- [Configuración del Backend (Python)](#-configuración-del-backend-python)

## 🔧 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:
- Node.js y npm
- Python 3.x
- MongoDB
- Git

> **Importante**: Asegúrate de estar en el directorio correcto al instalar las dependencias de cada componente del proyecto.

## 💻 Configuración del Frontend

1. **Clonar el Repositorio**
   ```bash
   git clone <url-del-repositorio>
   ```

2. **Instalar Dependencias**
   ```bash
   npm i
   ```

3. **Iniciar Servidor de Desarrollo**
   ```bash
   npm run dev
   ```

   Tu aplicación frontend estará disponible en `http://localhost:5173`

## ⚙️ Configuración del Backend (JavaScript)

1. **Clonar el Repositorio**
   ```bash
   git clone <url-del-repositorio>
   ```

2. **Instalar Dependencias**
   ```bash
   npm i
   ```

3. **Configuración de la Base de Datos**
   - Inicia tu instancia de MongoDB
   - Asegúrate de que la conexión esté establecida

4. **Iniciar el Servidor**
   ```bash
   npm run dev
   ```

## 🐍 Configuración del Backend (Python)

1. **Clonar el Repositorio**
   ```bash
   git clone <url-del-repositorio>
   ```

2. **Crear Entorno Virtual**
   ```bash
   python -m venv venv
   ```

3. **Activar Entorno Virtual**

   Windows:
   ```bash
   venv\Scripts\activate
   ```

   macOS/Linux:
   ```bash
   source venv/bin/activate
   ```

4. **Instalar Dependencias**
   ```bash
   pip install -r requirements.txt
   ```

5. **Configuración de la Base de Datos**
   - Inicia tu instancia de MongoDB
   - Verifica la configuración de conexión

6. **Iniciar el Servidor**
   ```bash
   python app.py
   ```

## 🔐 Variables de Entorno

Cada componente del proyecto puede requerir variables de entorno específicas. Consulta los archivos `.env.example` en cada directorio del proyecto para ver las variables requeridas.

## 📝 Notas Adicionales

- Asegúrate de que MongoDB esté ejecutándose antes de iniciar cualquier backend
- Consulta la documentación respectiva para ver los endpoints de la API
- Para solución de problemas, consulta el rastreador de problemas del proyecto

---

<div align="center">

Hecho con ❤️ por Emilio 

</div>
