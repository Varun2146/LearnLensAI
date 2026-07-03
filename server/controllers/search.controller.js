import { searchTopic } from "../services/search.service.js";

export function searchController(req, res) {
  const { q, level = "all" } = req.query;

  if (!q || !q.trim()) {
    return res.status(400).json({
      success: false,
      message: "Search query is required",
    });
  }

  try {
    const result = searchTopic(q.trim(), level);

    return res.status(200).json({
      success: true,
      query: q.trim(),
      level,
      ...result,
    });
  } catch (error) {
    console.error("Search Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while searching.",
    });
  }
}