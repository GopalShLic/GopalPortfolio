
import React from 'react';
import Navbar from '../components/Navbar';
import ServicesList from '../components/ServicesList';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-navy-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">Our Insurance Services</h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            We offer a comprehensive range of insurance solutions tailored to meet your unique needs and secure your family's future.
          </p>
        </div>
      </div>
      <main className="flex-grow">
        <ServicesList />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
