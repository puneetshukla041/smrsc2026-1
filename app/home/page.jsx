'use client'
import React from 'react';

// Importing Header & Footer from the components folder
import Header from '@/components/Header';
import Footer from '@/components/footer';

// Importing sections from the components/home folder
import Section1 from '@/components/home/Section1';
import Section2 from '@/components/home/Section2';
import Section3 from '@/components/home/Section3';
import Section4 from '@/components/home/Section4';
import Section5 from '@/components/home/Section5';
import Section6 from '@/components/home/Section6';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;