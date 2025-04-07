import React from 'react';
import { ArrowRight, Shield, Users, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative bg-gradient-to-r from-navy-600 to-navy-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1673&q=80')] opacity-10 bg-center bg-cover"></div>
      
      <div className="container mx-auto px-4 py-20 lg:py-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center bg-navy-400/30 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Shield size={16} className="mr-2" />
              Trusted by over 10,000+ families
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Securing Your Future, One Policy at a Time
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl">
              At FutureSecureConnect, we believe in providing personalized insurance solutions that protect what matters most - your family's future and financial security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="bg-white hover:bg-gray-100 text-navy-600 font-medium text-lg px-8 py-6"
                onClick={() => navigate('/contact')}
              >
                Get a Quote
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/30 transition-colors font-medium text-lg px-8 py-6"
                onClick={() => navigate('/services')}
              >
                Explore Services <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-insurance-accent mr-2" />
                <span className="text-sm md:text-base">Customized Plans</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-insurance-accent mr-2" />
                <span className="text-sm md:text-base">24/7 Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-insurance-accent mr-2" />
                <span className="text-sm md:text-base">Fast Claims</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-lg bg-insurance-accent animate-pulse"></div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-navy-50 p-3 rounded-full mr-4">
                  <Users size={24} className="text-navy-500" />
                </div>
                <div>
                  <h3 className="text-navy-800 font-bold text-lg">Gopal Sharma</h3>
                  <p className="text-gray-500">Senior Insurance Consultant</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-navy-50 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-navy-500">15+</span>
                  </div>
                  <p className="text-gray-700">Years of Experience</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-navy-50 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-navy-500">5k+</span>
                  </div>
                  <p className="text-gray-700">Policies Issued</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-navy-50 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-navy-500">98%</span>
                  </div>
                  <p className="text-gray-700">Client Satisfaction</p>
                </div>
              </div>
              <Button 
                className="w-full mt-6 hover:bg-navy-600 transition-colors" 
                onClick={() => navigate('/contact')}
              >
                Schedule a Consultation
              </Button>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-16 rounded-lg bg-navy-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
