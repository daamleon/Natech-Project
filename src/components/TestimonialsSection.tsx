import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import SectionTitle from './SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-400 to-orange-500 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Apa Kata Klien Kami" 
          centered={true}
        />
        
        <div className="relative max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm p-8 min-h-[250px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-all duration-500 absolute inset-0 p-8 flex flex-col items-center ${
                  index === activeIndex ? 'opacity-100 z-10 translate-x-0' : 
                  index < activeIndex ? 'opacity-0 z-0 -translate-x-full' : 'opacity-0 z-0 translate-x-full'
                }`}
              >
                <div className="flex flex-col items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-20 h-20 rounded-full object-cover border-4 border-white mb-4"
                  />
                  <p className="text-lg md:text-xl italic text-center mb-6">
                    "{testimonial.comment}"
                  </p>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-white/80">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-white/20 hover:bg-white/30 transition-colors rounded-full p-2"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-white/20 hover:bg-white/30 transition-colors rounded-full p-2"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;