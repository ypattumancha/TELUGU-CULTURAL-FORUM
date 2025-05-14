import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

// Sample blog posts (would come from Firebase in a real app)
const blogPosts = [
  {
    id: '1',
    title: 'Highlights from our Ugadi Celebrations',
    excerpt: 'Recap of our community\'s joyous Ugadi celebrations, featuring cultural performances, traditional food, and more.',
    date: 'April 10, 2024',
    author: 'Priya Sharma',
    image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Events'
  },
  {
    id: '2',
    title: 'Interview with Community Leader Ananda Yarradoddi',
    excerpt: 'Learn about Ananda Yarradoddi\'s journey in Canada and his vision for strengthening our Telugu community.',
    date: 'March 22, 2024',
    author: 'Yashovardhan Pattumanchala',
    image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Community'
  },
  {
    id: '3',
    title: 'How to Grow Your Own Vegetable Garden in Canada',
    excerpt: 'Tips and techniques for growing traditional Indian vegetables in the Canadian climate.',
    date: 'March 15, 2024',
    author: 'Lakshmi Reddy',
    image: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Lifestyle'
  }
];

const BlogPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest from Our Blog</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Stay updated with news, stories, and insights from our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="group">
              <Link to={`/blog/${post.id}`} className="block">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
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
                          : 'bg-accent-500 text-white'
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
                    
                    <div className="flex justify-end">
                      <span className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-800 transition-colors">
                        Read More
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
            to="/blog" 
            className="btn-outline"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;