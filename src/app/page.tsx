import ServiceCard from "@/components/common/ServiceCard";
import Hero from "@/components/homepage/Hero";
import InteriorDesignHero from "@/components/homepage/InteriorDesignHero";
import Testimonials from "@/components/homepage/Testimonials";
import ScrollHero from "@/components/homepage/ScrollHero";
import { services } from "@/lib/static-data/home";
import ClientsCard from "@/components/common/ClientsCard";
import ProjectsScroll from "@/components/homepage/ProjectsScroll";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section aria-label="Hero video introduction">
        <Hero />
      </section>

      {/* Welcome Message */}
      <section aria-label="Welcome message">
        <ScrollHero />
      </section>

      {/* Portfolio Gallery */}
      <section aria-label="Project portfolio gallery">
        <ProjectsScroll />
      </section>

      {/* About Section */}
      <section aria-label="About Al-Eliza Interiors">
        <InteriorDesignHero />
      </section>

      {/* Services Section */}
      <section aria-label="Our expertise and services">
        <ServiceCard title="Expertise" projects={services} />
      </section>

      {/* Clients Section */}
      <section className="py-16 lg:py-28" aria-label="Our prestigious clients">
        <ClientsCard />
      </section>

      {/* Testimonials Section */}
      <section aria-label="Client testimonials">
        <Testimonials />
      </section>
    </main>
  );
}
