import fs from "fs";
import path from "path";
import platformLinks from "../data/platformLinks.js";

const topicsPath = path.join(process.cwd(), "data", "topics.json");

let topics = {};

if (fs.existsSync(topicsPath)) {
  topics = JSON.parse(fs.readFileSync(topicsPath, "utf-8"));
}

export function searchTopic(query) {
  const key = query.toLowerCase().replace(/\s+/g, "");

  const topic = topics[key];
  const official = platformLinks[key] || {};

  return {
    query,

    summary:
      topic?.summary ||
      `${query} is an interesting technology. Explore the best learning resources collected from trusted platforms.`,

    difficulty: topic?.difficulty || "Beginner",

    estimatedTime: topic?.time || "Self Paced",

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
            title: "YouTube Tutorials",
            platform: "YouTube",
            type: "Video",
            url: `https://www.youtube.com/results?search_query=${encodeURIComponent(
              query
            )}+tutorial`,
          },
          {
            title: "freeCodeCamp Videos",
            platform: "freeCodeCamp",
            type: "Video",
            url: `https://www.youtube.com/results?search_query=${encodeURIComponent(
              query
            )}+freecodecamp`,
          },
        ],
      },

      // GitHub
      {
        title: "💻 GitHub Projects",
        resources: [
          {
            title: `${query} GitHub Repository`,
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
              query
            )}+geeksforgeeks`,
          },
          {
            title: "W3Schools",
            platform: "W3Schools",
            type: "Tutorial",
            url: `https://www.google.com/search?q=${encodeURIComponent(
              query
            )}+w3schools`,
          },
          {
            title: "MDN Web Docs",
            platform: "MDN",
            type: "Reference",
            url: `https://www.google.com/search?q=${encodeURIComponent(
              query
            )}+MDN`,
          },
        ],
      },

      // Roadmap
      {
        title: "🗺️ Learning Roadmap",
        resources: [
          {
            title: "roadmap.sh",
            platform: "roadmap.sh",
            type: "Roadmap",
            url: official.roadmap || "https://roadmap.sh",
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
              query
            )}+NPTEL`,
          },
          {
            title: "Coursera",
            platform: "Coursera",
            type: "Course",
            url: `https://www.coursera.org/search?query=${encodeURIComponent(
              query
            )}`,
          },
          {
            title: "Udemy",
            platform: "Udemy",
            type: "Course",
            url: `https://www.udemy.com/courses/search/?q=${encodeURIComponent(
              query
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
              query
            )}`,
          },
          {
            title: "Reddit Discussions",
            platform: "Reddit",
            type: "Discussion",
            url: `https://www.reddit.com/search/?q=${encodeURIComponent(
              query
            )}`,
          },
        ],
      },
    ],
  };
}