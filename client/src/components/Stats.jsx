const stats = [
  {
    number: "1000+",
    label: "Learning Resources",
  },
  {
    number: "8+",
    label: "Platforms",
  },
  {
    number: "100+",
    label: "Topics",
  },
  {
    number: "Free",
    label: "Forever",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 py-20">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

        {stats.map((item) => (

          <div
            key={item.label}
            className="bg-slate-800 rounded-xl p-8"
          >
            <h2 className="text-5xl font-bold text-blue-500">
              {item.number}
            </h2>

            <p className="text-slate-400 mt-3">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}