import db from "../config/db.js";

export function initializeDatabase() {

    db.exec(`
        CREATE TABLE IF NOT EXISTS history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            query TEXT,
            searchedAt DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);

    db.exec(`
        CREATE TABLE IF NOT EXISTS bookmarks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            platform TEXT,
            url TEXT
        );
    `);

    console.log("✅ Database Initialized");
}