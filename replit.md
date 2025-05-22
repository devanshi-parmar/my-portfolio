# Overview

This is a modern full-stack web application built as a portfolio website for Alex Rodriguez, a Senior Frontend Developer. The application showcases a professional portfolio with sections for about, skills, projects, experience, and contact functionality. It features a modern dark theme with animated UI components and form submission capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with a clear separation between client and server code:

- **Frontend**: React-based SPA with TypeScript
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build System**: Vite for frontend, esbuild for backend

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for smooth animations
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle with PostgreSQL
- **API**: RESTful endpoints for contact form submission
- **Development**: Hot reload with Vite integration in dev mode

### Database Schema
The application uses PostgreSQL with two main tables:
- `users`: Basic user authentication (id, username, password)
- `contact_messages`: Contact form submissions with fields for name, email, company, project type, and message

### UI/UX Design
- **Theme**: Modern dark theme with blue/cyan accent colors
- **Typography**: Inter font family for body text, JetBrains Mono for code
- **Layout**: Responsive design with mobile-first approach
- **Components**: Reusable UI components from shadcn/ui
- **Animations**: Smooth transitions and scroll-triggered animations

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form in the frontend
   - Form data is validated using Zod schemas
   - POST request sent to `/api/contact` endpoint
   - Server validates data and stores in database
   - Success/error response sent back to client
   - Toast notification displayed to user

2. **Page Rendering**:
   - Single-page application with client-side routing
   - Static sections render immediately
   - Dynamic content loaded via API calls when needed

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon database connector for PostgreSQL
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **framer-motion**: Animation library
- **react-hook-form**: Form handling
- **zod**: Schema validation

### UI/Component Libraries
- **@radix-ui/***: Headless UI primitives
- **class-variance-authority**: Component variant management
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library

### Development Tools
- **vite**: Frontend build tool
- **esbuild**: Backend bundler
- **tsx**: TypeScript execution for development
- **drizzle-kit**: Database migration tool

## Deployment Strategy

The application is configured for deployment on Replit with autoscaling:

### Build Process
- **Development**: `npm run dev` runs both frontend (Vite) and backend (tsx) concurrently
- **Production Build**: `npm run build` compiles frontend assets and bundles backend
- **Production Start**: `npm run start` runs the compiled Node.js server

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection
- **Port**: Configured to run on port 5000 with external port 80
- **Modules**: Uses Node.js 20, web, and PostgreSQL 16 modules

### File Structure
- Frontend builds to `dist/public` directory
- Backend bundles to `dist/index.js`
- Static assets served from the backend in production
- Development uses Vite dev server with HMR

The application includes comprehensive error handling, loading states, and responsive design patterns to ensure a smooth user experience across all devices and screen sizes.