import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";

const topics = [
  "React",
  "Java",
  "Python",
  "Node.js",
  "Docker",
  "Machine Learning",
  "Spring Boot",
  "JavaScript",
];

export default function Hero() {
  const navigate = useNavigate();

  const [difficulty, setDifficulty] = useState("all");

  const searchTopic = (topic) => {
    navigate(
      `/results?q=${encodeURIComponent(topic)}&level=${difficulty}`
    );
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-[var(--bg)] text-[var(--text)] transition-colors duration-300 px-4 sm:px-6 lg:px-8">

      <div className="container-custom text-center">

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
          LearnLens AI
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-8">
          Discover the best tutorials, official documentation,
          GitHub repositories, roadmaps, videos and courses
          from trusted learning platforms.
        </p>

        {/* Difficulty Filter */}

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">

          <label className="font-semibold">
            Difficulty
          </label>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="bg-[var(--card)] border border-[var(--border)] rounded-xl px-5 py-3 text-[var(--text)] w-full sm:w-60"
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

        </div>

        {/* Search */}

        <div className="mt-8">
          <SearchBar difficulty={difficulty} />
        </div>

        {/* Popular Topics */}

        <h2 className="mt-14 text-lg text-[var(--text-secondary)]">
          🔥 Popular Topics
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mt-6">

          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => searchTopic(topic)}
              className="bg-[var(--card)] border border-[var(--border)] hover:bg-blue-600 hover:text-white transition-all duration-300 px-5 py-3 rounded-full shadow-md"
            >
              {topic}
            </button>
          ))}

        </div>

      </div>

    </section>
  );
}