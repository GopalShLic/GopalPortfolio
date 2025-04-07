
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';

const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("your_user_id"); // Replace with your EmailJS user ID
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-navy-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">Contact Us</h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Have questions about insurance solutions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </div>
      <main className="flex-grow">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
