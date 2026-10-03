export default function SectionHeading({ title, text, className = "" }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 className="font-display text-3xl font-bold leading-tight text-asphalt sm:text-[2.6rem]">{title}</h2>
      {text && <p className="mt-3 text-lg text-asphalt/75">{text}</p>}
    </div>
  );
}
