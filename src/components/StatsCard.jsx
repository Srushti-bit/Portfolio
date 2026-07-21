export default function StatsCard({
  number,
  title,
}) {
  return (
    <div className="glass-card p-8 text-center">

      <h3 className="text-5xl font-black gradient-text">
        {number}
      </h3>

      <p className="text-gray-400 mt-3">
        {title}
      </p>

    </div>
  );
}