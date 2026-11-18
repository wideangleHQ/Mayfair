import BookingPanel from "@/components/BookingPanel";
import Header from "@/components/Header";
import { Closing, Destinations, Discover, Experiences, Footer, GuestStories, Hero, Offers, Stays, Story } from "@/components/Sections";

export default function HomePage() {
  return (
    <>
      <a href="#main" className="btn sr-only z-50 bg-forest text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        Skip to content
      </a>
      <Header />
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
    </>
  );
}
