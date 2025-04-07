
import React from 'react';
import { ShieldCheck, Clock, HeartHandshake, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <ShieldCheck size={28} className="text-navy-500" />,
      title: "Trusted Expertise",
      description: "With 15+ years of experience in the insurance industry, we provide reliable advice and solutions."
    },
    {
      icon: <Clock size={28} className="text-navy-500" />,
      title: "Quick Response",
      description: "We pride ourselves on our prompt service and fast claim settlements for our clients."
    },
    {
      icon: <HeartHandshake size={28} className="text-navy-500" />,
      title: "Personalized Service",
      description: "We take time to understand your unique needs to recommend the right insurance products."
    },
    {
      icon: <TrendingUp size={28} className="text-navy-500" />,
      title: "Continuous Support",
      description: "We offer regular policy reviews and ongoing support to ensure your coverage remains optimal."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Why Choose FutureSecureConnect</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional service and valuable insurance solutions that protect what matters most to you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-50 mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
