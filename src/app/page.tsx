import HeroSection from "@/components/HeroSection";
import Statistics from "@/components/Stats";
import StatsSection from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import TopCourses from "@/components/TopCourses";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 ">
      <HeroSection />
      <TopCourses />
      <Testimonial />
      <Statistics />
    </div>
  );
}
