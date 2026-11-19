import Image from "next/image";
import type { CSSProperties } from "react";
import { megaMenus, offers, type MenuCard, type MenuId, type MenuImage } from "@/constants/content";

// Items stagger in via --i (see .mm-item in globals.css). Content remounts when the menu changes,
// so switching menus replays a short fade-and-rise while the panel itself stays open.
const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

const underline =
  "bg-[linear-gradient(currentColor,currentColor)] bg-[length:0_1px] bg-[position:0_100%] bg-no-repeat pb-0.5 transition-[background-size] duration-300 ease-calm group-hover:bg-[length:100%_1px] group-focus-visible:bg-[length:100%_1px]";
const arrow =
  "-translate-x-1 opacity-0 transition-[opacity,translate] duration-300 ease-calm group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100";

type Nav = { onNavigate: () => void };

function Heading({ title, copy, i = 0 }: { title: string; copy: string; i?: number }) {
  return (
    <div className="mm-item" style={stagger(i)}>
      <h2 className="font-display text-[clamp(1.75rem,2.5vw,2.625rem)] leading-[1.12] font-normal text-forest">{title}</h2>
      <p className="mt-4 max-w-[34ch] text-[0.9375rem] leading-[1.65] text-charcoal/80">{copy}</p>
    </div>
  );
}

function MenuLink({ href, children, onNavigate }: { href: string; children: string } & Nav) {
  return (
    <a href={href} onClick={onNavigate} className="group inline-flex min-h-8 items-center gap-2 text-[0.9375rem] text-forest/90 transition-colors duration-200 hover:text-forest">
      <span className={underline}>{children}</span>
      <span aria-hidden className={`text-botanical ${arrow}`}>
        →
      </span>
    </a>
  );
}

function CtaButton({ href, children, onNavigate, i }: { href: string; children: string; i: number } & Nav) {
  return (
    <a
      href={href}
      onClick={onNavigate}
      style={stagger(i)}
      className="btn mm-item mt-7 min-h-12 gap-3 bg-forest px-6 text-xs font-semibold tracking-[0.14em] text-white uppercase hover:bg-forest-hover"
    >
      {children} <span aria-hidden>→</span>
    </a>
  );
}

