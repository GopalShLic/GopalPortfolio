
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle, Award, Calendar, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-navy-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About FutureSecureConnect</h1>
              <p className="text-xl text-gray-100">
                We're dedicated to providing personalized insurance solutions that protect what matters most to you and your loved ones.
              </p>
            </div>
          </div>
        </section>
        
        {/* Agent Profile */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/lovable-uploads/6821d13c-a4fc-4065-b5cf-eb8cde61755b.png" 
                  alt="Insurance Agent" 
                  className="rounded-lg shadow-lg w-full object-cover object-center"
                />
              </div>
              <div>
                <div className="inline-flex items-center bg-navy-50 text-navy-500 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  Licensed Insurance Professional
                </div>
                <h2 className="text-3xl font-bold mb-4">Gopal Sharma</h2>
                <p className="text-gray-600 mb-6">
                  With over 15 years of experience in the insurance industry, I have helped thousands of families and individuals secure their financial futures through personalized insurance solutions.
                </p>
                <p className="text-gray-600 mb-6">
                  My approach is built on understanding each client's unique needs and circumstances, allowing me to recommend the most suitable insurance products that provide optimal coverage and value for their investment.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Award size={20} className="text-navy-500 mr-2" />
                    <span className="text-gray-700">Certified Financial Planner</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={20} className="text-navy-500 mr-2" />
                    <span className="text-gray-700">15+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={20} className="text-navy-500 mr-2" />
                    <span className="text-gray-700">10,000+ Clients Served</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-navy-500 mr-2" />
                    <span className="text-gray-700">Licensed in 5 States</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Values */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
              <p className="text-gray-600">
                We are guided by a set of core principles that define our approach to insurance services and client relationships.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-navy-500">Our Mission</h3>
                <p className="text-gray-600">
                  To provide peace of mind through personalized insurance solutions that protect our clients' financial futures and help them achieve their long-term goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-navy-500">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted insurance advisor in our community, known for exceptional service, integrity, and personalized solutions that truly meet our clients' needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-navy-500">Our Values</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    <span>Integrity & Transparency</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    <span>Client-Centered Approach</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    <span>Continuous Education</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    <span>Community Involvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-600">
                From humble beginnings to becoming a trusted name in insurance services, our story is one of dedication and client success.
              </p>
            </div>
            
            <div className="relative border-l-2 border-navy-300 ml-6 md:ml-0 md:mx-auto max-w-2xl pl-8 md:pl-0">
              {/* Timeline Item 1 */}
              <div className="mb-12 md:flex md:items-center md:justify-between">
                <div className="absolute left-0 md:left-1/2 -translate-x-4 md:-translate-x-4 mt-1.5">
                  <div className="w-8 h-8 rounded-full bg-navy-500 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                </div>
                <div className="md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold text-navy-500">2008</h3>
                  <p className="text-lg font-medium">The Beginning</p>
                </div>
                <div className="md:w-5/12 md:pl-8 mt-2 md:mt-0">
                  <p className="text-gray-600">
                    Started the insurance practice with a mission to provide personalized insurance solutions to individuals and families.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="mb-12 md:flex md:items-center md:justify-between">
                <div className="absolute left-0 md:left-1/2 -translate-x-4 md:-translate-x-4 mt-1.5">
                  <div className="w-8 h-8 rounded-full bg-navy-500 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                </div>
                <div className="md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold text-navy-500">2012</h3>
                  <p className="text-lg font-medium">Expansion</p>
                </div>
                <div className="md:w-5/12 md:pl-8 mt-2 md:mt-0">
                  <p className="text-gray-600">
                    Expanded services to include a wider range of insurance products and opened our first dedicated office.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="mb-12 md:flex md:items-center md:justify-between">
                <div className="absolute left-0 md:left-1/2 -translate-x-4 md:-translate-x-4 mt-1.5">
                  <div className="w-8 h-8 rounded-full bg-navy-500 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                </div>
                <div className="md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold text-navy-500">2018</h3>
                  <p className="text-lg font-medium">10,000 Clients</p>
                </div>
                <div className="md:w-5/12 md:pl-8 mt-2 md:mt-0">
                  <p className="text-gray-600">
                    Reached the milestone of serving 10,000 clients and received recognition for outstanding customer service.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 4 */}
              <div className="md:flex md:items-center md:justify-between">
                <div className="absolute left-0 md:left-1/2 -translate-x-4 md:-translate-x-4 mt-1.5">
                  <div className="w-8 h-8 rounded-full bg-navy-500 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                </div>
                <div className="md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold text-navy-500">Today</h3>
                  <p className="text-lg font-medium">FutureSecureConnect</p>
                </div>
                <div className="md:w-5/12 md:pl-8 mt-2 md:mt-0">
                  <p className="text-gray-600">
                    Continuing our mission with FutureSecureConnect, leveraging technology to provide even better service to our growing client base.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-navy-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Future?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your insurance needs and discover how we can help protect what matters most to you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="bg-white hover:bg-gray-100 text-navy-600 font-medium px-6 py-3 rounded-md transition-colors">
                Contact Us
              </a>
              <a href="/services" className="border border-white hover:bg-white/30 transition-colors text-white px-6 py-3 rounded-md">
                Explore Our Services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
