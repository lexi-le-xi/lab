import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host = headerStore.get("host") || "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const image = `${protocol}://${host}/og.png`;
  const description =
    "A living digital design studio exploring behavior, play, AI companionship, and objects.";

  return {
    title: {
      default: "Xi Liu Studio — Designing Everyday Life",
      template: "%s — Xi Liu Studio",
    },
    description,
    openGraph: {
      title: "Xi Liu Studio — Designing Everyday Life",
      description,
      images: [{ url: image, width: 1731, height: 909, alt: "Xi Liu Studio digital worktable" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Xi Liu Studio — Designing Everyday Life",
      description,
      images: [image],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
