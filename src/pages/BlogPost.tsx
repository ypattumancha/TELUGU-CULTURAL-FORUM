import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ChevronLeft, MessageCircle, ThumbsUp, Share } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

// Sample blog posts data (would come from Firebase in a real app)
const blogPostsData = [
  {
    id: '1',
    title: 'Highlights from our Ugadi Celebrations',
    excerpt: 'Recap of our community\'s joyous Ugadi celebrations, featuring cultural performances, traditional food, and more.',
    content: `
      <p>This year's Ugadi celebrations at the Telugu Cultural Forum were truly memorable, bringing together over 200 members of our community for a day of cultural richness, tradition, and joy.</p>
      
      <p>Ugadi, marking the Telugu New Year, is one of our most significant festivals. Our celebration began with the traditional Panchanga Sravanam, where the priest shared predictions for the coming year based on the Telugu almanac. This was followed by a special Ugadi prayer ceremony that set a beautiful spiritual tone for the event.</p>
      
      <h3>Cultural Performances</h3>
      
      <p>The cultural program was the highlight of the celebration, featuring performances by community members of all ages. The children's dance troupe performed a beautiful traditional dance depicting the story of Lord Krishna, while the youth group presented a modern fusion piece that blended classical Telugu dance forms with contemporary movements.</p>
      
      <p>Several talented singers from our community performed classical Telugu songs and popular movie hits, creating a nostalgic atmosphere that transported many back to their roots. The variety of performances showcased the rich cultural heritage of Telugu people while celebrating the evolving nature of our traditions.</p>
      
      <h3>Traditional Feast</h3>
      
      <p>No Ugadi celebration would be complete without the traditional feast, and this year's spread was exceptional. The volunteer cooking team prepared an authentic Telugu meal, including:</p>
      
      <ul>
        <li>Pulihora (tamarind rice)</li>
        <li>Bobbatlu (sweet flatbread)</li>
        <li>Ugadi pachadi (the symbolic mixture of six tastes)</li>
        <li>Mango rice</li>
        <li>Various curries and sweets</li>
      </ul>
      
      <p>The Ugadi pachadi, with its combination of sweet, sour, bitter, salty, spicy, and astringent flavors, symbolizes the different experiences we encounter in life. Sharing this special dish is a reminder that life brings a mixture of joys and challenges, all of which we embrace as part of our journey.</p>
      
      <h3>Community Connections</h3>
      
      <p>Beyond the formal celebrations, the event provided a wonderful opportunity for community members to connect, especially for newcomers to meet established members. We welcomed several families who recently moved to Canada, helping them forge connections that will ease their transition to life in a new country.</p>
      
      <p>The children enjoyed traditional games and activities, learning about their cultural heritage in an engaging and fun environment. Many parents expressed appreciation for this cultural education, which helps children stay connected to their roots while growing up in Canada.</p>
      
      <h3>Looking Forward</h3>
      
      <p>As we begin the Telugu New Year, the TCF remains committed to creating spaces where our community can celebrate our cultural traditions, forge meaningful connections, and pass our heritage on to the next generation.</p>
      
      <p>We extend our heartfelt thanks to all the volunteers who made this event possible, from the organizing committee to the cooking team, decorators, and performers. Your dedication to preserving and sharing our culture enriches our entire community.</p>
      
      <p>We look forward to many more celebrations throughout the year and invite all community members to participate in upcoming events.</p>
    `,
    date: 'April 10, 2024',
    author: 'Priya Sharma',
    authorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Events',
    tags: ['Ugadi', 'Festival', 'Cultural Celebration'],
    comments: [
      {
        id: 'c1',
        author: 'Rajesh Kumar',
        authorAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content: `It was such a wonderful celebration! The food was amazing and the cultural performances were top-notch. Looking forward to next year!`,
        date: 'April 11, 2024',
        likes: 5
      },
      {
        id: 'c2',
        author: 'Lakshmi Reddy',
        authorAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content: `Thank you to all the volunteers who made this event possible. My children especially enjoyed the traditional games and activities.`,
        date: 'April 12, 2024',
        likes: 3
      }
    ],
    likes: 24,
    views: 156
  },
  {
    id: '2',
    title: 'Interview with Community Leader Dr. Raju',
    excerpt: 'Learn about Dr. Raju\'s journey in Canada and his vision for strengthening our Telugu community.',
    content: `
      <p>Dr. Venkata Raju, a prominent figure in our Telugu community in Canada, recently sat down with us to share his inspiring journey, his vision for our community, and his advice for newcomers. As a successful physician and dedicated community leader, Dr. Raju's insights offer valuable perspective on building a thriving cultural community in a new country.</p>
      
      <h3>Early Days in Canada</h3>
      
      <p>Dr. Raju arrived in Canada in 1998 as a young medical graduate looking to further his education and eventually build a practice. "The early days were challenging," he recalls. "While my medical training was excellent, adapting to a new healthcare system, cultural differences, and the Canadian winter all at once was quite overwhelming."</p>
      
      <p>He credits the small but tight-knit Telugu community that existed at that time for helping him navigate those challenges. "There were perhaps only 30-40 Telugu families in our area then, but they were incredibly supportive. Someone would invite me for dinner every weekend, others helped me prepare for my medical licensing exams, and one family even let me stay with them until I found my footing."</p>
      
      <h3>Building Professional Success</h3>
      
      <p>Today, Dr. Raju runs a successful family medicine practice and has helped many other international medical graduates navigate the path to practicing in Canada. "The journey taught me persistence and adaptability," he says. "These are qualities that serve us well both professionally and in preserving our cultural identity in a new country."</p>
      
      <p>He believes that professional success and cultural connection go hand in hand. "Being grounded in your cultural identity gives you confidence and perspective that can actually help you succeed professionally in a multicultural society like Canada."</p>
      
      <h3>Vision for Our Community</h3>
      
      <p>As one of the founding members of the Telugu Cultural Forum, Dr. Raju has a clear vision for our community's future. "I want to see us build bridges - between generations, between recent immigrants and those who have been here longer, and between our community and the broader Canadian society."</p>
      
      <p>He emphasizes the importance of passing cultural knowledge to the younger generation. "Our children should understand and take pride in their heritage while fully participating in Canadian society. It shouldn't be an either/or proposition."</p>
      
      <p>Dr. Raju is particularly passionate about mentorship programs. "I'd like to see established professionals in our community formally mentoring newcomers and youth. This knowledge transfer is crucial for our collective success."</p>
      
      <h3>Advice for Newcomers</h3>
      
      <p>When asked what advice he would give to Telugu families recently arrived in Canada, Dr. Raju offers three key suggestions:</p>
      
      <ol>
        <li><strong>Embrace both cultures:</strong> "Don't feel pressured to choose between your Telugu identity and becoming Canadian. The beauty of Canada is that you can honor your heritage while embracing your new home."</li>
        <li><strong>Build diverse networks:</strong> "Connect with the Telugu community for cultural support, but also build relationships with colleagues, neighbors, and friends from all backgrounds."</li>
        <li><strong>Contribute your talents:</strong> "Find ways to contribute to both our community and the broader Canadian society. This creates a sense of belonging and purpose."</li>
      </ol>
      
      <h3>Looking to the Future</h3>
      
      <p>Dr. Raju is optimistic about the future of the Telugu community in Canada. "We've grown from a few dozen families to thousands. We're increasingly visible in professional fields, business, arts, and community service. The next step is to ensure we're passing on not just our traditions but also the values that help us thrive here - education, hard work, family bonds, and community service."</p>
      
      <p>He encourages everyone to participate actively in TCF events and initiatives. "Cultural identity isn't preserved passively. It requires active engagement from all of us - teaching our children our language, preparing traditional foods, celebrating festivals, and supporting each other through life's challenges."</p>
      
      <p>As our interview concludes, Dr. Raju shares a final thought: "When I came to Canada 26 years ago, I never imagined we would have such a vibrant Telugu community here today. It makes me proud and gives me hope that our cultural heritage will continue to thrive for generations to come."</p>
    `,
    date: 'March 22, 2024',
    author: 'Aditya Kumar',
    authorAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Community',
    tags: ['Leadership', 'Interview', 'Community Building'],
    comments: [
      {
        id: 'c1',
        author: 'Srinivas Rao',
        authorAvatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content: `Dr. Raju has been such an inspiration to many of us! His mentorship program helped me find my first job in Canada.`,
        date: 'March 23, 2024',
        likes: 7
      }
    ],
    likes: 18,
    views: 94
  },
  {
    id: '3',
    title: 'How to Grow Your Own Vegetable Garden in Canada',
    excerpt: 'Tips and techniques for growing traditional Indian vegetables in the Canadian climate.',
    content: `
      <p>Many Telugu families in Canada miss the fresh, flavorful vegetables from back home. The good news is that with some adaptation and planning, you can successfully grow many traditional Indian vegetables right in your Canadian backyard or balcony. This guide will help you get started with your own vegetable garden in Canada's climate.</p>
      
      <h3>Understanding Canadian Growing Seasons</h3>
      
      <p>The most important first step is understanding Canada's shorter growing season compared to India. In most parts of Canada, the outdoor growing season lasts from May to October, with the risk of frost before and after these months. This means you need to:</p>
      
      <ul>
        <li>Start many plants indoors 6-8 weeks before the last frost date in your area</li>
        <li>Focus on vegetables that mature quickly</li>
        <li>Use season extension techniques for heat-loving plants</li>
      </ul>
      
      <h3>Indian Vegetables That Grow Well in Canada</h3>
      
      <p>Many vegetables used in Telugu cuisine can be grown successfully in Canada:</p>
      
      <h4>Easy to Grow:</h4>
      <ul>
        <li><strong>Spinach (Palak):</strong> Grows well in cooler weather, perfect for spring and fall planting</li>
        <li><strong>Fenugreek (Methi):</strong> Grows quickly and prefers cooler temperatures</li>
        <li><strong>Coriander (Kothimeera):</strong> Can be grown throughout the season with successive plantings</li>
        <li><strong>Green Chilies (Pacchi Mirapakayalu):</strong> Many varieties grow well in pots and gardens</li>
        <li><strong>Beans (Chikkudukaya):</strong> Both bush and pole varieties thrive in summer</li>
      </ul>
      
      <h4>Require More Care:</h4>
      <ul>
        <li><strong>Okra (Bendakaya):</strong> Needs warm soil and full sun; start indoors in most regions</li>
        <li><strong>Bottle Gourd (Sorakaya):</strong> Requires trellising and a long growing season</li>
        <li><strong>Eggplant (Vankaya):</strong> Start indoors early and provide plenty of heat</li>
        <li><strong>Ridge Gourd (Beerakaya):</strong> Needs trellising and warm conditions</li>
        <li><strong>Bitter Gourd (Kakarakaya):</strong> Challenging but possible with a greenhouse or indoor start</li>
      </ul>
      
      <h3>Getting Started</h3>
      
      <p>Here's a simple step-by-step guide to start your garden:</p>
      
      <ol>
        <li><strong>Choose your location:</strong> Most vegetables need 6-8 hours of sunlight daily. A south-facing area is ideal.</li>
        <li><strong>Prepare your soil:</strong> Canadian soil is often different from what these vegetables prefer in India. Enrich your garden soil with compost or well-rotted manure before planting.</li>
        <li><strong>Start seeds indoors:</strong> For many Indian vegetables, starting seeds indoors in March or April is necessary. Use seed-starting mix and provide plenty of light.</li>
        <li><strong>Transplant carefully:</strong> After all danger of frost has passed (usually mid-May in Southern Ontario), gradually acclimate your seedlings to outdoor conditions before transplanting.</li>
        <li><strong>Provide support:</strong> Many Indian gourds and climbing vegetables need sturdy trellises or supports.</li>
        <li><strong>Water regularly:</strong> Consistent moisture is key, especially for fruiting vegetables.</li>
      </ol>
      
      <h3>Season Extension Techniques</h3>
      
      <p>To maximize your growing season in Canada's climate:</p>
      
      <ul>
        <li><strong>Raised beds:</strong> Soil in raised beds warms faster in spring</li>
        <li><strong>Row covers:</strong> Lightweight fabric that protects from light frost and insects</li>
        <li><strong>Cold frames:</strong> Mini greenhouses that extend the season by weeks</li>
        <li><strong>Black plastic mulch:</strong> Warms the soil for heat-loving plants</li>
        <li><strong>Container gardening:</strong> Pots can be moved indoors during cold spells</li>
      </ul>
      
      <h3>Community Resources</h3>
      
      <p>Our Telugu community has several experienced gardeners who are happy to share advice:</p>
      
      <ul>
        <li>Join the TCF Gardening Group that meets monthly to exchange seeds and tips</li>
        <li>Attend our annual seed exchange in February</li>
        <li>Participate in our community garden plot at Oshawa Community Gardens</li>
      </ul>
      
      <p>Growing traditional vegetables connects us to our culinary heritage while adapting to our new home. The satisfaction of harvesting your own fresh, organic produce is well worth the effort. Many TCF members report that gardening has become a rewarding family activity that helps children connect with their cultural roots in a tangible way.</p>
      
      <p>We'd love to see your garden successes! Share photos of your homegrown vegetables in the comments or at our next community meeting.</p>
    `,
    date: 'March 15, 2024',
    author: 'Lakshmi Reddy',
    authorAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    image: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Lifestyle',
    tags: ['Gardening', 'Vegetables', 'Home'],
    comments: [
      {
        id: 'c1',
        author: 'Venkat Rao',
        authorAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content: `I've been trying to grow bitter gourd for years without success. Will definitely try the greenhouse method mentioned here!`,
        date: 'March 16, 2024',
        likes: 2
      },
      {
        id: 'c2',
        author: 'Priya Sharma',
        authorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content: `The community garden plot has been such a wonderful resource. My children love harvesting vegetables there!`,
        date: 'March 17, 2024',
        likes: 4
      },
      {
        id: 'c3',
        author: 'Anil Kumar',
        authorAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content: `Great article! Does anyone have tips for growing curry leaves in Canada? Mine always die in winter.`,
        date: 'March 18, 2024',
        likes: 1
      }
    ],
    likes: 32,
    views: 215
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { currentUser } = useAuth();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [liked, setLiked] = useState(false);
  
  useEffect(() => {
    // Simulate fetching post data
    const foundPost = blogPostsData.find(p => p.id === id);
    
    if (foundPost) {
      setPost(foundPost);
      // Update page title
      document.title = `${foundPost.title} - Telugu Cultural Forum`;
    }
    
    setLoading(false);
    
    // Check if user has liked the post (for demo purposes)
    if (currentUser) {
      setLiked(Math.random() > 0.7);
    }
  }, [id, currentUser]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!commentText.trim()) return;
    
    // Simulate adding a comment
    setSubmitting(true);
    
    setTimeout(() => {
      const newComment = {
        id: `c${post.comments.length + 1}`,
        author: currentUser?.displayName || 'Anonymous User',
        authorAvatar: currentUser?.photoURL || 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content: commentText,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        likes: 0
      };
      
      setPost({
        ...post,
        comments: [newComment, ...post.comments]
      });
      
      setCommentText('');
      setSubmitting(false);
    }, 1000);
  };

  const handleLike = () => {
    setLiked(!liked);
    setPost({
      ...post,
      likes: liked ? post.likes - 1 : post.likes + 1
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
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
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h2>
            <p className="text-gray-600 mb-6">
              The article you're looking for doesn't exist or might have been removed.
            </p>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Blog
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
            to="/blog" 
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to Blog
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
              {/* Featured Image */}
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-64 md:h-80 object-cover"
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
              
              {/* Article Content */}
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
                
                {/* Author & Date */}
                <div className="flex items-center mb-6">
                  <img 
                    src={post.authorAvatar} 
                    alt={post.author} 
                    className="h-10 w-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{post.author}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
                
                {/* Article Body */}
                <div className="prose prose-lg max-w-none text-gray-700 mb-8" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                
                {/* Tags */}
                <div className="border-t border-gray-100 pt-6 mt-6">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string, idx: number) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                      >
                        <Tag size={14} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Article Footer */}
                <div className="border-t border-gray-100 pt-6 mt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <button 
                        onClick={handleLike}
                        className={`flex items-center space-x-1 ${liked ? 'text-secondary-500' : 'text-gray-500 hover:text-secondary-500'}`}
                      >
                        <ThumbsUp size={18} className={liked ? 'fill-current' : ''} />
                        <span>{post.likes}</span>
                      </button>
                      
                      <div className="flex items-center space-x-1 text-gray-500">
                        <MessageCircle size={18} />
                        <span>{post.comments.length}</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={handleShare}
                      className="text-gray-500 hover:text-primary-500"
                    >
                      <Share size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Comments Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-xl font-semibold mb-6">Comments ({post.comments.length})</h2>
              
              {/* Comment Form */}
              {currentUser ? (
                <form onSubmit={handleCommentSubmit} className="mb-8">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={currentUser.photoURL || 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} 
                      alt={currentUser.displayName || 'User'} 
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <textarea
                        rows={3}
                        placeholder="Share your thoughts..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        required
                      ></textarea>
                      <div className="mt-2 flex justify-end">
                        <button 
                          type="submit" 
                          className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                          disabled={submitting || !commentText.trim()}
                        >
                          {submitting ? 'Posting...' : 'Post Comment'}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 mb-2">Log in to join the conversation.</p>
                  <Link 
                    to="/login" 
                    className="text-primary-600 font-medium hover:underline"
                  >
                    Sign In
                  </Link>
                </div>
              )}
              
              {/* Comments List */}
              <div className="space-y-6">
                {post.comments.map((comment: any) => (
                  <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-0">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={comment.authorAvatar} 
                        alt={comment.author} 
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-900">{comment.author}</h4>
                          <span className="text-sm text-gray-500">{comment.date}</span>
                        </div>
                        <p className="mt-2 text-gray-700">{comment.content}</p>
                        <div className="mt-2 flex items-center">
                          <button className="text-gray-500 hover:text-secondary-500 flex items-center space-x-1">
                            <ThumbsUp size={14} />
                            <span>{comment.likes}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Author Card */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">About the Author</h3>
              <div className="flex items-center">
                <img 
                  src={post.authorAvatar} 
                  alt={post.author} 
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{post.author}</h4>
                  <p className="text-sm text-gray-600">TCF Content Contributor</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                {post.author} is an active member of the Telugu Cultural Forum who contributes regularly 
                to our blog with insights on community events and cultural topics.
              </p>
            </div>
            
            {/* Post Stats */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Article Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-primary-600">{post.views}</span>
                  <span className="text-sm text-gray-600">Views</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-secondary-500">{post.likes}</span>
                  <span className="text-sm text-gray-600">Likes</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-accent-500">{post.comments.length}</span>
                  <span className="text-sm text-gray-600">Comments</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-success-500">
                    {Math.floor(post.content.length / 1000)}
                  </span>
                  <span className="text-sm text-gray-600">Min Read</span>
                </div>
              </div>
            </div>
            
            {/* Related Tags */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Related Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, idx: number) => (
                  <Link 
                    key={idx} 
                    to={`/blog?tag=${tag}`} 
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-primary-100 hover:text-primary-800 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Share Article */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Share This Article</h3>
              <button 
                onClick={handleShare}
                className="w-full py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center"
              >
                <Share size={16} className="mr-2" />
                Share with Friends
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;