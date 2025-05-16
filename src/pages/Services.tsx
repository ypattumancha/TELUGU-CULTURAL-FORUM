<<<<<<< HEAD
import React from 'react';
import ServiceCategorySection from '../components/ServiceCategorySection';
import { ArrowDown, Home, Calculator, Scale, Shield, Plane, GraduationCap, UtensilsCrossed, Globe, CalendarDays, Fence, Lightbulb, Trash2, Construction, Wrench, Ticket as Cricket, Music, Camera, Cog as Yoga } from 'lucide-react';

// Types and data integrated from services.ts
import { type IconType } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  category: ServiceCategory;
}

export type ServiceCategory = 
  | 'property'
  | 'financial'
  | 'legal'
  | 'lifestyle'
  | 'home'
  | 'entertainment';

export const serviceCategories: Record<ServiceCategory, { name: string; color: string }> = {
  property: { name: 'Property Services', color: 'bg-blue-500' },
  financial: { name: 'Financial Services', color: 'bg-emerald-500' },
  legal: { name: 'Legal Services', color: 'bg-violet-500' },
  lifestyle: { name: 'Lifestyle Services', color: 'bg-amber-500' },
  home: { name: 'Home Services', color: 'bg-rose-500' },
  entertainment: { name: 'Entertainment Services', color: 'bg-indigo-500' },
};

export const services: Service[] = [
  { id: 'real-estate', title: 'Real Estate Services', description: 'Whether you are buying, selling, or renting property, our real estate services provide expert guidance and support to meet your goals.', icon: Home, category: 'property' },
  { id: 'mortgage', title: 'Mortgage Advice', description: 'Get advice on mortgages tailored to your financial situation. We help you navigate the complexities of mortgage options and find the best solution for you.', icon: Calculator, category: 'financial' },
  { id: 'legal', title: 'Legal Consultation', description: 'Our legal services cover a range of areas including business law, family law, and more. Get expert advice and representation tailored to your legal needs.', icon: Scale, category: 'legal' },
  { id: 'insurance', title: 'Insurance Services', description: 'Explore our insurance services including life, health, and property insurance. We provide comprehensive coverage tailored to your needs.', icon: Shield, category: 'financial' },
  { id: 'immigration', title: 'Immigration Assistance', description: 'Navigate immigration processes smoothly with our comprehensive assistance. Whether for work, study, or residency, we provide guidance and support.', icon: Plane, category: 'legal' },
  { id: 'training', title: 'Training Programs', description: 'Enhance your skills and knowledge with our training programs. From professional development to specialized courses, we offer learning opportunities for all.', icon: GraduationCap, category: 'lifestyle' },
  { id: 'catering', title: 'Catering Service', description: 'Experience the finest catering services for your events and gatherings. Our expert team ensures delicious food and exceptional service tailored to your needs.', icon: UtensilsCrossed, category: 'lifestyle' },
  { id: 'web-dev', title: 'Web Development and Digital Marketing', description: 'We provide top-notch web development services and digital marketing solutions to help you build a strong online presence.', icon: Globe, category: 'lifestyle' },
  { id: 'event-management', title: 'Event Management', description: 'Let us handle your events with precision and creativity. From planning to execution, we ensure seamless and memorable experiences.', icon: CalendarDays, category: 'lifestyle' },
  { id: 'fence', title: 'Fence Installation', description: 'Professional fence installation services tailored to your property\'s needs. Enhance security and privacy with our expert solutions.', icon: Fence, category: 'home' },
  { id: 'potlight', title: 'Pot Light Installation', description: 'Upgrade your lighting with our pot light installation services. Transform your space with energy-efficient and stylish lighting solutions.', icon: Lightbulb, category: 'home' },
  { id: 'cleaning', title: 'Home Maintenance - Cleaning', description: 'Keep your home clean and tidy with our professional cleaning services. We offer regular and deep cleaning options tailored to your schedule.', icon: Trash2, category: 'home' },
  { id: 'basement', title: 'Basement Renovations', description: 'Transform your basement into a functional and beautiful space with our renovation services. From design to execution, we ensure high-quality results.', icon: Construction, category: 'home' },
  { id: 'plumbing', title: 'Plumbing and Gas Installation', description: 'Expert plumbing and gas installation services to ensure the safety and efficiency of your home or business infrastructure.', icon: Wrench, category: 'home' },
  { id: 'cricket', title: 'Cricket Equipment', description: 'High-quality cricket equipment including bats, balls, helmets, shoes, and customized t-shirts for cricket enthusiasts.', icon: Cricket, category: 'entertainment' },
  { id: 'music', title: 'Online Indian Carnatic Music and Dance Service', description: 'Learn and experience traditional Indian Carnatic music and dance through our online classes. Our expert instructors provide personalized guidance.', icon: Music, category: 'entertainment' },
  { id: 'photography', title: 'Photography for All Occasions', description: 'Capture your special moments with our professional photography services for weddings, parties, corporate events, and more.', icon: Camera, category: 'entertainment' },
  { id: 'yoga', title: 'Online Yoga', description: 'Join our online yoga classes and improve your physical and mental well-being. Suitable for all levels, from beginners to advanced practitioners.', icon: Yoga, category: 'entertainment' },
];

// Component
const Services: React.FC = () => {
=======
import React, { useEffect } from 'react';
import { services, serviceCategories } from '../data/services';
import ServiceCategorySection from '../components/ServiceCategorySection';
import { ArrowDown } from 'lucide-react';

const Services: React.FC = () => {
  // Function to handle smooth scroll
>>>>>>> f8f967f612cb0a7bb19edec612a840b22c27d895
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
<<<<<<< HEAD
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-aos="fade-up">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
=======
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              data-aos="fade-up">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8"
             data-aos="fade-up" data-aos-delay="100">
>>>>>>> f8f967f612cb0a7bb19edec612a840b22c27d895
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
<<<<<<< HEAD
          <h2 className="text-3xl font-bold text-gray-900 mb-6" data-aos="fade-up">
            Exceptional Services For All Your Needs
          </h2>
=======
          <h2 className="text-3xl font-bold text-gray-900 mb-6" data-aos="fade-up">Exceptional Services For All Your Needs</h2>
>>>>>>> f8f967f612cb0a7bb19edec612a840b22c27d895
          <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
            We offer a wide range of professional services to help you achieve your goals. 
            Browse our categories below to find the perfect solution for your needs.
          </p>
        </div>

        <div className="space-y-24">
          {Object.keys(serviceCategories).map((category) => (
            <ServiceCategorySection 
              key={category} 
<<<<<<< HEAD
              category={category as ServiceCategory} 
=======
              category={category as any} 
>>>>>>> f8f967f612cb0a7bb19edec612a840b22c27d895
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