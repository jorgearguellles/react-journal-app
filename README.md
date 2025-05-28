# Journal App - Aplicación de Diario Personal

## 📝 Descripción

Journal App es una aplicación web moderna que permite a los usuarios mantener un diario personal digital. La aplicación ofrece una experiencia de usuario intuitiva y atractiva, permitiendo crear, editar y gestionar entradas de diario de manera eficiente.

## 🚀 Tecnologías Principales

### Frontend

- **React 18**: Framework principal para la construcción de la interfaz de usuario
- **Vite**: Herramienta de build y desarrollo para una experiencia de desarrollo rápida
- **Material-UI (MUI)**: Biblioteca de componentes UI para un diseño moderno y responsive
- **Redux Toolkit**: Gestión del estado global de la aplicación
- **React Router**: Manejo de rutas y navegación
- **Firebase**: Backend as a Service para autenticación y almacenamiento de datos

### Características Técnicas

- Arquitectura basada en componentes
- Gestión de estado con Redux
- Autenticación de usuarios
- Almacenamiento en tiempo real
- Diseño responsive
- Temas personalizables

## 🏗️ Arquitectura y Patrones

### Estructura del Proyecto

```
src/
├── auth/         # Lógica de autenticación
├── firebase/     # Configuración de Firebase
├── hooks/        # Custom hooks
├── journal/      # Componentes y lógica del diario
├── router/       # Configuración de rutas
├── store/        # Estado global (Redux)
├── theme/        # Configuración de temas
└── ui/           # Componentes de UI reutilizables
```

### Patrones de Diseño

- **Container/Presentational Pattern**: Separación de lógica y presentación
- **Custom Hooks**: Reutilización de lógica de negocio
- **Redux Toolkit**: Patrón Flux para gestión de estado
- **Componentes Atómicos**: Diseño modular y reutilizable

## 🎨 UI/UX

### Capturas de Pantalla

![Login Screen](https://github.com/jorgearguellles/react-journal-app/blob/main/public/1.png)
![Create Account Screen](https://github.com/jorgearguellles/react-journal-app/blob/main/public/2.png)
![Dashboard](https://github.com/jorgearguellles/react-journal-app/blob/main/public/3.png)
![Note Editor](https://github.com/jorgearguellles/react-journal-app/blob/main/public/4.png)

### Características de la Interfaz

- Diseño moderno y minimalista
- Tema claro/oscuro
- Interfaz intuitiva y fácil de usar
- Animaciones suaves
- Feedback visual para acciones del usuario

## 🔧 Configuración del Proyecto

### Prerrequisitos

- Node.js (versión recomendada: 16.x o superior)
- npm o yarn

### Instalación

1. Clonar el repositorio

```bash
git clone [URL del repositorio]
```

2. Instalar dependencias

```bash
npm install
# o
yarn install
```

3. Configurar variables de entorno
   Crear un archivo `.env` con las credenciales de Firebase:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Iniciar el servidor de desarrollo

```bash
npm run dev
# o
yarn dev
```

## 🛠️ Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la versión de producción

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 👥 Desarrollador

Jorge Arias Argüelles - [LinkedIn](https://www.linkedin.com/in/jorgeariasarguelles/)

---

⭐️ Si te gustó el proyecto, no olvides darle una estrella en GitHub
