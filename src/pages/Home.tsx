import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import FeaturedEvents from '../components/home/FeaturedEvents';
import BlogPreview from '../components/home/BlogPreview';
import CTA from '../components/home/CTA';

const Home = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Telugu Cultural Forum - Celebrating Culture & Community in Canada';
  }, []);

  return (
    <div>
      <Hero />
      <AboutSection />
      <FeaturedEvents />
      <BlogPreview />
      <CTA />
    </div>
  );
};

export default Home;