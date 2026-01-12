"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";

/**
 * Professional Hero Component for SMRSC 2026.
 * Typography: Manrope (manual) and Inter.
 */

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const videoRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 50, stiffness: 60 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX - innerWidth / 2) / 100);
    mouseY.set((clientY - innerHeight / 2) / 100);
  };

  useEffect(() => {
    const target = new Date("2026-04-08T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log("Autoplay check:", error));
    }
  }, []);

  const uiContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.6 },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(15px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.6, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex flex-col items-center bg-black selection:bg-white/20 px-4 md:px-6"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-white/5 blur-[150px]" />
      </div>

      <motion.div variants={uiContainerVariants} className="relative z-10 w-full h-full flex flex-col items-center">
        {/* Video Hero Area */}
        <div className="absolute top-[30%] md:top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[350px] sm:max-w-[500px] md:max-w-[850px] flex justify-center items-center z-10 px-4">
          <motion.div variants={fadeInUpVariants} style={{ x: smoothX, y: smoothY }} className="w-full flex justify-center relative">
            <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-auto object-contain opacity-70 pointer-events-none mix-blend-screen z-10">
              <source src="/videos/Color.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>

        {/* Footer Content */}
        <div className="mt-auto pb-8 md:pb-16 flex flex-col items-center text-center w-full max-w-5xl z-30 px-2 sm:px-4">
          <motion.div variants={fadeInUpVariants} className="w-full bg-white/[0.04] backdrop-blur-[40px] border border-white/20 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center">
            
            <motion.p
              className="mb-6 px-4 text-sm md:text-base lg:text-lg"
              style={{
                color: "#FFF",
                textShadow: "0 4px 4px rgba(0, 0, 0, 0.40)",
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 500,
                lineHeight: "150%",
                letterSpacing: "-0.176px",
              }}
            >
              Third global SS Innovations multi specialty robotic surgery conference
            </motion.p>

            {/* Timer Grid */}
            <div className="flex justify-center flex-wrap gap-2 sm:gap-4 md:-space-x-4 mb-8 md:mb-10">
              <TimeUnit value={timeLeft.days} label="Days" progress={timeLeft.days / 365} />
              <TimeUnit value={timeLeft.hours} label="Hours" progress={timeLeft.hours / 24} />
              <TimeUnit value={timeLeft.minutes} label="Minutes" progress={timeLeft.minutes / 60} />
              <TimeUnit value={timeLeft.seconds} label="Seconds" progress={timeLeft.seconds / 60} />
            </div>

            <div className="flex items-center justify-center w-full opacity-40 hover:opacity-100 transition-opacity">
              <p className="text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] text-white font-sans font-medium ">
                AN EVENT BY SSINNOVATIONS
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

function TimeUnit({ value, label, progress }) {
  // Smaller radius for mobile (32) vs desktop (42)
  const [radius, setRadius] = useState(42);
  
  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 640 ? 30 : 42);
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const circumference = 2 * Math.PI * radius;
  const safeProgress = Math.min(Math.max(progress, 0), 1);
  const offset = circumference - (safeProgress * circumference);

  return (
    <motion.div className="flex flex-col items-center">
      <div className="relative flex flex-col items-center justify-center w-16 h-20 sm:w-20 sm:h-24 md:w-28 md:h-36">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg className="w-full h-full -rotate-90 overflow-visible">
            <circle cx="50%" cy="50%" r={radius} className="stroke-white/10 fill-none" strokeWidth="1" />
            <motion.circle
              cx="50%" cy="50%" r={radius} className="stroke-[#CE921B] fill-none" strokeWidth="2"
              strokeDasharray={circumference} strokeLinecap="round"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: isNaN(offset) ? circumference : offset }}
              transition={{ duration: 1, ease: "linear" }}
            />
          </svg>
        </div>

        <div className="relative flex flex-col items-center justify-center z-10">
          <div className="relative h-6 md:h-10 overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={value}
                initial={{ y: 15, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -15, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                style={{
                  color: "#FFF",
                  fontFamily: "'Manrope', sans-serif", 
                  fontSize: "clamp(18px, 5vw, 32px)", 
                  fontWeight: 600,
                  lineHeight: "1",
                }}
                className="tabular-nums block"
              >
                {value.toString().padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
          </div>
          
          <span 
            className="mt-1"
            style={{ 
              color: "#FFF",
              opacity: 0.7,
              fontFamily: "'Manrope', sans-serif", 
              fontSize: "clamp(8px, 2vw, 10px)", 
              letterSpacing: "0.05em"
            }}
          >
            {label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}