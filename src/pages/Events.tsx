import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Search, Filter, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample events data (would come from Firebase in a real app)
const eventsData = [
  {
    id: '1',
    title: 'TCF Premier League',
    description: 'Join us for an exciting cricket tournament with teams from across the community.',
    date: 'Aug 4 - Oct 13, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Oshawa Community Fields',
    image: 'https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Sports'
  },
  {
    id: '2',
    title: 'Ganesh Chaturthi',
    description: 'Celebrate this auspicious festival with prayers, cultural performances and community feast.',
    date: 'August 26, 2024',
    time: '10:00 AM - 8:00 PM',
    location: 'Community Hall, Oshawa',
    image: 'https://images.pexels.com/photos/13266638/pexels-photo-13266638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Festival'
  },
  {
    id: '3',
    title: 'Dussehra Celebrations',
    description: 'Join us for cultural performances, traditional rituals, and a community dinner.',
    date: 'October 2, 2024',
    time: '5:00 PM - 10:00 PM',
    location: 'Harmony Hall, Oshawa',
    image: 'https://images.pexels.com/photos/2417726/pexels-photo-2417726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Festival'
  },
  {
    id: '4',
    title: 'Diwali Celebration',
    description: 'Join us for a grand Diwali celebration with lights, firecrackers, and cultural performances.',
    date: 'October 20, 2024',
    time: '6:00 PM - 11:00 PM',
    location: 'Downtown Convention Center, Oshawa',
    image: 'https://images.pexels.com/photos/2386348/pexels-photo-2386348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Festival'
  },
  {
    id: '5',
    title: 'TCF Anniversary Celebration',
    description: 'Celebrating 5 years of the Telugu Cultural Forum with special performances and recognition.',
    date: 'November 15, 2024',
    time: '3:00 PM - 9:00 PM',
    location: 'Royal Event Center, Oshawa',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Community'
  },
  {
    id: '6',
    title: 'Christmas Celebration',
    description: 'Celebrate the holiday season with a community dinner and gift exchange.',
    date: 'December 25, 2024',
    time: '5:00 PM - 10:00 PM',
    location: 'Community Hall, Oshawa',
    image: 'https://images.pexels.com/photos/3303614/pexels-photo-3303614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Festival'
  },
  {
    id: '7',
    title: 'Sankranthi 2025',
    description: 'Welcome the harvest festival with traditional games, music, and authentic Telugu cuisine.',
    date: 'January 14, 2025',
    time: '11:00 AM - 8:00 PM',
    location: 'Cultural Center, Oshawa',
    image: 'https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Festival'
  }
];

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  
  // Update page title
  useEffect(() => {
    document.title = 'Events - Telugu Cultural Forum';
  }, []);

  // Filter events based on search term and category
  useEffect(() => {
    const filtered = eventsData.filter((event) => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredEvents(filtered);
  }, [searchTerm, selectedCategory]);

  const categories = ['All', 'Festival', 'Sports', 'Community'];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for these exciting cultural events and community gatherings throughout the year.
          </p>
        </div>
        
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
                  placeholder="Search events by name, description, or location"
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
                  <Filter className="h-5 w-5 text-gray-400" />
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
        
        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/events/${event.id}`} className="block">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    {/* Event Category Badge */}
                    <div className="relative">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.category === 'Festival' 
                            ? 'bg-secondary-500 text-white' 
                            : event.category === 'Sports'
                            ? 'bg-primary-500 text-white'
                            : 'bg-accent-500 text-white'
                        }`}>
                          {event.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar size={16} className="mr-2 text-primary-500" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <Clock size={16} className="mr-2 text-primary-500" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <MapPin size={16} className="mr-2 text-primary-500" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <span className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-800 transition-colors">
                          View Details
                          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-gray-600 mb-4">Try changing your search criteria or check back later for new events.</p>
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
      </div>
    </div>
  );
};

export default EventsPage;