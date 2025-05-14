import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample blog posts data (would come from Firebase in a real app)
const blogPostsData = [
  {
    id: '1',
    title: 'Highlights from our Ugadi Celebrations',
    excerpt: 'Recap of our community\'s joyous Ugadi celebrations, featuring cultural performances, traditional food, and more.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum...',
    date: 'April 10, 2024',
    author: 'Priya Sharma',
    image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Events',
    tags: ['Ugadi', 'Festival', 'Cultural Celebration']
  },
  {
    id: '2',
    title: 'Interview with Community Leader Dr. Raju',
    excerpt: 'Learn about Dr. Raju\'s journey in Canada and his vision for strengthening our Telugu community.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum...',
    date: 'March 22, 2024',
    author: 'Aditya Kumar',
    image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Community',
    tags: ['Leadership', 'Interview', 'Community Building']
  },
  {
    id: '3',
    title: 'How to Grow Your Own Vegetable Garden in Canada',
    excerpt: 'Tips and techniques for growing traditional Indian vegetables in the Canadian climate.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum...',
    date: 'March 15, 2024',
    author: 'Lakshmi Reddy',
    image: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Lifestyle',
    tags: ['Gardening', 'Vegetables', 'Home']
  },
  {
    id: '4',
    title: 'Telugu Film Festival Coming to Oshawa',
    excerpt: 'Exciting news for cinema lovers! A Telugu film festival is coming to Oshawa next month.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum...',
    date: 'March 5, 2024',
    author: 'Kiran Kumar',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Entertainment',
    tags: ['Movies', 'Film Festival', 'Cultural Events']
  },
  {
    id: '5',
    title: 'Financial Planning for New Immigrants',
    excerpt: 'Essential financial planning tips for Telugu families who recently moved to Canada.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum...',
    date: 'February 28, 2024',
    author: 'Ramesh Patel',
    image: 'https://images.pexels.com/photos/4386396/pexels-photo-4386396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Guidance',
    tags: ['Finance', 'Immigration', 'Planning']
  },
  {
    id: '6',
    title: 'TCF Cricket Tournament Highlights',
    excerpt: 'Relive the exciting moments from our recent cricket tournament that brought the community together.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum...',
    date: 'February 15, 2024',
    author: 'Suresh Reddy',
    image: 'https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Sports',
    tags: ['Cricket', 'Tournament', 'Community Sports']
  }
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPostsData);
  
  // Update page title
  useEffect(() => {
    document.title = 'Blog - Telugu Cultural Forum';
  }, []);

  // Filter posts based on search term and category
  useEffect(() => {
    const filtered = blogPostsData.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(blogPostsData.map(post => post.category)))];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with news, stories, and insights from our community.
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
                  placeholder="Search articles by title, content, author, or tags"
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
        
        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`} className="block h-full">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full border border-gray-100">
                    {/* Blog Category Badge */}
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          post.category === 'Events' 
                            ? 'bg-secondary-500 text-white' 
                            : post.category === 'Community'
                            ? 'bg-primary-500 text-white'
                            : post.category === 'Lifestyle'
                            ? 'bg-accent-500 text-white'
                            : post.category === 'Entertainment'
                            ? 'bg-purple-500 text-white'
                            : post.category === 'Guidance'
                            ? 'bg-emerald-500 text-white'
                            : 'bg-blue-500 text-white'
                        }`}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      {/* Post Meta */}
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-end">
                        <span className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-800 transition-colors">
                          Read More
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
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-gray-600 mb-4">Try changing your search criteria or check back later for new articles.</p>
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

export default BlogPage;