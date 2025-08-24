const sqlite = require("better-sqlite3");
const path = require("path");

// Correctly resolve the path to the database file
const dbPath = path.resolve(__dirname, "tms.db");
const db = new sqlite(dbPath);

function setupDatabase() {
  const usersTable = `
        CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role TEXT DEFAULT 'user',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `;

  const toursTable = `
        CREATE TABLE IF NOT EXISTS Tours (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            location TEXT,
            price REAL NOT NULL,
            image_url TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `;

  db.exec(usersTable);
  db.exec(toursTable);
  console.log("Database tables created or already exist.");
}

// Run the setup
setupDatabase();

module.exports = db;
