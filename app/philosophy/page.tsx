import type { Metadata } from "next";
import { ThoughtPage, type ThoughtPageData } from "../thought-pages";

export const metadata: Metadata = { title: "Make Less, Create More", description: "Xi Liu's philosophy of creating more value, meaning, and possibility with fewer resources and processes." };

const data: ThoughtPageData = {
  index: "03",
  title: "Make less,\ncreate more.",
  eyebrow: "A philosophy of innovation",
  statement: "We do not need to produce so much in order to have more.",
  introduction: "Years around manufacturing showed me how easily production can become detached from consequence. Make Less, Create More is my attempt to reconnect resources, processes, people, and meaning.",
  color: "#0e5f51",
  sections: [
    { title: "Use less", body: "Reduce unnecessary material, energy, and production steps. Simplification is not emptiness; it is a way to focus resources on what genuinely creates value." },
    { title: "Create more possibility", body: "A thoughtful object can support more than one use, adapt across contexts, invite participation, or form a longer relationship with its owner. More does not have to mean more things." },
    { title: "Value over volume", body: "Quality, uniqueness, care, and longevity can replace the pursuit of endless quantity. What we make should deserve the resources and labor carried inside it." },
    { title: "A way of life", body: "The philosophy also applies to attention. I want to spend less time consuming by default and more time creating, learning, contributing, and forming meaningful connections." },
  ],
  next: { href: "/inspirations", label: "Inspirations" },
};

export default function PhilosophyPage() { return <ThoughtPage data={data} />; }
