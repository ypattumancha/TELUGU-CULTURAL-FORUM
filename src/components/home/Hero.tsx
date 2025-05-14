import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 pt-24 pb-12 flex items-center relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 cultural-pattern pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Celebrating Telugu
              <span className="text-secondary-400"> Culture</span> & 
              <span className="text-secondary-400"> Community</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Join us in uniting the Telugu community in Canada through cultural celebrations, 
              sports activities, volunteerism, and meaningful community engagement.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/events" className="btn-secondary">
                Explore Events
              </Link>
              <Link to="/register" className="btn bg-white hover:bg-gray-100 text-primary-800 focus:ring-white">
                Join Our Community
              </Link>
            </div>
            
            {/* Feature Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col items-center sm:items-start"
              >
                <div className="bg-white/10 p-3 rounded-full mb-3">
                  <Calendar className="text-secondary-400 h-6 w-6" />
                </div>
                <h3 className="font-semibold text-white mb-1">Cultural Events</h3>
                <p className="text-gray-300 text-sm text-center sm:text-left">Celebrating festivals and traditions</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col items-center sm:items-start"
              >
                <div className="bg-white/10 p-3 rounded-full mb-3">
                  <Users className="text-secondary-400 h-6 w-6" />
                </div>
                <h3 className="font-semibold text-white mb-1">Community Growth</h3>
                <p className="text-gray-300 text-sm text-center sm:text-left">Building lasting connections</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-col items-center sm:items-start"
              >
                <div className="bg-white/10 p-3 rounded-full mb-3">
                  <Heart className="text-secondary-400 h-6 w-6" />
                </div>
                <h3 className="font-semibold text-white mb-1">Volunteer Spirit</h3>
                <p className="text-gray-300 text-sm text-center sm:text-left">Giving back to our community</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Image */}
              <img 
                src="https://images.pexels.com/photos/935789/pexels-photo-935789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Telugu Cultural Celebration" 
                className="rounded-xl shadow-2xl relative z-10"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -right-8 -bottom-8 w-2/3 h-2/3 bg-secondary-500 rounded-xl -z-0"></div>
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-accent-500/30 rounded-full blur-xl"></div>
              <div className="absolute right-12 top-12 w-16 h-16 bg-primary-400/40 rounded-full blur-lg"></div>
              
              {/* Floating badge */}
              <div className="absolute -left-10 bottom-1/3 bg-white rounded-lg shadow-xl p-3 z-20">
                <div className="flex items-center gap-2">
                  <div className="bg-success-500 rounded-full p-1">
                    <Calendar size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Upcoming Events</p>
                    <p className="text-xs text-gray-600">Join our community</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,218.7C672,213,768,235,864,240C960,245,1056,235,1152,224C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;