import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Tag, ExternalLink, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample products/vendors data (would come from Firebase in a real app)
const vendors = [
  {
    id: '1',
    name: 'Spices of India',
    description: 'Authentic Indian spices, groceries, and food products for your kitchen.',
    image: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Grocery',
    contact: {
      phone: '+1 (905) 555-1234',
      email: 'contact@spicesofindia.com',
      website: 'https://spicesofindia.com'
    },
    featured: true
  },
  {
    id: '2',
    name: 'Saree Elegance',
    description: 'Beautiful collection of traditional sarees, salwar suits, and ethnic wear.',
    image: 'https://images.pexels.com/photos/2995309/pexels-photo-2995309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Clothing',
    contact: {
      phone: '+1 (905) 555-5678',
      email: 'info@sareeelegance.com',
      website: 'https://sareeelegance.com'
    },
    featured: true
  },
  {
    id: '3',
    name: 'Telugu Handicrafts',
    description: 'Handmade crafts, home décor, and artwork inspired by Telugu culture.',
    image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Handicrafts',
    contact: {
      phone: '+1 (905) 555-9012',
      email: 'sales@teluguhandicrafts.com',
      website: 'https://teluguhandicrafts.com'
    },
    featured: false
  },
  {
    id: '4',
    name: 'Telugu Cuisine Restaurant',
    description: 'Authentic Telugu and South Indian cuisine served with love.',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Restaurant',
    contact: {
      phone: '+1 (905) 555-3456',
      email: 'reservations@telugucuisine.com',
      website: 'https://telugucuisine.com'
    },
    featured: true
  },
  {
    id: '5',
    name: 'Andhra Jewels',
    description: 'Traditional and modern jewelry designs with South Indian craftsmanship.',
    image: 'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Jewelry',
    contact: {
      phone: '+1 (905) 555-7890',
      email: 'info@andhrajewels.com',
      website: 'https://andhrajewels.com'
    },
    featured: false
  },
  {
    id: '6',
    name: 'Telugu Learning Center',
    description: 'Language classes, cultural education, and resources for learning Telugu.',
    image: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Education',
    contact: {
      phone: '+1 (905) 555-2345',
      email: 'learn@telugulearning.com',
      website: 'https://telugulearning.com'
    },
    featured: false
  }
];

const TcsMartPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredVendors, setFilteredVendors] = useState(vendors);
  
  // Update page title
  useEffect(() => {
    document.title = 'TCS Mart - Telugu Cultural Forum';
  }, []);

  // Filter vendors based on search term and category
  useEffect(() => {
    const filtered = vendors.filter((vendor) => {
      const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || vendor.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredVendors(filtered);
  }, [searchTerm, selectedCategory]);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(vendors.map(vendor => vendor.category)))];

  // Featured vendors
  const featuredVendors = vendors.filter(vendor => vendor.featured);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">TCS Mart</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover local Telugu businesses and services in our community marketplace.
          </p>
        </div>
        
        {/* Featured Vendors */}
        {featuredVendors.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredVendors.map((vendor, index) => (
                <motion.div
                  key={vendor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow relative"
                >
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-secondary-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={vendor.image} 
                      alt={vendor.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{vendor.name}</h3>
                      <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                        {vendor.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{vendor.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Phone size={16} className="mr-2 text-primary-500" />
                        <span>{vendor.contact.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail size={16} className="mr-2 text-primary-500" />
                        <span>{vendor.contact.email}</span>
                      </div>
                      <div className="flex items-center text-primary-600">
                        <ExternalLink size={16} className="mr-2" />
                        <a 
                          href={vendor.contact.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search businesses by name or description"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Tag className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'All' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* All Vendors Grid */}
        {filteredVendors.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold mb-6">Browse Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVendors.map((vendor, index) => (
                <motion.div 
                  key={vendor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={vendor.image} 
                      alt={vendor.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{vendor.name}</h3>
                      <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                        {vendor.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{vendor.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Phone size={16} className="mr-2 text-primary-500" />
                        <span>{vendor.contact.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail size={16} className="mr-2 text-primary-500" />
                        <span>{vendor.contact.email}</span>
                      </div>
                      <div className="flex items-center text-primary-600">
                        <ExternalLink size={16} className="mr-2" />
                        <a 
                          href={vendor.contact.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">No businesses found</h3>
            <p className="text-gray-600 mb-4">Try changing your search criteria or check back later for new listings.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
        
        {/* Become a Vendor CTA */}
        <div className="mt-16 bg-gradient-to-br from-primary-700 to-primary-900 rounded-xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Own a Business?</h2>
              <p className="text-gray-200 mb-6">
                Join our directory and showcase your products or services to the Telugu community in Canada. 
                Get visibility, connect with customers, and grow your business with TCS Mart.
              </p>
              <button className="bg-white text-primary-800 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors flex items-center">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Become a Vendor
              </button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Business Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TcsMartPage;