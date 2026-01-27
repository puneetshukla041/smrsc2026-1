import React, { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { 
    name: "About SMRSC", 
    href: "/about",
    subLinks: [
      { name: "About the conference", href: "/about#conference" },
      { name: "Organizing Committee", href: "/about#committee" },
      { name: "Chief Guests", href: "/about#guests" },
      { name: "Faculty", href: "/about#faculty" },
    ]
  },
  { 
    name: "Explore", 
    href: "/explore", 
    subLinks: [
      { name: "Overview", href: "/explore#overview" },
      { name: "Schedule day 1", href: "/explore#day1" },
      { name: "schedule day 2", href: "/explore#day2" },
    ]
  },
  { 
    name: "Visit", 
    href: "/visit", 
    subLinks: [
      { name: "About the Venue", href: "/visit#venue" },
      { name: "Nearby Hotels", href: "/visit#hotels" },
      { name: "Places to Visit", href: "/visit#tourism" },
    ]
  },
  { 
    name: "Media", 
    href: "/media", 
    subLinks: [
      { name: "Blogs", href: "/media#blogs" },
      { name: "Press Release", href: "/media#press" },
      { name: "Media Kit", href: "/media#kit" },
    ]
  },
  { 
    name: "Past Events", 
    href: "/past-events", 
    subLinks: [
      { name: "SMRSC 2025", href: "/past-events#2025" },
      { name: "SMRSC 2024", href: "/past-events#2024" },
    ]
  },
  { 
    name: "Personalize", 
    href: "/personalize", 
    subLinks: [
      { name: "Cardiac", href: "/personalize#cardiac" },
      { name: "Urology", href: "/personalize#urology" },
      { name: "Thoracic", href: "/personalize#thoracic" },
      { name: "GI/ GI Oncology", href: "/personalize#gi" },
      { name: "Head & neck", href: "/personalize#headneck" },
      { name: "Gynecology", href: "/personalize#gyn" },
      { name: "Colorectal", href: "/personalize#colorectal" },
      { name: "General Surgery", href: "/personalize#general" },
    ]
  },
  { name: "Contact Us", href: "/contact" }, 
];

// Animation Configurations
const smoothSpring = { type: "spring", stiffness: 300, damping: 30 };
const softSpring = { type: "spring", stiffness: 200, damping: 25 };
const menuSlide = { duration: 0.5, ease: [0.33, 1, 0.68, 1] }; 

// Mobile Animation Variants
const containerVars = {
  initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
  open: { transition: { delayChildren: 0.1, staggerChildren: 0.09, staggerDirection: 1 } }
};

