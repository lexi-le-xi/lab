export const projects = [
  {
    slug: "morning-os",
    index: "01",
    title: "Morning OS",
    question: "How might a morning feel less like a feed?",
    label: "Behavior · 2026",
    intro:
      "A gentler operating system for the first hour of the day—designed to create intention before attention gets fragmented.",
    accent: "#ff674d",
    object: "phone",
    status: "Prototype 03",
    lens: "Behavior",
    notes: [
      ["Observation", "The first choice of the day often belongs to a notification."],
      ["Experiment", "Replace the infinite feed with a finite sequence: wake, move, choose."],
      ["Learning", "A good boundary should feel like an invitation, not a lock."],
    ],
  },
  {
    slug: "modular-shoes",
    index: "02",
    title: "Modular Shoes",
    question: "What if one pair of shoes wasn’t really one pair?",
    label: "Objects · 2025",
    intro:
      "A footwear system that separates identity, wear, and repair—so one object can adapt without becoming disposable.",
    accent: "#785ce5",
    object: "shoe",
    status: "Material study",
    lens: "Objects",
    notes: [
      ["Question", "Why do we replace an entire shoe when only one layer wears out?"],
      ["System", "A shared sole, replaceable upper, and visible joining language."],
      ["Learning", "Modularity works when the connection becomes part of the character."],
    ],
  },
  {
    slug: "design-for-play",
    index: "03",
    title: "Design for Play",
    question: "Why do games change us more than goals?",
    label: "Play · 2026",
    intro:
      "A collection of game mechanics and playtests exploring how curiosity can make difficult behaviors easier to begin.",
    accent: "#efb93f",
    object: "cards",
    status: "Playtest 08",
    lens: "Play",
    notes: [
      ["Mechanic", "Turn progress into discovery instead of a score."],
      ["Playtest", "Players stayed longer when the rules left space for interpretation."],
      ["Learning", "Delight is not decoration. It is a reason to return."],
    ],
  },
  {
    slug: "ai-companion",
    index: "04",
    title: "AI Companion",
    question: "Can AI become a companion instead of a tool?",
    label: "AI · Ongoing",
    intro:
      "An exploration of memory, reflection, and agency in an AI that helps people notice patterns without telling them who to be.",
    accent: "#58a686",
    object: "orb",
    status: "Conversation study",
    lens: "AI",
    notes: [
      ["Principle", "Remember the thread, not every detail."],
      ["Prototype", "Short reflections that end with one human-sized next step."],
      ["Learning", "Trust grows through restraint as much as intelligence."],
    ],
  },
  {
    slug: "notebook",
    index: "05",
    title: "Notebook / Research",
    question: "What am I learning this week?",
    label: "Notes · Updated weekly",
    intro:
      "The unfinished shelf: observations, failed ideas, useful questions, and fragments that may become the next project.",
    accent: "#c56c91",
    object: "notebook",
    status: "37 open notes",
    lens: "Research",
    notes: [
      ["07.18", "A calm interface can still be full of energy."],
      ["07.12", "The ritual around an object may matter more than the object."],
      ["07.04", "Good companions make room for silence."],
    ],
  },
] as const;

export type Project = (typeof projects)[number];
