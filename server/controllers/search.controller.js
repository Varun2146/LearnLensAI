import { searchTopic } from "../services/search.service.js";

export function searchController(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({
      success: false,
      message: "Search query is required",
    });
  }

  const result = searchTopic(q);

  res.status(200).json({
    success: true,
    query: q,
    ...result,
  });
}