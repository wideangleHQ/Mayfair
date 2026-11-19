import Image from "next/image";
import { footer, logos } from "@/constants/content";

const linkCls =
  "group inline-flex min-h-11 items-center gap-2 text-[0.9375rem] text-ivory/80 transition-colors duration-200 hover:text-white focus-visible:text-white md:min-h-8";
const underline =
  "bg-[linear-gradient(currentColor,currentColor)] bg-[length:0_1px] bg-[position:0_100%] bg-no-repeat pb-0.5 transition-[background-size] duration-300 ease-calm group-hover:bg-[length:100%_1px] group-focus-visible:bg-[length:100%_1px]";

function FooterLink({ href, children, display = false }: { href: string; children: string; display?: boolean }) {
  return (
    <a href={href} className={`${linkCls} ${display ? "font-display text-[1.0625rem]" : ""}`}>
      <span className={underline}>{children}</span>
      <span aria-hidden className="-translate-x-1 text-sage-light opacity-0 transition-[opacity,translate] duration-300 ease-calm group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
        →
      </span>
    </a>
  );
}

function ColumnHeading({ children }: { children: string }) {
  return (
    <>
      <h3 className="eyebrow text-ivory/75">{children}</h3>
      <span aria-hidden className="mt-3 block h-px w-8 bg-sage" />
    </>
  );
}

function SocialIcon({ id }: { id: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", "aria-hidden": true, fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  switch (id) {
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M14.5 21v-8h2.7l.5-3.3h-3.2V7.6c0-1 .4-1.7 1.8-1.7H18V3.1C17.6 3 16.6 3 15.6 3 13.2 3 11.5 4.4 11.5 7.1v2.6H8.7V13h2.8v8z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
          <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4 4l16 16M20 4L4 20" />
        </svg>
      );
  }
}

export default function Footer() {
  const { destinations, discover, contact } = footer;
  return (
    <footer className="relative bg-forest text-ivory">
      <div className="wrap pt-16 md:pt-20 lg:pt-24">
        {/* Brand statement + logo and social */}
        <div className="grid gap-10 border-b border-sage/50 pb-12 md:pb-14 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2 className="font-display text-h1 font-normal text-ivory lg:col-span-8">
            {footer.statement.lead} <span className="text-sage-light">{footer.statement.accent}</span>
          </h2>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:col-span-4 lg:flex-col lg:items-end lg:gap-6">
            <Image src={logos.white} alt="MAYFAIR Hotels & Resorts" width={200} height={141} sizes="120px" className="h-auto w-[7.5rem]" />
            <ul className="flex gap-2" aria-label="MAYFAIR on social media">
              {footer.social.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex size-11 items-center justify-center border border-ivory/35 text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory hover:text-forest focus-visible:border-ivory focus-visible:bg-ivory focus-visible:text-forest"
                  >
                    <SocialIcon id={s.id} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-x-10 gap-y-12 py-12 md:grid-cols-2 md:py-14 lg:grid-cols-12 min-[75rem]:gap-x-14">
          {/* Destinations: accordion on phones, open list from tablet up */}
          <nav aria-label="Destinations" className="md:col-span-1 lg:col-span-6 min-[75rem]:col-span-5">
            <details className="group/acc border-b border-ivory/20 md:hidden">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden">
                <span className="eyebrow text-ivory/90">{destinations.title}</span>
                <span aria-hidden className="text-xl text-sage-light transition-transform duration-200 group-open/acc:rotate-45">+</span>
              </summary>
              <ul className="grid grid-cols-2 gap-x-4 pb-4">
                {destinations.items.map((d) => (
                  <li key={d.label}>
                    <FooterLink href={d.href} display>
                      {d.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </details>
            <div className="hidden md:block">
              <ColumnHeading>{destinations.title}</ColumnHeading>
              <ul className="mt-6 columns-2 gap-x-6">
                {destinations.items.map((d) => (
                  <li key={d.label} className="break-inside-avoid">
                    <FooterLink href={d.href} display>
                      {d.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <nav aria-label="Discover MAYFAIR" className="md:col-span-1 lg:col-span-6 min-[75rem]:col-span-4">
            <ColumnHeading>{discover.title}</ColumnHeading>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8">
              {discover.groups.map((g) => (
                <div key={g.title}>
                  <h4 className="text-xs font-semibold tracking-[0.1em] text-sage-light uppercase">{g.title}</h4>
                  <ul className="mt-2">
                    {g.links.map((l) => (
                      <li key={`${g.title}-${l.label}`}>
                        <FooterLink href={l.href}>{l.label}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          <address className="not-italic md:col-span-2 lg:col-span-12 min-[75rem]:col-span-3">
            <ColumnHeading>{contact.title}</ColumnHeading>
            <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3 min-[75rem]:grid-cols-1">
              <div>
                <p className="text-sm font-semibold tracking-[0.04em] text-ivory">{contact.company}</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ivory/80">
                  {contact.address[0]}
                  <br />
                  {contact.address[1]}
                </p>
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-xs text-ivory/70">{contact.reservations.label}</p>
                  <a href={contact.reservations.href} className="mt-1 inline-block font-display text-[1.625rem] leading-tight text-white underline decoration-sage decoration-1 underline-offset-[6px] transition-colors hover:decoration-white">
                    {contact.reservations.text}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-ivory/70">{contact.tollFree.label}</p>
                  <a href={contact.tollFree.href} className="mt-1 inline-flex min-h-11 items-center text-[1.0625rem] text-ivory transition-colors hover:text-white md:min-h-8">
                    {contact.tollFree.text}
                  </a>
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-xs text-ivory/70">{contact.email.label}</p>
                  <a href={contact.email.href} className="mt-1 inline-flex min-h-11 items-center text-[0.9375rem] break-all text-ivory transition-colors hover:text-white md:min-h-8">
                    {contact.email.text}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-ivory/70">{contact.website.label}</p>
                  <a href={contact.website.href} className="mt-1 inline-flex min-h-11 items-center text-[0.9375rem] text-ivory transition-colors hover:text-white md:min-h-8">
                    {contact.website.text}
                  </a>
                </div>
              </div>
            </div>
          </address>
        </div>

        {/* Lower strip */}
        <div className="flex flex-col gap-4 border-t border-sage/50 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ivory/70">{footer.copyright}</p>
          <a href="#top" className="group inline-flex min-h-11 items-center gap-3 self-start text-xs font-semibold tracking-[0.14em] text-ivory uppercase transition-colors hover:text-white sm:self-auto">
            Back to top
            <span aria-hidden className="flex size-9 items-center justify-center border border-ivory/35 text-sage-light transition-[background-color,color,translate] duration-300 group-hover:-translate-y-0.5 group-hover:bg-ivory group-hover:text-forest">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
