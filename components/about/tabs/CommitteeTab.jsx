'use client';
import React from 'react';
import Image from 'next/image';

const CommitteeTab = () => {

  // Data for the Scientific Committee Members
  const scientificCommittee = [
    {
      name: "Dr. Vivek Bindal",
      designation: "Max Healthcare",
      src: "/images/about/section2/image6.png"
    },
    {
      name: "Dr. Arun Prasad",
      designation: "Apollo Hospital",
      src: "/images/about/section2/image7.png"
    }
  ];

  // Reusable Card Component
  const MemberCard = ({ src, name, designation }) => (
    <div className="flex flex-col items-start gap-4">
      {/* Image Card */}
      <div 
        className="relative overflow-hidden group"
        style={{
          width: '330px',
          height: '330px',
          aspectRatio: '1/1',
          borderRadius: '20px',
          background: 'lightgray', 
          boxShadow: '0px 6px 10px 2px rgba(2, 44, 92, 0.20)',
        }}
      >
        <Image 
          src={src}
          alt={name}
          fill
          className="object-cover transition-transform duration-500"
          style={{ 
            objectPosition: 'center top',
            transform: 'scale(1.25)' 
          }} 
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-1 w-[330px]">
        <span style={{
          color: '#FFF',
          fontFamily: "'Manrope', sans-serif",
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '24px',
        }}>
          {name}
        </span>
        <span style={{
          color: '#FFF',
          fontFamily: "'Manrope', sans-serif",
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '16px',
        }}>
          {designation}
        </span>
      </div>
    </div>
  );

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* === 1. Organizing Chairman Section === */}
      {/* ✅ Gap between this section and the next heading is 200px */}
      <div style={{ marginBottom: '200px' }}>
        <h2 className="text-3xl md:text-5xl font-medium mb-12 text-white font-['Manrope']">
          Organizing Chairman
        </h2>

        <MemberCard 
          src="/images/about/section2/image5.png"
          name="Dr. Sudhir P Srivastava"
          designation="Founder, Chairman and CEO SS Innovations, INDIA"
        />
      </div>

      {/* === 2. Scientific Organizing Committee Section === */}
      <div>
        {/* ✅ Gap between heading and images is 50px */}
        <h2 
          className="text-3xl md:text-5xl font-medium text-white font-['Manrope']"
          style={{ marginBottom: '50px' }}
        >
          Scientific Organizing Committee
        </h2>

        {/* ✅ Gap between the two images is 200px */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '200px' }}>
          {scientificCommittee.map((member, index) => (
            <MemberCard 
              key={index}
              src={member.src}
              name={member.name}
              designation={member.designation}
            />
          ))}
        </div>
      </div>

      {/* Load Manrope Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap');
      `}</style>
    </div>
  );
};

export default CommitteeTab;