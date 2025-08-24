const db = require('../database/database');
const bcrypt = require('bcryptjs');

const User = {
    create: (username, password) => {
        const hash = bcrypt.hashSync(password, 10);
        const stmt = db.prepare('INSERT INTO Users (username, password) VALUES (?, ?)');
        return stmt.run(username, hash);
    },
    findByUsername: (username) => {
        const stmt = db.prepare('SELECT * FROM Users WHERE username = ?');
        return stmt.get(username);
    },
    findById: (id) => {
        const stmt = db.prepare('SELECT * FROM Users WHERE id = ?');
        return stmt.get(id);
    },
    getAll: () => {
        const stmt = db.prepare('SELECT * FROM Users');
        return stmt.all();
    }
};

module.exports = User;
