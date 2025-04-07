import React from 'react';
import { Button } from './ui/button';
import { CheckCircle, Award, TrendingUp, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();
  
  const features = [
    "Personalized insurance solutions",
    "Expert financial advice",
    "24/7 client support",
    "Fast claim settlements",
    "Transparent policy terms",
    "Regular policy reviews"
  ];

  const achievements = [
    {
      icon: <Award size={28} className="text-insurance-accent" />,
      title: "Top Insurance Agent",
      description: "Recognized as a top-performing insurance agent for 5 consecutive years."
    },
    {
      icon: <TrendingUp size={28} className="text-insurance-accent" />,
      title: "100% Club Member",
      description: "Member of the prestigious 100% Club for outstanding performance."
    },
    {
      icon: <ShieldCheck size={28} className="text-insurance-accent" />,
      title: "Customer Excellence",
      description: "Awarded for exceptional customer service and satisfaction."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About FutureSecureConnect</h2>
            <p className="text-gray-600 mb-6">
              With over 15 years of experience in the insurance industry, I have dedicated my career to helping families and individuals secure their financial futures through personalized insurance solutions.
            </p>
            <p className="text-gray-600 mb-8">
              My journey began when I witnessed how proper insurance planning helped my own family navigate through a difficult time. This personal experience inspired me to help others prepare for life's uncertainties with the right financial protection.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="btn-primary mb-10 hover:bg-navy-700 transition-colors" onClick={() => navigate('/about')}>
              Learn More About Us
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 text-center hover:border-navy-300 transition-colors">
                  <div className="inline-flex items-center justify-center mb-3">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-navy-500 rounded-lg"></div>
              <img 
                src="/lovable-uploads/6821d13c-a4fc-4065-b5cf-eb8cde61755b.png" 
                alt="Insurance Agent" 
                className="rounded-lg shadow-lg relative z-10 w-full object-cover object-center"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-insurance-accent rounded-lg"></div>
              
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full py-2 px-6 z-20">
                <p className="font-bold text-navy-600 text-center">15+ Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
