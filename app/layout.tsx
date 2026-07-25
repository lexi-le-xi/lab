import type { Metadata } from "next";
import "./globals.css";

const description =
  "A living digital design studio exploring behavior, play, AI companionship, and objects.";

export const metadata: Metadata = {
  metadataBase: new URL("https://lexi-le-xi.github.io/lab/"),
  title: {
    default: "Xi Liu Studio — Designing Everyday Life",
    template: "%s — Xi Liu Studio",
  },
  description,
  openGraph: {
    title: "Xi Liu Studio — Designing Everyday Life",
    description,
    images: [{ url: "og.png", width: 1731, height: 909, alt: "Xi Liu Studio digital worktable" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xi Liu Studio — Designing Everyday Life",
    description,
    images: ["og.png"],
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
