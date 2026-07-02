import db from "../config/db.js";

export function saveSearch(query) {
  db.prepare(`
    INSERT INTO search_history(query)
    VALUES(?)
  `).run(query);
}

export function getRecentSearches(limit = 10) {
  return db.prepare(`
    SELECT *
    FROM search_history
    ORDER BY searchedAt DESC
    LIMIT ?
  `).all(limit);
}