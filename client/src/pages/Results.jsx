import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import ResourceCard from "../components/ResourceCard";

export default function Results() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchResults() {
      try {
        setLoading(true);
        setError("");

        const response = await API.get(`/search?q=${query}`);
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
  }, [query]);

  const copyTopic = () => {
    navigator.clipboard.writeText(data.query);
    alert("Topic copied!");
  };

  const bookmarkTopic = () => {
    const bookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    const alreadyExists = bookmarks.some(
      (item) => item.query === data.query
    );

    if (!alreadyExists) {
      bookmarks.push(data);

      localStorage.setItem(
        "bookmarks",
        JSON.stringify(bookmarks)
      );
    }

    alert("Bookmarked!");
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

        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <div className="text-center">

            <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

            <p className="text-white mt-6 text-lg">
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

        <div className="min-h-screen bg-slate-950 flex items-center justify-center">

          <div className="bg-slate-900 border border-red-500 rounded-xl p-10">

            <h2 className="text-3xl font-bold text-red-400">
              Something went wrong
            </h2>

            <p className="text-slate-300 mt-4">
              {error}
            </p>

            <Link
              to="/"
              className="inline-block mt-8 bg-blue-600 px-6 py-3 rounded-xl"
            >
              Back Home
            </Link>

          </div>

        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white px-6 py-10">

        <div className="max-w-7xl mx-auto">

          {/* Back Button */}

          <Link
            to="/"
            className="inline-block bg-slate-800 hover:bg-slate-700 px-5 py-2 rounded-lg mb-8 transition"
          >
            ← Search Again
          </Link>

          {/* Topic */}

          <h1 className="text-5xl font-bold capitalize">
            {data.query}
          </h1>

          <p className="mt-6 text-lg text-slate-400 leading-8">
            {data.summary}
          </p>

          {/* Information Cards */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

              <p className="text-slate-400">
                Difficulty
              </p>

              <h2 className="text-2xl font-bold mt-2">
                {data.difficulty}
              </h2>

            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

              <p className="text-slate-400">
                Estimated Time
              </p>

              <h2 className="text-2xl font-bold mt-2">
                {data.estimatedTime}
              </h2>

            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

              <p className="text-slate-400">
                Categories
              </p>

              <h2 className="text-2xl font-bold mt-2">
                {data.sections?.length || 0}
              </h2>

            </div>

          </div>

          {/* Action Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            <button
              onClick={copyTopic}
              className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl"
            >
              📋 Copy Topic
            </button>

            <button
              onClick={bookmarkTopic}
              className="bg-yellow-500 hover:bg-yellow-600 transition px-5 py-3 rounded-xl text-black font-semibold"
            >
              ⭐ Bookmark
            </button>

            <button
              onClick={shareTopic}
              className="bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-xl"
            >
              📤 Share
            </button>

          </div>

          {/* Resource Sections */}

          <div className="mt-14">

            {data.sections?.map((section) => (

              <section
                key={section.title}
                className="mb-14"
              >

                <h2 className="text-3xl font-bold mb-8">
                  {section.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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