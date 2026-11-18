import Image from "next/image";
import DestinationsCarousel from "@/components/DestinationsCarousel";
import OffersCarousel from "@/components/OffersCarousel";
import type { ReactNode } from "react";
import {
  closing,
  discover,
  experiences,
  footer,
  hero,
  logos,
  OFFICIAL_SITE,
  offers,
  propertyById,
  signature,
  stays,
  story,
  testimonials,
  type Img,
  type Offer,
} from "@/constants/content";

/* ---------- shared bits ---------- */

function Media({ img, ratio, sizes, className = "" }: { img: Img; ratio: string; sizes: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-border ${ratio} ${className}`}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        placeholder="blur"
        className="object-cover transition-transform duration-700 ease-calm group-hover:scale-[1.03]"
        style={img.position ? { objectPosition: img.position } : undefined}
      />
    </div>
  );
}

function Head({ eyebrow, title, id, tone = "light", children }: { eyebrow: string; title: string; id: string; tone?: "light" | "dark"; children?: ReactNode }) {
  return (
    <div className="reveal grid gap-6 md:grid-cols-12 md:items-end md:gap-8">
      <div className="md:col-span-7">
        <p className={`eyebrow mb-5 flex items-center gap-4 ${tone === "dark" ? "text-white/80" : "text-botanical"}`}>
          <span aria-hidden className="h-px w-10 bg-gold" />
          {eyebrow}
        </p>
        <h2 id={id} className="text-h2">
          {title}
        </h2>
      </div>
      {children && <div className="md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9">{children}</div>}
    </div>
  );
}

const Arrow = () => <span aria-hidden>→</span>;
const section = "py-16 md:py-22 lg:py-30";
const scroller = "-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:px-0";

/* ---------- 02 hero ---------- */

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative h-svh min-h-[600px] overflow-hidden bg-forest text-white">
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        preload
        // Portrait screens crop a 1.93:1 image to full height, so it needs ~193vh of width.
        sizes="(max-aspect-ratio: 1600/829) 193vh, 100vw"
        placeholder="blur"
        className="hero-media object-cover"
        style={{ objectPosition: hero.image.position }}
      />
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-black/0" />
      <div aria-hidden className="absolute inset-0 hidden bg-linear-to-r from-black/35 to-transparent to-60% lg:block" />
      <div className="hero-copy wrap relative flex h-full flex-col justify-end pb-16 lg:pb-44">
        <p className="eyebrow mb-6 text-white/85">{hero.eyebrow}</p>
        <h1 id="hero-title" className="max-w-[13ch] text-display">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-[40ch] text-lead text-white/90">{hero.copy}</p>
        <div className="mt-10">
          <a href={hero.cta.href} className="btn border-white/80 text-white hover:bg-white hover:text-forest">
            {hero.cta.label} <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- 02 story / brand experience ---------- */

export function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="flex min-h-[110vh] flex-col py-16 md:h-[110vh] md:min-h-[760px] md:py-16 lg:py-16 scroll-mt-20">
      <div className="wrap flex min-h-0 flex-1 flex-col">
        {/* PART A — EDITORIAL INTRODUCTION */}
        <div className="reveal text-center max-w-4xl mx-auto">
          <p className="eyebrow mb-4 text-botanical tracking-[0.18em]">
            {story.eyebrow}
          </p>
          <h2
            id="story-title"
            className="font-display text-[2.25rem] sm:text-[3rem] md:text-[3.25rem] lg:text-[3.5rem] text-forest font-normal tracking-[-0.01em] leading-[1.12] text-balance"
          >
            {story.title}
          </h2>
          <p className="mt-5 md:mt-6 text-charcoal/85 text-base sm:text-lg md:text-[1.0625rem] lg:text-[1.125rem] font-normal leading-[1.7] max-w-[64ch] mx-auto text-pretty">
            {story.copy}
          </p>
        </div>

        {/* PART B — GRAND FULL-WIDTH IMAGE BANNER */}
        <div className="reveal mt-10 flex min-h-0 flex-1 flex-col md:mt-10">
          <div className="group relative w-full overflow-hidden bg-border border border-border/80 rounded-[2px] aspect-[16/10] sm:aspect-[16/9] min-h-[220px] md:aspect-auto md:min-h-[220px] md:flex-1">
            <Image
              src={story.image.src}
              alt={story.image.alt}
              fill
              sizes="(min-width: 1440px) 1440px, 100vw"
              placeholder="blur"
              className="object-cover transition-transform duration-1000 ease-calm group-hover:scale-[1.015]"
              style={{ objectPosition: story.image.position }}
            />
          </div>

          {/* PART C — SUBTLE IMAGE CAPTION AND CTA */}
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-[0.8125rem] font-medium tracking-[0.14em] uppercase text-muted">
              {story.image.caption}
            </p>
            <div>
              <a
                href={story.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-forest text-white hover:bg-forest-hover border border-forest px-7 py-3 text-xs sm:text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200"
              >
                <span>{story.cta.label}</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 04 our hotels (vertical title rail + carousel) ---------- */

export function Destinations() {
  const hotels = signature.order.map(propertyById).filter((p) => p !== undefined);
  return (
    <section id="destinations" aria-labelledby="dest-title" className="scroll-mt-16 overflow-hidden bg-forest py-16 text-ivory md:py-22 lg:py-28">
      <div className="wrap grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 md:gap-x-8 lg:gap-x-12">
        {/* Vertical title rail, read bottom-to-top; height follows the photographs beside it. */}
        <div className="reveal flex items-center justify-center gap-2 md:gap-3">
          <h2 id="dest-title" className="font-display text-[2rem] leading-none [writing-mode:vertical-rl] rotate-180 whitespace-nowrap md:text-[clamp(2.5rem,4.4vw,4rem)]">
            <span className="font-normal">{signature.title.lead} </span>
            <span className="font-medium text-gold">{signature.title.strong}</span>
          </h2>
          <p className="eyebrow rotate-180 whitespace-nowrap text-ivory/75 [writing-mode:vertical-rl]">{signature.sub}</p>
        </div>

        <DestinationsCarousel label="MAYFAIR hotels and resorts" count={hotels.length}>
          {hotels.map((p) => (
            <li key={p.id} id={`dest-${p.id}`} className="w-[80%] shrink-0 snap-start sm:w-[55%] md:w-[42vw] lg:w-[min(29vw,440px)]">
              <a href={`#book-${p.id}`} className="group relative block" aria-label={`${p.name}, ${p.place} — plan your stay`}>
                <Media img={p.image} ratio="aspect-[4/5] md:aspect-[5/4]" sizes="(min-width: 1024px) 440px, (min-width: 768px) 42vw, 80vw" />
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/65 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-stretch gap-3 p-5 md:p-6">
                  <span aria-hidden className="w-px shrink-0 bg-gold" />
                  <span>
                    <span className="eyebrow block text-white/80">{p.place}</span>
                    <span className="mt-1.5 block font-display text-h4 text-white">{p.name}</span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </DestinationsCarousel>
      </div>
    </section>
  );
}

