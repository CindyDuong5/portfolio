"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Cindy Duong",
                1500,
                "Cloud Administrator",
                1000,
                "Software Engineer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-4">
            Open to new opportunities in cloud administration, software development, and web technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#contact">
              <span className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white cursor-pointer">
                Hire Me
              </span>
            </Link>
            <Link href="/Resume.pdf" download>
              <span className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white cursor-pointer text-center">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          {/* Image Container */}
          <div className="relative w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden bg-[#181818]">
            <Image
              src="/images/avatar.png"
              alt="Cindy Duong - Cloud Administrator and Software Engineer"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"  
              className="object-cover rounded-full" 
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
