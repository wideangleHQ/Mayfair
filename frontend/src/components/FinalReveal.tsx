import Image from "next/image";
import FocusReveal from "@/components/FocusReveal";
import { finalReveal } from "@/constants/content";

/**
 * Sits fixed behind the page content (see page.tsx); the content scrolls away to uncover it.
 * Scroll-linked parallax and copy entrance are pure CSS (.reveal-final in globals.css).
 */
export default function FinalReveal() {
  const { image, eyebrow, title, copy, cta } = finalReveal;
  return (
    <FocusReveal>
      <section aria-labelledby="final-title" className="reveal-final fixed inset-x-0 bottom-0 z-0 h-(--reveal-h) overflow-hidden bg-forest text-white">
        <div className="reveal-img absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            placeholder="blur"
            fetchPriority="low"
            className="object-cover"
            style={{ objectPosition: image.position }}
          />
        </div>
        <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/10" />
        <div className="wrap relative flex h-full items-end pb-[clamp(2.5rem,9svh,6rem)]">
          <div className="reveal-copy max-w-[40rem]">
            <p className="eyebrow mb-4 flex items-center gap-4 text-white/90">
              <span aria-hidden className="h-px w-10 bg-sage-light" />
              {eyebrow}
            </p>
            <h2 id="final-title" className="text-h1 text-white">
              {title}
            </h2>
            <p className="mt-4 max-w-[44ch] text-lead text-white/90">{copy}</p>
            <a
              href={cta.href}
              className="btn mt-8 min-h-14 gap-4 border-b-2 border-sage bg-ivory px-9 text-sm font-semibold tracking-[0.16em] text-forest uppercase hover:bg-white focus-visible:outline-white"
            >
              {cta.label}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </FocusReveal>
  );
}
