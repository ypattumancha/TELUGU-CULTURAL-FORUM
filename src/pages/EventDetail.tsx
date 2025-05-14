import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Share, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

// Sample events data (would come from Firebase in a real app)
const eventsData = [
  {
    id: '1',
    title: 'TCF Premier League',
    description: 'Join us for an exciting cricket tournament with teams from across the community.',
    longDescription: `
      <p>The TCF Premier League is our flagship sports event bringing together cricket enthusiasts from across the Telugu community in Canada. This multi-weekend tournament features teams competing for the championship trophy and the glory of being crowned TCF cricket champions.</p>
      
      <p>The tournament will take place over multiple weekends, allowing teams to showcase their skills and compete in a friendly yet competitive environment. Each team will play multiple matches in a round-robin format, followed by knockout stages to determine the ultimate winner.</p>
      
      <h3>Event Highlights:</h3>
      <ul>
        <li>10 teams participating from the Greater Toronto Area</li>
        <li>Professional umpires and scoring</li>
        <li>Food and refreshments available at the venue</li>
        <li>Trophy and prizes for winners and runners-up</li>
        <li>Special recognition for best batsman, bowler, and player of the tournament</li>
      </ul>
      
      <p>Whether you're a player or a spectator, this is the perfect opportunity to enjoy the sport, make new friends, and strengthen our community bonds. Families are welcome to attend and cheer for their favorite teams!</p>
    `,
    date: 'Aug 4 - Oct 13, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Oshawa Community Fields',
    address: '123 Sports Lane, Oshawa, ON L1H 2Z5',
    image: 'https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Sports',
    organizer: 'TCF Sports Committee',
    attendees: 120,
    maxAttendees: 200,
    price: 'Free',
    registerBy: 'July 25, 2024'
  },
  {
    id: '2',
    title: 'Ganesh Chaturthi',
    description: 'Celebrate this auspicious festival with prayers, cultural performances and community feast.',
    longDescription: `
      <p>Ganesh Chaturthi is one of the most significant festivals in Hindu culture, marking the birth of Lord Ganesha. The Telugu Cultural Forum invites you to join us for a day of devotion, celebration, and community bonding as we honor Lord Ganesha with traditional rituals and cultural performances.</p>
      
      <p>Our celebration will begin with the traditional Puja ceremony, followed by bhajans and cultural performances by community members. We will also have a special community feast featuring authentic Telugu cuisine prepared by our volunteer team.</p>
      
      <h3>Event Schedule:</h3>
      <ul>
        <li>10:00 AM - 11:30 AM: Ganesh Puja and rituals</li>
        <li>11:30 AM - 1:00 PM: Bhajans and devotional songs</li>
        <li>1:00 PM - 2:30 PM: Community lunch with traditional Telugu cuisine</li>
        <li>2:30 PM - 4:30 PM: Cultural performances by community members</li>
        <li>4:30 PM - 6:00 PM: Children's activities and games</li>
        <li>6:00 PM - 8:00 PM: Evening Aarti and prasad distribution</li>
      </ul>
      
      <p>This is a family-friendly event, and we encourage everyone to bring their children to participate in the celebrations and learn about our cultural traditions. Traditional attire is encouraged but not required.</p>
      
      <p>Please register in advance so we can make appropriate arrangements for food and seating.</p>
    `,
    date: 'August 26, 2024',
    time: '10:00 AM - 8:00 PM',
    location: 'Community Hall, Oshawa',
    address: '456 Culture Blvd, Oshawa, ON L1J 3Y7',
    image: 'https://images.pexels.com/photos/13266638/pexels-photo-13266638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Festival',
    organizer: 'TCF Cultural Committee',
    attendees: 85,
    maxAttendees: 150,
    price: '$10 per person, $25 per family',
    registerBy: 'August 20, 2024'
  },
  {
    id: '3',
    title: 'Dussehra Celebrations',
    description: 'Join us for cultural performances, traditional rituals, and a community dinner.',
    longDescription: `
      <p>Dussehra (Vijaya Dashami) is a major Hindu festival that celebrates the victory of good over evil. The Telugu Cultural Forum invites you to join our community celebrations with traditional rituals, cultural performances, and a festive community dinner.</p>
      
      <p>Our Dussehra celebration will feature a special Ayudha Puja, followed by a cultural program showcasing traditional dance and music performances by community members of all ages. The evening will conclude with a community dinner featuring delicious Telugu cuisine.</p>
      
      <h3>Event Highlights:</h3>
      <ul>
        <li>Traditional Ayudha Puja ceremony</li>
        <li>Cultural performances including classical dance and music</li>
        <li>Special children's performance depicting the story of Ramayana</li>
        <li>Ravana effigy burning ceremony (symbolic)</li>
        <li>Community dinner with authentic Telugu cuisine</li>
        <li>Traditional dress competition for children and adults</li>
      </ul>
      
      <p>This is a wonderful opportunity for the younger generation to learn about our rich cultural heritage and traditions while enjoying the festive atmosphere with family and friends.</p>
      
      <p>Registration is required for this event to help us plan for food and seating arrangements.</p>
    `,
    date: 'October 2, 2024',
    time: '5:00 PM - 10:00 PM',
    location: 'Harmony Hall, Oshawa',
    address: '789 Festival Street, Oshawa, ON L1K 4T8',
    image: 'https://images.pexels.com/photos/2417726/pexels-photo-2417726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Festival',
    organizer: 'TCF Cultural Committee',
    attendees: 65,
    maxAttendees: 120,
    price: '$15 per person, $35 per family',
    registerBy: 'September 25, 2024'
  }
];

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { currentUser } = useAuth();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [registered, setRegistered] = useState(false);
  const [registrationSubmitted, setRegistrationSubmitted] = useState(false);
  
  useEffect(() => {
    // Simulate fetching event data
    const foundEvent = eventsData.find(e => e.id === id);
    
    if (foundEvent) {
      setEvent(foundEvent);
      // Update page title
      document.title = `${foundEvent.title} - Telugu Cultural Forum`;
    }
    
    setLoading(false);
    
    // Check if user is already registered (for demo purposes)
    if (currentUser) {
      // This would normally check a database
      setRegistered(Math.random() > 0.7);
    }
  }, [id, currentUser]);

  const handleRegistration = () => {
    // Simulate registration
    setRegistered(true);
    setRegistrationSubmitted(true);
    
    // Reset message after 3 seconds
    setTimeout(() => {
      setRegistrationSubmitted(false);
    }, 3000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      alert('Web Share API not supported in your browser. Please copy the URL manually.');
    }
  };

  if (loading) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading event details...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h2>
            <p className="text-gray-600 mb-6">
              The event you're looking for doesn't exist or might have been removed.
            </p>
            <Link 
              to="/events" 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container-custom">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/events" 
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to Events
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              {/* Event Image */}
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                    event.category === 'Festival' 
                      ? 'bg-secondary-500 text-white' 
                      : 'bg-primary-500 text-white'
                  }`}>
                    {event.category}
                  </span>
                </div>
                
                <button 
                  onClick={handleShare}
                  className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md"
                >
                  <Share size={18} className="text-gray-600" />
                </button>
              </div>
              
              {/* Event Details */}
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="mr-3 text-primary-500" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Clock size={18} className="mr-3 text-primary-500" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-3 text-primary-500" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Users size={18} className="mr-3 text-primary-500" />
                    <span>
                      {event.attendees} attending 
                      <span className="text-xs ml-1 text-gray-500">
                        (of {event.maxAttendees} spots)
                      </span>
                    </span>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <h2 className="text-xl font-semibold mb-4">About This Event</h2>
                  <div className="prose prose-sm max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: event.longDescription }}></div>
                </div>
                
                <div className="border-t border-gray-100 pt-6 mt-6">
                  <h2 className="text-xl font-semibold mb-4">Location</h2>
                  <p className="text-gray-600 mb-4">{event.address}</p>
                  
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.5585582569077!2d-78.86983612342188!3d43.89697937109642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51d033383567f%3A0x6bfccba0714095a!2sOshawa%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1658929935793!5m2!1sen!2sus`}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={event.location}
                    ></iframe>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6 mt-6">
                  <h2 className="text-xl font-semibold mb-4">Organizer</h2>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <User size={24} className="text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">{event.organizer}</h3>
                      <p className="text-sm text-gray-600">Telugu Cultural Forum</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Registration</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-semibold text-gray-900">{event.price}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Register by:</span>
                  <span className="font-semibold text-gray-900">{event.registerBy}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Availability:</span>
                  <span className="font-semibold text-gray-900">
                    {event.maxAttendees - event.attendees} spots left
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full" 
                    style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {registrationSubmitted && (
                <div className="mb-4 p-3 bg-success-50 text-success-700 rounded-md text-sm">
                  Registration successful! You're all set for the event.
                </div>
              )}
              
              {currentUser ? (
                <button
                  onClick={handleRegistration}
                  disabled={registered}
                  className={`w-full py-3 rounded-lg font-medium ${
                    registered
                      ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  {registered ? 'Already Registered' : 'Register Now'}
                </button>
              ) : (
                <div>
                  <Link
                    to="/login"
                    className="w-full block text-center py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 mb-3"
                  >
                    Sign In to Register
                  </Link>
                  <p className="text-sm text-gray-600 text-center">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-primary-600 font-medium">
                      Sign Up
                    </Link>
                  </p>
                </div>
              )}
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Share This Event</h3>
                <div className="flex space-x-3">
                  <button 
                    onClick={handleShare}
                    className="flex-1 py-2 bg-primary-50 text-primary-600 rounded-md hover:bg-primary-100 transition-colors"
                  >
                    Share
                  </button>
                  <a 
                    href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=20240804T090000/20241013T170000&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-primary-50 text-primary-600 text-center rounded-md hover:bg-primary-100 transition-colors"
                  >
                    Add to Calendar
                  </a>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Questions?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Contact the event organizer:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Mail size={16} className="mr-2 text-gray-400" />
                    <span className="text-primary-600">events@teluguculturalforum.ca</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone size={16} className="mr-2 text-gray-400" />
                    <span className="text-primary-600">+1 (905) 213-9145</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;