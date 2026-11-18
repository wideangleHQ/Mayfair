import type { StaticImageData } from "next/image";

import logoColour from "@/assets/Images/imgi_1_Frame_12_ec3fe0f2.png";
import logoWhite from "@/assets/Images/imgi_49_MayFair_Whiite_Logo_jgzh45.png";
import heroJungpana from "@/assets/Images/imgi_3_mayfair-jungpana-aerial-view.webp";
import gopalpur from "@/assets/Images/imgi_4_mayfair-gopalpur-aerial-view.webp";
import raipurLake from "@/assets/Images/imgi_5_mayfair-lake-resort-raipur.png";
import kalimpong from "@/assets/Images/imgi_6_mayfair-kalimpong-exterior.png";
import jharsuguda from "@/assets/Images/imgi_7_mayfair-jharsuguda-aerial-view.webp";
import gangtok from "@/assets/Images/imgi_8_mayfair-gangtok-aerial-view.png";
import siliguriAerial from "@/assets/Images/imgi_9_mayfair-siliguri-aerial-view.png";
import lagoon from "@/assets/Images/imgi_10_Scroll_4_Lagoon_Bhubaneswar_ws2flc.png";
import paradeep from "@/assets/Images/imgi_12_mayfair-paradeep-resort.webp";
import brandAerial from "@/assets/Images/imgi_13_Aboutthebrand_w6tiaa.png";
import heritageRoom from "@/assets/Images/imgi_14_Heritage_113-1_x2kwuc.png";
import kanchenjunga from "@/assets/Images/imgi_15_Exterior_New_Kanchenjunga_sept_2018__1_zjnwyo.webp";
import dining from "@/assets/Images/imgi_17_UniqueDining_lzpebh.webp";
import wedding from "@/assets/Images/imgi_18_107__Shaadi_closeup_2_pur1a3.webp";
import wellness from "@/assets/Images/imgi_21_wellness_Rejuve_ngmvoz.png";
import darjeeling from "@/assets/Images/imgi_22_Darjeeling_078_h5cllj.png";
import rourkela from "@/assets/Images/imgi_37_Mayfair_Garden_Rourkela.webp";
import clubRoom from "@/assets/Images/imgi_41_Club_Room_colfoo.webp";
import deluxeSuite from "@/assets/Images/imgi_44_Deluxe_Suite_fe1176f6.png";
import royalVilla from "@/assets/Images/imgi_45_Royal_Villa_5_xmbtik.png";
import teaResort from "@/assets/Images/imgi_46_siliguri_vintage_car_x9tbxb.webp";
import artCulture from "@/assets/Images/imgi_50_Art_Cul_yqmhhc.png";
import offerMonsoon from "@/assets/Images/Offers/imgi_4_monsoon-bliss-retreat-gopalpur-cover.jpg_e1e135d7.jpg";
import offerParadeep from "@/assets/Images/Offers/imgi_5_paradeep-coastal-bliss-escape_ecd5d0ee.jpg";
import offerBookDirect from "@/assets/Images/Offers/imgi_6_book-direct-offer-1.png";
import offerCelebration from "@/assets/Images/Offers/imgi_7_1080x1080_(2).png";

/*
 * Content integrity (design.md §14): names and locations below come from the supplied
 * asset filenames and the brief. Nothing here states prices, awards, facilities or offer
 * terms. Replace OFFICIAL_SITE targets with real internal routes as pages are built.
 */
export const OFFICIAL_SITE = "https://www.mayfairhotels.com";

export const logos = { colour: logoColour, white: logoWhite };

export type Img = { src: StaticImageData; alt: string; position?: string };

export type Property = {
  id: string;
  name: string;
  place: string;
  region: string;
  image: Img;
};

