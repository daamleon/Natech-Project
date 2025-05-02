import React from 'react';
import { SERVICES } from '../constants';
import ServiceCard from './ServiceCard';
import SectionTitle from './SectionTitle';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Layanan Kami" 
          subtitle="Kami menyediakan berbagai layanan untuk membantu mewujudkan ide dan kebutuhan teknologi Anda."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;