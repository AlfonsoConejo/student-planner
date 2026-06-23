# Kitab

This project is the frontend for Kitab, a full-stack web platform currently in development that helps students organize and manage their academic activities, including periods, courses, and tasks.

Backend API: https://github.com/AlfonsoConejo/kitab-api

## Live Demo

https://kitab-six.vercel.app

## Tech Stack

- **Frontend:** React, Context API.
- **Backend:** Node.js, Express.js (REST architecture).
- **Database:** PostgreSQL (Hosted on Neon DB).
- **Security:** JWT, Bcrypt.

## Security Features & Architecture

- **Secure Authentication:** Login flow using JWT and protection of sensitive data on the front end.
- **Resource-Level Authorization:** Express middleware that validates the `user_id` before allowing CRUD operations, preventing ID manipulation between users.
- **Referential Integrity:** Robust relational database with logical/cascading delete to protect business logic.

## Architecture Overview

- React frontend with Context API for state management
- REST API built with Node.js and Express
- PostgreSQL database with relational schema hosted on Neon
- JWT-based authentication with access/refresh tokens
- Strict user-based authorization at API level

## Screenshots

| Landing Page | Periods Page |
|--------------|--------------|
| ![Landing](https://github.com/user-attachments/assets/dd219f24-3633-47e4-b967-0fd517f97f93) | ![Periods](https://github.com/user-attachments/assets/e3e5bd33-9802-4368-8849-ed6ecc9ea51f) |

## Features

### Implemented

- **Authentication system**  
  Secure login and session management using JWT.
- **Academic period management (CRUD)**  
  Create, read, update, and delete academic periods with secure user-based access control.

### In development

- Subject assignment per academic period
- Task tracking system per course
- Daily dashboard overview
- Interactive class calendar
- Vacation and leave management system
- Multi-device session control

## Getting Started

### 1. Clone repositories

Clone the frontend repository:
```bash
git clone https://github.com/AlfonsoConejo/kitab.git
```

Clone the backend repository:
```bash
git clone https://github.com/AlfonsoConejo/kitab-api.git
```

### 2. Backend setup

Enter the backend folder:
```bash
cd kitab-api
```

Install dependencies:
```bash
npm install
```

Create a .env file:
```bash
DATABASE_URL=
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
FRONTEND_URL=
NODE_ENV=
```

Run the backend (default port: 3000):
```bash
npm run dev
```

### 3. Frontend setup

Open a new terminal and enter the frontend folder:
```bash
cd kitab
```

Install dependencies:
```bash
npm install
```

Create a .env file:
```bash
VITE_API_URL=http://localhost:3000
```

Run the frontend (terminal 2):
```bash
npm run dev
```

### 4. Application flow

- Backend runs on: http://localhost:3000
- Frontend runs on: http://localhost:5173 (default Vite port)
- Make sure both servers are running simultaneously
