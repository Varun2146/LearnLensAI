import db from "../config/db.js";

export function addBookmark(resourceId) {
  db.prepare(`
    INSERT INTO bookmarks(resourceId)
    VALUES(?)
  `).run(resourceId);
}

export function getBookmarks() {
  return db.prepare(`
    SELECT
      bookmarks.id,
      resources.*
    FROM bookmarks
    JOIN resources
      ON bookmarks.resourceId = resources.id
  `).all();
}

export function removeBookmark(id) {
  db.prepare(`
    DELETE FROM bookmarks
    WHERE id = ?
  `).run(id);
}