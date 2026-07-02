
const features = [
  {
    icon: "📘",
    title: "Official Documentation",
    description: "Access official documentation from trusted sources.",
  },
  {
    icon: "🎥",
    title: "Video Tutorials",
    description: "Find high-quality YouTube tutorials instantly.",
  },
  {
    icon: "💻",
    title: "GitHub Projects",
    description: "Explore open-source repositories and sample projects.",
  },
  {
    icon: "🗺️",
    title: "Learning Roadmaps",
    description: "Follow structured roadmaps to master technologies.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center">
          Everything You Need to Learn
        </h2>

        <p className="text-center text-slate-400 mt-4">
          Discover trusted learning resources from multiple platforms.
        </p>

        <div className="grid gap-6 mt-14 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="text-xl font-bold text-white mt-5">
                {feature.title}
              </h3>

              <p className="text-slate-400 mt-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}