"use client";

import Header from "@/components/Header";
import Section1 from "@/components/home/section1";

export default function HomePage() {
  return (
    // Background updated to #02091A
    <main className="relative w-full min-h-screen bg-[#02091A]">
      <Header />
      {/* Container for sections */}
      <div className="w-full">
        <Section1 />
      </div>
    </main>
  );
}