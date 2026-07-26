import type { Metadata } from "next";
import "./globals.css";

const description =
  "Xi Liu designs to build connection—between people, body and mind, making and living, and ourselves and the world.";

export const metadata: Metadata = {
  metadataBase: new URL("https://lexi-le-xi.github.io/lab/"),
  title: {
    default: "Xi Liu Lab — I Design to Build Connection",
    template: "%s — Xi Liu Lab",
  },
  description,
  openGraph: {
    title: "Xi Liu Lab — I Design to Build Connection",
    description,
    images: [{ url: "rowing-world-v7.png", width: 994, height: 1582, alt: "A painted lakeside journey through Xi Liu's design practice" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xi Liu Lab — I Design to Build Connection",
    description,
    images: ["rowing-world-v7.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
