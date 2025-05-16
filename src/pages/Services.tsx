import React, { useEffect } from 'react';
import { services, serviceCategories } from '../data/services';
import ServiceCategorySection from '../components/ServiceCategorySection';
import { ArrowDown } from 'lucide-react';

const Services: React.FC = () => {
  // Function to handle smooth scroll
  const scrollToServices = () => {
    const servicesSection = document.getElementById('service-categories');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90 z-10"></div>
        <div className="bg-[url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] absolute inset-0 bg-cover bg-center bg-no-repeat"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              data-aos="fade-up">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8"
             data-aos="fade-up" data-aos-delay="100">
            Discover our comprehensive range of professional services designed to meet your every need
          </p>
          <button 
            onClick={scrollToServices}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-blue-900 font-medium transition-all hover:bg-blue-50 hover:shadow-lg"
            data-aos="fade-up" data-aos-delay="200"
          >
            <span>Explore Services</span>
            <ArrowDown className="ml-2 animate-bounce" size={18} />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20" id="service-categories">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6" data-aos="fade-up">Exceptional Services For All Your Needs</h2>
          <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
            We offer a wide range of professional services to help you achieve your goals. 
            Browse our categories below to find the perfect solution for your needs.
          </p>
        </div>

        <div className="space-y-24">
          {Object.keys(serviceCategories).map((category) => (
            <ServiceCategorySection 
              key={category} 
              category={category as any} 
              services={services} 
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6" data-aos="fade-up">
            Need a Custom Service?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            Don't see exactly what you're looking for? Contact us to discuss custom solutions tailored to your specific requirements.
          </p>
          <button 
            className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-blue-600 font-medium transition-all hover:bg-blue-50"
            data-aos="fade-up" data-aos-delay="200"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;