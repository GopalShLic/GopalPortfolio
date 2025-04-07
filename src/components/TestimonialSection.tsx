
import React from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const testimonials = [
  {
    quote: "The personalized service I received was exceptional. The agent took time to understand my family's needs and recommended the perfect policy.",
    name: "Alex Johnson",
    role: "Family Plan Client",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    rating: 5
  },
  {
    quote: "After comparing several insurance agents, I chose FutureSecureConnect for their transparency and honest approach. Best decision ever!",
    name: "Sarah Williams",
    role: "Health Insurance Client",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    rating: 5
  },
  {
    quote: "The process was smooth and hassle-free. They handled everything professionally and made sure I understood all aspects of my policy.",
    name: "Michael Chen",
    role: "Pension Plan Client",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    rating: 4
  },
  {
    quote: "I've been a client for over 5 years, and the level of service has been consistently excellent. They're always available to address my concerns.",
    name: "Emily Rodriguez",
    role: "Life Insurance Client",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 5
  },
  {
    quote: "The financial advice I received helped me secure my retirement. I'm grateful for their expertise and guidance.",
    name: "Robert Kim",
    role: "Retirement Plan Client",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-gray-600 mb-6 flex-grow">
        "{testimonial.quote}"
      </blockquote>
      
      {/* Client Info */}
      <div className="flex items-center mt-auto">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-navy-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="section-padding bg-navy-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We take pride in delivering exceptional service and valuable insurance solutions to our clients. 
            Here's what some of them have to say about their experience with us.
          </p>
        </div>
        
        {/* Desktop view: Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        
        {/* Mobile view: Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="px-4 md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative inset-0 translate-y-0 mx-2" />
              <CarouselNext className="relative inset-0 translate-y-0 mx-2" />
            </div>
          </Carousel>
        </div>
        
        <div className="text-center mt-8">
          <a href="/testimonials" className="inline-flex items-center text-navy-500 hover:text-navy-700 font-medium">
            View All Testimonials
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
