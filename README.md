# 🔗 URL Shortener — Smart Link Management Platform

A full-stack URL shortening platform that transforms long, complicated URLs into short, shareable links while providing link management, user authentication, and click analytics.

Built with **React, Node.js, Express, MongoDB, and Redis**, this application combines a responsive user interface with a backend designed for efficient URL processing, redirection, and analytics.

---

## ✨ Overview

Sharing long URLs can be inconvenient, difficult to manage, and visually unappealing.

This project provides a centralized platform where users can generate short links, manage their URLs, track engagement, and access link analytics through a dashboard.

Beyond basic URL shortening, it includes authentication, custom aliases for premium users, and Redis-backed rate limiting.

## 🚀 Key Features

| Feature | Description |
|---|---|
| 🔗 URL Shortening | Convert long URLs into compact, shareable links. |
| 🎯 Custom Aliases | Create personalized short URLs for premium users. |
| ⚡ Instant Redirection | Redirect visitors from short URLs to their original destinations. |
| 🔐 Authentication | Secure user authentication using JSON Web Tokens (JWT). |
| 🛡️ Protected Routes | Restrict access to authenticated user functionality. |
| 📊 Analytics Dashboard | View link performance and click-tracking information. |
| 🔗 Link Management | View and manage previously generated URLs. |
| 🗑️ URL Deletion | Remove links that are no longer needed. |
| 🚦 Rate Limiting | Use Redis-backed rate limiting to help control excessive requests. |
| 📱 Responsive UI | Access the platform through a responsive interface. |

## 🖥️ Application Modules

### 1. Dashboard
A centralized interface for accessing URL management and analytics.

### 2. URL Management
Generate short URLs, manage existing links, and delete unwanted links.

### 3. Analytics
Track link engagement and visualize analytics through charts.

### 4. User Authentication
Support authenticated access through JWT-based authentication and protected routes.

### 5. Custom URL Aliases
Allow premium users to personalize their short URL identifiers.

---

## 🛠️ Technology Stack

### Frontend
- **React 19** — Component-based user interface.
- **Vite** — Frontend development and build tooling.
- **Tailwind CSS 4** — Utility-first styling.
- **React Router 7** — Client-side navigation.
- **Axios** — HTTP requests and API communication.
- **Recharts** — Analytics visualization.
- **Lucide React** — Interface icons.

### Backend
- **Node.js** — JavaScript runtime.
- **Express 5** — Backend framework and REST API.
- **Mongoose** — MongoDB object modeling.
- **JWT** — Authentication.
- **bcrypt** — Password hashing.
- **Redis** — Caching and rate-limiting support.
- **dotenv** — Environment configuration.
- **CORS** — Cross-origin request configuration.

### Database & Infrastructure
- MongoDB — Persistent application data.
- Redis — Fast data access and rate-limiting support.

---

## 🏗️ Architecture

The application follows a frontend–backend architecture.

```text
                 ┌──────────────────────┐
                 │      User / Client  │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │   React Frontend     │
                 │  Vite + Tailwind CSS │
                 └──────────┬───────────┘
                            │
                       HTTP / API
                            │
                            ▼
                 ┌──────────────────────┐
                 │   Express Backend   │
                 │      Node.js         │
                 └──────────┬───────────┘
                            │
             ┌──────────────┼──────────────┐
             │              │              │
             ▼              ▼              ▼
       ┌──────────┐   ┌──────────┐   ┌────────────┐
       │ MongoDB  │   │  Redis   │   │ JWT Auth   │
       │ Database │   │  Cache   │   │ Middleware │
       └──────────┘   └──────────┘   └────────────┘
```

### URL Redirection Flow

1. A user submits a long URL through the frontend.
2. The frontend sends a request to the backend API.
3. The backend processes the request and generates a short code.
4. The URL information is stored in MongoDB.
5. A visitor opens the generated short URL.
6. The backend identifies the short code and redirects the visitor to the original destination.

---

## 📁 Project Structure

```text
URL_Shortner/
│
├── backend/
│   ├── config/             # Database and Redis configuration
│   ├── controllers/        # Request handling and business logic
│   ├── middleware/         # Authentication and request middleware
│   ├── models/             # MongoDB data models
│   ├── routes/             # API route definitions
│   ├── .env.example        # Backend environment template
│   ├── package.json
│   └── server.js           # Backend entry point
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── config/         # API configuration
│   │   ├── pages/          # Application pages
│   │   ├── assets/         # Static assets
│   │   └── ...
│   ├── .env.example        # Frontend environment template
│   ├── package.json
│   └── vite.config.js
│
├── .github/
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Install the following:

- Node.js and npm
- MongoDB connection
- Redis instance
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/iambadal/URL_Shortner.git
cd URL_Shortner
```

### 2. Configure the Backend

```powershell
cd backend
npm install
Copy-Item .env.example .env
```

Open `backend/.env` and configure:

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_long_random_secret
JWT_EXPIRES_IN=7d

REDIS_USERNAME=default
REDISPASSWORD=your_redis_password
REDIS_HOST=your_redis_host
REDIS_PORT=6379
```

Start the backend:

```bash
npm run dev
```

The backend runs on:

`http://localhost:5000`

### 3. Configure the Frontend

Open another terminal:

```powershell
cd frontend
npm install
Copy-Item .env.example .env
```

Configure `frontend/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_SHORT_URL_BASE=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

The frontend runs on:

`http://localhost:5173`

---

## 🔌 API Overview

The backend exposes the following API route groups:

| Endpoint | Purpose |
|---|---|
| `/api/user` | User authentication and profile management |
| `/api/url` | URL creation and management |
| `/api/analysis` | Analytics and click-tracking data |
| `/api/:shortCode` | Short URL redirection |
| `/health` | Backend health check |

**Base URL:** `http://localhost:5000`

---

## 🔒 Security & Configuration

The application includes several security-related mechanisms:

- JWT-based authentication.
- Protected backend routes.
- Password hashing using bcrypt.
- Redis-backed rate limiting.
- Environment-based configuration.
- Configurable CORS origin.

**Important:** Never commit `.env` files, database credentials, Redis passwords, JWT secrets, or other sensitive information to version control.

---

## 🧪 Development & Build

Run frontend linting:

```bash
cd frontend
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## ☁️ Deployment

The application is designed to support separate frontend and backend deployments.

For deployment:

1. Deploy the backend to a Node.js-compatible hosting platform.
2. Configure MongoDB and Redis connectivity.
3. Add the required backend environment variables.
4. Set `FRONTEND_URL` to the deployed frontend origin.
5. Deploy the frontend to a static hosting platform.
6. Update `VITE_API_BASE_URL` and `VITE_SHORT_URL_BASE` with the deployed backend URL.

The frontend and backend must use matching API configuration and CORS settings.

---

## 🔮 Future Improvements

Potential areas for further development:

- QR code generation for short links.
- Link expiration and scheduled deactivation.
- Advanced analytics with geographic and device insights.
- Bulk URL generation.
- Link sharing and export functionality.
- Improved abuse detection and link validation.

---

## 👨‍💻 Author

**Badal Pujhari**

B.Tech — Computer Science and Engineering

- GitHub: [@iambadal](https://github.com/iambadal)
- Repository: [URL Shortener](https://github.com/iambadal/URL_Shortner)

---

<p align="center">
  Built with ❤️ using React, Node.js, Express, MongoDB, and Redis.
</p>
