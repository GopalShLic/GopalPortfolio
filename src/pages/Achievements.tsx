
import React from 'react';
import Navbar from '../components/Navbar';
import AchievementsSection from '../components/AchievementsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Achievements = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-navy-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">Rewards & Achievements</h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Our commitment to excellence has been recognized through various awards and achievements over the years.
          </p>
        </div>
      </div>
      <main className="flex-grow">
        <AchievementsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Achievements;
