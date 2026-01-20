"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <section className="relative w-full flex justify-center items-center overflow-x-clip">
      
      {/* Optional cinematic glow (keep/remove as you like) */}
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

      {/* Image Only */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        className="relative z-10 w-full flex justify-center"
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
    </section>
  );
};

export default Section1;
