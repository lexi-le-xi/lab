import type { Metadata } from "next";
import { ThreePrototype } from "./three-prototype";

export const metadata: Metadata = {
  title: "Three.js Shoreline Prototype · Xi Liu Lab",
  description: "An experimental moving shoreline for Xi Liu's living design practice.",
};

export default function PrototypePage() {
  return <ThreePrototype />;
}
