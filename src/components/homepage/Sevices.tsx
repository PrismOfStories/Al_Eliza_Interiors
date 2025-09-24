"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Main Services component
export default function Services() {
  const services = [
    {
      title: "Residential & Commercial Designs",
      description:
        "We provide tailored interior design solutions for residential and commercial spaces with elegance and functionality.",
      image:
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp",
    },
    {
      title: "Design Consultancy",
      description:
        "Expert design consultations to turn your vision into reality, from layout planning to final finishes.",
      image:
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
    },
    {
      title: "Virtual Reality 360° Designs",
      description:
        "Experience your space before it's built with immersive 360° VR walkthroughs and visualizations.",
      image:
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img5_nsn0nj.webp",
    },
    {
      title: "Fit out Approvals",
      description:
        "We manage and secure fit-out approvals with relevant authorities to ensure smooth project execution.",
      image:
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
    },
    {
      title: "Turnkey Fit out Projects",
      description:
        "From concept to completion – we handle every aspect of your project with end-to-end solutions.",
      image:
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/img3_u7qqdu.webp",
    },
    {
      title: "Landscaping",
      description:
        "Transform your outdoor spaces with creative and sustainable landscaping solutions.",
      image:
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_3_tp5mmt.webp",
    },
    {
      title: "Maintenance",
      description:
        "Comprehensive maintenance services to keep your spaces functional, safe, and beautiful.",
      image:
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_2_ucqtyb.webp",
    },
  ];

  return (
    <div className="services bg-background w-full">
      {services.map((service, i) => (
        <ServiceItem key={i} service={service} index={i} />
      ))}
    </div>
  );
}

// Individual Service Item
function ServiceItem({
  service,
  index,
}: {
  service: { title: string; description: string; image: string };
  index: number;
}) {
  return (
    <div className="service flex flex-col md:flex-row items-stretch p-5 border-b border-neutral-700 text-neutral-200 lg:gap-20">
      {/* Left Info */}
      <div className="service-info flex flex-col justify-between p-4 md:max-w-xl">
        <div className="mb-4">
          <span className="text-4xl font-medium block mb-2 text-neutral-400">
            0{index + 1}.
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold">
            {service.title}
          </h1>
        </div>
        <p className="text-lg md:text-xl leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Right Image */}
      <div className="service-img md:w-full w-full p-4 flex items-start justify-start min-h-[300px]">
        <motion.div className="relative h-[300px] lg:h-[450px] w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </div>
  );
}
