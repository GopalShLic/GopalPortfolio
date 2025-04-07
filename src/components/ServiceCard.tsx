
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="glass-card rounded-lg p-6 card-hover flex flex-col h-full">
      <div className="text-navy-500 mb-4 flex justify-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-navy-50">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
      <p className="text-gray-600 mb-5 text-center">{description}</p>
      <div className="mt-auto flex flex-col gap-3">
        <Link to={link}>
          <Button className="w-full bg-navy-500 hover:bg-navy-600 text-white">
            Learn More <ArrowRight size={16} className="ml-1" />
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline" className="w-full border-navy-500 text-navy-500 hover:bg-navy-50">
            Request Consultation
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
