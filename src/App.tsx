import { useState, useEffect } from 'react';
import { 
  Code, Zap, ShoppingBag, UserCheck, Briefcase, TrendingUp, Layers, Cpu, Compass, Rocket,
  Star, Trophy, Check, ArrowRight, ShieldCheck, Mail, Phone, MapPin, Globe, ExternalLink,
  ChevronDown, ChevronUp, MessageSquare, X, CheckCircle, Flame, Shield, Clock, Award, PlayCircle, Users, Sparkles
} from 'lucide-react';

import { SERVICES, PORTFOLIO, TESTIMONIALS, PROCESS_STAGES, FAQS } from './data';
import Header from './components/Header';
import MobileBottomNav from './components/MobileBottomNav';
import SwipeableCarousel from './components/SwipeableCarousel';
import PricingSwitcher from './components/PricingSwitcher';
import InteractiveContact from './components/InteractiveContact';
import Logo from './components/Logo';

export default function App() {
  const [activeSection, setActiveSection] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'development' | 'design' | 'marketing'>('all');
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  
  // Consultation modal trigger
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [prefilledPlanName, setPrefilledPlanName] = useState('');

  // Track scroll position to update anchors
  useEffect(() => {
    const handleScrollDetect = () => {
      const sections = ['services', 'portfolio', 'process', 'pricing', 'faq'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      
      // Default to empty if hero/top
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScrollDetect, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollDetect);
  }, []);

  const triggerConsultation = (planName: string = '') => {
    setPrefilledPlanName(planName);
    setIsConsultationOpen(true);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Filtered services logic
  const filteredServices = selectedCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === selectedCategory);

  // Stats definition for conversion trust
  const stats = [
    { value: '48hr', label: 'Initial High-Fidelity Prototype Delivery', badge: 'Rapid Execution' },
    { value: '99.9%', label: 'Uptime & Operational Platform Score', badge: 'Secure Architecture' },
  ];

  return (
    <div className="relative min-h-screen bg-brand-cream overflow-hidden font-sans select-none pb-16 md:pb-0" id="hero">
      
      {/* Mesh Background Glow Orbs for luxury SaaS aesthetic */}
      <div className="absolute top-0 inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-gold/5 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[25%] right-[-15%] w-[50%] h-[50%] rounded-full bg-brand-green/3 blur-[130px] animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-[10%] left-[-20%] w-[55%] h-[55%] rounded-full bg-brand-gold/3 blur-[110px]"></div>
        {/* Subtle grid lines overlap */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,76,58,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,76,58,0.02)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Responsive Header Hides/Shows on scroll direction */}
      <Header 
        onOpenConsultation={() => triggerConsultation('')} 
        activeSection={activeSection} 
      />

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16">
        
        {/* Hero Section */}
        <section className="py-12 md:py-24 text-center relative" id="hero-main">
          {/* Tagline Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-muted/85 border border-brand-dark/10 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping"></span>
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-wider text-brand-dark uppercase">
              👑 Premium Bespoke Engineering Deployed Worldwide
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-brand-dark tracking-tight leading-none mb-6 font-serif">
            Transforming Ideas into <br className="hidden md:inline" />
            <span className="text-brand-gold block md:inline mt-2 md:mt-0 font-medium">
              High-Performing
            </span> Digital Experiences
          </h1>

          {/* Tagline Selection */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-brand-text/90 font-medium leading-relaxed mb-10 px-2 font-sans">
            We design, develop, and maximize elite digital platforms. From high-converting search-optimized flagships to robust e-commerce architectures, we craft custom ecosystems that build prestige and accelerate enterprise value.
          </p>

          {/* CTA Buttons - Large and Touch Friendly */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm sm:max-w-md mx-auto mb-14 px-4">
            <button
              id="hero-cta-consultation"
              onClick={() => triggerConsultation('')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-dark text-brand-cream text-sm md:text-base font-bold hover:bg-brand-green hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center space-x-2 border border-brand-gold/20"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 text-brand-gold" />
            </button>
            <button
              id="hero-cta-portfolio"
              onClick={() => handleNavClick('#portfolio')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-brand-muted text-brand-dark text-sm md:text-base font-bold transition-all border border-brand-dark/10 active:scale-[0.98] cursor-pointer flex items-center justify-center space-x-2 shadow-sm"
            >
              <span>View Portfolio</span>
              <PlayCircle className="w-5 h-5 text-brand-gold" />
            </button>
          </div>

          {/* Trusted Conversion Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto border border-brand-dark/5 py-8 my-10 bg-white/60 rounded-2xl px-4 backdrop-blur-sm shadow-[0_10px_30px_rgba(15,76,58,0.02)]">
            <div className="flex flex-col items-center justify-center p-3 text-center">
              <div className="flex items-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="text-xs font-bold text-brand-dark">4.9/5 Average Rating</p>
              <p className="text-[10px] text-brand-green font-mono font-bold">Expert design audits</p>
            </div>
            <div className="flex flex-col items-center justify-center p-3 text-center border-l border-brand-dark/5">
              <ShieldCheck className="w-6 h-6 text-brand-gold mb-2" />
              <p className="text-xs font-bold text-brand-dark">100% Core Web Compliance</p>
              <p className="text-[10px] text-brand-green font-mono font-bold">Lighthouse-grade loading</p>
            </div>
            <div className="flex flex-col items-center justify-center p-3 text-center border-l border-brand-dark/5">
              <Trophy className="w-6 h-6 text-brand-gold mb-2" />
              <p className="text-xs font-bold text-brand-dark">Conversion-First Systems</p>
              <p className="text-[10px] text-brand-green font-mono font-bold">In-house SEO architecture</p>
            </div>
            <div className="flex flex-col items-center justify-center p-3 text-center border-l border-brand-dark/5">
              <Clock className="w-6 h-6 text-brand-gold mb-2" />
              <p className="text-xs font-bold text-brand-dark">Dedicated Account Care</p>
              <p className="text-[10px] text-brand-green font-mono font-bold">Premium priority maintenance</p>
            </div>
          </div>
        </section>


        {/* Why Choose Us Section (Metric Achievements Block) */}
        <section className="py-16 md:py-24 border-t border-brand-dark/5" id="stats">
          <div className="text-center mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold mb-3">
              Proven Metrics
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tight font-serif">
              We Engineer Websites That Double Sales
            </h3>
            <p className="max-w-lg mx-auto text-sm text-brand-text mt-4 leading-relaxed">
              We refuse to code cookie-cutter blueprints. We study your sales funnels and craft gorgeous interactive experiences optimized for speed, action, and results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {stats.map((st, i) => (
              <div 
                key={i}
                className="p-6 md:p-8 rounded-2xl bg-white border border-brand-dark/5 hover:border-brand-gold/25 hover:shadow-[0_8px_30px_rgba(15,76,58,0.04)] transition-all text-left relative overflow-hidden group shadow-sm"
              >
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wide bg-brand-gold/10 text-brand-dark border border-brand-gold/20 uppercase">
                  {st.badge}
                </div>
                <p className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-3 tracking-tight group-hover:scale-102 transition-transform duration-300 font-sans">
                  {st.value}
                </p>
                <p className="text-xs md:text-sm text-brand-text font-medium leading-relaxed">
                  {st.label}
                </p>
                {/* Visual decorative line */}
                <div className="h-[2px] w-0 bg-brand-gold mt-4 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </section>


        {/* Services Section */}
        <section className="py-16 md:py-24 border-t border-brand-dark/10 scroll-mt-20" id="services">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold mb-3">
                Expert Capabilities
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tight font-serif">
                Our Services Strategy
              </h3>
              <p className="max-w-md text-sm text-brand-text/90 mt-4 leading-relaxed">
                We design and support custom corporate flagships, high-converting checkout carts, landing pages, and search optimization solutions.
              </p>
            </div>

            {/* Service Filters Tabs (Framer/Linear Style) */}
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0 max-w-full overflow-x-auto pb-2 md:pb-0">
              {(['all', 'development', 'design', 'marketing'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-brand-dark text-brand-cream border border-brand-gold/30 shadow-md'
                      : 'bg-white border border-brand-dark/5 text-brand-text/80 hover:bg-brand-muted hover:text-brand-dark'
                  }`}
                >
                  {cat === 'all' ? 'All capabilities' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Services Cards lists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredServices.map((service, idx) => {
              // Custom map service to Lucide Icons
              const iconMap: Record<string, any> = {
                'Code': Code,
                'Zap': Zap,
                'ShoppingBag': ShoppingBag,
                'UserCheck': UserCheck,
                'Briefcase': Briefcase,
                'TrendingUp': TrendingUp,
                'Layers': Layers,
                'Cpu': Cpu
              };
              const IconComponent = iconMap[service.iconName] || Code;

              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-brand-dark/5 hover:border-brand-gold/25 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(15,76,58,0.04)] group overflow-hidden"
                >
                  <div>
                    {/* Header line icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-brand-dark/5 p-[1px] border border-brand-gold/25 flex items-center justify-center">
                        <div className="w-full h-full rounded-xl bg-brand-muted flex items-center justify-center text-brand-dark group-hover:text-brand-cream group-hover:bg-brand-dark transition-all">
                          <IconComponent className="w-5.5 h-5.5" />
                        </div>
                      </div>
                      {service.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono bg-brand-gold/10 text-brand-gold border border-brand-gold/20 font-black tracking-widest uppercase">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-brand-dark mb-2.5 tracking-tight group-hover:text-brand-gold transition-colors font-sans">
                      {service.title}
                    </h4>
                    <p className="text-xs text-brand-text/80 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature lists */}
                  <div className="border-t border-brand-dark/5 pt-4 mt-auto">
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center text-[10px] text-brand-text/90 font-medium">
                          <Check className="w-3.5 h-3.5 text-brand-gold mr-2 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => triggerConsultation(service.title)}
                      className="text-xs text-brand-gold font-bold tracking-wider hover:text-brand-dark flex items-center space-x-1 transition-all group-hover:translate-x-1 cursor-pointer"
                    >
                      <span>Choose scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* Portfolio Showcase Area */}
        <section className="py-16 md:py-24 border-t border-brand-dark/10 scroll-mt-20" id="portfolio">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold mb-3">
                Proven Client Success Cases
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tight font-serif">
                Case Studies & Portfolio
              </h3>
              <p className="max-w-md text-sm text-brand-text/90 mt-4 leading-relaxed">
                Each product is uniquely styled to target specific buyer intents. We don't build generic; we project authority.
              </p>
            </div>
            {/* Direct action to consultations */}
            <div className="mt-6 md:mt-0">
              <button
                onClick={() => triggerConsultation('General Custom Project')}
                className="py-3 px-5 text-xs font-bold uppercase tracking-wider text-brand-dark bg-white border border-brand-dark/10 hover:border-brand-gold rounded-xl transition-all flex items-center space-x-2 cursor-pointer shadow-sm"
              >
                <span>Partner on your concept</span>
                <ExternalLink className="w-4 h-4 text-brand-gold" />
              </button>
            </div>
          </div>

          {/* Swipeable responsive carousel (swipes on mobile, expands on desktop) */}
          <SwipeableCarousel type="portfolio" items={PORTFOLIO} onOpenConsultation={() => triggerConsultation('')} />
        </section>


        {/* Development Process Timeline Section */}
        <section className="py-16 md:py-24 border-t border-brand-dark/10 scroll-mt-20" id="process">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold mb-3">
              A To Z Operational Sequence
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tight font-serif">
              Development Process Timeline
            </h3>
            <p className="max-w-lg mx-auto text-sm text-brand-text mt-4 leading-relaxed">
              We apply a swift sprint strategy, prioritizing visual approvals early on to secure perfect satisfaction and robust deployment on launch day.
            </p>
          </div>

          {/* Grid Layout of timeline for smooth storytelling */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">

            {PROCESS_STAGES.map((stage, sIdx) => {
              // Icon maps
              const iconMap: Record<string, any> = {
                'Compass': Compass,
                'Layers': Layers,
                'Cpu': Cpu,
                'Rocket': Rocket
              };
              const StageIcon = iconMap[stage.iconName] || Rocket;

              return (
                <div 
                  key={stage.step}
                  className="p-6 rounded-2xl bg-white border border-brand-dark/5 relative z-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(15,76,58,0.04)] hover:border-brand-gold/25"
                >
                  {/* Step bubble */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-brand-dark font-sans tracking-tight">
                      {stage.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-muted border border-brand-dark/5 flex items-center justify-center text-brand-gold">
                      <StageIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-base md:text-lg font-bold text-brand-dark mb-2 leading-tight">
                    {stage.title}
                  </h4>
                  <p className="text-xs text-brand-text/80 leading-relaxed mb-4 min-h-[72px]">
                    {stage.description}
                  </p>
                  
                  {/* Timeline Badge Duration */}
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-brand-gold/10 border border-brand-gold/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    <span className="text-[9px] font-mono text-brand-gold font-bold uppercase">{stage.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* Client Testimonials Carousel */}
        <section className="py-16 md:py-24 border-t border-brand-dark/10 animate-fade-in" id="testimonials">
          <div className="text-center mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold mb-3">
              WHAT OUR VALUE PARTNERS SAY
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tight font-serif">
              Client Testimonials
            </h3>
            <p className="max-w-md mx-auto text-sm text-brand-text mt-4 leading-relaxed">
              We focus on building long-term alliances. We help startups grow fast with responsive designs that impress immediately.
            </p>
          </div>

          <SwipeableCarousel type="testimonials" items={TESTIMONIALS} />
        </section>


        {/* Pricing Comparison Cards Switcher */}
        <section className="py-16 md:py-24 border-t border-brand-dark/10 scroll-mt-20" id="pricing">
          <div className="text-center mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold mb-3">
              Honest & Flat Pricing Packages
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tight font-serif">
              Pricing Packages That Convert
            </h3>
            <p className="max-w-lg mx-auto text-sm text-brand-text mt-4 leading-relaxed">
              We offer single fixed project scopes or premium retainer systems to grow your startup incrementally without expensive visual code overhead.
            </p>
          </div>

          <PricingSwitcher onSelectPlan={(plan) => triggerConsultation(plan)} />
        </section>


        {/* FAQ Section with interactive accordion triggers */}
        <section className="py-16 md:py-24 border-t border-brand-dark/10 scroll-mt-20" id="faq">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Column left info */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold mb-3">
                Have Queries?
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight leading-tight font-serif">
                Frequently Asked <br />Questions
              </h3>
              <p className="text-sm text-brand-text/90 mt-4 leading-relaxed">
                Can't find the answers you need in this list? Feel free to contact us immediately on WhatsApp or submit a proposal brief!
              </p>
              
              <div className="mt-8">
                <button
                  onClick={() => triggerConsultation('General FAQ Enquiry')}
                  className="px-6 py-3.5 rounded-xl bg-white border border-brand-dark/10 text-brand-dark text-xs font-bold uppercase tracking-wider hover:bg-brand-muted hover:border-brand-gold hover:shadow-sm cursor-pointer transition-all"
                >
                  Ask private question
                </button>
              </div>
            </div>

            {/* Accordion list right */}
            <div className="lg:col-span-2 space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openFAQIndex === index;
                return (
                  <div
                    key={faq.id}
                    id={`faq-item-${index}`}
                    className="rounded-2xl bg-white border border-brand-dark/5 p-4.5 transition-all overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between text-left focus:outline-none py-1.5 cursor-pointer group"
                    >
                      <span className="text-sm md:text-base font-bold text-brand-dark pr-4 group-hover:text-brand-gold transition-colors">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-brand-gold shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-brand-dark/50 shrink-0" />
                      )}
                    </button>
                    
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen 
                          ? 'max-h-[300px] opacity-100 mt-4 pt-4 border-t border-brand-dark/5' 
                          : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <p className="text-xs md:text-sm text-brand-text/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* Contact form Block with high authority layout */}
        <section className="py-16 md:py-24 border-t border-brand-dark/10 scroll-mt-20" id="contact">
          <div className="relative rounded-3xl overflow-hidden bg-brand-cream border border-brand-gold/25 p-6 md:p-12 shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-gold/5 blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[45%] h-[45%] bg-brand-green/3 blur-[90px] pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 relative z-10">
              
              {/* Info block */}
              <div className="lg:col-span-2 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-brand-gold/15 border border-brand-gold/20 text-brand-gold text-[10px] font-mono font-bold uppercase tracking-wider mb-6">
                    <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Free Advisory Call</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight tracking-tight mb-4 font-serif">
                    Let’s design something beautiful together
                  </h3>
                  <p className="text-xs md:text-sm text-brand-text/90 leading-relaxed mb-8">
                    Send us your ideas, desired timelines, and budgets. We will get back to you with a direct interactive prototype briefing proposal within 24 hours.
                  </p>
                </div>

                {/* Direct info points */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3.5 text-brand-text/90">
                    <div className="w-10 h-10 rounded-xl bg-brand-dark/5 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                      <Mail className="w-4.5 h-4.5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-brand-green uppercase font-bold">Interactive Email Link</p>
                      <a href="mailto:infowebrajya@gmail.com" className="text-sm font-semibold text-brand-dark hover:text-brand-gold transition-colors">
                        infowebrajya@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3.5 text-brand-text/90">
                    <div className="w-10 h-10 rounded-xl bg-brand-dark/5 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                      <Phone className="w-4.5 h-4.5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-brand-green uppercase font-bold">Consultation Line</p>
                      <a href="tel:+919630013483" className="text-sm font-semibold text-brand-dark hover:text-brand-gold transition-colors">
                        +91 96300 13483
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3.5 text-brand-text/90">
                    <div className="w-10 h-10 rounded-xl bg-brand-dark/5 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                      <MapPin className="w-4.5 h-4.5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-brand-green uppercase font-bold">Operating Headquarters</p>
                      <p className="text-sm font-semibold text-brand-dark font-sans">
                         52 Surve Nagar Nagpur, India 
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form block */}
              <div className="lg:col-span-3">
                <InteractiveContact isLight={true} onSuccess={() => setIsConsultationOpen(false)} />
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Area with full compliance */}
      <footer className="bg-brand-dark border-t border-brand-gold/15 py-12 md:py-16 relative z-10 text-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            {/* Col 1 Brand */}
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                <Logo className="h-9 w-auto" />
                <span className="font-bold text-lg text-white font-sans">
                  Web<span className="text-brand-gold font-serif italic">Rajya</span>
                </span>
              </div>
              <p className="text-xs text-brand-cream/70 leading-relaxed mb-6">
                Premium e-commerce stores, custom landing pages, corporate business websites, and professional digital solutions built from scratch.
              </p>
              <span className="text-[10px] font-mono text-brand-cream/50">
                Registered in Nagpur, India • Serving Globally
              </span>
            </div>

            {/* Col 2 Services */}
            <div>
              <h5 className="text-xs font-mono font-black uppercase tracking-wider text-brand-gold mb-4">Services Scope</h5>
              <ul className="space-y-2.5 text-xs text-brand-cream/70">
                <li><a href="#services" className="hover:text-brand-gold transition-colors">Bespoke App Development</a></li>
                <li><a href="#services" className="hover:text-brand-gold transition-colors">Stripe E-commerce setups</a></li>
                <li><a href="#services" className="hover:text-brand-gold transition-colors">Luxury Portfolio grids</a></li>
                <li><a href="#services" className="hover:text-brand-gold transition-colors">Core Web Speed & SEO Optimization</a></li>
                <li><a href="#services" className="hover:text-brand-gold transition-colors">24/7 Security Maintenance</a></li>
              </ul>
            </div>

            {/* Col 3 Navigation quick links */}
            <div>
              <h5 className="text-xs font-mono font-black uppercase tracking-wider text-brand-gold mb-4">Sitemap Directories</h5>
              <ul className="space-y-2.5 text-xs text-brand-cream/70">
                <li><a href="#services" className="hover:text-brand-gold transition-colors">Expert Capabilities</a></li>
                <li><a href="#portfolio" className="hover:text-brand-gold transition-colors">Case History Records</a></li>
                <li><a href="#process" className="hover:text-brand-gold transition-colors">Development Sprints</a></li>
                <li><a href="#pricing" className="hover:text-brand-gold transition-colors">Pricing Packages</a></li>
                <li><a href="#faq" className="hover:text-brand-gold transition-colors">Troubleshooting/FAQs</a></li>
              </ul>
            </div>

            {/* Col 4 Newsletter / Slogan */}
            <div>
              <h5 className="text-xs font-mono font-black uppercase tracking-wider text-brand-gold mb-4">WebRajya Mission</h5>
              <p className="text-xs text-brand-gold leading-relaxed mb-4 italic font-bold">
                "We don't sell layouts, we deliver conversions." 
              </p>
              <p className="text-xs text-brand-cream/70 leading-relaxed">
                Connect on WhatsApp directly to get your mockup started today inside 48 hours. Let us craft an experience your customers will remember.
              </p>
            </div>
          </div>

          {/* Subfoot copyright */}
          <div className="pt-8 border-t border-brand-gold/10 flex flex-col md:flex-row items-center justify-between text-xs text-brand-cream/50 animate-fade-in">
            <p>
              &copy; {new Date().getFullYear()} WebRajya Digital solutions. All layout copyrights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-brand-gold transition-colors">Privacy policy</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Terms of service</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Security declaration</a>
            </div>
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM NAVIGATION - Displays only on Mobile screen */}
      <MobileBottomNav 
        onOpenConsultation={() => triggerConsultation('Interactive Blueprint Brief')}
        activeSection={activeSection}
      />


      {/* CONSULTATION POPUP OVERLAY MODAL */}
      {isConsultationOpen && (
        <div 
          id="consultation-modal-container"
          className="fixed inset-0 z-50 bg-brand-dark/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
        >
          <div 
            id="consultation-modal-dialog"
            className="w-full max-w-lg rounded-2xl bg-brand-dark border border-brand-gold/25 p-6 md:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Close trigger button */}
            <button
              id="close-consultation-modal"
              onClick={() => setIsConsultationOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-brand-cream/70 hover:text-brand-gold hover:bg-brand-cream/5 transition-all focus:outline-none cursor-pointer"
              aria-label="Close modal dialog"
            >
              <X className="w-5.5 h-5.5" />
            </button>

            {/* Modal headers info */}
            <div className="mb-6">
              <h4 className="text-xl md:text-2xl font-bold text-brand-cream mb-2 font-serif flex items-center gap-2">
                <Sparkles className="w-5.5 h-5.5 text-brand-gold" />
                <span>Free Project Consultation</span>
              </h4>
              <p className="text-xs text-brand-cream/80 leading-relaxed font-sans">
                {prefilledPlanName 
                  ? `Initiating custom brief for plan: "${prefilledPlanName}". Fill out details to submit directly.` 
                  : 'Let us build a stunning high-converting engine. Fill out details to trigger continuous sprint advisory.'}
              </p>
            </div>

            {/* Reusable contact logic inside modal */}
            <InteractiveContact 
              preselectedPlan={prefilledPlanName} 
              onSuccess={() => {
                setTimeout(() => setIsConsultationOpen(false), 2400);
              }}
            />
          </div>
        </div>
      )}

    </div>
  );
}
