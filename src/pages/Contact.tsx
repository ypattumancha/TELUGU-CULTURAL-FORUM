import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, User } from 'lucide-react';
import { motion } from 'framer-motion';

// Team members data
const teamMembers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'President',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Vice President',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Venkat Reddy',
    role: 'Secretary',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Lakshmi Devi',
    role: 'Treasurer',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<{
    success?: string;
    error?: string;
  }>({});
  
  // Update page title
  useEffect(() => {
    document.title = 'Contact Us - Telugu Cultural Forum';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        success: 'Thank you for your message! We will get back to you soon.'
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({});
      }, 5000);
    }, 1000);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to get involved with the Telugu Cultural Forum? 
            We'd love to hear from you!
          </p>
        </div>
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <div className="bg-primary-50 p-4 rounded-full mb-4">
              <Phone className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Call / WhatsApp</h3>
            <p className="text-gray-600 mb-2">+1 (905) 213-9145</p>
            <p className="text-sm text-gray-500">Mon-Fri: 9am-5pm EST</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <div className="bg-primary-50 p-4 rounded-full mb-4">
              <Mail className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-2">teluguculturalforum@gmail.com</p>
            <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <div className="bg-primary-50 p-4 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-2">Oshawa, Ontario, Canada</p>
            <p className="text-sm text-gray-500">During events and celebrations</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            
            {formStatus.success && (
              <div className="mb-6 p-4 bg-success-50 text-success-700 rounded-md">
                {formStatus.success}
              </div>
            )}
            
            {formStatus.error && (
              <div className="mb-6 p-4 bg-error-50 text-error-700 rounded-md">
                {formStatus.error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Event Information">Event Information</option>
                  <option value="Membership">Membership</option>
                  <option value="Volunteer">Volunteer Opportunities</option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
          
          {/* Team Members */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row items-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-24 h-24 object-cover"
                    />
                    <div className="p-4 text-center sm:text-left">
                      <h3 className="font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-primary-600 text-sm">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-primary-50 rounded-xl p-6 mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Join Our Team</h3>
              <p className="text-gray-600 mb-4">
                We're always looking for passionate volunteers to help with events, 
                community outreach, and more!
              </p>
              <button className="btn-primary text-sm py-2">
                Learn About Volunteering
              </button>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.5585582569077!2d-78.86983612342188!3d43.89697937109642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51d033383567f%3A0x6bfccba0714095a!2sOshawa%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1658929935793!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Telugu Cultural Forum Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;