
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, image, rating = 5 }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-gray-600 mb-6">
        "{quote}"
      </blockquote>
      
      {/* Client Info */}
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-navy-800">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
