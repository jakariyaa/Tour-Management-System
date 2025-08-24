const db = require('../database/database');

const Tour = {
    getAll: () => {
        const stmt = db.prepare('SELECT * FROM Tours');
        return stmt.all();
    },
    findById: (id) => {
        const stmt = db.prepare('SELECT * FROM Tours WHERE id = ?');
        return stmt.get(id);
    },
    create: (tourData) => {
        const { title, description, location, price, image_url } = tourData;
        const stmt = db.prepare('INSERT INTO Tours (title, description, location, price, image_url) VALUES (?, ?, ?, ?, ?)');
        return stmt.run(title, description, location, price, image_url);
    },
    update: (id, tourData) => {
        const { title, description, location, price, image_url } = tourData;
        const stmt = db.prepare('UPDATE Tours SET title = ?, description = ?, location = ?, price = ?, image_url = ? WHERE id = ?');
        return stmt.run(title, description, location, price, image_url, id);
    },
    delete: (id) => {
        const stmt = db.prepare('DELETE FROM Tours WHERE id = ?');
        return stmt.run(id);
    }
};

module.exports = Tour;
