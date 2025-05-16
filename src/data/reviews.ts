export interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  service: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'The real estate team was exceptional in helping us find our dream home. Their expertise and dedication made the entire process smooth and stress-free.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    service: 'Real Estate Services'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'Their legal consultation services were invaluable for my business. They provided clear guidance and helped us navigate complex regulations effectively.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    service: 'Legal Consultation'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Event Planner',
    content: 'The catering service exceeded our expectations. The food was exceptional, and their attention to detail made our event truly memorable.',
    rating: 4,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    service: 'Catering Service'
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Homeowner',
    content: 'Outstanding basement renovation work! They transformed our space into exactly what we envisioned, maintaining high quality throughout the project.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    service: 'Basement Renovations'
  },
  {
    id: '5',
    name: 'Priya Patel',
    role: 'Student',
    content: 'The online Indian Carnatic music classes have been fantastic. The instructors are highly skilled and provide personalized attention to each student.',
    rating: 5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    service: 'Online Indian Carnatic Music'
  }
];