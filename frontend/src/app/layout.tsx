import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

// Display face per design.md §4. Interface text uses the system stack from the YAML tokens.
const playfair = localFont({
  src: "../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf",
  weight: "400 500",
  display: "swap",
  variable: "--font-playfair",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  title: {
    default: "MAYFAIR Hotels & Resorts — Heritage, Nature & Heartfelt Hospitality",
    template: "%s · MAYFAIR Hotels & Resorts",
  },
  description:
    "Discover MAYFAIR Hotels & Resorts: distinctive destinations from the Bay of Bengal to the Himalayan foothills, shaped by Indian heritage, nature and heartfelt hospitality.",
  applicationName: "MAYFAIR Hotels & Resorts",
  openGraph: {
    type: "website",
    siteName: "MAYFAIR Hotels & Resorts",
    title: "MAYFAIR Hotels & Resorts",
    description:
      "Distinctive destinations, timeless spaces and the warmth of heartfelt hospitality.",
    locale: "en_IN",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#193e30",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>{children}</body>
    </html>
  );
}
