export default function Button({
  children,
  href = "#",
  className = "",
}) {
  return (
    <a
      href={href}
      className={`btn-primary ${className}`}
    >
      {children}
    </a>
  );
}