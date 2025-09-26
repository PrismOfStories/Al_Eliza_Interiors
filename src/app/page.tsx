import ServiceCard from "@/components/common/ServiceCard";
import Hero from "@/components/homepage/Hero";
import ParallaxHero from "@/components/homepage/ParallaxHero";
import InteriorDesignHero from "@/components/homepage/InteriorDesignHero";
import Testimonials from "@/components/new/Testimonials";
import ScrollHero from "@/components/homepage/ScrollHero";
import { services } from "@/lib/static-data/home";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollHero />
      <ParallaxHero />
      <InteriorDesignHero />
      <ServiceCard projects={services} />
      <Testimonials />
    </main>
  );
}