export const properties: Property[] = [
  {
    id: "lagoon",
    name: "MAYFAIR Lagoon",
    place: "Bhubaneswar",
    region: "Odisha",
    image: { src: lagoon, alt: "Aerial view of MAYFAIR Lagoon: red-tiled cottages, palms and fountains on the lagoon" },
  },
  {
    id: "kalimpong",
    name: "MAYFAIR Himalayan Spa Resort",
    place: "Kalimpong",
    region: "West Bengal",
    image: { src: kalimpong, alt: "Rose-pink heritage façade of MAYFAIR Himalayan Spa Resort at dusk, gardens in bloom", position: "40% 50%" },
  },
  {
    id: "siliguri",
    name: "MAYFAIR Tea Resort",
    place: "Siliguri",
    region: "West Bengal",
    image: { src: teaResort, alt: "Vintage car beside the MAYFAIR Tea Resort sign at the New Chumta Tea Estate", position: "35% 60%" },
  },
  {
    id: "gangtok",
    name: "MAYFAIR, Gangtok",
    place: "Gangtok",
    region: "Sikkim",
    image: { src: gangtok, alt: "Aerial view of MAYFAIR Gangtok's red roofs among forested slopes, with mist rising off the valley" },
  },
  {
    id: "darjeeling",
    name: "MAYFAIR, Darjeeling",
    place: "Darjeeling",
    region: "West Bengal",
    image: { src: darjeeling, alt: "Terraced gardens and marble statuary at MAYFAIR Darjeeling" },
  },
  {
    id: "gopalpur",
    name: "MAYFAIR, Gopalpur",
    place: "Gopalpur",
    region: "Odisha",
    image: { src: gopalpur, alt: "MAYFAIR Gopalpur lit at dusk, seen across its lawns" },
  },
  {
    id: "paradeep",
    name: "MAYFAIR, Paradeep",
    place: "Paradeep",
    region: "Odisha",
    image: { src: paradeep, alt: "Courtyard and pool of MAYFAIR Paradeep at dusk" },
  },
  {
    id: "jharsuguda",
    name: "MAYFAIR, Jharsuguda",
    place: "Jharsuguda",
    region: "Odisha",
    image: { src: jharsuguda, alt: "Aerial view of MAYFAIR Jharsuguda at sunset" },
  },
  {
    id: "rourkela",
    name: "MAYFAIR Garden, Rourkela",
    place: "Rourkela",
    region: "Odisha",
    image: { src: rourkela, alt: "Guest room at MAYFAIR Garden, Rourkela" },
  },
  {
    id: "raipur",
    name: "MAYFAIR Lake Resort",
    place: "Raipur",
    region: "Chhattisgarh",
    image: { src: raipurLake, alt: "MAYFAIR Lake Resort, Raipur, seen across the lake with a traditional boat" },
  },
];

export const propertyById = (id: string) => properties.find((p) => p.id === id);

/** Mega-menu grouping by geography. */
export const hotelGroups: { title: string; ids: string[] }[] = [
  { title: "Himalaya & tea country", ids: ["kalimpong", "gangtok", "darjeeling", "siliguri"] },
  { title: "Odisha & the coast", ids: ["lagoon", "gopalpur", "paradeep", "jharsuguda", "rourkela"] },
  { title: "Central India", ids: ["raipur"] },
];

export const nav = [
  { label: "Experiences", href: "#experiences" },
  { label: "Weddings & celebrations", href: "#exp-weddings" },
  { label: "Offers", href: "#offers" },
  { label: "Our story", href: "#story" },
];

export const hero = {
  image: { src: heroJungpana, alt: "MAYFAIR Jungpana on a ridge above tea gardens, the hills fading into a sunset sky", position: "60% 55%" },
  eyebrow: "MAYFAIR Hotels & Resorts",
  title: "A World Beyond the Ordinary.",
  copy: "Discover exceptional destinations, timeless spaces and the warmth of heartfelt hospitality.",
  cta: { label: "Explore MAYFAIR", href: "#story" },
} as const;

export const story = {
  eyebrow: "THE MAYFAIR STORY",
  title: "A Legacy of Exceptional Hospitality.",
  copy: "For over four decades, MAYFAIR has brought together distinctive architecture, extraordinary destinations and the warmth of heartfelt hospitality. Founded on a vision to create remarkable places, our journey continues to be shaped by nature, inspired by heritage and defined by the belief that true luxury is found in the moments that stay with us.",
  image: {
    src: brandAerial,
    alt: "Aerial panorama of MAYFAIR Lagoon: distinctive low-rise architecture, tranquil waters and lush green sanctuary",
    position: "50% 50%",
    caption: "MAYFAIR — A WORLD OF DISTINCTIVE EXPERIENCES",
  },
  cta: {
    label: "DISCOVER OUR STORY",
    href: OFFICIAL_SITE,
  },
};

