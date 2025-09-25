import Image from 'next/image';
// import Background from '../../public/images/1.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div
        ref={container} 
        className='relative flex items-center justify-center h-screen overflow-hidden'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className="relative z-10 w-full h-full p-28 flex flex-col justify-between text-white">
        <p className="w-full lg:w-1/2 text-3xl lg:text-4xl self-end uppercase leading-relaxed">
          Crafting timeless interiors that reflect your personality, combining elegance, functionality, and sustainability.
        </p>
        <p className="text-3xl lg:text-5xl font-bold uppercase">Elevate Your Space</p>
      </div>
        <div className="fixed top-[-10vh] left-0 h-full lg:h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp"
            fill
            alt="Interior Design Background"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      </div>
        </div>
    )
}
