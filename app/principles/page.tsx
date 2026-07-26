import type { Metadata } from "next";
import { ThoughtPage, type ThoughtPageData } from "../thought-pages";

export const metadata: Metadata = { title: "Principles", description: "Notes and principles that help Xi Liu stay oriented, curious, and creative." };

const data: ThoughtPageData = {
  index: "02",
  title: "Principles",
  eyebrow: "Notes for returning to the core",
  statement: "In a world of increasing noise, I need ideas that help me remember what matters.",
  introduction: "These are not fixed rules. They are working notes gathered through experience—small instruments for finding orientation when the environment becomes complex or distracting.",
  color: "#f2c94c",
  principles: [
    "Done is better than perfect.",
    "Make less, create more.",
    "Problem finders reveal possibilities hidden inside what already exists.",
    "Return to first principles.",
    "The state of the mind shapes the reality we experience.",
    "Knowing your strengths is itself a significant advantage.",
    "Good questions lead not only to answers, but to better questions.",
    "Do not underestimate the power of compounding.",
    "Protect your morale as carefully as you protect your life.",
    "Curiosity often knows where to go before the plan does.",
    "Ask whether you are creating or merely consuming.",
    "When you get lost, return to the core.",
    "Move toward environments in which you can flourish fully.",
    "Find your craft and devote yourself to it.",
    "Build a past your future self will be able to live with.",
    "We are matter moving through space and time, always returning toward our origins.",
    "Do not let plans and shoulds bind a curious heart.",
    "Facts can teach and truth can persuade, but stories remain.",
    "Invest more energy in understanding the question than producing the answer.",
    "Deciding what to do is the key to the whole game.",
  ],
  next: { href: "/philosophy", label: "Philosophy" },
};

export default function PrinciplesPage() { return <ThoughtPage data={data} />; }
