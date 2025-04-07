
import React from 'react';
import { Shield, Heart, PiggyBank, GraduationCap, Umbrella, Briefcase } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Shield size={40} className="text-navy-500" />,
    title: "Life Insurance",
    description: "Secure your family's financial future with our comprehensive life insurance policies that provide coverage and peace of mind.",
    features: [
      "Guaranteed financial protection for your family",
      "Tax benefits under Income Tax Act",
      "Flexible premium payment options",
      "Loan facility against policy"
    ]
  },
  {
    icon: <Heart size={40} className="text-navy-500" />,
    title: "Health Insurance",
    description: "Protect yourself and your family against rising medical expenses with our health insurance plans.",
    features: [
      "Comprehensive coverage for hospitalization",
      "Cashless treatment at network hospitals",
      "Coverage for pre and post hospitalization",
      "No claim bonus benefits"
    ]
  },
  {
    icon: <PiggyBank size={40} className="text-navy-500" />,
    title: "Pension Plans",
    description: "Ensure a comfortable retirement with our pension plans designed to provide financial security in your golden years.",
    features: [
      "Guaranteed regular income post retirement",
      "Option to receive lump sum or regular payments",
      "Tax benefits on investments",
      "Inflation-adjusted returns"
    ]
  },
  {
    icon: <GraduationCap size={40} className="text-navy-500" />,
    title: "Child Plans",
    description: "Secure your child's future educational needs with our specialized child education and career plans.",
    features: [
      "Funds for higher education and important milestones",
      "Insurance protection for the parent",
      "Waiver of premium in case of unfortunate events",
      "Flexible payout options aligned with educational needs"
    ]
  },
  {
    icon: <Umbrella size={40} className="text-navy-500" />,
    title: "Term Insurance",
    description: "Get maximum coverage at affordable premiums with our term insurance policies for pure protection.",
    features: [
      "High sum assured at low premiums",
      "Financial protection for your family",
      "Additional riders for enhanced coverage",
      "Tax benefits under Section 80C"
    ]
  },
  {
    icon: <Briefcase size={40} className="text-navy-500" />,
    title: "Investment Plans",
    description: "Grow your wealth with our investment-linked insurance plans that offer protection along with returns.",
    features: [
      "Combination of insurance and investment",
      "Market-linked returns for long-term growth",
      "Tax-efficient wealth creation",
      "Flexibility to choose investment strategy"
    ]
  }
];

const ServicesList = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card rounded-lg p-8 card-hover flex flex-col h-full">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-navy-50">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{service.description}</p>
              
              <div className="mb-6 flex-grow">
                <h4 className="text-lg font-medium mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-navy-500 mr-2">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                <Link to="/contact">
                  <Button className="w-full">Request Consultation</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
