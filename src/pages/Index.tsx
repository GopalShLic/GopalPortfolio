
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialSection from '../components/TestimonialSection';
import BlogSection from '../components/BlogSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServiceSection />
        <AboutSection />
        <WhyChooseUs />
        <TestimonialSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
