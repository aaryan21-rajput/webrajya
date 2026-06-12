export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  category: 'development' | 'design' | 'marketing';
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string };
  projectUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  rating: number;
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
  duration: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  billing: string;
  features: string[];
  badge?: string;
  popular?: boolean;
  ctaText: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
