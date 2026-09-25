import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import CountUp from "@/components/CountUp";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />

      <Marquee />

      {/* NUMERI */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal
            stagger
            className="grid grid-cols-2 gap-10 md:grid-cols-4"
          >
            {[
              { v: <CountUp to={2022} />, l: "Anno di nascita" },
              { v: <CountUp to={9.3} decimals={1} />, l: "Voto medio TheFork" },
              { v: <CountUp to={100} suffix="+" />, l: "Recensioni" },
              { v: <CountUp to={3} />, l: "Tipi di impasto" },
            ].map((s, i) => (
              <div
                key={i}
                className="border-l border-line pl-5 md:pl-6"
              >
                <div className="font-display text-5xl text-gold md:text-6xl">
                  {s.v}
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream-dim">
                  {s.l}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ANIMA */}
      <section id="anima" className="relative py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <Reveal>
              <p className="eyebrow mb-6">
                L&apos;anima
              </p>
              <h2 className="font-display text-4xl leading-tight text-cream md:text-6xl">
                Nel centro storico di Sommatino, dove la pizza diventa
                racconto.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-cream-dim">
                Il Moro — Anima Sicula nasce nel 2022 ed è diventato in pochi
                anni un punto di riferimento per gli appassionati della pizza di
                qualità, oltre che un simbolo di rinascita del cuore di
                Sommatino. Oggi accoglie ospiti da tutta la Sicilia, in cerca di
                un&apos;esperienza che unisce tecnica, ricerca e valorizzazione
                degli ingredienti del territorio.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-cream-dim">
                Un locale elegante e luminoso, affacciato sulla piazza
                pedonale, dove l&apos;accoglienza è parte del gusto.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="frame relative aspect-[4/5] w-full">
                <Image
                  src="/img/locale.jpg"
                  alt="L'ingresso de Il Moro Anima Sicula nel centro storico di Sommatino"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STORIA / FILIPPO VOLPE */}
      <section id="storia" className="relative bg-ink-soft py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <Reveal className="order-2 md:order-1">
              <div className="frame relative aspect-[4/5] w-full">
                <Image
                  src="/img/hero.jpg"
                  alt="Filippo Volpe davanti all'insegna de Il Moro Anima Sicula"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15} className="order-1 md:order-2">
              <p className="eyebrow mb-6">
                Il pizzaiolo
              </p>
              <h2 className="font-display text-4xl leading-tight text-cream md:text-6xl">
                Filippo Volpe
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-cream-dim">
                Artigiano della pizza, Filippo Volpe si è avvicinato nel 2019 al
                mondo delle fermentazioni e degli impasti, partecipando a una
                masterclass con Pasquale Moro, che considera il suo mentore. Ha
                poi affinato la tecnica seguendo corsi e masterclass con alcuni
                dei maestri più autorevoli della panificazione italiana, tra cui
                Gabriele Bonci, Carlo Di Cristo e Piergiorgio Giorilli.
              </p>
              <blockquote className="mt-8 border-l-2 border-terra pl-6 font-display text-2xl italic text-cream md:text-3xl">
                «Napoli è un punto di partenza, non di arrivo.»
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* IMPASTO / FILOSOFIA */}
      <section id="impasto" className="relative py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">
              La filosofia
            </p>
            <h2 className="max-w-3xl font-display text-4xl leading-tight text-cream md:text-6xl">
              Tutto comincia <span className="text-gold">dall&apos;impasto</span>.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream-dim">
              Leggero, fragrante e altamente digeribile grazie a lunghi tempi di
              maturazione. Un lavoro di ricerca continua sulle fermentazioni
              spontanee — anche da vegetali come zucchine, pomodori e peperoni —
              e sulla scelta di farine e materie prime del territorio.
            </p>
          </Reveal>

          <Reveal stagger className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Classico",
                d: "80% farina tipo 0 e 20% tipo 1 dei Molini Riggi, mulino di Caltanissetta.",
              },
              {
                t: "Cereali",
                d: "Semi di girasole, sesamo, chia e orzo per un impasto rustico e profumato.",
              },
              {
                t: "Integrale",
                d: "Canapa, teff, chia e quinoa: gusto pieno e alta digeribilità.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="border border-line bg-ink-soft/50 p-8"
              >
                <h3 className="font-display text-2xl text-amber">{c.t}</h3>
                <p className="mt-4 leading-relaxed text-cream-dim">{c.d}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <div className="frame relative aspect-[16/7] w-full">
              <Image
                src="/img/pizza-classica.jpg"
                alt="La pizza classica de Il Moro, cornice alveolata e ben cotta"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="relative bg-ink-soft py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">
              Il menù
            </p>
            <h2 className="font-display text-4xl leading-tight text-cream md:text-6xl">
              Ingredienti siciliani, mano d&apos;autore.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-dim">
              Pizze a base vegetale, materie prime a chilometro zero e prodotti
              d&apos;eccellenza: crema di melanzane, tenerumi, alici di Sciacca,
              mozzarella di bufala DOP e fiori di zucca.
            </p>
          </Reveal>

          <Reveal stagger className="mt-16 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              {
                n: "Antipasto del Moro",
                d: "Impasto a lievito madre e semola rimacinata di grano duro siciliano, pinsille, sale, pepe e limone",
              },
              {
                n: "Milincianedda",
                d: "Crema di melanzane, stracciatella fresca locale e gambero rosso",
              },
              {
                n: "Pizza Tenerumi",
                d: "Tenerumi dell'orto, provola affumicata e alici di Sciacca",
              },
              {
                n: "Pizza Sorpresa",
                d: "Cornicione ripieno, alici di Sciacca e verdure di stagione",
              },
              {
                n: "Classica Il Moro",
                d: "80% tipo 0 e 20% tipo 1 Molini Riggi, lunga maturazione",
              },
              {
                n: "Crocchè & patatine",
                d: "Con fior di latte fresco o provola affumicata",
                p: "€3",
              },
              {
                n: "Granita siciliana",
                d: "Granita artigianale servita con brioche col tuppo",
              },
              {
                n: "Dolce al pistacchio",
                d: "Mousse al cioccolato, panna montata e granella di pistacchio",
              },
            ].map((m) => (
              <div
                key={m.n}
                className="flex items-baseline justify-between gap-4 border-b border-line pb-4"
              >
                <div>
                  <h3 className="font-display text-2xl text-cream">{m.n}</h3>
                  <p className="mt-1 text-sm text-cream-dim">{m.d}</p>
                </div>
                <span className="font-display text-xl text-amber">{m.p}</span>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 text-sm text-cream-dim">
              Prezzo medio ~ €20 a persona · opzioni vegetariane e KM 0. Il menù
              varia con la stagionalità dei prodotti.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <h2 className="mb-14 font-display text-4xl leading-tight text-cream md:text-6xl">
              Uno sguardo al locale
            </h2>
          </Reveal>
          <Reveal stagger className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { src: "/img/pizza-classica.jpg", alt: "Pizza classica de Il Moro" },
              { src: "/img/locale.jpg", alt: "Filippo Volpe all'ingresso del locale" },
              { src: "/img/pizza-tenerumi.jpg", alt: "Pizza ai tenerumi con alici" },
              { src: "/img/milincianedda.jpg", alt: "Milincianedda con crema di melanzane" },
              { src: "/img/pizza-sorpresa.jpg", alt: "Pizza Sorpresa dal cornicione ripieno" },
              { src: "/img/granita.jpg", alt: "Granita siciliana con brioche col tuppo" },
              { src: "/img/festa.jpg", alt: "Locandina Il Moro in Festa" },
              { src: "/img/hero.jpg", alt: "Filippo Volpe davanti all'insegna" },
            ].map((img, i) => (
              <div
                key={i}
                className={`frame relative ${
                  i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* RICONOSCIMENTI */}
      <section
        id="riconoscimenti"
        className="relative bg-ink-soft py-28 md:py-40"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">
              Riconoscimenti & eventi
            </p>
            <h2 className="max-w-3xl font-display text-4xl leading-tight text-cream md:text-6xl">
              Una firma che varca i confini di Sommatino.
            </h2>
          </Reveal>

          <Reveal stagger className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                t: "Pizza Sanremo 2026",
                d: "Filippo Volpe tra i protagonisti che rappresentano la Sicilia al festival dedicato alla pizza.",
              },
              {
                t: "Moro in Festa",
                d: "Il terzo anniversario celebrato il 6 agosto con una serata dedicata all'arte della pizza e a grandi maestri ospiti.",
              },
              {
                t: "9.3 / 10 su TheFork",
                d: "Oltre 100 recensioni: qualità, servizio e atmosfera premiati dagli ospiti.",
              },
            ].map((r) => (
              <div key={r.t} className="border border-line p-8">
                <h3 className="font-display text-2xl text-amber">{r.t}</h3>
                <p className="mt-4 leading-relaxed text-cream-dim">{r.d}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <p className="max-w-3xl text-lg leading-relaxed text-cream-dim">
              Le serate d&apos;autore hanno portato a Sommatino maestri della
              pizza contemporanea come La Spada, Cacciuolo e Mangano, con
              percorsi di degustazione firmati Filippo Volpe. Tra i partner del
              territorio: i <strong className="text-cream">Molini Riggi</strong>{" "}
              di Caltanissetta e il birrificio{" "}
              <strong className="text-cream">Semedorato</strong> di Sommatino.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="relative py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-16 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow mb-6">
                Vieni a trovarci
              </p>
              <h2 className="font-display text-4xl leading-tight text-cream md:text-6xl">
                Prenota il tuo tavolo.
              </h2>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="border-l border-line pl-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-amber">
                    Indirizzo
                  </p>
                  <p className="mt-2 text-lg text-cream-dim">
                    Corso Umberto I, 36/38
                    <br />
                    93019 Sommatino (CL)
                  </p>
                </div>
                <div className="border-l border-line pl-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-amber">
                    Telefono
                  </p>
                  <a
                    href="tel:+3909221896296"
                    className="mt-2 block text-lg text-cream-dim hover:text-amber"
                  >
                    0922 1896296
                  </a>
                  <a
                    href="tel:+393748390194"
                    className="mt-1 block text-lg text-cream-dim hover:text-amber"
                  >
                    374 839 0194
                  </a>
                </div>
                <div className="border-l border-line pl-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-amber">
                    Orari
                  </p>
                  <p className="mt-2 text-lg text-cream-dim">
                    Martedì – Domenica · 18:00 – 24:00
                    <br />
                    Sabato fino all&apos;01:00 · Lunedì chiuso
                  </p>
                </div>
                <div className="border-l border-line pl-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-amber">
                    Social
                  </p>
                  <a
                    href="https://www.instagram.com/ilmoro_animasicula/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-lg text-cream-dim hover:text-amber"
                  >
                    Instagram · @ilmoro_animasicula
                  </a>
                  <a
                    href="https://www.facebook.com/p/Il-Moro-Anima-Sicula-100095303911923/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-lg text-cream-dim hover:text-amber"
                  >
                    Facebook · Il Moro Anima Sicula
                  </a>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="tel:+3909221896296"
                  className="inline-block rounded-full bg-terra px-8 py-4 text-sm uppercase tracking-[0.18em] text-cream transition-transform hover:scale-105"
                >
                  Chiama per prenotare
                </a>
                <a
                  href="https://wa.me/393748390194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-line px-8 py-4 text-sm uppercase tracking-[0.18em] text-cream transition-colors hover:border-amber hover:text-amber"
                >
                  Scrivici su WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="h-full min-h-[360px] overflow-hidden rounded-sm border border-line">
                <iframe
                  title="Mappa Il Moro Anima Sicula"
                  src="https://www.google.com/maps?q=Corso+Umberto+I+36+Sommatino+CL&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINANZIAMENTO UE — loghi ufficiali */}
      <section id="finanziamento" className="relative border-t border-line py-20">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-amber">
              Trasparenza
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-cream md:text-4xl">
              Progetto cofinanziato dall&apos;Unione Europea
            </h2>
            <div className="mx-auto mt-10 max-w-3xl rounded-sm border border-line bg-white p-6 md:p-10">
              <Image
                src="/img/loghi-ue.png"
                alt="Loghi istituzionali: Unione Europea, Repubblica Italiana, Regione Siciliana, PSC Sicilia, POC Sicilia 14-20"
                width={972}
                height={136}
                sizes="(max-width: 768px) 100vw, 800px"
                className="mx-auto h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line bg-ink-soft py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="font-display text-3xl text-cream">
                Il Moro <span className="italic text-amber">Anima Sicula</span>
              </p>
              <p className="mt-3 max-w-sm text-sm text-cream-dim">
                Pizzeria e ristorante nel centro storico di Sommatino.
                Corso Umberto I, 36/38 · 93019 Sommatino (CL)
              </p>
              <div className="mt-4 flex gap-5 text-sm text-cream-dim">
                <a
                  href="https://www.instagram.com/ilmoro_animasicula/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/p/Il-Moro-Anima-Sicula-100095303911923/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber"
                >
                  Facebook
                </a>
                <a href="tel:+3909221896296" className="hover:text-amber">
                  0922 1896296
                </a>
              </div>
            </div>
            <div className="text-sm text-cream-dim">
              <a
                href="#finanziamento"
                className="text-amber underline-offset-4 hover:underline"
              >
                Progetto cofinanziato dall&apos;Unione Europea →
              </a>
              <p className="mt-4">
                © {new Date().getFullYear()} Il Moro s.r.l.s. — Tutti i diritti
                riservati.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
