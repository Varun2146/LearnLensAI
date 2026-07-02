import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;

    navigate(`/results?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="flex w-full max-w-3xl mx-auto">

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        placeholder="Search Java, React, Python..."
        className="flex-1 rounded-l-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
      />

      <button
        onClick={handleSearch}
        className="rounded-r-xl bg-blue-600 px-8 text-white hover:bg-blue-700"
      >
        Search
      </button>

    </div>
  );
}