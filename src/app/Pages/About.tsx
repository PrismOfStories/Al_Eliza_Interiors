"use client";

import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";


function Counter({ from = 0, to }: { from?: number; to: number }) {
    const spanRef = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(from);
    const rounded = useTransform(motionValue, (latest) => Math.floor(latest));

    // detect when the span is visible
    const isInView = useInView(spanRef, { once: true });

    useEffect(() => {
        if (isInView) {
            animate(motionValue, to, { duration: 2 });
        }
    }, [isInView, motionValue, to]);

    useEffect(() => {
        const unsubscribe = rounded.on("change", (latest) => {
            if (spanRef.current) {
                spanRef.current.textContent = latest.toString();
            }
        });
        return () => unsubscribe();
    }, [rounded]);

    return <span ref={spanRef}>{from}</span>;
}



function About() {

    const team = [
        {
            name: "Emily Chen",
            role: "Lead Interior Designer",
            image: "/images/harif.jpg",
        },
        {
            name: "Daniel Lee",
            role: "Project Manager",
            image: "/images/harif.jpg",
        },
        {
            name: "Sophia Kim",
            role: "Architect",
            image: "/images/harif.jpg",
        },
        {
            name: "Michael Park",
            role: "Creative Director",
            image: "/images/harif.jpg",
        },
    ];


    const logos = [
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753649514/client_12_x2umsr.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753649513/client_11_r3vmqh.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753649513/client_10_mov009.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753649512/client_9_vupxmb.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753649512/client_7_sbknzn.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753649512/client_8_c2mixb.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753649512/client_6_cxbizc.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753649511/client_5_xjpakh.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753649510/client_3_mzdfzf.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753649511/client_4_ymbtyk.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753649510/client_2_bzhf63.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753649510/client_1_x55ndy.webp",
    ];


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };


    const stats = [
        { value: "98%", label: "Customer Satisfaction Rate", desc: "Our clients consistently rate their experience as excellent." },
        { value: "250+", label: "Projects Completed", desc: "Our clients consistently rate their experience as excellent." },
        { value: "64%", label: "Repeat Client Rate", desc: "A majority of our clients trust us again for new projects." },
    ];


    return (
        <>
            <section className="relative w-full h-[90vh] flex items-center justify-center">
                {/* Background Image */}
                <Image
                    src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/about_1_zi61v1.webp"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-end text-right">
                    <p className="text-white text-xl md:text-xl lg:text-2xl mb-6 max-w-2xl">
                        We&apos;ve worked with over 120 clients to transform homes, gardens,
                        and interiors with care. Our approach blends function, beauty, and
                        personal style.
                    </p>
                    <h1 className="text-white text-5xl md:text-8xl lg:text-[8rem] font-bold leading-tight">
                        About Aleliza
                    </h1>
                </div>
            </section>

            <section className="w-full py-20 px-6 md:px-12 mt-14 ">
                <div className="max-w-7xl mx-auto">
                    {/* Mission + Description */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-18">
                        {/* Left side - OUR MISSION */}
                        <div className="col-span-1 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[#a37e41]"></span>
                            <span className="uppercase text-sm font-semibold tracking-wider text-gray-700">
                                Our Mission
                            </span>
                        </div>

                        {/* Right side - Description (2/3 width) */}
                        <div className="col-span-2 text-left">
                            <h2 className="text-xl md:text-4xl font-semibold text-gray-900 leading-snug">
                                At Revana Studio, we transform spaces with{" "}
                                <span className="font-bold">thoughtful design and care</span> —{" "}
                                <span className="text-gray-500">
                                    creating spaces that inspire, nurture, and reflect your unique
                                    way of living.
                                </span>
                            </h2>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="flex flex-col justify-between h-48 p-6">
                            <h3 className="text-6xl font-bold text-black">
                                <Counter to={98} />%
                            </h3>
                            <div className="text-right mt-24">
                                <p className="text-lg font-medium text-gray-800 mb-2">
                                    Customer Satisfaction Rate
                                </p>
                                <p className="text-sm text-gray-600">
                                    Our clients consistently rate their experience as excellent.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between h-48 p-6">
                            <h3 className="text-6xl font-bold text-black">
                                <Counter to={250} />+
                            </h3>
                            <div className="text-right mt-24">
                                <p className="text-lg font-medium text-gray-800 mb-2">
                                    Projects Completed
                                </p>
                                <p className="text-sm text-gray-600">
                                    Our clients consistently rate their experience as excellent.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between h-48 p-6">
                            <h3 className="text-6xl font-bold text-black">
                                <Counter to={64} />%
                            </h3>
                            <div className="text-right mt-24">
                                <p className="text-lg font-medium text-gray-800 mb-2">
                                    Repeat Client Rate
                                </p>
                                <p className="text-sm text-gray-600">
                                    A majority of our clients trust us again for new projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 md:px-12  mt-16">
                <div className="max-w-7xl mx-auto text-left mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold">Meet Our Team</h2>
                    <p className="text-gray-600 mt-4">
                        Get to know the people turning ideas into inspiring homes and gardens.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden shadow-lg aspect-[2/3]"
                        >
                            {/* Team Image */}
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-4">
                                <div>
                                    <h3 className="text-white text-lg font-semibold">{member.name}</h3>
                                    <p className="text-gray-200 text-sm">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            <section className=" py-10 mb-8">
                <div className="max-w-7xl mx-auto relative flex items-center px-8">
                    {/* Fixed Trusted By box */}
                    <div className="flex-shrink-0 flex items-center justify-center mr-8">
                        <div className="w-32 h-16 bg-white flex items-center justify-center">
                            <p className="text-gray-600 font-medium text-sm tracking-wide">
                                TRUSTED BY
                            </p>
                        </div>
                    </div>

                    {/* Scrolling logos */}
                    <div className="flex-1 overflow-hidden">
                        <motion.div
                            className="flex gap-12 items-center"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear",
                                duration: 25,
                            }}
                        >
                            {[...logos, ...logos].map((logo, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 flex items-center justify-center"
                                >
                                    <div className="w-32 h-16 relative">
                                        <Image
                                            src={logo}
                                            alt={`Logo ${i}`}
                                            fill
                                            className="object-contain opacity-60"
                                        />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Left Side - Contact Info */}
                    <div className="flex flex-col justify-between">
                        <h2 className="flex items-center text-lg font-semibold">
                            <span className="w-4 h-4 bg-[#a37e41] rounded-sm mr-3"></span>
                            CONTACT US
                        </h2>

                        {/* Phone + Email at bottom aligned with submit */}
                        <div className="flex flex-col items-left mt-4 gap-2">
                            <p className="text-gray-400 text-xl">206-339-2947</p>
                            <p className="text-3xl md:text-4xl font-semibold">info@aleliza.com</p>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col justify-between space-y-8">
                        <div>
                            <label className="block text-sm mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-black border-b border-gray-700 focus:border-white outline-none py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2">Email*</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-black border-b border-gray-700 focus:border-white outline-none py-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2">Message*</label>
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-black border-b border-gray-700 focus:border-white outline-none py-2"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex items-center gap-2 text-3xl font-semibold hover:underline"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>


            <section className="bg-black text-white py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 items-center gap-10">

                    {/* Left Image - 1/4 */}
                    <div className="w-full md:col-span-1">
                        <Image
                            src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/about_1_zi61v1.webp"
                            alt="Let's Chat"
                            width={400}
                            height={100}
                            className="w-full  shadow-lg object-cover"
                        />
                    </div>

                    {/* Right Text - 3/4 */}
                    <div className="md:col-span-3 flex items-center">
                        <h2 className="text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold leading-none tracking-tight">
                            Let&apos;s Chat
                        </h2>
                    </div>

                </div>
            </section>



        </>
    )
}

export default About