/** "Our Hotels" carousel: signature four first, then the rest of the collection. */
export const signature = {
  title: { lead: "Our", strong: "Hotels" },
  sub: "Across India",
  order: ["lagoon", "kalimpong", "siliguri", "gangtok", "darjeeling", "gopalpur", "paradeep", "jharsuguda", "raipur", "rourkela"],
};

export const stays = {
  eyebrow: "Stays & suites",
  title: "Rooms that remember where they are.",
  copy: "Carved four-posters, hand-knotted rugs, fireplaces in the hills and verandas on the plains. Every room is furnished with a sense of place, then left calm enough to rest in.",
  feature: { src: heritageRoom, alt: "Heritage room with a canopied four-poster bed, beamed ceiling and lit fireplace" },
  items: [
    { title: "Rooms", copy: "Warm, considered rooms with rich textiles and quiet corners.", image: { src: clubRoom, alt: "Club Room with a carved headboard, patterned rug and soft peach walls" } },
    { title: "Suites", copy: "Space to unwind: canopied beds, separate seating, garden light.", image: { src: deluxeSuite, alt: "Deluxe Suite with a draped four-poster bed and polished floors" } },
    { title: "Villas", copy: "Gilded detail and generous proportions for longer, slower stays.", image: { src: royalVilla, alt: "Royal Villa bedroom with a gilded headboard, chesterfield sofa and Persian rug" } },
  ],
  link: { label: "Explore rooms & suites", href: OFFICIAL_SITE },
};

export const experiences = {
  eyebrow: "The MAYFAIR experience",
  title: "Days shaped by flavour, ritual and craft.",
  items: [
    { id: "exp-dining", title: "Culinary journeys", copy: "High tea on the lagoon terrace, regional kitchens and tables set where the view is best.", image: { src: dining, alt: "High tea served on a balcony overlooking the lagoon, a wooden houseboat beyond" }, link: "Explore dining" },
    { id: "exp-wellness", title: "Wellness & rejuvenation", copy: "Treatment rooms that open onto the forest, and rituals unhurried by the clock.", image: { src: wellness, alt: "Spa treatment room with a carved wooden table opening onto forest views", position: "60% 50%" }, link: "Explore wellness" },
    { id: "exp-weddings", title: "Weddings & celebrations", copy: "From a baraat in a flower-dressed carriage to the last dance on the lawn.", image: { src: wedding, alt: "Bride and groom arriving in a flower-decorated MAYFAIR carriage" }, link: "Plan a celebration" },
    { id: "exp-culture", title: "Art, culture & heritage", copy: "Tanjore paintings, temple brass and collected objects that tell India's stories.", image: { src: artCulture, alt: "Tanjore paintings above brass sculptures and lit diyas on a marble console" }, link: "Discover art & culture" },
  ],
};

/*
 * Offer names, properties and terms are taken from the supplied creatives in
 * src/assets/Images/Offers (455px social tiles with baked-in text, so the cards use the
 * matching full-resolution property photography instead). Validity dates were not supplied,
 * hence the terms note. `href` is per offer so each can point at its
 * own detail page once one exists.
 */
export type Offer = { category: string; title: string; property: string; copy: string; image: Img; href: string };

