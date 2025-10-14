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
    <section className="mx-auto w-full bg-[#fbfbfb] px-6 py-20 sm:px-10 min-h-screen lg:py-28 lg:px-20 flex flex-col justify-center">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 lg:mb-28 text-center">
          <div className="mb-8 text-[clamp(12px,8vw,18px)] uppercase text-gold-dark font-paragraph font-[300] tracking-[0.3rem]">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              Happy Clients
            </motion.p>
          </div>

          <motion.h2
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
            className="font-heading tracking-[0.6rem] text-[clamp(18px,10vw,80px)] lg:text-[clamp(64px,8vw,120px)] font-black text-black"
          >
            TESTIMONIALS
          </motion.h2>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#E5E0D8]  backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
            aria-label="Previous testimonials"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#E5E0D8]  backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
            aria-label="Next testimonials"
          >
            <FaChevronRight />
          </button>

          <div
            className={`grid gap-6 ${
              itemsPerSlide === 1
                ? "grid-cols-1"
                : itemsPerSlide === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {getCurrentTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col border border-[#fbfbfb] bg-[#fbfbfb] p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-6">
                  <div className="flex h-8 items-center">
                    <span className="text-lg font-semibold text-black font-poppins uppercase tracking-widest">
                      {testimonial.company}
                    </span>
                  </div>
                </div>

                <p className="mb-8 flex-1 text-[13px] leading-relaxed text-black flex-wrap exclusive-text">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-brown">
                    <div className="flex h-full w-full items-center  justify-center bg-gradient-to-br from-white to-brown text-black font-medium">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-black font-poppins ">
                      {testimonial.name}
                    </div>
                    <div className="text-[13px] text-[#7A7671] font-poppins">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-[#171614]"
                  : "bg-[#D1CCC4] hover:bg-[#B5AFA5]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
