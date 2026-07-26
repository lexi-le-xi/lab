import type { Metadata } from "next";
import { ThoughtPage, type ThoughtPageData } from "../thought-pages";

export const metadata: Metadata = { title: "Inspirations", description: "The sports, music, meditation, and lived experiences that inspire Xi Liu's design practice." };

const data: ThoughtPageData = {
  index: "01",
  title: "Inspirations",
  eyebrow: "Life before design",
  statement: "Only by truly experiencing life can we cultivate human-centered design.",
  introduction: "Design and life are intertwined melodies. When I live with intention, inspiration appears quietly—in movement, rhythm, attention, and the ordinary details of a day.",
  color: "#3476dd",
  sections: [
    { title: "Sports", body: "Rowing first showed me the power of mind–body unity. Tennis, badminton, cycling, and hiking keep teaching me about core strength, rhythm, balance, endurance, and the intelligence carried by the body." },
    { title: "Handpan", body: "I began teaching myself handpan in 2021. Playing gives me a way to enter flow, listen without forcing, and practice meditation through rhythm rather than stillness." },
    { title: "Attention", body: "Meditation, reading, cooking, and time outdoors train the same capacity I need as a designer: to be present long enough for a subtle need, pattern, or possibility to become visible." },
  ],
  next: { href: "/principles", label: "Principles" },
};

export default function InspirationsPage() { return <ThoughtPage data={data} />; }
