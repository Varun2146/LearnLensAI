import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initializeDatabase } from "./database/schema.js";
import searchRoutes from "./routes/search.routes.js";

dotenv.config();

const app = express();

initializeDatabase();

app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 LearnLens Backend Running",
  });
});

// Search API
app.use("/api/search", searchRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});