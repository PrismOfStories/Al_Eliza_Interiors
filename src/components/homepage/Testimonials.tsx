"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  company: string;
  logo: string;
  text: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    company: "delaware",
    logo: "/logos/delaware.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Liam Cole",
    title: "CEO",
    image: "/avatars/liam.jpg",
  },
  {
    id: 2,
    company: "Amsterdam",
    logo: "/logos/amsterdam.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Emma Gray",
    title: "CEO",
    image: "/avatars/emma.jpg",
  },
  {
    id: 3,
    company: "sweden",
    logo: "/logos/sweden.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Emily Hill",
    title: "CEO",
    image: "/avatars/emily.jpg",
  },
  {
    id: 4,
    company: "norway",
    logo: "/logos/norway.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Alex Johnson",
    title: "CTO",
    image: "/avatars/alex.jpg",
  },
  {
    id: 5,
    company: "finland",
    logo: "/logos/finland.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Sarah Wilson",
    title: "CMO",
    image: "/avatars/sarah.jpg",
  },
  {
    id: 6,
    company: "denmark",
    logo: "/logos/denmark.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Michael Brown",
    title: "CEO",
    image: "/avatars/michael.jpg",
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);

    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return testimonials.slice(startIndex, startIndex + itemsPerSlide);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section
      className="mx-auto w-full bg-[#fbfbfb] px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24 lg:py-28 flex flex-col justify-center"
      aria-label="Client testimonials"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 md:mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-4 text-[clamp(10px,1.8vw,16px)] uppercase text-gold-dark font-paragraph font-light tracking-[0.3rem]"
          >
            Happy Clients
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-heading text-[clamp(28px,5vw,72px)] font-black text-black uppercase tracking-[0.4rem] leading-tight"
          >
            Testimonials
          </motion.h2>
        </header>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="flex absolute -left-3 md:-left-8 top-1/2 -translate-y-1/2 z-10 h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border border-[#E5E0D8] backdrop-blur-sm text-black transition-all hover:bg-white hover:shadow-md"
            aria-label="Previous testimonials"
          >
            <FaChevronLeft
              className="text-xs md:text-base"
              aria-hidden="true"
            />
          </button>

          <button
            onClick={nextSlide}
            className="flex absolute -right-3 md:-right-8 top-1/2 -translate-y-1/2 z-10 h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border border-[#E5E0D8] backdrop-blur-sm text-black transition-all hover:bg-white hover:shadow-md"
            aria-label="Next testimonials"
          >
            <FaChevronRight
              className="text-xs md:text-base"
              aria-hidden="true"
            />
          </button>

          <div
            className={`grid gap-4 ${
              itemsPerSlide === 1
                ? "grid-cols-1"
                : itemsPerSlide === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
            role="region"
            aria-live="polite"
            aria-label="Testimonials carousel"
          >
            {getCurrentTestimonials().map((testimonial) => (
              <article
                key={testimonial.id}
                className="flex flex-col border border-[#E5E0D8]/40 bg-white rounded p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all"
              >
                <header className="mb-4 sm:mb-5">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black font-heading uppercase tracking-[0.2rem]">
                    {testimonial.company}
                  </h3>
                </header>

                <blockquote className="mb-6 sm:mb-8 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.8] sm:leading-[1.5] text-black/80 font-paragraph tracking-[0.15rem]">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                <footer className="flex items-center">
                  <div className="mr-3 sm:mr-4 h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 overflow-hidden rounded-full bg-brown">
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white to-brown text-black font-medium text-sm sm:text-base">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <div>
                    <cite className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-black font-paragraph tracking-[0.15rem] not-italic">
                      {testimonial.name}
                    </cite>
                    <p className="text-[11px] sm:text-[12px] md:text-[13px] text-black font-paragraph font-[400] tracking-[0.15rem]">
                      {testimonial.title}
                    </p>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>

        <nav
          className="mt-10 flex justify-center space-x-2"
          aria-label="Testimonials pagination"
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-4 w-4 min-h-[10px] min-w-[10px] flex items-center justify-center rounded-full transition-all focus:outline-none ${
                index === currentSlide
                  ? "bg-[#171614]"
                  : "bg-[#D1CCC4] hover:bg-[#B5AFA5]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
            >
              <span className="sr-only">{`Go to slide ${index + 1}`}</span>
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
