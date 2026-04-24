"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type FAQItem = {
  q: string;
  a: string;
};

type Props = {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
};

export default function FAQAccordion({ items, title, subtitle }: Props) {
  return (
    <div>
      {(title || subtitle) && (
        <div className="mb-10 text-center">
          {title && (
            <h2 className="font-outfit text-4xl  text-gray-900 md:text-5xl">
              {title}
            </h2>
          )}{" "}
          {subtitle && (
            <p className="text-gold font-paragraph mt-4 inline-block rounded-full px-4 py-1 text-base">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <Accordion type="single" collapsible>
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border-b border-gray-200"
          >
            <AccordionTrigger className="hover:text-gold text-left text-xl font-semibold hover:no-underline">
              {item.q}
            </AccordionTrigger>

            <AccordionContent className="text-lg text-black">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
