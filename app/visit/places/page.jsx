'use client';
import React from 'react';
import Header from '../../../components/Header'; 
import Footer from '../../../components/footer'; 
import PlacesToVisit from '../../../components/visit/places';

const PlacesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 bg-[#020617]">
         <PlacesToVisit />
      </main>
      <Footer />
    </div>
  );
};
export default PlacesPage;