import React from 'react';
import { type Service, type ServiceCategory, serviceCategories } from '../data/services';
import ServiceCard from '../components/ServiceCard';

interface ServiceCategorySectionProps {
  category: ServiceCategory;
  services: Service[];
}

const ServiceCategorySection: React.FC<ServiceCategorySectionProps> = ({ category, services }) => {
  const categoryServices = services.filter(service => service.category === category);
  const categoryInfo = serviceCategories[category];
  
  if (categoryServices.length === 0) return null;
  
  return (
    <section className="mb-20" data-aos="fade-up">
      <div className="flex items-center mb-10">
        <div className={`w-16 h-1 ${categoryInfo.color} rounded-full mr-4`}></div>
        <h2 className="text-3xl font-bold text-gray-800">{categoryInfo.name}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ServiceCategorySection;