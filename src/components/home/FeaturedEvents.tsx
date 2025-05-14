import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

// Sample event data (would come from Firebase in a real app)
const events = [
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
  }
];

const FeaturedEvents = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Upcoming Events</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Join us for these exciting events and celebrations that bring our community together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {events.map((event) => (
            <div key={event.id} className="group">
              <Link to={`/events/${event.id}`} className="block">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
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
                          : 'bg-primary-500 text-white'
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
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Link 
            to="/events" 
            className="btn-outline"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;