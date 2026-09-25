"use client";

const ITEMS = [
  "Anima Sicula",
  "Pizza d'autore",
  "Sommatino",
  "Lunga maturazione",
  "Ingredienti del territorio",
  "Dal 2023",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-line bg-ink-soft py-5">
      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl uppercase text-cream md:text-4xl">
              {t}
            </span>
            <span className="text-amber">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
