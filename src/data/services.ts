import { type IconType } from 'lucide-react';
import { Home, Calculator, Scale, Shield, Plane, GraduationCap, UtensilsCrossed, Globe, CalendarDays, Fence, Lightbulb, Trash2, Construction, Wrench, Ticket as Cricket, Music, Camera, Cog as Yoga } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  category: ServiceCategory;
}

export type ServiceCategory = 
  | 'property'
  | 'financial'
  | 'legal'
  | 'lifestyle'
  | 'home'
  | 'entertainment';

export const serviceCategories: Record<ServiceCategory, { name: string; color: string }> = {
  property: { name: 'Property Services', color: 'bg-blue-500' },
  financial: { name: 'Financial Services', color: 'bg-emerald-500' },
  legal: { name: 'Legal Services', color: 'bg-violet-500' },
  lifestyle: { name: 'Lifestyle Services', color: 'bg-amber-500' },
  home: { name: 'Home Services', color: 'bg-rose-500' },
  entertainment: { name: 'Entertainment Services', color: 'bg-indigo-500' },
};

export const services: Service[] = [
  {
    id: 'real-estate',
    title: 'Real Estate Services',
    description: 'Whether you are buying, selling, or renting property, our real estate services provide expert guidance and support to meet your goals.',
    icon: Home,
    category: 'property'
  },
  {
    id: 'mortgage',
    title: 'Mortgage Advice',
    description: 'Get advice on mortgages tailored to your financial situation. We help you navigate the complexities of mortgage options and find the best solution for you.',
    icon: Calculator,
    category: 'financial'
  },
  {
    id: 'legal',
    title: 'Legal Consultation',
    description: 'Our legal services cover a range of areas including business law, family law, and more. Get expert advice and representation tailored to your legal needs.',
    icon: Scale,
    category: 'legal'
  },
  {
    id: 'insurance',
    title: 'Insurance Services',
    description: 'Explore our insurance services including life, health, and property insurance. We provide comprehensive coverage tailored to your needs.',
    icon: Shield,
    category: 'financial'
  },
  {
    id: 'immigration',
    title: 'Immigration Assistance',
    description: 'Navigate immigration processes smoothly with our comprehensive assistance. Whether for work, study, or residency, we provide guidance and support.',
    icon: Plane,
    category: 'legal'
  },
  {
    id: 'training',
    title: 'Training Programs',
    description: 'Enhance your skills and knowledge with our training programs. From professional development to specialized courses, we offer learning opportunities for all.',
    icon: GraduationCap,
    category: 'lifestyle'
  },
  {
    id: 'catering',
    title: 'Catering Service',
    description: 'Experience the finest catering services for your events and gatherings. Our expert team ensures delicious food and exceptional service tailored to your needs.',
    icon: UtensilsCrossed,
    category: 'lifestyle'
  },
  {
    id: 'web-dev',
    title: 'Web Development and Digital Marketing',
    description: 'We provide top-notch web development services and digital marketing solutions to help you build a strong online presence.',
    icon: Globe,
    category: 'lifestyle'
  },
  {
    id: 'event-management',
    title: 'Event Management',
    description: 'Let us handle your events with precision and creativity. From planning to execution, we ensure seamless and memorable experiences.',
    icon: CalendarDays,
    category: 'lifestyle'
  },
  {
    id: 'fence',
    title: 'Fence Installation',
    description: 'Professional fence installation services tailored to your property\'s needs. Enhance security and privacy with our expert solutions.',
    icon: Fence,
    category: 'home'
  },
  {
    id: 'potlight',
    title: 'Pot Light Installation',
    description: 'Upgrade your lighting with our pot light installation services. Transform your space with energy-efficient and stylish lighting solutions.',
    icon: Lightbulb,
    category: 'home'
  },
  {
    id: 'cleaning',
    title: 'Home Maintenance - Cleaning',
    description: 'Keep your home clean and tidy with our professional cleaning services. We offer regular and deep cleaning options tailored to your schedule.',
    icon: Trash2,
    category: 'home'
  },
  {
    id: 'basement',
    title: 'Basement Renovations',
    description: 'Transform your basement into a functional and beautiful space with our renovation services. From design to execution, we ensure high-quality results.',
    icon: Construction,
    category: 'home'
  },
  {
    id: 'plumbing',
    title: 'Plumbing and Gas Installation',
    description: 'Expert plumbing and gas installation services to ensure the safety and efficiency of your home or business infrastructure.',
    icon: Wrench,
    category: 'home'
  },
  {
    id: 'cricket',
    title: 'Cricket Equipment',
    description: 'High-quality cricket equipment including bats, balls, helmets, shoes, and customized t-shirts for cricket enthusiasts.',
    icon: Cricket,
    category: 'entertainment'
  },
  {
    id: 'music',
    title: 'Online Indian Carnatic Music and Dance Service',
    description: 'Learn and experience traditional Indian Carnatic music and dance through our online classes. Our expert instructors provide personalized guidance.',
    icon: Music,
    category: 'entertainment'
  },
  {
    id: 'photography',
    title: 'Photography for All Occasions',
    description: 'Capture your special moments with our professional photography services for weddings, parties, corporate events, and more.',
    icon: Camera,
    category: 'entertainment'
  },
  {
    id: 'yoga',
    title: 'Online Yoga',
    description: 'Join our online yoga classes and improve your physical and mental well-being. Suitable for all levels, from beginners to advanced practitioners.',
    icon: Yoga,
    category: 'entertainment'
  }
];