export const offers: {
  eyebrow: string;
  title: string;
  intro: string;
  note: string;
  /** Shown three at a time on desktop; arrows appear only when there are more. */
  items: Offer[];
  all: { label: string; href: string };
} = {
  eyebrow: "Curated for you",
  title: "Exclusive Offers",
  intro: "Discover thoughtfully curated stays, seasonal experiences and special privileges across MAYFAIR destinations. Find an experience that makes every journey more memorable.",
  note: "Inclusions, dates and terms are confirmed at the time of booking.",
  items: [
    {
      category: "Seasonal retreat",
      title: "Monsoon Bliss Retreat",
      property: "MAYFAIR Palm Beach Resort, Gopalpur-on-Sea",
      copy: "When the rains arrive on the Bay of Bengal, the shore turns silver and the gardens deepen to green. A season to slow down by the sea.",
      image: { src: offerMonsoon, alt: "Monsoon Bliss Retreat at MAYFAIR Palm Beach Resort, Gopalpur-on-Sea" },
      href: OFFICIAL_SITE,
    },
    {
      category: "Exclusive offer",
      title: "Coastal Bliss Escape",
      property: "MAYFAIR, Paradeep",
      copy: "An escape to the Odisha coast, with the courtyard pool glowing at dusk and the shoreline close by.",
      image: { src: offerParadeep, alt: "Coastal Bliss Escape at MAYFAIR Paradeep" },
      href: OFFICIAL_SITE,
    },
    {
      category: "Privilege",
      title: "Book Direct",
      property: "Across MAYFAIR Hotels & Resorts",
      copy: "Reserve directly with MAYFAIR and save up to 10% on Best Available Rates. Terms apply.",
      image: { src: offerBookDirect, alt: "Book Direct with MAYFAIR for exclusive privileges" },
      href: OFFICIAL_SITE,
    },
    {
      category: "Celebration",
      title: "Special Celebration Package",
      property: "MAYFAIR Spring Valley Resort, Guwahati",
      copy: "One night in a Deluxe Cottage for two, with buffet breakfast and a chef-curated five-course dinner, at ₹39,999 + taxes.",
      image: { src: offerCelebration, alt: "Special Celebration Package at MAYFAIR Spring Valley Resort, Guwahati" },
      href: OFFICIAL_SITE,
    },
  ],
  all: { label: "View all offers", href: OFFICIAL_SITE },
};

export const discover = {
  eyebrow: "Beyond the stay",
  title: "The destination is part of the welcome.",
  items: [
    { title: "The Himalaya, close at hand", copy: "In Sikkim and the hills of North Bengal, clear mornings bring Kanchenjunga to the horizon.", image: { src: kanchenjunga, alt: "Lawn with fire pits and parasols facing snow-capped Kanchenjunga" } },
    { title: "Tea country", copy: "Below the hills, estates and sal forest roll out in long green horizons.", image: { src: siliguriAerial, alt: "Aerial view of a red-roofed resort set in forest and tea country beneath the hills" } },
    { title: "Hill-station heritage", copy: "Terraced gardens, statuary and verandas from Darjeeling's earlier century.", image: { src: darjeeling, alt: "Terraced garden with marble statuary in Darjeeling" } },
    { title: "Lakes & coast", copy: "From lakeside Raipur to Odisha's shoreline, water sets the pace of the day.", image: { src: raipurLake, alt: "A traditional boat on the lake before MAYFAIR Lake Resort, Raipur" } },
  ],
};

/** Verified guest testimonials or awards only. Empty = section is not rendered. */
export const testimonials: { quote: string; name: string; source: string }[] = [];

export const closing = {
  title: "Your Next Extraordinary Experience Awaits.",
  copy: "Choose a lagoon, a tea estate or a garden facing the snows. We'll take care of the rest.",
  image: { src: jharsuguda, alt: "MAYFAIR resort at sunset, lit guest wings around a central lawn" },
};

export const footer = {
  groups: [
    { title: "Discover", links: [{ label: "Our hotels", href: "#destinations" }, { label: "Our story", href: "#story" }, { label: "Offers", href: "#offers" }] },
    { title: "Experiences", links: [{ label: "Dining", href: "#exp-dining" }, { label: "Wellness", href: "#exp-wellness" }, { label: "Weddings", href: "#exp-weddings" }, { label: "Meetings & events", href: OFFICIAL_SITE }] },
    { title: "Reservations", links: [{ label: "Book your stay", href: "#booking" }, { label: "Contact", href: OFFICIAL_SITE }, { label: "Reservation assistance", href: OFFICIAL_SITE }] },
  ],
  // Social handles and phone/email were not supplied; add verified ones here to render them.
  social: [] as { label: string; href: string }[],
};
