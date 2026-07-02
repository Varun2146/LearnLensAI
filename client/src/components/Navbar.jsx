import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link
          to="/"
          className="text-3xl font-bold text-blue-500"
        >
          LearnLens AI
        </Link>

        <Link
          to="/"
          className="text-slate-300 hover:text-white"
        >
          Home
        </Link>

      </div>

    </nav>
  );
}