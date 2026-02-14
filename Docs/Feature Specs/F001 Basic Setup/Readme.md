
# F001: Project Setup & Basic UI

## Description
This feature focuses on establishing the foundational setup for the messaging platform, including project structure, development environment, backend and frontend initialization, database connectivity, and creation of core UI components required before authentication and real-time functionality are introduced.

By completing this feature, the project will have a production-ready foundation with working development environments, enabling future implementation of authentication, messaging logic, and real-time communication features.

## Implementation
### Initial Project Setup
- Create project folder structure
- Initialize Git repository
- Create README.md with project description
- Setup .gitignore file

### Frontend Setup
- Create React app with TypeScript (`npx create-react-app client --template typescript`)
- Install dependencies (React Router, Axios, Socket.io-client)
- Setup Tailwind CSS
- Configure ESLint and Prettier
- Create basic folder structure (components, pages, hooks, services, utils)

### Backend Setup (Go)
- Initialize Go module (`go mod init messaging-platform`)
- Install dependencies (Gin/Echo framework, gorilla/websocket, pgx for PostgreSQL, bcrypt, JWT-go)
- Create basic folder structure (handlers, services, models, middleware, utils)
- Setup environment variables (godotenv or viper)
- Create basic HTTP server with Gin
- Test server is running (simple "Hello World" endpoint)
- Setup hot reload for development (air or fresh)

### Database Setup
- Install PostgreSQL locally or use cloud service
- Create database
- Test database connection from backend
- Setup database migration tool (node-pg-migrate or Knex)

### Basic UI Components
- Create chat layout structure (sidebar + main chat area)
- Create message bubble component
- Create message input box component
- Create header component
- Create basic responsive design
- Test UI with mock data (hardcoded messages)

### Deployment Setup
- Install Docker 
  - Create Dockerfiles 
  - Run with docker-compose up 
  - Build all features locally 

- Deploy to Production (when ready) 
  - Setup Supabase (database) 
  - Deploy backend to Render 
  - Deploy frontend to Vercel 
  - Optional: Add Redis, R2, CI/CD 
