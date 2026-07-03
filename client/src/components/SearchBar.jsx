import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ difficulty = "all" }) {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;

    navigate(
      `/results?q=${encodeURIComponent(query)}&level=${difficulty}`
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">

      <div className="flex flex-col md:flex-row gap-4">

        <div className="relative flex-1">

          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            value={query}
            placeholder="Search Java, React, Python, Flutter..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="
              w-full
              rounded-xl
              border
              border-[var(--border)]
              bg-[var(--card)]
              text-[var(--text)]
              pl-14
              pr-4
              py-4
              text-lg
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500
            "
          />

        </div>

        <button
          onClick={handleSearch}
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            font-semibold
            rounded-xl
            px-8
            py-4
            transition
            shadow-lg
            w-full
            md:w-auto
          "
        >
          Search
        </button>

      </div>

    </div>
  );
}