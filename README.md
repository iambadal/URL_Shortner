# URL Shortener

A full-stack URL shortening and link management platform built with React, Node.js, Express, MongoDB, and Redis.

## Features
- URL shortening with unique short codes
- Custom aliases for premium users
- Automatic URL redirection
- JWT authentication and protected routes
- URL management and deletion
- Click tracking and analytics dashboard
- Redis-backed rate limiting
- Responsive interface

## Tech Stack
- Frontend: React 19, Vite, Tailwind CSS 4
- Backend: Node.js, Express 5
- Database: MongoDB, Mongoose
- Cache: Redis
- Authentication: JWT
- Charts: Recharts
- Icons: Lucide React

## Getting Started

### Backend
```bash
cd backend
npm install
Copy-Item .env.example .env
npm run dev
```
Configure MongoDB, Redis, JWT, PORT and FRONTEND_URL in backend/.env.

### Frontend
```bash
cd frontend
npm install
Copy-Item .env.example .env
npm run dev
```
Configure VITE_API_BASE_URL and VITE_SHORT_URL_BASE in frontend/.env.

## API Routes
- /api/user - Authentication and user profile
- /api/url - URL management
- /api/analysis - Analytics
- /api/:shortCode - URL redirection
- /health - Health check

## Deployment
Configure environment variables on your hosting provider. Set frontend API URLs to your deployed backend URL followed by /api, and configure backend CORS to match your frontend origin.

Never commit .env files or expose credentials and secrets.

## Author
Badal Pujhari

GitHub: https://github.com/iambadal
Repository: https://github.com/iambadal/URL_Shortner