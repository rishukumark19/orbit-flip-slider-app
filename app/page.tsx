import type { Metadata } from "next";
import OrbitFlipSliderDemo from "@/components/orbit-flip-slider-demo";

export const metadata: Metadata = {
  title: "Orbit Flip Slider | Portfolio",
  description: "An interactive orbital image slider with Flat, Tilt, Ring, and Gallery modes.",
};

export default function Home() {
  return <OrbitFlipSliderDemo />;
}