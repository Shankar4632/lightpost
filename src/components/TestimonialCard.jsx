export default function TestimonialCard({ t }) {
  return (
    <figure className="flex h-full flex-col border-l-4 border-sodium bg-white p-6">
      <blockquote className="flex-1 text-[17px] leading-relaxed text-asphalt">“{t.text}”</blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-semibold text-asphalt">{t.name}</span>
        <span className="block text-asphalt/65">{t.place}, {t.service}</span>
      </figcaption>
    </figure>
  );
}
