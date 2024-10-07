import React, { useEffect } from "react";
import demoImg from "../assets/demo.png";
import Tag from "./Tag";
import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of animation in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <section className="hero-section text-center mt-10 flex flex-col">
        <Tag>
          <div 
          className="flex items-center gap-1 cursor-pointer ">
            <span>Nexx V0.1</span>
            <ChevronRight className="w-6 h-6 text-indigo-300 overflow-visible"/>
          </div>
        </Tag>
       <motion.div
       
       initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
       >
       <motion.h1 
         variants={FADE_UP_ANIMATION_VARIANTS}
       className="text-4xl font-extrabold leading-[1.15] text-black lg:text-6xl">
          launch Your Sass
          <br />
          <span className="bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent">
            In Minutes Not Days
          </span>
        </motion.h1>
       </motion.div>
         <h2 
         data-aos="fade-down"
         className="mt-5 text-gray-600 sm:text-xl">
         Nexx is a open-source tool for developer who want to launch their ideas faster.
         </h2>
  
        <div className="mx-auto mt-5 flex max-w-fit gap-4 ">
          <a
            href="#get-started"
            className="rounded-full mx-auto  max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-black bg-black text-white hover:ring-gray-400 hover:ring-2 "
          >
            Get Started
          </a>
          <a
            href="#get-started"
            className="rounded-full mx-auto  max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-gray-200 bg-white text-black hover:ring-gray-400 hover:ring-2"
          >
            Learn More
          </a>
        </div>
        <div 
          data-aos="fade-up"
          className="flex justify-center items-center  mt-5">
          <img
            
            className="sm:max-h-[500px] max-h-[300px] mx-auto"
            src={demoImg}
            alt="demo"
          />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
