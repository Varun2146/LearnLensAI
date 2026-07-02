import { useNavigate } from "react-router-dom";
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

  const searchTopic = (topic) => {
    navigate(`/results?q=${encodeURIComponent(topic)}`);
  };

  return (
    <section className="min-h-[85vh] bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="max-w-5xl w-full text-center">

        <h1 className="text-6xl md:text-7xl font-bold">
          LearnLens AI
        </h1>

        <p className="mt-6 text-xl text-slate-400">
          Discover the best tutorials, documentation, GitHub repositories,
          roadmaps and videos from trusted platforms.
        </p>

        <div className="mt-10">
          <SearchBar />
        </div>

        <h2 className="mt-12 text-lg text-slate-400">
          🔥 Popular Topics
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-6">

          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => searchTopic(topic)}
              className="bg-slate-800 hover:bg-blue-600 transition px-5 py-3 rounded-full"
            >
              {topic}
            </button>
          ))}

        </div>

      </div>

    </section>
  );
}