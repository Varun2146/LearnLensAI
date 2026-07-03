import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import ResourceCard from "../components/ResourceCard";

export default function Results() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");
  const level = searchParams.get("level") || "all";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchResults() {
      try {
        setLoading(true);
        setError("");

        const response = await API.get(
          `/search?q=${encodeURIComponent(query)}&level=${level}`
        );

        setData(response.data);
      } catch (err) {
        console.error(err);
        setError("Unable to fetch learning resources.");
      } finally {
        setLoading(false);
      }
    }

    if (query) {
      fetchResults();
    }
  }, [query, level]);

  const copyTopic = () => {
    navigator.clipboard.writeText(data.query);
    alert("Topic copied!");
  };

  const bookmarkTopic = () => {
    const bookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    const exists = bookmarks.some(
      (item) => item.query === data.query
    );

    if (!exists) {
      bookmarks.push(data);

      localStorage.setItem(
        "bookmarks",
        JSON.stringify(bookmarks)
      );

      alert("Bookmarked!");
    } else {
      alert("Already bookmarked.");
    }
  };

  const shareTopic = async () => {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: data.query,
        text: data.summary,
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied!");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex items-center justify-center transition-colors duration-300">

          <div className="text-center">

            <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

            <p className="mt-6 text-lg">
              Searching the best learning resources...
            </p>

          </div>

        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center px-4 transition-colors duration-300">

          <div className="bg-[var(--card)] border border-red-500 rounded-2xl p-8 max-w-lg w-full">

            <h2 className="text-3xl font-bold text-red-500">
              Something went wrong
            </h2>

            <p className="mt-4 text-[var(--text-secondary)]">
              {error}
            </p>

            <Link
              to="/"
              className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
            >
              ← Back Home
            </Link>

          </div>

        </div>
      </>
    );
  }

  return (
    <>
  <Navbar />

  <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300 py-8 px-4 md:px-8">

    <div className="container-custom">

      {/* Back Button */}

      <Link
        to="/"
        className="inline-flex items-center bg-[var(--card)] border border-[var(--border)] hover:bg-blue-600 hover:text-white transition px-5 py-3 rounded-xl mb-8"
      >
        ← Search Again
      </Link>

      {/* Topic */}

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold capitalize">
        {data.query}
      </h1>

      <p className="mt-6 text-base md:text-lg text-[var(--text-secondary)] leading-8 max-w-4xl">
        {data.summary}
      </p>

      {/* Information Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">

          <p className="text-[var(--text-secondary)]">
            Difficulty
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {data.difficulty}
          </h2>

        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">

          <p className="text-[var(--text-secondary)]">
            Estimated Time
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {data.estimatedTime}
          </h2>

        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">

          <p className="text-[var(--text-secondary)]">
            Categories
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {data.sections?.length || 0}
          </h2>

        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">

          <p className="text-[var(--text-secondary)]">
            Selected Level
          </p>

          <h2 className="text-2xl font-bold capitalize mt-2">
            {level}
          </h2>

        </div>

      </div>

      {/* Action Buttons */}

      <div className="flex flex-col sm:flex-row gap-4 mt-10">

        <button
          onClick={copyTopic}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
        >
          📋 Copy Topic
        </button>

        <button
          onClick={bookmarkTopic}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          ⭐ Bookmark
        </button>

        <button
          onClick={shareTopic}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
        >
          📤 Share
        </button>

      </div>

      {/* Resource Sections */}

      <div className="mt-16">

        {data.sections?.map((section) => (

          <section
            key={section.title}
            className="mb-16"
          >

            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

              {section.resources.map((resource, index) => (

                <ResourceCard
                  key={index}
                  resource={resource}
                />

              ))}

            </div>

          </section>

        ))}

      </div>

    </div>

  </div>

</>
);
}