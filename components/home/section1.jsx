"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <section className="relative w-full flex justify-center items-center overflow-x-clip">
      
      {/* Optional cinematic glow */}
      <motion.div
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-0 pointer-events-none"
        style={{
          width: "70%",
          height: "100%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(0, 186, 254, 0.8)",
          filter: "blur(250px)",
          borderRadius: "100%",
        }}
      />

      {/* --- DESKTOP VIEW --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        className="relative z-10 w-full hidden md:flex justify-center"
      >
        <div
          style={{
            marginTop: "98px",
            marginBottom: "65px",
            marginLeft: "114px",
            marginRight: "114px",
            width: "100%",
            maxWidth: "1693px",
            aspectRatio: "1693 / 861",
          }}
          className="relative"
        >
          <Image
            src="/images/home/image1.png"
            alt="SMRSC 2026 Hero"
            fill
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
      </motion.div>

      {/* --- MOBILE VIEW --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full flex md:hidden justify-center px-6"
      >
        <div
          style={{
            marginTop: "60px",
            marginBottom: "40px",
            // Precise dimensions and aspect ratio requested
            width: "350px",
            height: "592px",
            aspectRatio: "175 / 296", 
          }}
          className="relative"
        >
          <Image
            src="/images/home/section1/mobile.png"
            alt="SMRSC 2026 Hero Mobile"
            fill
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Section1;