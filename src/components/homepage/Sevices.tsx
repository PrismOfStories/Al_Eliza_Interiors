"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeServices() {
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
    <section className="py-24 lg:py-28 overflow-hidden">
      <motion.p
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="text-center lg:text-right w-full lg:max-w-[90rem] mx-auto text-7xl lg:text-9xl font-bebas-neue font-medium text-[#878787] mb-10 lg:mb-20"
      >
        solutions
      </motion.p>

      <hr className="bg-brown mb-5" />

      {/* Services list */}
      <div className="services bg-background w-full">
        {services.map((service, i) => (
          <div
            key={i}
            className="service flex flex-col md:flex-row items-center p-5 border-b border-neutral-700 text-neutral-200 lg:gap-20"
          >
            {/* Left Info */}
            <div className="service-info flex flex-col justify-between flex-1 md:max-w-xl p-4 self-stretch">
              <div className="mb-4">
                <span className="text-4xl font-medium block mb-2 text-neutral-400">
                  0{i + 1}.
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
            <div className="service-img flex-1 w-full p-4">
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
        ))}
      </div>
    </section>
  );
}
