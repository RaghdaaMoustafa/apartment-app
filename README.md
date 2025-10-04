# Apartment App

A full-stack apartment listing application built with Node.js/Express backend and Next.js frontend, using MongoDB for data storage and Supabase for file storage.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [Backend Documentation](#backend-documentation)
- [Frontend Documentation](#frontend-documentation)
- [API Documentation](#api-documentation)
- [Docker Setup](#docker-setup)
- [Getting Started](#getting-started)

## Tech Stack

### Backend
- **Node.js** with **TypeScript**
- **Express.js** - Web framework
- **MongoDB** with **Mongoose** - Database and ODM
- **Supabase** - S3-compatible storage for images
- **Multer** - File upload middleware
- **CORS** - Cross-origin resource sharing

### Frontend
- **Next.js 15** with **TypeScript**
- **React 19** - UI library
- **Tailwind CSS** - Styling
- **Radix UI** - Component library
- **Shadcn/ui** - UI components
- **Lucide React** - Icons

### DevOps
- **Docker** & **Docker Compose** - Containerization
- **MongoDB** - Database service

## Project Structure

```
apartment-app/
├── docker-compose.yml              # Docker services configuration
├── apartment-backend/              # Backend API application
│   ├── Dockerfile                  # Backend container configuration
│   ├── package.json                # Backend dependencies
│   ├── tsconfig.json               # TypeScript configuration
│   ├── .env                        # Backend environment variables
│   └── src/
│       ├── app.ts                  # Express app configuration
│       ├── server.ts               # Server entry point
│       ├── controllers/            # Request handlers
│       │   ├── add-apartment.ts    # Create apartment endpoint
│       │   ├── get-apartment.ts    # Get single apartment endpoint
│       │   └── list-apartments.ts  # List all apartments endpoint
│       ├── middleware/
│       │   └── upload.ts           # File upload middleware
│       ├── models/
│       │   └── apartment.model.ts  # Apartment MongoDB schema
│       ├── routes/
│       │   └── apartment.routes.ts # API routes definition
│       ├── seeds/
│       │   └── populate-apartments.ts # Database seeding
│       └── utils/
│           └── supabase-client.ts  # Supabase configuration
└── apartment-frontend/             # Frontend Next.js application
    ├── Dockerfile                  # Frontend container configuration
    ├── package.json                # Frontend dependencies
    ├── next.config.ts              # Next.js configuration
    ├── .env.local                  # Frontend environment variables
    └── src/
        ├── app/                    # App router pages
        │   ├── layout.tsx          # Root layout
        │   ├── page.tsx            # Home page
        │   └── apartments/
        │       └── [id]/
        │           └── page.tsx    # Apartment detail page
        ├── components/             # React components
        │   ├── atoms/              # Basic components
        │   ├── molecules/          # Composite components
        │   └── ui/                 # Shadcn/ui components
        ├── lib/
        │   ├── api.ts              # API client functions
        │   └── utils.ts            # Utility functions
        └── types/
            └── index.ts            # TypeScript type definitions
```

## Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Docker** and **Docker Compose**
- **MongoDB** (if running without Docker)
- **Supabase Account** (for image storage)

## Environment Setup

### Backend Environment Variables

Create `apartment-backend/.env` file:

```env
MONGO_URI=mongodb://mongo:27017/apartment-app
PORT=5000

# Supabase configuration (used for image storage)
SUPABASE_URL=https://lwloxdhwirdiiwbbdljh.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3bG94ZGh3aXJkaWl3YmJkbGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0NzM0NTAsImV4cCI6MjA3NTA0OTQ1MH0.GMULJc2oab5-iAhxiM7IIL9jr169hwX4m9MU3WiWuBI

```

### Frontend Environment Variables

Create `apartment-frontend/.env.local` file:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Running the Application

### Option 1: Docker Compose (Recommended)

This will run the entire application stack including MongoDB, backend, and frontend:

```bash
# Clone and navigate to the project
cd apartment-app

# Start all services with Docker Compose
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

**Services:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: localhost:27017

### Option 2: Manual Setup

#### 1. Start MongoDB
```bash
# Using Docker
docker run -d -p 27017:27017 --name apartment-mongo mongo:6

```

#### 2. Backend Setup
```bash
cd apartment-backend

# Install dependencies
npm install

# Run in development mode
npm run dev

```

#### 3. Frontend Setup
```bash
cd apartment-frontend

# Install dependencies
npm install

# Run in development mode
npm run dev

```

## Backend Documentation

### Technologies Used

1. **MongoDB with Mongoose**
   - Document database for storing apartment data
   - Mongoose ODM for schema definition and validation
   - Auto-generated timestamps (createdAt, updatedAt)

2. **Supabase S3 Storage**
   - Cloud storage for apartment images
   - S3-compatible API for file operations
   - Automatic URL generation for uploaded files

3. **Express.js Architecture**
   - RESTful API design
   - Middleware-based request processing
   - CORS enabled for frontend communication

### Database Schema

The apartment model includes:
- `unitName` (String, required)
- `unitNumber` (String, required)
- `project` (String, required)
- `price` (Number, required)
- `rooms` (Number, required)
- `location` (String, required)
- `available` (Boolean, default: true)
- `description` (String, optional)
- `images` (Array of Strings, URLs to Supabase)
- `createdAt` & `updatedAt` (Auto-generated timestamps)

### Project Structure Details

- **Controllers**: Handle business logic for each endpoint
- **Models**: Define database schemas and interfaces
- **Routes**: Define API endpoints and HTTP methods
- **Middleware**: Handle cross-cutting concerns (file uploads, CORS)
- **Utils**: Utility functions (Supabase client configuration)
- **Seeds**: Database population scripts

### Environment Configuration

The backend requires several environment variables:
- Database connection string
- Supabase credentials for file storage
- Server port configuration

## Frontend Documentation

### Technologies Used

1. **Next.js 15 with App Router**
   - Server and client components
   - File-based routing system
   - Built-in optimization features

2. **Styling & UI**
   - Tailwind CSS for utility-first styling
   - Shadcn/ui for accessible UI components
   - Radix UI for headless component primitives
   - Responsive design patterns

3. **State Management**
   - React hooks for local state
   - API calls for server state
   - Form handling for user inputs

### Component Architecture

- **Atoms**: Basic reusable components (ApartmentCard, SearchBar, ImageCarousel)
- **Molecules**: Composite components (AddApartmentModal, ApartmentsList, Header, Footer)
- **Pages**: Route-based components in the app directory

### Key Features

- Apartment listing with search functionality
- Individual apartment detail pages
- Add new apartment modal with image upload
- Responsive design for mobile and desktop
- Image carousel for apartment photos

## API Documentation

### Base URL
- Development: `http://localhost:5000/api`

### Endpoints

#### GET /apartments
List all apartments with optional search functionality.

**Query Parameters:**
- `search` (optional): Search term for apartment details

**Response:**
```json
{
  "apartments": [
    {
      "_id": "apartment_id",
      "unitName": "Luxury Suite",
      "unitNumber": "A101",
      "project": "Downtown Plaza",
      "price": 1500,
      "rooms": 2,
      "location": "Downtown",
      "available": true,
      "description": "Beautiful apartment with city view",
      "images": ["image_url1", "image_url2"],
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

#### GET /apartments/:id
Get a specific apartment by ID.

**Parameters:**
- `id`: Apartment MongoDB ObjectId

**Response:**
```json
{
  "apartment": {
    "_id": "apartment_id",
    "unitName": "Luxury Suite",
    // ... other apartment fields
  }
}
```

#### POST /apartments
Create a new apartment listing.

**Content-Type:** `multipart/form-data`

**Body Parameters:**
- `unitName` (required): Name of the apartment unit
- `unitNumber` (required): Unit number
- `project` (required): Project name
- `price` (required): Monthly rent price
- `rooms` (required): Number of rooms
- `location` (required): Apartment location
- `description` (optional): Apartment description
- `images` (optional): Array of image files

**Response:**
```json
{
  "message": "Apartment created successfully",
  "apartment": {
    "_id": "new_apartment_id",
    // ... apartment fields with uploaded image URLs
  }
}
```

### Error Responses

All endpoints return appropriate HTTP status codes:
- `200`: Success
- `201`: Created successfully
- `404`: Resource not found
- `400`: Bad request (validation errors)
- `500`: Internal server error

## Docker Setup

The application uses Docker Compose for orchestration:

### Services

1. **MongoDB** (`mongo`)
   - Image: `mongo:6`
   - Port: `27017`
   - Persistent volume for data

2. **Backend** (`backend`)
   - Built from `./apartment-backend/Dockerfile`
   - Port: `5000`
   - Hot reload in development
   - Depends on MongoDB

3. **Frontend** (`frontend`)
   - Built from `./apartment-frontend/Dockerfile`
   - Port: `3000`
   - Hot reload in development
   - Depends on backend

### Docker Commands

```bash
# Build and start all services
docker-compose up -d --build

# View service logs
docker-compose logs backend
docker-compose logs frontend
docker-compose logs mongo

# Stop services
docker-compose stop

# Remove containers and volumes
docker-compose down -v

# Rebuild specific service
docker-compose up -d --build backend
```

## Getting Started

1. Clone the repository
2. Set up environment variables in both backend and frontend
3. Run `docker-compose up -d --build`
4. Run `docker-compose exec backend npx ts-node src/seeds/populate-apartments.ts` to populate mongoDB
5. Access the application at http://localhost:3000
6. API is available at http://localhost:5000/api/apartments

The application should now be running with a complete apartment listing system including image upload, search functionality, and responsive design.
