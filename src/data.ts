import { Service, PortfolioItem, Testimonial, ProcessStage, PricingPlan, FAQ } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Bespoke high-performance web applications built on cutting-edge frameworks (React, Vite, Node). Clean architecture and ultra-fast load times.',
    iconName: 'Code',
    features: ['React & Next.js/Vite speed', 'Highly secure production code', 'Responsive on all viewports'],
    category: 'development',
    badge: 'Popular'
  },
  {
    id: 'landing-pages',
    title: 'High-Converting Landing Pages',
    description: 'Expertly structured single-page layouts designed specifically to capture attention, maximize lead generation, and multiply your conversion rates.',
    iconName: 'Zap',
    features: ['Stripe-inspired layouts', 'Polished visual storytelling', 'A/B testing ready infrastructure'],
    category: 'design',
    badge: 'High ROI'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Stores',
    description: 'Seamless headless checkout routes, custom shopping baskets, secure payments, and engaging catalog search tools optimized for digital and offline transactions.',
    iconName: 'ShoppingBag',
    features: ['Lightning fast checkout', 'Interactive search & filters', 'Custom inventory integrations'],
    category: 'development'
  },
  {
    id: 'portfolio-sites',
    title: 'Executive Portfolio Websites',
    description: 'Visual resumes and design portfolios designed for world-class artists, developers, and tech consultants looking to establish an authoritative personal brand.',
    iconName: 'UserCheck',
    features: ['Stunning interactive gallery', 'Custom resume widgets', 'Smooth page transitions'],
    category: 'design'
  },
  {
    id: 'business-sites',
    title: 'Corporate Business Websites',
    description: 'Professional, multi-page platforms that project trust, authority, and enterprise standards. Perfect for agencies, law firms, and tech startups.',
    iconName: 'Briefcase',
    features: ['Intercom/WhatsApp integrations', 'Lead-capture pipelines', 'SEO-first copywriting layouts'],
    category: 'development'
  },
  {
    id: 'seo-optimization',
    title: 'SEO & Performance Tuning',
    description: 'Maximize your search presence. We fine-tune Core Web Vitals, structure semantic tags, and optimize content density to place you on Page 1.',
    iconName: 'TrendingUp',
    features: ['Perfect 100/100 Lighthouse score', 'Structured metadata schemas', 'Keyword search matrix integration'],
    category: 'marketing',
    badge: 'Sustained Growth'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design Systems',
    description: 'Interactive high-fidelity Figma mockups, user flow diagramming, responsive design architectures, and absolute visual harmony built from scratch.',
    iconName: 'Layers',
    features: ['Stunning SaaS design language', 'Component-driven visual guidelines', 'Interactive interactive prototypes'],
    category: 'design'
  },
  {
    id: 'maintenance',
    title: '24/7 Website Maintenance',
    description: 'Keep your digital flagship stress-free. Continuous uptime monitoring, proactive security patches, content updates, and incremental asset backups.',
    iconName: 'Cpu',
    features: ['Uptime monitoring alerts', 'Instant file backup restores', 'Version compliance updates'],
    category: 'marketing'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'apex-saas',
    title: 'ApexSaaS Dashboard',
    subtitle: 'Next-Gen Analytics Platform',
    description: 'A dark, telemetry-rich dashboard with real-time SVG charting, high-density glassmorphism menus, and instantaneous page views.',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Tailwind v4', 'Lucide', 'Motion'],
    metrics: { label: 'Conversion Boost', value: '+142%' },
    projectUrl: '#'
  },
  {
    id: 'nova-ecommerce',
    title: 'Nova Lifestyle Store',
    subtitle: 'High-end E-commerce System',
    description: 'A headless e-commerce playground showcasing ultra-premium, eye-safe products with frictionless Apple-pay responsive routes.',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    tags: ['E-Commerce', 'Interactive checkout', 'Stripe Proxy'],
    metrics: { label: 'Revenue Growth', value: '3.2x Growth' },
    projectUrl: '#'
  },
  {
    id: 'vortex-product',
    title: 'Vortex Landing Page',
    subtitle: 'Sleek Animated Tech Showcase',
    description: 'A physics-inspired, gorgeous single-screen landing page featuring floating geometric elements and smooth micro-animations.',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Vite', 'Modern Glassmorphism', 'Framer Engines'],
    metrics: { label: 'Conversion Rate', value: '9.4% Conversions' },
    projectUrl: '#'
  },
  {
    id: 'stellar-studio',
    title: 'Stellar Creative Agency',
    subtitle: 'Interactive Visual Showcase',
    description: 'A premium portfolio featuring highly creative grid offsets, fluid page movements, and high-contrast, beautiful layout elements.',
    category: 'Portfolio Website',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    tags: ['UX/UI Design System', 'Plus Jakarta Sans', 'High-speed CSS'],
    metrics: { label: 'Impressions', value: '12M+ monthly' },
    projectUrl: '#'
  }
];


