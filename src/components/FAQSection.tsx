"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const paq = [
  {
    q: "What is the cost of interior design in Dubai?",
    a: "Costs vary based on size, scope, and materials. We offer transparent pricing with packages to fit every budget. Contact us for a free estimate.",
  },
  {
    q: "How long does interior design take?",
    a: "Typical projects take 4-12 weeks depending on complexity. We provide detailed timelines during the consultation phase.",
  },
  {
    q: "Do you provide 3D interior design?",
    a: "Yes! We use advanced 3D visualization so you can see your space come alive before any construction begins.",
  },
  {
    q: "Can I design a small apartment?",
    a: "Absolutely. We specialize in maximizing small spaces with smart layouts and creative storage solutions.",
  },
  {
    q: "Do you handle execution also?",
    a: "Yes, we provide complete solutions from design to execution, ensuring quality at every step.",
  },
  {
    q: "What styles do you offer?",
    a: "We work with all styles—modern, contemporary, minimalist, Scandinavian, Arabic-inspired, and more.",
  },
  {
    q: "Do you offer virtual interior design services?",
    a: "Yes, we offer virtual consultations and remote design services for clients anywhere.",
  },
];

const faqs = [
  {
    q: "What is included in interior design services?",
    a: "Our services include consultation, concept development, 3D visualization, material selection, procurement, and project execution.",
  },
  {
    q: "How do I choose the right interior designer?",
    a: "Look for experience, portfolio quality, client reviews, and transparency. We tick all the boxes!",
  },
  {
    q: "Is 3D interior design accurate?",
    a: "Our 3D renders are highly accurate and give you a realistic preview of the final result.",
  },
  {
    q: "Can I customize my design?",
    a: "Every design is fully customizable to your preferences, needs, and budget.",
  },
  {
    q: "Do you work on commercial projects?",
    a: "Yes, we handle restaurants, retail spaces, showrooms, and office interiors across Dubai.",
  },
  {
    q: "Do you offer budget-friendly designs?",
    a: "We have packages for every budget without compromising on quality or aesthetics.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-[#faf8f5] py-24">
      <div className="container mx-auto max-w-4xl px-6">
        {/* PAQ */}
        <div className="mb-10 text-center">
          <p className="text-gold mb-4 inline-block rounded-full px-4 py-1 text-base uppercase tracking-wider">
            People Also Ask
          </p>
          <h2 className="font-serif text-3xl font-medium text-gray-900 md:text-5xl">
            Common Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="mb-16">
          {paq.map((item, i) => (
            <AccordionItem
              key={i}
              value={`paq-${i}`}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="hover:text-gold text-left text-xl font-semibold ">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-lg  text-neutral-600">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* FAQ */}
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-medium text-gray-900 md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible>
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="hover:text-gold text-left text-xl font-semibold ">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-neutral-600">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
