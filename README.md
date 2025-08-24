# Tour Management System

A full-stack web application for managing tours with user authentication, admin panel, and CRUD operations. Built with Node.js, Express, EJS templating engine, and SQLite database.

![Project Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

## Features

- User authentication (registration, login, logout)
- Role-based access control (user/admin)
- Tour management (create, read, update, delete)
- Responsive web interface
- Session management
- Flash messaging for user feedback

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: SQLite with better-sqlite3
- **Templating**: EJS (Embedded JavaScript)
- **Authentication**: bcryptjs, express-session
- **Styling**: Bootstrap CSS, Anime.js

## Project Structure

```bash
.
├── controllers/          # Business logic
├── database/             # SQLite database and setup
├── middleware/           # Custom middleware functions
├── models/               # Data models and database operations
├── public/               # Static assets (CSS, JS, images)
├── routes/               # Application routes
├── views/                # EJS templates
│   ├── admin/            # Admin-specific views
│   └── partials/         # Reusable view components
├── index.js              # Application entry point
└── package.json          # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Tour-Management-System
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Or for production:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Run the application in production mode
- `npm run dev` - Run the application in development mode with nodemon

## Database Schema

The application uses SQLite with two main tables:

### Users Table

```sql
CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'user',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Tours Table

```sql
CREATE TABLE Tours (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    location TEXT,
    price REAL NOT NULL,
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Authentication

The application implements session-based authentication with:

- User registration and login
- Password hashing with bcryptjs
- Role-based access control (user/admin)
- Session storage in SQLite

## Routes

- `/` - Home page and tour listing
- `/auth` - Authentication routes (login, register, logout)
- `/tours` - Tour management routes
- `/admin` - Admin dashboard and management

## Security Considerations

- Passwords are hashed using bcryptjs
- Session management with secure configuration
- Role-based access control for admin features
- Input validation and sanitization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
