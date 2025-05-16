import React, { useState } from 'react';
import { type Service } from '../data/services';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 bg-white h-full"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      <div className="absolute top-0 left-0 w-1 h-full transition-all duration-300 ease-in-out"
        style={{ 
          backgroundColor: service.category === 'property' ? '#3B82F6' :
                           service.category === 'financial' ? '#10B981' :
                           service.category === 'legal' ? '#8B5CF6' :
                           service.category === 'lifestyle' ? '#F59E0B' :
                           service.category === 'home' ? '#F43F5E' : '#6366F1',
          height: isHovered ? '100%' : '20%'
        }}
      />

      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-full mr-4 text-white flex items-center justify-center
            ${service.category === 'property' ? 'bg-blue-500' :
              service.category === 'financial' ? 'bg-emerald-500' :
              service.category === 'legal' ? 'bg-violet-500' :
              service.category === 'lifestyle' ? 'bg-amber-500' :
              service.category === 'home' ? 'bg-rose-500' : 'bg-indigo-500'}`}
          >
            <service.icon size={24} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 transition-all duration-300 ease-in-out transform group-hover:translate-x-2">
            {service.title}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-6 flex-grow">
          {service.description}
        </p>
        
        <button 
          className={`mt-auto inline-flex items-center px-4 py-2 rounded-lg text-white font-medium text-sm transition-all duration-300 
            ${service.category === 'property' ? 'bg-blue-500 hover:bg-blue-600' :
              service.category === 'financial' ? 'bg-emerald-500 hover:bg-emerald-600' :
              service.category === 'legal' ? 'bg-violet-500 hover:bg-violet-600' :
              service.category === 'lifestyle' ? 'bg-amber-500 hover:bg-amber-600' :
              service.category === 'home' ? 'bg-rose-500 hover:bg-rose-600' : 
              'bg-indigo-500 hover:bg-indigo-600'}`}
        >
          <span>Contact Us</span>
          <ArrowRight 
            size={16} 
            className={`ml-2 transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
          />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;