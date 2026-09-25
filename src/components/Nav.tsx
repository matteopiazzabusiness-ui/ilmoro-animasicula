"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#anima", label: "Anima" },
  { href: "#storia", label: "Storia" },
  { href: "#impasto", label: "L'Impasto" },
  { href: "#menu", label: "Menù" },
  { href: "#riconoscimenti", label: "Riconoscimenti" },
  { href: "#contatti", label: "Contatti" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-ink/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a
          href="#top"
          className="flex h-[68px] w-[54px] items-center justify-center bg-[#cdbfa6] p-1 transition-transform duration-200 hover:scale-[1.03]"
          aria-label="Il Moro Anima Sicula, torna all'inizio"
        >
          <Image
            src="/img/ilmoro-logo-hd.png"
            alt="Logo Il Moro Anima Sicula"
            width={556}
            height={830}
            priority
            className="h-full w-full object-contain"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs uppercase tracking-[0.18em] text-cream-dim transition-colors hover:text-amber"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contatti"
          className="hidden rounded-full border border-amber px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-amber transition-colors duration-200 hover:bg-amber hover:text-ink md:inline-block"
        >
          Prenota
        </a>

        <button
          aria-label="Apri il menu di navigazione"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-11 min-w-11 items-center justify-center gap-[5px] md:hidden"
        >
          <span className="h-[2px] w-6 bg-cream" />
          <span className="h-[2px] w-6 bg-cream" />
          <span className="h-[2px] w-6 bg-cream" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.18em] text-cream-dim"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
