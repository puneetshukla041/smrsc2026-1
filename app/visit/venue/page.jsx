'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

// Adjust paths to point to your components folder
import Header from '../../../components/Header'; 
import Footer from '../../../components/footer'; 

const VenuePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-grow pt-32 pb-20 flex flex-col items-center px-4">
        
        {/* === SECTION 1: VENUE INFO === */}
        <div className="w-full max-w-[1377px] flex flex-col gap-8">
          
          <h1 
            style={{
              color: '#F8FFFF',
              fontFamily: '"Blauer Nue", sans-serif',
              fontSize: '36px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '36px',
            }}
            className="font-['Blauer_Nue'] w-[350px]"
          >
            Bharat Mandapam
          </h1>

          <p 
            style={{
              color: '#E3F5F6',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '36px',
            }}
            className="font-['Manrope'] w-full"
          >
            SMRSC 2026 will be held at Bharat Mandapam, a premier convention centre located in New Delhi, India. It is one of the largest and most advanced convention centres in the country. The venue features state-of-the-art auditoriums, exhibition spaces, and modern amenities to support live demonstrations and large-scale sessions.
          </p>

          <div 
            className="relative w-full mt-4 overflow-hidden shadow-2xl group"
            style={{
              height: '631px',
              borderRadius: '20px',
            }}
          >
            <Image
              src="/images/visit/veneu.png"
              alt="Bharat Mandapam"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div 
              className="absolute inset-0 z-10"
              style={{
                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 58.61%, #000 100%)'
              }}
            />
            <div className="absolute bottom-0 left-0 w-full z-20 p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-white text-2xl font-bold font-['Manrope']">
                  Bharat Mandapam
                </h3>
                <p className="text-white/80 text-lg font-['Manrope']">
                  Pragati Maidan, New Delhi – 110001, India
                </p>
              </div>
              <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-['Manrope'] font-semibold text-sm transition-all hover:bg-[#CE921B] hover:text-white cursor-pointer">
                See More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>


        {/* === SECTION 2: PLANNING YOUR JOURNEY === */}
        <div className="w-full max-w-[1377px] mt-[200px] flex flex-col gap-12">
          
          <h2 
            style={{
              color: '#F8FFFF',
              fontFamily: '"Blauer Nue", sans-serif',
              fontSize: '36px',
              fontWeight: 500,
              lineHeight: '36px',
              width: '426px'
            }}
          >
            Planning your journey
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            
            {/* Airport Card */}
            <div className="relative w-full lg:w-[670px] h-[400px] overflow-hidden rounded-[40px] shadow-2xl group">
              <Image
                src="/images/visit/airport.png"
                alt="Indira Gandhi International Airport"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 z-10"
                style={{
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)'
                }}
              />
              <div className="absolute bottom-8 left-8 z-20 flex flex-col gap-1">
                <h3 
                  style={{
                    color: '#F8FFFF',
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '32px',
                    fontWeight: 600,
                    lineHeight: '40px',
                  }}
                >
                  Indira Gandhi International Airport
                </h3>
                <p 
                  style={{
                    color: '#F8FFFF',
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '20px',
                  }}
                >
                  Nearest international airport<br />
                  30 minutes to the venue
                </p>
              </div>
            </div>

            {/* Visa Guidance */}
            <div className="flex flex-col justify-center flex-1 gap-6 p-4">
              <h3 
                style={{
                  color: '#F8FFFF',
                  fontFamily: '"Blauer Nue", sans-serif',
                  fontSize: '36px',
                  fontWeight: 400,
                  lineHeight: '36px',
                }}
              >
                Visa Guidance
              </h3>
              
              <p 
                style={{
                  color: '#F8FFFF',
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '22px',
                  maxWidth: '500px'
                }}
              >
                International attendees may require a valid Indian visa. 
                Visa requirements vary by nationality and should be checked in advance.
              </p>

              <button 
                className="
                  flex items-center justify-center gap-2 
                  bg-white text-black 
                  w-fit px-8 py-3 rounded-full 
                  font-['Manrope'] font-semibold text-sm
                  transition-all hover:bg-[#CE921B] hover:text-white cursor-pointer
                "
              >
                Check visa requirements <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* === SECTION 3: NEED HELP (New) === */}
        <div className="w-full max-w-[1377px] mt-[200px] flex flex-col gap-8">
            
            {/* Heading */}
            <h2 
              style={{
                color: '#F8FFFF',
                fontFamily: '"Blauer Nue", sans-serif',
                fontSize: '36px',
                fontWeight: 500,
                lineHeight: '36px',
              }}
            >
              Need help? We're here.
            </h2>

            {/* Contact Info Box */}
            <div className="w-full border border-white/20 bg-white/5 rounded-[20px] p-8 md:p-10 flex flex-col gap-4">
                <p className="text-[#E6E6E6] font-['Manrope'] text-lg">
                   Our team can assist with hotel bookings and accommodation-related queries for SMRSC 2026 attendees.
                </p>
                <div className="flex flex-col gap-1 text-[#E6E6E6]/80 font-['Manrope'] text-base mt-2">
                   <p>Phone: +91 9599xxxxxx, +91 7042xxxxxx</p>
                   <p>Mon - Fri, 8:30 to 17:30</p>
                </div>
            </div>

            {/* Live Map Frame - Replacing Static Image */}
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-[20px] shadow-2xl border border-white/10">
                <iframe 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} // Added basic dark mode filter (optional)
                    loading="lazy" 
                    allowFullScreen 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SS Innovations Gurugram Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.160171242378!2d77.08639457614764!3d28.504825075734712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1947b1967205%3A0xc486445100021c33!2sSS%20Innovations!5e0!3m2!1sen!2sin!4v1709230571234!5m2!1sen!2sin"
                >
                </iframe>
            </div>

            {/* Footer Text */}
            <p className="text-[#E6E6E6] font-['Manrope'] text-base font-normal">
              Planning travel and accommodation in advance is recommended to ensure a seamless visit.
            </p>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default VenuePage;