const mobileLinkVars = {
  initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] }, opacity: 0 },
  open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] }, opacity: 1 }
};

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredLink, setHoveredLink] = useState(null);
  
  // State for Mobile Accordion
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (name) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isMenuOpen) return;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const navTextStyle = "text-[#E6E6E6] font-medium text-[14px] leading-[32px] font-['Manrope',_sans-serif] hover:text-white transition-colors cursor-pointer whitespace-nowrap";

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={menuSlide} 
            style={{ backdropFilter: "blur(20px)" }}
            // FIXED: Changed z-[100] to z-[110] so it stays ON TOP of the mobile menu overlay
            className={`fixed top-0 left-0 w-full z-[110] transition-all duration-500 flex justify-center items-center ${
              lastScrollY > 50 || isMenuOpen 
                ? "bg-[#02091A]/80 border-b border-white/10" 
                : "bg-transparent"
            }`}
          >
            <div className="w-full max-w-[1920px] px-6 lg:px-[270px] py-4 flex items-center justify-between">
              
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <a href="/" className="cursor-pointer block relative z-[120]">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={softSpring}
                    src="/logos/header.png" 
                    alt="SMRSC Logo"
                    className="w-[110px] h-auto brightness-200"
                    onError={(e) => {
                      const target = e.target;
                      target.src = "https://via.placeholder.com/110x30/02091A/FFFFFF?text=SMRSC+2026";
                    }}
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-x-[46px] mx-[270px] flex-1 justify-center h-full">
                {navLinks.map((link) => (
                  <div 
                    key={link.name} 
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <a href={link.href} className={`${navTextStyle} relative flex items-center gap-1`}>
                      {link.name}
                      {/* Smooth Gradient Underline Effect */}
                      {hoveredLink === link.name && (
                        <motion.span
                          layoutId="underline"
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: "100%", opacity: 1 }}
                          exit={{ width: 0, opacity: 0 }}
                          transition={smoothSpring} 
                          className="absolute left-0 -bottom-1 h-[1px]"
                          style={{
                            background: "linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.80) 50%, rgba(255, 255, 255, 0.20) 100%)"
                          }}
                        />
                      )}
                    </a>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {link.subLinks && hoveredLink === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 5, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.98 }}
                          transition={softSpring} 
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-1"
                        >
                          <div 
                            className="
                              bg-[#02091A]/95 backdrop-blur-xl 
                              border-x border-b border-white/10
                              flex flex-col justify-center items-center gap-2 
                              pt-2 px-4 pb-3 
                              self-stretch 
                              rounded-b-[16px] rounded-t-none
                              min-w-[220px] shadow-2xl
                            "
                          >
                            {link.subLinks.map((subLink) => (
                              <a
                                key={subLink.name}
                                href={subLink.href}
                                className="whitespace-nowrap text-sm text-[#E6E6E6] hover:text-white hover:bg-white/5 w-full text-center py-1.5 rounded-md transition-colors font-['Manrope',_sans-serif]"
                              >
                                {subLink.name}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Desktop Action Buttons */}
              <div className="hidden lg:flex items-center gap-x-6 flex-shrink-0">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#E6E6E6] hover:text-white transition-colors cursor-pointer outline-none"
                >
                  <Search size={18} strokeWidth={2.5} />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={softSpring}
                  href="#register"
                  className="
                    inline-flex items-center justify-center
                    px-8 py-2 rounded-full
                    border border-[#CE921B]
                    bg-[#CE921B] text-white
                    text-[13px] font-semibold tracking-wider uppercase
                    cursor-pointer
                    whitespace-nowrap
                    active:bg-[#b37e17]
                  "
                >
                  REGISTER
                </motion.a>
              </div>

              {/* Mobile Toggle Button */}
              {/* Ensure relative z-index is high enough to be clickable */}
              <div className="lg:hidden flex items-center gap-4 relative z-[120]">
                <button className="text-[#E6E6E6] hover:text-white">
                  <Search size={18} />
                </button>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white cursor-pointer p-1"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ------------------ MOBILE MENU OVERLAY ------------------ */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            // FIXED: Set z-[100] (lower than header's z-[110]) so header stays visible
            className="fixed inset-0 z-[100] bg-[#02091A]/95 backdrop-blur-xl flex flex-col pt-24 px-6 pb-6"
          >
            <motion.nav 
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col h-full overflow-y-auto"
            >
              <div className="flex flex-col gap-y-2">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col border-b border-white/5 pb-2">
                    
                    {/* Parent Link Row */}
                    <motion.div 
                      variants={mobileLinkVars}
                      className="flex items-center justify-between py-2 group cursor-pointer"
                      onClick={() => link.subLinks ? toggleCategory(link.name) : setIsMenuOpen(false)}
                    >
                      <a 
                        href={link.href} 
                        onClick={(e) => {
                            if(link.subLinks) e.preventDefault();
                        }}
                        className={`text-2xl font-light font-sans tracking-tight transition-colors ${
                          openCategory === link.name ? "text-[#CE921B]" : "text-white"
                        }`}
                      >
                        {link.name}
                      </a>
                      
                      {/* Rotating Chevron for Sublinks */}
                      {link.subLinks && (
                        <motion.span
                          animate={{ rotate: openCategory === link.name ? 180 : 0 }}
                          transition={softSpring}
                          className={`p-2 rounded-full ${
                            openCategory === link.name ? "text-[#CE921B] bg-[#CE921B]/10" : "text-white/50"
                          }`}
                        >
                          <ChevronDown size={20} />
                        </motion.span>
                      )}
                    </motion.div>
                    
                    {/* Collapsible Sublinks (Accordion) */}
                    <AnimatePresence>
                      {link.subLinks && openCategory === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-3 py-3 pl-2">
                            {link.subLinks.map((sub, subIdx) => (
                                <motion.a
                                  key={sub.name}
                                  href={sub.href}
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: subIdx * 0.05 }}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="text-base text-white/60 hover:text-white font-sans pl-4 border-l-2 border-white/10 hover:border-[#CE921B] transition-all"
                                >
                                  {sub.name}
                                </motion.a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile Register Button */}
              <motion.div 
                variants={mobileLinkVars}
                className="mt-auto pt-8"
              >
                <a
                  href="#register"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center w-full py-4 rounded-full border border-[#CE921B] bg-[#CE921B] text-white text-sm font-bold uppercase tracking-widest active:bg-[#b37e17] transition-all duration-300 shadow-lg shadow-[#CE921B]/20"
                >
                  REGISTER
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}