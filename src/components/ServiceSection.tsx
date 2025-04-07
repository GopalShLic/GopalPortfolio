
import React from 'react';
import ServiceCard from './ServiceCard';
import { Heart, User, PiggyBank, GraduationCap } from 'lucide-react';

const ServiceSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Insurance Solutions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of insurance products designed to provide financial security and peace of mind for you and your loved ones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={<User size={32} className="text-navy-500" />}
            title="Life Insurance"
            description="Protect your family's financial future with our range of life insurance policies."
            link="/services/life-insurance"
          />
          <ServiceCard
            icon={<Heart size={32} className="text-navy-500" />}
            title="Health Insurance"
            description="Get comprehensive health coverage for you and your family's medical needs."
            link="/services/health-insurance"
          />
          <ServiceCard
            icon={<PiggyBank size={32} className="text-navy-500" />}
            title="Pension Plans"
            description="Secure your retirement with our flexible pension plans and annuities."
            link="/services/pension-plans"
          />
          <ServiceCard
            icon={<GraduationCap size={32} className="text-navy-500" />}
            title="Child Plans"
            description="Invest in your child's future education and important life milestones."
            link="/services/child-plans"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
