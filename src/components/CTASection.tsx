import React from 'react';
import { Button } from './ui/button';
import { PhoneCall, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="bg-navy-500 text-white section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Future?</h2>
            <p className="text-lg mb-6 text-gray-100">
              Get in touch today for a free consultation. We'll help you find the right insurance solution for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white hover:bg-gray-100 text-navy-600 font-medium flex items-center"
                onClick={() => window.location.href = 'tel:+1234567890'}
              >
                <PhoneCall size={18} className="mr-2" />
                Call Us Now
              </Button>
              <Button 
                variant="outline" 
                className="border-white hover:bg-white/30 transition-colors text-white flex items-center"
                onClick={() => navigate('/contact')}
              >
                <Calendar size={18} className="mr-2" />
                Schedule a Consultation
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-navy-700 text-xl font-semibold mb-4">Request a Callback</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1 text-sm">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1 text-sm">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-1 text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 mb-1 text-sm">
                  Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500"
                >
                  <option value="">Select a Service</option>
                  <option value="life">Life Insurance</option>
                  <option value="health">Health Insurance</option>
                  <option value="pension">Pension Plans</option>
                  <option value="child">Child Plans</option>
                </select>
              </div>
              <div>
                <Button 
                  className="w-full bg-navy-500 hover:bg-navy-700 transition-colors text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/contact');
                  }}
                >
                  Submit Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
