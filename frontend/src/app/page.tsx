import BookingPanel from "@/components/BookingPanel";
import FinalReveal from "@/components/FinalReveal";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PromotionalPopup from "@/components/PromotionalPopup";
import { Closing, Destinations, Discover, Experiences, GuestStories, Hero, Offers, Stays, Story } from "@/components/Sections";

export default function HomePage() {
  return (
    <>
      <a href="#main" className="btn sr-only z-50 bg-forest text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        Skip to content
      </a>
      <Header />
      {/* Page content sits above the fixed final image; the bottom margin leaves room to uncover it. */}
      <div className="relative z-10 mb-(--reveal-h) bg-ivory">
        <main id="main">
          <Hero />
          <BookingPanel />
          <Story />
          <Offers />
          <Destinations />
          <Stays />
          <Experiences />
          <Discover />
          <GuestStories />
          <Closing />
        </main>
        <Footer />
      </div>
      <FinalReveal />
      <PromotionalPopup />
    </>
  );
}
