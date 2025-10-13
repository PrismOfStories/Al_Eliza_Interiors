import ServiceCard from "@/components/common/ServiceCard";
import Hero from "@/components/homepage/Hero";
import InteriorDesignHero from "@/components/homepage/InteriorDesignHero";
import Testimonials from "@/components/new/Testimonials";
import ScrollHero from "@/components/homepage/ScrollHero";
import { services } from "@/lib/static-data/home";
import ClientsCard from "@/components/common/ClientsCard";
import ProjectsScroll from "@/components/new/ProjectsScroll";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollHero />
      <ProjectsScroll />
      <InteriorDesignHero />
      <ServiceCard projects={services} />
      <section className="py-16 lg:py-28">
        {" "}
        <ClientsCard />
      </section>
      <Testimonials />
    </main>
  );
}
