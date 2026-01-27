'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Section1 = () => {
  return (
    <section className="w-full bg-transparent">
      
      {/* --- DESKTOP VIEW (Animated) --- */}
      {/* Note: The class 'hidden md:flex' hides this on small mobile screens.
         If you want this visible on mobile, change it to just 'flex'.
      */}
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
            maxWidth: "1723px",       // Updated to match your About Image width
            aspectRatio: "1723 / 876", // Updated to match your About Image ratio
          }}
          className="relative"
        >
          <Image
            src="/images/about/section1/image1.png"
            alt="SMRSC About Banner"
            fill
            priority
            style={{ objectFit: "contain" }}
            sizes="(max-width: 1723px) 100vw, 1723px"
          />
        </div>
      </motion.div>

      {/* Optional: Mobile Fallback (since the above is hidden on mobile) */}
      <div className="md:hidden w-full relative aspect-[1723/876] mt-20 px-6">
         <Image
            src="/images/about/section1/image1.png"
            alt="SMRSC About Banner"
            fill
            className="object-contain"
          />
      </div>

    </section>
  );
};

export default Section1;