/* ---------- 06 stays ---------- */

// Moderate stagger (medium, deepest, highest) on a compact 3-column gallery. Offsets use the
// 4px spacing scale: 32 / 64 / 0 on desktop, 16 / 32 / 0 on tablet, none on mobile.
const stayOffset = ["md:mt-4 lg:mt-8", "md:mt-8 lg:mt-16", ""];

export function Stays() {
  return (
    <section aria-labelledby="stays-title" className="bg-paper py-16 md:py-20 lg:py-24">
      <div className="wrap">
        <div className="reveal grid gap-5 md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-7">
            <p className="eyebrow mb-4 flex items-center gap-4 text-botanical">
              <span aria-hidden className="h-px w-10 bg-gold" />
              {stays.eyebrow}
            </p>
            <h2 id="stays-title" className="max-w-[18ch] text-h2 text-forest">
              {stays.title}
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="max-w-[46ch] text-charcoal/85">{stays.copy}</p>
            <a href={stays.link.href} className="link-line mt-2 text-forest">
              {stays.link.label} <Arrow />
            </a>
          </div>
        </div>

        <ul className={`${scroller} mt-10 md:mt-12 md:grid md:grid-cols-3 md:items-start md:gap-6 md:overflow-visible lg:mt-14 lg:gap-8`}>
          {stays.items.map((item, i) => (
            <li key={item.title} className={`group reveal w-[72%] shrink-0 snap-start sm:w-[46%] md:w-auto ${stayOffset[i] ?? ""}`}>
              <div className="relative">
                <a href={stays.link.href} tabIndex={-1} aria-hidden className="block">
                  <Media img={item.image} ratio="aspect-[4/5]" sizes="(min-width: 1440px) 440px, (min-width: 1024px) 31vw, (min-width: 768px) 31vw, 72vw" />
                </a>
                <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/60 to-transparent" />
                <h3 className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-h3 text-white">{item.title}</h3>
              </div>
              <p className="mt-4 max-w-[34ch] text-sm leading-[1.65] text-charcoal/85 md:text-base">{item.copy}</p>
              <a href={stays.link.href} className="link-line eyebrow mt-1 text-forest" aria-label={`See more: ${item.title}`}>
                See more <span aria-hidden className="ml-1 inline-block h-px w-10 bg-current align-middle" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 07 experiences ---------- */

const expLayout = [
  { cell: "lg:col-span-7", ratio: "aspect-[4/3] lg:aspect-[16/10]", sizes: "(min-width: 1024px) 56vw, 100vw" },
  { cell: "lg:col-span-4 lg:col-start-9 lg:mt-48", ratio: "aspect-[4/5]", sizes: "(min-width: 1024px) 32vw, 100vw" },
  { cell: "lg:col-span-5 lg:col-start-2", ratio: "aspect-[4/5]", sizes: "(min-width: 1024px) 40vw, 100vw" },
  { cell: "lg:col-span-5 lg:col-start-8 lg:mt-56", ratio: "aspect-[4/3]", sizes: "(min-width: 1024px) 40vw, 100vw" },
];

export function Experiences() {
  return (
    <section id="experiences" aria-labelledby="exp-title" className={`${section} scroll-mt-16 bg-forest text-white`}>
      <div className="wrap">
        <Head eyebrow={experiences.eyebrow} title={experiences.title} id="exp-title" tone="dark">
          <p className="text-white/85">Every stay is more than a room. These are the moments guests carry home.</p>
        </Head>
        <div className="mt-14 grid gap-y-16 md:mt-20 md:grid-cols-2 md:gap-x-8 lg:grid-cols-12 lg:gap-y-20">
          {experiences.items.map((item, i) => (
            <article
              key={item.id}
              id={item.id}
              className={`group reveal scroll-mt-24 ${expLayout[i].cell} ${i % 2 ? "max-md:ml-auto max-md:w-[88%] md:mt-24" : "max-md:w-[88%]"}`}
            >
              <Media img={item.image} ratio={expLayout[i].ratio} sizes={expLayout[i].sizes} />
              <p className="eyebrow mt-6 text-white/75">0{i + 1}</p>
              <h3 className="mt-2 text-h3">{item.title}</h3>
              <p className="mt-3 max-w-[44ch] text-white/85">{item.copy}</p>
              <a href={OFFICIAL_SITE} className="link-line mt-2 text-white">
                {item.link} <Arrow />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 03 offers (follows the story) ---------- */

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="group flex h-full flex-col">
      {/* Image repeats the CTA's destination; hidden from AT/tab order to avoid a duplicate stop. */}
      <a href={offer.href} tabIndex={-1} aria-hidden className="block">
        <Media img={offer.image} ratio="aspect-[16/10]" sizes="(min-width: 1440px) 420px, (min-width: 1024px) 30vw, (min-width: 768px) 46vw, 85vw" />
      </a>
      <p className="eyebrow mt-7 text-botanical">{offer.property}</p>
      <h3 className="mt-3 text-h3 text-forest">{offer.title}</h3>
      <p className="mt-4 max-w-[44ch] flex-1 text-charcoal/85 leading-[1.75]">{offer.copy}</p>
      <a href={offer.href} className="link-line eyebrow mt-6 self-start text-forest" aria-label={`Read more: ${offer.title}`}>
        Read more <Arrow />
      </a>
    </article>
  );
}

export function Offers() {
  return (
    <section id="offers" aria-labelledby="offers-title" className={`${section} scroll-mt-16 bg-paper`}>
      <div className="wrap">
        <div className="reveal grid gap-6 md:grid-cols-12 md:items-center md:gap-8">
          <div className="md:col-span-6">
            <p className="eyebrow mb-4 text-botanical">{offers.eyebrow}</p>
            <h2 id="offers-title" className="flex items-center gap-6 text-h1 text-forest">
              <span aria-hidden className="hidden h-px w-16 shrink-0 bg-gold sm:block" />
              {offers.title}
            </h2>
          </div>
          <p className="max-w-[52ch] text-lead text-charcoal/85 md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">{offers.intro}</p>
        </div>

        <div className="reveal mt-12 md:mt-16 lg:mt-20">
          <OffersCarousel label="Exclusive offers">
            {offers.items.map((o) => (
              <li key={o.title} className="w-[85%] shrink-0 snap-start sm:w-[60%] md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]">
                <OfferCard offer={o} />
              </li>
            ))}
          </OffersCarousel>
        </div>

        <p className="mt-10 text-sm text-charcoal/75">
          {offers.note}{" "}
          <a href={offers.all.href} className="font-semibold text-forest underline decoration-gold underline-offset-4 hover:decoration-forest">
            {offers.all.label}
          </a>
        </p>
      </div>
    </section>
  );
}

/* ---------- 09 discover ---------- */

export function Discover() {
  return (
    <section aria-labelledby="discover-title" className={`${section} bg-paper`}>
      <div className="wrap">
        <Head eyebrow={discover.eyebrow} title={discover.title} id="discover-title">
          <p className="text-charcoal/85">Step beyond the gates: the hills, estates, lakes and old towns around each MAYFAIR are part of the stay.</p>
        </Head>
        <ul className={`${scroller} mt-12 md:mt-16 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible lg:grid-cols-4`}>
          {discover.items.map((item, i) => (
            <li key={item.title} className={`group reveal w-[78%] shrink-0 snap-start md:w-auto ${i % 2 ? "lg:mt-20" : ""}`}>
              <Media img={item.image} ratio="aspect-[3/4]" sizes="(min-width: 1024px) 23vw, (min-width: 768px) 46vw, 78vw" />
              <h3 className="mt-5 text-h4 font-medium text-forest">{item.title}</h3>
              <p className="mt-2 text-charcoal/85">{item.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 10 guest stories (renders only with verified content) ---------- */

export function GuestStories() {
  if (!testimonials.length) return null;
  return (
    <section aria-labelledby="stories-title" className={section}>
      <div className="wrap">
        <h2 id="stories-title" className="text-h2 text-forest">
          In our guests&apos; words
        </h2>
        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure>
                <blockquote className="font-display text-h4">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm text-botanical">
                  {t.name} · {t.source}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 11 closing ---------- */

export function Closing() {
  return (
    <section aria-labelledby="closing-title" className="relative isolate overflow-hidden bg-forest text-white">
      <Image src={closing.image.src} alt={closing.image.alt} fill sizes="(max-width: 767px) 200vw, 100vw" placeholder="blur" className="-z-10 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-black/65 via-black/35 to-black/5" />
      <div className="wrap flex min-h-[70svh] flex-col justify-center py-24 lg:min-h-[640px]">
        <div className="reveal max-w-[40rem]">
          <h2 id="closing-title" className="text-h1">
            {closing.title}
          </h2>
          <p className="mt-6 max-w-[42ch] text-lead text-white/90">{closing.copy}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="#booking" className="btn bg-white text-forest hover:bg-ivory">
              Book your stay
            </a>
            <a href="#destinations" className="link-line text-white">
              Explore destinations <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 12 footer ---------- */

export function Footer() {
  return (
    <footer className="bg-forest pt-16 pb-[max(2rem,env(safe-area-inset-bottom))] text-white lg:pt-24">
      <div className="wrap">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Image src={logos.white} alt="MAYFAIR Hotels & Resorts" width={114} height={80} sizes="114px" />
            <p className="mt-6 max-w-[32ch] text-white/80">Hotels and resorts shaped by Indian heritage, nature and heartfelt hospitality.</p>
            <a href="#booking" className="btn mt-8 border-white/60 text-white hover:bg-white hover:text-forest">
              Book your stay
            </a>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8 lg:gap-8">
            {footer.groups.map((g) => (
              <div key={g.title}>
                <h2 className="eyebrow font-sans text-white/70">{g.title}</h2>
                <ul className="mt-5 space-y-1">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="inline-flex min-h-11 items-center text-white/90 hover:text-white">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="eyebrow font-sans text-white/70">Connect</h2>
              <ul className="mt-5 space-y-1">
                {footer.social.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="inline-flex min-h-11 items-center text-white/90 hover:text-white">
                      {s.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={OFFICIAL_SITE} className="inline-flex min-h-11 items-center text-white/90 hover:text-white">
                    mayfairhotels.com
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <p className="pt-8 text-sm text-white/70">© MAYFAIR Hotels &amp; Resorts. All rights reserved.</p>
      </div>
    </footer>
  );
}
