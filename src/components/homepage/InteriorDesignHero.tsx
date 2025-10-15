"use client";

import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ArchitectureHero() {
  return (
    <section className="h-full bg-[#fbfbfb] px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-[100rem] min-h-screen mx-auto h-full flex flex-col justify-between space-y-8 py-20 lg:py-40">
        <div className="w-full">
          <motion.p
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "0px 0px -40% 0px" }}
            className="text-center text-sm sm:text-base lg:text-lg uppercase text-gold-dark font-paragraph font-[300] tracking-[0.3rem]"
          >
            Established in 2021
          </motion.p>
        </div>

        <div className="flex justify-between flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-16">
          <div className="font-poppins">
            <div className="text-7xl sm:text-8xl lg:text-9xl mb-6 leading-none  text-black  text-center lg:text-start font-paragraph font-[300] tracking-[0.3rem]">
              <motion.p
                initial={{ opacity: 0, rotateX: -90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "0px 0px -40% 0px" }}
              >
                +4
              </motion.p>
            </div>
            <p className="text-xs sm:text-lg font-paragraph font-[300] tracking-[0.3rem] uppercase text-gold-dark mt-2 ml-1 text-center lg:text-start">
              Years of experience
            </p>
          </div>
          <div>
            <h1 className="font-black  text-black space-y-4 font-heading text-center lg:text-start">
              <motion.p
                initial={{ opacity: 0, rotateX: -90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "0px 0px -40% 0px" }}
                className="w-full text-center text-3xl sm:text-4xl lg:text-6xl xl:text-7xl tracking-[0.6rem]"
              >
                YOUR DREAMS
              </motion.p>
              <motion.p
                initial={{ opacity: 0, rotateX: -90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, margin: "0px 0px -40% 0px" }}
                className="w-full text-center text-2xl sm:text-3xl lg:text-5xl xl:text-6xl tracking-[0.6rem]"
              >
                OUR EXPERTISE
              </motion.p>
            </h1>
          </div>
          <div className="font-poppins">
            <div className="text-7xl sm:text-8xl lg:text-9xl mb-6 leading-none text-black  text-center lg:text-start font-paragraph font-[300] tracking-[0.3rem]">
              <motion.p
                initial={{ opacity: 0, rotateX: -90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "0px 0px -40% 0px" }}
              >
                10+
              </motion.p>
            </div>
            <p className="text-xs sm:text-lg font-paragraph font-[300] tracking-[0.3rem] uppercase text-gold-dark mt-2 mr-1 text-center lg:text-start">
              Successful Projects
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-0">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "0px 0px -40% 0px" }}
              className="text-sm sm:text-base lg:text-lg text-black max-w-[80vh] mx-auto lg:mx-0 text-center lg:text-start font-paragraph font-[300] tracking-[0.21rem] leading-[1.8] sm:leading-[1.8]"
            >
              At Al Eliza Interior Design, we transform residential and
              commercial spaces into refined, functional environments. Our
              designs elevate mood, enhance utility, and add lasting value.
              Collaborating closely, we craft elegant yet practical interiors
              that leave remarkable first impressions.
            </motion.p>
          </div>
          <div className="exclusive-text">
            <p className="text-sm sm:text-base lg:text- text-black max-w-[50ch] mx-auto lg:mx-0 lg:ml-auto mb-5 text-center lg:text-right font-paragraph font-[300] tracking-[0.21rem] leading-[1.8] sm:leading-[1.5]">
              Ready to begin?{" "}
              <span className="text-brown italic font-medium font-paragraph ">
                Contact us
              </span>{" "}
              to bring your vision to life.
            </p>
            <div className="flex justify-center lg:justify-end">
              <motion.button
                initial={{ opacity: 0, x: -90, skewX: 0 }}
                whileInView={{ opacity: 1, x: 0, skewX: -20 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "0px 0px -40% 0px" }}
                className="group cursor-pointer inline-flex bg-gold hover:bg-gold-dark text-white px-3 sm:px-8 py-3 sm:py-4 text-[12px] sm:text-lg font-medium transition-colors duration-300"
              >
                <span className="flex items-center font-heading font-[300] sm:tracking-[0.20rem] gap-2 [transform:skewX(20deg)]">
                  Tell us about your project
                  <FaChevronRight />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
