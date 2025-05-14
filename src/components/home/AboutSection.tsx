import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarDays, 
  Users, 
  Heart, 
  Briefcase, 
  MessageSquare, 
  LifeBuoy 
} from 'lucide-react';

const features = [
  {
    icon: <CalendarDays className="h-6 w-6 text-primary-600" />,
    title: 'Events & Gatherings',
    description: 'Cultural festivals, sports tournaments, and community picnics that bring us together.'
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary-600" />,
    title: 'Sports Activities',
    description: 'Local sports discussions, team formations, and friendly competitions.'
  },
  {
    icon: <Users className="h-6 w-6 text-primary-600" />,
    title: 'Cultural Celebrations',
    description: 'Celebrating our heritage through music, art, dance, and traditional festivities.'
  },
  {
    icon: <Heart className="h-6 w-6 text-primary-600" />,
    title: 'Volunteer Opportunities',
    description: 'Community service projects and initiatives that make a difference.'
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary-600" />,
    title: 'Discussions & Ideas',
    description: 'A platform for community members to share thoughts and suggestions.'
  },
  {
    icon: <LifeBuoy className="h-6 w-6 text-primary-600" />,
    title: 'Resources & Support',
    description: 'Access to helpful resources and local services for community members.'
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/1770398/pexels-photo-1770398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Community Celebration" 
                className="rounded-xl shadow-lg"
              />
            </div>
            
            {/* Accent Elements */}
            <div className="absolute -left-6 -top-6 w-32 h-32 bg-primary-200 rounded-xl -z-0"></div>
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-secondary-200 rounded-xl -z-0"></div>
            
            {/* Stats Badge */}
            <div className="absolute -right-5 top-1/3 bg-white rounded-lg shadow-xl p-4 z-20">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary-600">5+</p>
                <p className="text-sm text-gray-600">Years Serving</p>
                <p className="text-sm font-medium text-gray-900">Our Community</p>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
              About TCF
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Uniting the Telugu Community in Canada
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              The Telugu Cultural Forum (TCF) serves as a dynamic hub for the Telugu community in Canada, 
              particularly in Oshawa. Founded in 2018, our mission is to preserve and promote 
              Telugu culture, language, and traditions while fostering a sense of unity and 
              belonging among community members.
            </p>
            
            <p className="text-gray-600 mb-10 leading-relaxed">
              Through various cultural, social, and community-focused initiatives, 
              we strive to create meaningful connections and enrich the lives of 
              Telugu people in Canada.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="bg-primary-50 p-2 rounded-md mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;