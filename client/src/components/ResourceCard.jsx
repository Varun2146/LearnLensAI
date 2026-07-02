import {
  FaYoutube,
  FaGithub,
  FaReddit,
  FaStackOverflow
} from "react-icons/fa";

import {
  SiGeeksforgeeks,
  SiW3Schools,
  SiCoursera,
  SiUdemy,
  SiMdnwebdocs
} from "react-icons/si";

import { TbBrandYoutubeKids } from "react-icons/tb";

const platformIcons = {
  YouTube: <FaYoutube className="text-red-600 text-4xl" />,
  GitHub: <FaGithub className="text-white text-4xl" />,
  GeeksforGeeks: <SiGeeksforgeeks className="text-green-600 text-4xl" />,
  W3Schools: <SiW3Schools className="text-green-500 text-4xl" />,
  Reddit: <FaReddit className="text-orange-500 text-4xl" />,
  "Stack Overflow": <FaStackOverflow className="text-orange-400 text-4xl" />,
  Coursera: <SiCoursera className="text-blue-600 text-4xl" />,
  Udemy: <SiUdemy className="text-purple-600 text-4xl" />,
  MDN: <SiMdnwebdocs className="text-blue-500 text-4xl" />,
  Documentation: "📘",
  NPTEL: "🎓",
  "roadmap.sh": "🗺️",
  freeCodeCamp: <TbBrandYoutubeKids className="text-red-500 text-4xl" />
};

export default function ResourceCard({ resource }) {
  const icon = platformIcons[resource.platform] || "📚";

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300">

      <div className="flex items-start justify-between">

        <div>

          <div className="flex items-center gap-3">

            <span className="text-4xl">
              {icon}
            </span>

            <div>

              <h2 className="text-2xl font-bold text-white">
                {resource.title}
              </h2>

              <p className="text-slate-400">
                {resource.platform}
              </p>

            </div>

          </div>

          <div className="mt-5">

            <span className="bg-blue-600 px-4 py-1 rounded-full text-sm text-white">
              {resource.type}
            </span>

          </div>

        </div>

      </div>

      <div className="mt-8">

        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-xl text-white font-semibold"
        >
          Open Resource →
        </a>

      </div>

    </div>
  );
}