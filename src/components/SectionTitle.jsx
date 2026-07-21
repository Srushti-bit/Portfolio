export default function SectionTitle({
  title,
  highlight,
  subtitle,
}) {
  return (
    <div className="text-center mb-20">

      <h2 className="section-title">

        {title}

        {" "}

        <span className="gradient-text">
          {highlight}
        </span>

      </h2>

      <p className="section-subtitle max-w-3xl mx-auto">
        {subtitle}
      </p>

    </div>
  );
}