"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (!reduce) {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.from(".hero-kicker", { y: 20, opacity: 0, duration: 0.9 })
          .from(
            ".hero-line",
            { yPercent: 120, opacity: 0, duration: 1.1, stagger: 0.12 },
            "-=0.5"
          )
          .from(
            ".hero-sub",
            { y: 24, opacity: 0, duration: 0.9 },
            "-=0.7"
          )
          .from(
            ".hero-cta",
            { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 },
            "-=0.6"
          );

        const onMove = (e: MouseEvent) => {
          const x = (e.clientX / window.innerWidth - 0.5) * 20;
          const y = (e.clientY / window.innerHeight - 0.5) * 20;
          gsap.to(bg.current, { x, y, duration: 1.2, ease: "power2.out" });
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div ref={bg} className="absolute inset-[-40px] scale-110">
        <Image
          src="/img/filippo.jpg"
          alt="Filippo Volpe compone le pizze d'autore nella cucina de Il Moro"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-10">
        <p className="hero-kicker mb-6 text-xs uppercase tracking-[0.4em] text-amber">
          Sommatino · Sicilia · dal 2022
        </p>
        <h1 className="font-display text-[15vw] leading-[0.9] text-cream md:text-[9rem]">
          <span className="block overflow-hidden">
            <span className="hero-line block">Il Moro</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block italic text-amber">
              Anima Sicula
            </span>
          </span>
        </h1>
        <p className="hero-sub mt-8 max-w-xl text-lg text-cream-dim md:text-xl">
          La pizza d&apos;autore di Filippo Volpe. Impasti a lunga maturazione,
          fermentazioni spontanee e il gusto autentico della Sicilia, nel cuore
          di Sommatino.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contatti"
            className="hero-cta rounded-full bg-terra px-8 py-4 text-sm uppercase tracking-[0.18em] text-cream transition-transform hover:scale-105"
          >
            Prenota un tavolo
          </a>
          <a
            href="#menu"
            className="hero-cta rounded-full border border-line px-8 py-4 text-sm uppercase tracking-[0.18em] text-cream transition-colors hover:border-amber hover:text-amber"
          >
            Scopri il menù
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-cream-dim">
          Scorri
        </span>
        <span className="relative flex h-10 w-[1px] justify-center overflow-hidden bg-line">
          <span className="absolute top-0 h-3 w-[1px] animate-[scrollcue_1.8s_ease-in-out_infinite] bg-amber" />
        </span>
      </div>
    </section>
  );
}
