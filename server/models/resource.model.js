import db from "../config/db.js";

export function saveResources(resources) {
  const stmt = db.prepare(`
    INSERT OR IGNORE INTO resources
    (
      title,
      description,
      platform,
      url,
      thumbnail,
      rating,
      difficulty,
      duration,
      free,
      type,
      topic
    )
    VALUES
    (
      @title,
      @description,
      @platform,
      @url,
      @thumbnail,
      @rating,
      @difficulty,
      @duration,
      @free,
      @type,
      @topic
    )
  `);

  const insertMany = db.transaction((items) => {
    for (const item of items) {
      stmt.run(item);
    }
  });

  insertMany(resources);
}

export function getResourcesByTopic(topic) {
  const stmt = db.prepare(`
    SELECT *
    FROM resources
    WHERE topic = ?
    ORDER BY rating DESC
  `);

  return stmt.all(topic);
}

export function getAllResources() {
  return db.prepare("SELECT * FROM resources").all();
}