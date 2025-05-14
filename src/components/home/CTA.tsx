import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 cultural-pattern pointer-events-none"></div>
      <div className="absolute -right-24 -top-24 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 inline-block px-4 py-1 rounded-full text-white font-medium text-sm mb-4">
              Join Our Community
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Register with TCF & Participate in our Community Raffle Contest!
            </h2>
            
            <p className="text-gray-200 mb-8 leading-relaxed max-w-lg">
              Become a member of our growing Telugu community in Canada and enjoy exclusive 
              benefits including event discounts, networking opportunities, and a chance to 
              win exciting prizes in our monthly raffle contests.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="btn-secondary">
                Register Now
              </Link>
              <Link to="/contact" className="btn bg-white/10 hover:bg-white/20 text-white border border-white/30 focus:ring-white/30">
                Contact Us
              </Link>
            </div>
          </motion.div>
          
          {/* Image/Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-xl p-6 relative">
              {/* Decorative elements */}
              <div className="absolute -top-5 -right-5 bg-secondary-500 rounded-xl p-3 shadow-lg">
                <Gift className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Community Raffle</h3>
              <p className="text-gray-600 mb-6">Participate in our monthly raffle for a chance to win amazing prizes!</p>
              
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">This Month's Prizes</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary-500 rounded-full mr-2"></span>
                    <span className="text-gray-700">First Prize: $250 Gift Card</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary-500 rounded-full mr-2"></span>
                    <span className="text-gray-700">Second Prize: Dinner for Two</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary-500 rounded-full mr-2"></span>
                    <span className="text-gray-700">Third Prize: Movie Tickets</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Registration Ends In:</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center bg-primary-50 p-2 rounded">
                    <span className="block text-2xl font-bold text-primary-700">15</span>
                    <span className="text-xs text-gray-500">Days</span>
                  </div>
                  <div className="text-center bg-primary-50 p-2 rounded">
                    <span className="block text-2xl font-bold text-primary-700">08</span>
                    <span className="text-xs text-gray-500">Hours</span>
                  </div>
                  <div className="text-center bg-primary-50 p-2 rounded">
                    <span className="block text-2xl font-bold text-primary-700">45</span>
                    <span className="text-xs text-gray-500">Minutes</span>
                  </div>
                  <div className="text-center bg-primary-50 p-2 rounded">
                    <span className="block text-2xl font-bold text-primary-700">30</span>
                    <span className="text-xs text-gray-500">Seconds</span>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/register" 
                className="w-full block text-center py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
              >
                Join & Enter Raffle
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;