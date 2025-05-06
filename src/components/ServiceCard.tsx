import React from 'react';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  const IconComponent = Icons[icon as keyof typeof Icons] || Icons.Zap;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-400 transition-colors duration-300">
        <IconComponent className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;