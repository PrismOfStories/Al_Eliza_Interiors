"use client";

import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';


export default function Section() {
    const container = useRef();
const isMobile = useMediaQuery('(max-width: 768px)');
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
       const yRange = isMobile ? ["-5%", "5%"] : ["-10%", "10%"];
    const y = useTransform(scrollYProgress, [0, 1], yRange);

    return (
        <div
            ref={container} 
            className='relative flex items-center justify-center h-screen overflow-hidden'
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        
            <div className="relative z-10 w-full h-full px-4 sm:px-8 md:px-12 lg:px-28 py-8 sm:py-12 md:py-16 lg:py-28 flex flex-col justify-between text-white">
                <p className="w-full md:w-3/4 lg:w-1/2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl self-start md:self-end uppercase leading-relaxed font-light">
                    Crafting timeless interiors that reflect your personality, combining elegance, functionality, and sustainability.
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase leading-tight">
                    Elevate Your Space
                </p>
            </div>
            
            <div className="fixed top-[-5vh] sm:top-[-10vh] left-0 h-[110vh] sm:h-full lg:h-[120vh] w-full">
                <motion.div 
                    style={{ y: isMobile ? undefined : y }} 
                    className="relative w-full h-full"
                >
                    <Image
                        src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp"
                        fill
                        alt="Interior Design Background"
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/30 sm:bg-black/40"></div>
                </motion.div>
            </div>
        </div>
    )
} 