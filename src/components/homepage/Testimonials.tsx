"use client";
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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
    text: "From start to finish, Al Eliza Interiors showcased remarkable expertise and precision, turning our vision into reality with finesse. Truly among the best in the region.",
    name: "Liam Cole",
    title: "CEO",
    image: "/avatars/liam.jpg",
  },
  {
    id: 2,
    company: "Amsterdam",
    logo: "/logos/amsterdam.svg",
    text: "Al Eliza Interiors transformed our space beautifully. Their creativity, precision, and passion for design made every detail stand out. Truly a seamless and inspiring experience.",
    name: "Emma Gray",
    title: "CEO",
    image: "/avatars/emma.jpg",
  },
  {
    id: 3,
    company: "sweden",
    logo: "/logos/sweden.svg",
    text: "Al Eliza Interiors exceeded every expectation. Their eye for detail and seamless coordination brought elegance and functionality together beautifully. A truly professional team that delivers excellence every time.",
    name: "Emily Hill",
    title: "CEO",
    image: "/avatars/emily.jpg",
  },
  {
    id: 4,
    company: "norway",
    logo: "/logos/norway.svg",
    text: "The team at Al Eliza Interiors turned our ideas into reality with stunning precision. Their creativity and commitment made the entire design process smooth, inspiring, and deeply satisfying.",
    name: "Alex Johnson",
    title: "CTO",
    image: "/avatars/alex.jpg",
  },
  {
    id: 5,
    company: "finland",
    logo: "/logos/finland.svg",
    text: "Working with Al Eliza Interiors was a pleasure from concept to completion. Their refined taste, dedication, and flawless execution transformed our space into something truly exceptional.",
    name: "Sarah Wilson",
    title: "CMO",
    image: "/avatars/sarah.jpg",
  },
  {
    id: 6,
    company: "denmark",
    logo: "/logos/denmark.svg",
    text: "Al Eliza Interiors brings both artistry and expertise to every project. Their ability to blend style with practicality results in interiors that are not only beautiful but perfectly functional.",
    name: "Michael Brown",
    title: "CEO",
    image: "/avatars/michael.jpg",
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Responsive items per slide
  useGSAP(() => {
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

  // Only animate header on mount (not on slide change)
  useGSAP(() => {
    if (headerRef.current) {
      const headerEls = headerRef.current.querySelectorAll(
        ".testimonial-animate"
      );
      gsap.set(headerEls, { y: 60, opacity: 0 });
      ScrollTrigger.batch(headerEls, {
        onEnter: (batch) => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15,
          });
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, {
            y: 60,
            opacity: 0,
            duration: 0.5,
            ease: "power3.in",
            stagger: 0.1,
          });
        },
        start: "top 85%",
        end: "bottom 20%",
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // GSAP batch animation for testimonial cards (runs on slide change)
  useGSAP(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(
        ".testimonial-animate"
      );
      gsap.set(elements, { y: 100, opacity: 0 });
      ScrollTrigger.batch(elements, {
        onEnter: (batch) => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
          });
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "power3.in",
            stagger: 0.1,
          });
        },
        start: "top 80%",
        end: "bottom 20%",
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [itemsPerSlide, currentSlide]);

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
      className="mx-auto flex w-full flex-col justify-center bg-[#fbfbfb] px-4 py-16 sm:px-6 md:px-10 md:py-24 lg:px-20 lg:py-28"
      aria-label="Client testimonials"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center md:mb-20" ref={headerRef}>
          <p className="testimonial-animate font-paragraph mb-4 text-[clamp(10px,1.8vw,16px)] font-light uppercase tracking-[0.3rem] text-zinc-500">
            Happy Clients
          </p>
          <h2 className="testimonial-animate font-outfit text-[clamp(28px,5vw,72px)] font-black uppercase leading-tight tracking-[0.4rem] text-black">
            Testimonials
          </h2>
        </header>

        <div className="relative" ref={containerRef}>
          <button
            onClick={prevSlide}
            className="absolute -left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#E5E0D8] text-black backdrop-blur-sm transition-all hover:bg-white hover:shadow-md md:-left-8 md:h-10 md:w-10"
            aria-label="Previous testimonials"
          >
            <FaChevronLeft
              className="text-xs md:text-base"
              aria-hidden="true"
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#E5E0D8] text-black backdrop-blur-sm transition-all hover:bg-white hover:shadow-md md:-right-8 md:h-10 md:w-10"
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
                className="testimonial-animate flex flex-col rounded border border-[#E5E0D8]/40 bg-white p-5 shadow-sm transition-all hover:shadow-md sm:p-6 md:p-8"
              >
                <header className="mb-4 sm:mb-5">
                  <h3 className="font-outfit text-sm font-semibold uppercase tracking-[0.2rem] text-black sm:text-base md:text-lg">
                    {testimonial.company}
                  </h3>
                </header>

                <blockquote className="font-paragraph mb-6 text-[12px] leading-[1.8] tracking-[0.15rem] text-black/80 sm:mb-8 sm:text-[13px] sm:leading-[1.5] md:text-[14px]">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                <footer className="flex items-center">
                  <div className="bg-brown mr-3 h-10 w-10 overflow-hidden rounded-full sm:mr-4 sm:h-11 sm:w-11 md:h-12 md:w-12">
                    <div className="to-brown flex h-full w-full items-center justify-center bg-gradient-to-br from-white text-sm font-medium text-black sm:text-base">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <div>
                    <cite className="font-paragraph text-[13px] font-semibold not-italic tracking-[0.15rem] text-black sm:text-[14px] md:text-[15px]">
                      {testimonial.name}
                    </cite>
                    <p className="font-paragraph text-[11px] font-[400] tracking-[0.15rem] text-black sm:text-[12px] md:text-[13px]">
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
              className={`flex h-4 min-h-[10px] w-4 min-w-[10px] items-center justify-center rounded-full transition-all focus:outline-none ${
                index === currentSlide
                  ? "bg-[#171614]"
                  : "bg-[#D1CCC4] hover:bg-[#B5AFAF]"
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