export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'Founder & CEO',
    company: 'ApexSaaS Logistics',
    text: 'WebRajya turned our abstract blueprint into a stunning, production-ready landing page that started converting visitors on and off within 48 hours of launch. Their focus on mobile touch-points and premium micro-interactions is purely second-to-none.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Vikram Malhotra',
    role: 'Director of Growth',
    company: 'Nova Commerce Hub',
    text: 'Most development teams write code that works, but WebRajya creates experiences that SELL. The mobile swipe interactions feel incredibly native, like scrolling a polished iOS application. Absolutely gorgeous work, highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Elissa Vance',
    role: 'Product Lead',
    company: 'Stellar Tech Ventures',
    text: 'Our landing page bounce rates dropped by a staggering 40% after the WebRajya redesign. They restructured our visual layout hierarchy, giving us a modern, premium look that directly increased our booked consultation calls.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We analyze your core business objectives, define the key user flows, study the competition, and outline the technical sitemap to align with your targets.',
    duration: '3 - 5 Days',
    iconName: 'Compass'
  },
  {
    step: '02',
    title: 'High-Fidelity UI/UX Design',
    description: 'We construct a bespoke design system with interactive Figma mockups. We refine typography, color pairings, gradients, and custom responsive states.',
    duration: '5 - 7 Days',
    iconName: 'Layers'
  },
  {
    step: '03',
    title: 'Premium Web Development',
    description: 'Our engineers transform custom wireframes into lightning-fast, high-compliance interactive code. Optimized for core web vitals and premium responsiveness.',
    duration: '7 - 14 Days',
    iconName: 'Cpu'
  },
  {
    step: '04',
    title: 'Rigorous SEO & Launch',
    description: 'We inspect SEO tags, fine-tune caching setups, configure custom security layers, finalize WhatsApp routing, and officially launch your fast-loading flagship.',
    duration: '2 - 3 Days',
    iconName: 'Rocket'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Startup Launchpad',
    price: '2,999',
    subtitle: 'Perfect for raising standards & validating concepts',
    billing: 'One-time investment',
    features: [
      'Ultra-Polished 1-Page Landing Page',
      'High-converting mobile-first layout',
      'Stripe or WhatsApp instant triggers',
      'Premium Custom Gradients & Styling',
      'SEO Metatags Setup',
      '14 Days post-launch edits support',
      'Lighthouse speed rating > 90%'
    ],
    ctaText: 'Secure Your Launchpad'
  },
  {
    id: 'growth',
    name: 'Professional Expansion',
    price: '5,999',
    subtitle: 'Our absolute most popular tier to scale agencies',
    billing: 'One-time investment',
    features: [
      'Up to 6 Bespoke Creative Pages',
      'Premium customized navigation header',
      'Dynamic interactive service details',
      'Interactive Case Studies / Gallery',
      'Comprehensive on-page SEO targeting',
      'Full Interactive Contact Form',
      '30 Days post-launch expert support',
      'Interactive custom micro-animations'
    ],
    popular: true,
    badge: 'Best Value',
    ctaText: 'Assemble Growth Platform'
  },
  {
    id: 'enterprise',
    name: 'Custom Product / E-Com',
    price: '7999',
    subtitle: 'For next-generation apps and digital flagships',
    billing: 'Tailored timeline estimates',
    features: [
      'Infinite custom pages & application scope',
      'Complete Headless E-commerce Checkout',
      'Interactive inventory searching & filtering',
      'Tailored custom design system guidance',
      'Advanced API Integration & Secure Proxy',
      'Database / state storage integrations',
      '90 Days premium priority care',
      'SEO-First expert content blueprint'
    ],
    ctaText: 'Request Enterprise Proposal'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How long does a typical custom website build take?',
    answer: 'A high-converting landing page usually takes 5 to 7 business days, while comprehensive business websites or custom e-commerce stores take around 2 to 3 weeks from visual sign-off to official hosting deployment.'
  },
  {
    id: 'faq-2',
    question: 'Will my website look beautiful and fast on mobile?',
    answer: 'Absolutely. WebRajya applies a strict, premium mobile-first philosophy. We create custom touch-friendly grids, horizontal card swiping, hidden sticky navs, and floating contact components to ensure your mobile experience is faster, sleeker, and high converting compared to standard screens.'
  },
  {
    id: 'faq-3',
    question: 'What is WebRajya’s web development stack?',
    answer: 'We utilize modern, lightning-fast technical platforms like React 19, Vite, Tailwind CSS v4, and Motion. This ensures extreme compliance, zero-dependency visual bloat, perfect layout structures, and spectacular Lighthouse performance scores.'
  },
  {
    id: 'faq-4',
    question: 'Do you offer ongoing updates and security support?',
    answer: 'Yes! We offer a premium Website Maintenance plan that includes persistent security validation, automated database backups, custom assets uploading, content updates, and proactive page SEO audits to ensure your business remains at peak conversion.'
  },
  {
    id: 'faq-5',
    question: 'How does WhatsApp integration work on the contact form?',
    answer: 'When a prospective client enters their details (project budget, requirements, timing) and clicks "Submit via WhatsApp", our application formats a premium, neat client proposal paragraph and safely forwards them directly with a WhatsApp URL to instantly message your business line.'
  }
];
