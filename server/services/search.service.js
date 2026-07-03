import fs from "fs";
import path from "path";
import platformLinks from "../data/platformLinks.js";

const topicsPath = path.join(process.cwd(), "data", "topics.json");

let topics = {};

if (fs.existsSync(topicsPath)) {
  topics = JSON.parse(fs.readFileSync(topicsPath, "utf-8"));
}

export function searchTopic(query, level = "all") {
  const key = query.toLowerCase().replace(/\s+/g, "");

  const topic = topics[key];
  const official = platformLinks[key] || {};

  const difficulty =
    level === "all"
      ? topic?.difficulty || "Beginner"
      : level.charAt(0).toUpperCase() + level.slice(1);

  const summaries = {
    beginner: `Start learning ${query} from the basics using beginner-friendly tutorials, official documentation and simple hands-on examples.`,

    intermediate: `Improve your ${query} skills with practical projects, deeper concepts and intermediate learning resources.`,

    advanced: `Master advanced ${query} concepts including architecture, optimization, production-ready techniques and expert resources.`,
  };

  return {
    query,

    summary:
      level === "all"
        ? topic?.summary ||
          `${query} is an interesting technology. Explore the best learning resources collected from trusted platforms.`
        : summaries[level],

    difficulty,

    estimatedTime:
      topic?.time ||
      (level === "beginner"
        ? "2-4 Weeks"
        : level === "intermediate"
        ? "1-2 Months"
        : level === "advanced"
        ? "3+ Months"
        : "Self Paced"),

    sections: [
      // Documentation
      {
        title: "📘 Official Documentation",
        resources: [
          {
            title: `${query} Official Documentation`,
            platform: "Documentation",
            type: "Docs",
            url:
              official.docs ||
              `https://www.google.com/search?q=${encodeURIComponent(
                query
              )}+official+documentation`,
          },
        ],
      },

      // Videos
      {
        title: "🎥 Video Tutorials",
        resources: [
          {
            title: `${difficulty} YouTube Tutorials`,
            platform: "YouTube",
            type: "Video",
            url: `https://www.youtube.com/results?search_query=${encodeURIComponent(
              `${query} ${
                level === "all" ? "" : level
              } tutorial`
            )}`,
          },

          {
            title: "freeCodeCamp Videos",
            platform: "freeCodeCamp",
            type: "Video",
            url: `https://www.youtube.com/results?search_query=${encodeURIComponent(
              `${query} freecodecamp`
            )}`,
          },
        ],
      },

      // GitHub
      {
        title: "💻 GitHub Projects",
        resources: [
          {
            title: `${query} ${difficulty} Projects`,
            platform: "GitHub",
            type: "Repository",
            url:
              official.github ||
              `https://github.com/search?q=${encodeURIComponent(query)}`,
          },
        ],
      },

      // Articles
      {
        title: "📚 Articles",
        resources: [
          {
            title: "GeeksforGeeks",
            platform: "GeeksforGeeks",
            type: "Article",
            url: `https://www.google.com/search?q=${encodeURIComponent(
              `${query} ${level}`
            )}+geeksforgeeks`,
          },

          {
            title: "W3Schools",
            platform: "W3Schools",
            type: "Tutorial",
            url: `https://www.google.com/search?q=${encodeURIComponent(
              `${query} ${level}`
            )}+w3schools`,
          },

          {
            title: "MDN Web Docs",
            platform: "MDN",
            type: "Reference",
            url: `https://www.google.com/search?q=${encodeURIComponent(
              `${query} MDN`
            )}`,
          },
        ],
      },
            // Roadmap
      {
        title: "🗺️ Learning Roadmap",
        resources: [
          {
            title: `${query} Roadmap`,
            platform: "roadmap.sh",
            type: "Roadmap",
            url:
              official.roadmap ||
              "https://roadmap.sh",
          },
        ],
      },

      // Courses
      {
        title: "🎓 Online Courses",
        resources: [
          {
            title: "NPTEL",
            platform: "NPTEL",
            type: "Course",
            url: `https://www.google.com/search?q=${encodeURIComponent(
              `${query} ${level}`
            )}+NPTEL`,
          },

          {
            title: "Coursera",
            platform: "Coursera",
            type: "Course",
            url: `https://www.coursera.org/search?query=${encodeURIComponent(
              `${query} ${level}`
            )}`,
          },

          {
            title: "Udemy",
            platform: "Udemy",
            type: "Course",
            url: `https://www.udemy.com/courses/search/?q=${encodeURIComponent(
              `${query} ${level}`
            )}`,
          },
        ],
      },

      // Community
      {
        title: "💬 Community",
        resources: [
          {
            title: "Stack Overflow",
            platform: "Stack Overflow",
            type: "Community",
            url: `https://stackoverflow.com/search?q=${encodeURIComponent(
              `${query} ${level}`
            )}`,
          },

          {
            title: "Reddit Discussions",
            platform: "Reddit",
            type: "Discussion",
            url: `https://www.reddit.com/search/?q=${encodeURIComponent(
              `${query} ${level}`
            )}`,
          },
        ],
      },
    ],
  };
}