function Photo({ image, sizes, ratio = "", className = "" }: { image: MenuImage; sizes: string; ratio?: string; className?: string }) {
  return (
    <div className={`mm-img overflow-hidden bg-border ${className || "relative"} ${ratio}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        placeholder="blur"
        className="object-cover transition-transform duration-700 ease-calm group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
        style={image.position ? { objectPosition: image.position } : undefined}
      />
    </div>
  );
}

function Card({ card, i, ratio, sizes, onNavigate }: { card: MenuCard; i: number; ratio: string; sizes: string } & Nav) {
  return (
    <a href={card.href} onClick={onNavigate} style={stagger(i)} className="group mm-item block focus-visible:outline-forest">
      <Photo image={card.image} ratio={ratio} sizes={sizes} />
      <h3 className="mt-4 font-display text-[clamp(1.25rem,1.7vw,1.625rem)] leading-tight font-medium text-forest">{card.title}</h3>
      <p className="mt-1 text-sm leading-[1.55] text-charcoal/75">{card.copy}</p>
      <span className="eyebrow mt-3 inline-block text-forest">
        <span className={underline}>{card.cta}</span> <span aria-hidden className={`inline-block text-botanical ${arrow}`}>→</span>
      </span>
    </a>
  );
}

function Destinations({ onNavigate }: Nav) {
  const m = megaMenus.destinations;
  return (
    <div className="grid grid-cols-12 gap-x-[clamp(1.5rem,3vw,3.5rem)]">
      <div className="col-span-4 flex flex-col items-start">
        <Heading title={m.heading} copy={m.copy} />
        <CtaButton href={m.cta.href} onNavigate={onNavigate} i={2}>
          {m.cta.label}
        </CtaButton>
      </div>
      <div className="col-span-4 grid grid-cols-2 gap-x-6">
        {m.groups.map((g, gi) => (
          <div key={g.title} className="mm-item" style={stagger(gi + 1)}>
            <p className="eyebrow text-botanical">{g.title}</p>
            <span aria-hidden className="mt-3 mb-3 block h-px w-8 bg-sage" />
            <ul>
              {g.links.map((l) => (
                <li key={l.label}>
                  <MenuLink href={l.href} onNavigate={onNavigate}>
                    {l.label}
                  </MenuLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <a href={m.featured.href} onClick={onNavigate} className="group relative col-span-4 block min-h-[19rem] overflow-hidden bg-border focus-visible:outline-forest">
        <Photo image={m.featured.image} sizes="(min-width: 1440px) 460px, 32vw" className="absolute inset-0" />
        <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/70 to-transparent" />
        <span className="absolute inset-x-0 bottom-0 p-6 text-white">
          <span className="eyebrow block text-white/85">{m.featured.place}</span>
          <span className="mt-1 block font-display text-[clamp(1.5rem,2vw,2rem)] leading-tight">{m.featured.name}</span>
          <span className="eyebrow mt-3 inline-block">
            <span className={underline}>{m.featured.cta}</span> <span aria-hidden>→</span>
          </span>
        </span>
      </a>
    </div>
  );
}

function Experiences({ onNavigate }: Nav) {
  const m = megaMenus.experiences;
  return (
    <div className="grid grid-cols-12 gap-x-[clamp(1.5rem,3vw,3.5rem)]">
      <div className="col-span-3">
        <Heading title={m.heading} copy={m.copy} />
      </div>
      <div className="col-span-9 grid grid-cols-4 gap-[clamp(1rem,1.8vw,1.75rem)]">
        {m.items.map((c, i) => (
          <Card key={c.title} card={c} i={i + 1} ratio="aspect-[5/4]" sizes="(min-width: 1440px) 260px, 18vw" onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}

function Celebrations({ onNavigate }: Nav) {
  const m = megaMenus.celebrations;
  return (
    <div className="grid grid-cols-12 gap-x-[clamp(1.5rem,3vw,3.5rem)]">
      <div className="col-span-3">
        <Heading title={m.heading} copy={m.copy} />
      </div>
      <div className="col-span-9 grid grid-cols-3 gap-[clamp(1.25rem,2.2vw,2.25rem)]">
        {m.items.map((c, i) => (
          <Card key={c.title} card={c} i={i + 1} ratio="aspect-[3/2]" sizes="(min-width: 1440px) 380px, 24vw" onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}

function Offers({ onNavigate }: Nav) {
  const m = megaMenus.offers;
  const [first, ...rest] = offers.items.slice(0, 3);
  return (
    <div className="grid grid-cols-12 gap-x-[clamp(1.5rem,3vw,3.5rem)]">
      <div className="col-span-3 flex flex-col items-start">
        <Heading title={m.heading} copy={m.copy} />
        <CtaButton href={m.all.href} onNavigate={onNavigate} i={2}>
          {m.all.label}
        </CtaButton>
      </div>
      <div className="col-span-9 grid grid-cols-9 gap-[clamp(1.25rem,2.2vw,2.25rem)]">
        <a href={m.all.href} onClick={onNavigate} style={stagger(1)} className="group mm-item col-span-5 block focus-visible:outline-forest">
          <Photo image={first.image} ratio="aspect-[16/10]" sizes="(min-width: 1440px) 520px, 34vw" />
          <h3 className="mt-4 font-display text-[clamp(1.375rem,1.9vw,1.875rem)] leading-tight font-medium text-forest">{first.title}</h3>
          <p className="mt-1 max-w-[46ch] text-sm leading-[1.55] text-charcoal/75">{first.copy}</p>
          <span className="eyebrow mt-3 inline-block text-forest">
            <span className={underline}>Discover offer</span> <span aria-hidden className={`inline-block text-botanical ${arrow}`}>→</span>
          </span>
        </a>
        <div className="col-span-4 flex flex-col justify-between gap-5">
          {rest.map((o, i) => (
            <a key={o.title} href={m.all.href} onClick={onNavigate} style={stagger(i + 2)} className="group mm-item grid grid-cols-[42%_1fr] gap-4 focus-visible:outline-forest">
              <Photo image={o.image} ratio="aspect-[4/3]" sizes="(min-width: 1440px) 170px, 12vw" />
              <span className="block">
                <span className="block font-display text-[clamp(1.125rem,1.4vw,1.375rem)] leading-tight font-medium text-forest">{o.title}</span>
                <span className="mt-1 block text-[0.8125rem] leading-[1.5] text-charcoal/75">{o.copy}</span>
                <span className="eyebrow mt-2 inline-block text-forest">
                  <span className={underline}>Discover offer</span> <span aria-hidden className={`inline-block text-botanical ${arrow}`}>→</span>
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Story({ onNavigate }: Nav) {
  const m = megaMenus.story;
  return (
    <div className="grid grid-cols-12 gap-x-[clamp(1.5rem,3vw,3.5rem)]">
      <div className="col-span-5">
        <Heading title={m.heading} copy={m.copy} />
        <ul className="mm-item mt-7 border-t border-border" style={stagger(2)}>
          {m.links.map((l) => (
            <li key={l.label} className="border-b border-border">
              <a href={l.href} onClick={onNavigate} className="group flex min-h-12 items-center justify-between font-display text-[1.25rem] text-forest focus-visible:outline-forest">
                <span className={underline}>{l.label}</span>
                <span aria-hidden className="text-botanical transition-transform duration-300 ease-calm group-hover:translate-x-1">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative col-span-7 min-h-[20rem] overflow-hidden bg-border">
        <Photo image={m.image} sizes="(min-width: 1440px) 760px, 55vw" className="absolute inset-0" />
      </div>
    </div>
  );
}

export default function MegaPanelContent({ id, onNavigate }: { id: MenuId } & Nav) {
  switch (id) {
    case "destinations":
      return <Destinations onNavigate={onNavigate} />;
    case "experiences":
      return <Experiences onNavigate={onNavigate} />;
    case "celebrations":
      return <Celebrations onNavigate={onNavigate} />;
    case "offers":
      return <Offers onNavigate={onNavigate} />;
    case "story":
      return <Story onNavigate={onNavigate} />;
  }
}
