'use client'
import React from 'react';
// Importing Header from the components folder
import Header from '@/components/Header';
// Importing sections from the components/home folder
import Section1 from '@/components/home/Section1';
import Section2 from '@/components/home/Section2';
import Section3 from '@/components/home/Section3';
import Section4 from '@/components/home/Section4';
import Section5 from '@/components/home/Section5';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

// This line is required for Next.js to recognize the page
export default HomePage;