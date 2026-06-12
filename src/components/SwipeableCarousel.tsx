import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Share2, TrendingUp, CheckCircle, Smartphone } from 'lucide-react';
import { PortfolioItem, Testimonial } from '../types';

interface SwipeableCarouselProps {
  type: 'portfolio' | 'testimonials';
  items: (PortfolioItem | Testimonial)[];
  onOpenConsultation?: () => void;
}

export default function SwipeableCarousel({ type, items, onOpenConsultation }: SwipeableCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Dynamic index detection on scroll
  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(index);
    setMaxScroll(scrollWidth - clientWidth);
  };

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const { clientWidth } = containerRef.current;
    containerRef.current.scrollTo({
      left: index * clientWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  const scrollNext = () => {
    const nextIndex = Math.min(activeIndex + 1, items.length - 1);
    scrollToIndex(nextIndex);
  };

  const scrollPrev = () => {
    const prevIndex = Math.max(activeIndex - 1, 0);
    scrollToIndex(prevIndex);
  };

  // WhatsApp helper for portfolio
  const triggerWhatsAppForProject = (projectTitle: string) => {
    const url = "919630013483";
    const text = encodeURIComponent(`Hi WebRajya, I saw your case study for "${projectTitle}" on your portfolio and want to build a similar premium digital solution for my business.`);
    window.open(`https://wa.me/${url}?text=${text}`, '_blank');
  };

  return (
    <div className="relative group">
      {/* Scrollable Container with native momentum snap mechanics */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory gap-5 pb-6' scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => {
          if (type === 'portfolio') {
            const project = item as PortfolioItem;
            return (
              <div
                key={project.id}
                className="w-[88vw] xs:w-[85vw] sm:w-[420px] md:w-[48%] lg:w-[31%] shrink-0 snap-start snap-always"
              >
                <div className="relative group/card h-full rounded-2xl bg-white border border-brand-dark/5 overflow-hidden transition-all duration-300 hover:border-brand-gold/30 hover:shadow-[0_15px_30px_rgba(15,76,58,0.06)] flex flex-col justify-between">
                  <div>
                    {/* Category Chip */}
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 text-[11px] font-mono tracking-widest uppercase bg-brand-cream/95 backdrop-blur-md rounded-full border border-brand-dark/10 text-brand-dark font-bold">
                      {project.category}
                    </div>

                    {/* High ROI Badge */}
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 text-[11px] font-sans bg-brand-dark text-brand-cream font-bold rounded-full border border-brand-gold/20 shadow-md">
                      <TrendingUp className="w-3 h-3 text-brand-gold" />
                      <span className="text-brand-gold">{project.metrics.value}</span>
                    </div>

                    {/* Image wrapper */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-103"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                    </div>

                    {/* Info block */}
                    <div className="p-6 pb-2">
                      <p className="text-xs font-mono text-brand-gold uppercase tracking-widest font-semibold mb-1">
                        {project.subtitle}
                      </p>
                      <h4 className="text-xl font-bold text-brand-dark mb-2 tracking-tight font-serif">
                        {project.title}
                      </h4>
                      <p className="text-sm text-brand-text mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tag list */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded bg-brand-cream border border-brand-dark/5 text-[10px] font-mono text-brand-green font-bold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Interactive CTAs */}
                  <div className="p-6 pt-4 border-t border-brand-dark/5 mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-brand-green font-bold">Proven result</span>
                      <span className="text-sm font-semibold text-brand-dark flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-brand-gold" />
                        {project.metrics.label}
                      </span>
                    </div>
                    <button
                      onClick={() => triggerWhatsAppForProject(project.title)}
                      className="py-2 px-3.5 rounded-lg bg-brand-dark hover:bg-brand-green hover:text-brand-cream text-brand-cream transition-all text-xs font-semibold border border-brand-gold/30 flex items-center space-x-1.5 cursor-pointer"
                    >
                      <span>Enquire</span>
                      <Share2 className="w-3.5 h-3.5 text-brand-gold" />
                    </button>
                  </div>
                </div>
              </div>
            );
          } else {
            const testimonial = item as Testimonial;
            return (
              <div
                key={testimonial.id}
                className="w-[88vw] xs:w-[85vw] sm:w-[500px] md:w-[600px] shrink-0 snap-start snap-always"
              >
                <div className="p-6 md:p-8 rounded-2xl bg-brand-dark border border-brand-gold/15 h-full flex flex-col justify-between transition-all hover:bg-brand-navy hover:shadow-xl relative overflow-hidden">
                  {/* Aesthetic quote background */}
                  <span className="absolute -right-4 -top-8 text-[120px] font-sans font-extrabold text-brand-gold/5 select-none leading-none">
                    “
                  </span>

                  <div>
                    {/* Star ratings */}
                    <div className="flex space-x-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i} className="text-brand-gold text-lg">★</span>
                      ))}
                    </div>

                    {/* Speech quote */}
                    <p className="text-brand-cream text-sm md:text-base leading-relaxed italic mb-6 relative z-10 font-serif">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Profile bio */}
                  <div className="flex items-center space-x-4 border-t border-white/5 pt-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold/20"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h5 className="font-bold text-brand-cream text-sm md:text-base">{testimonial.name}</h5>
                      <p className="text-xs text-brand-muted">
                        {testimonial.role} • <span className="text-brand-gold font-semibold">{testimonial.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      {/* Pagination indicators - Dots */}
      <div className="flex items-center justify-between mt-6 px-1">
        <div className="flex items-center space-x-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activeIndex === idx 
                  ? 'w-6 bg-brand-gold' 
                  : 'w-1.5 bg-brand-dark/20'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Action Arrows on Tablet/Desktop for easy scroll */}
        <div className="hidden sm:flex items-center space-x-2">
          <button
            onClick={scrollPrev}
            className={`p-2 rounded-lg bg-white border border-brand-dark/5 text-brand-dark hover:text-brand-gold hover:bg-brand-cream transition-all ${
              activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
            }`}
            disabled={activeIndex === 0}
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className={`p-2 rounded-lg bg-white border border-brand-dark/5 text-brand-dark hover:text-brand-gold hover:bg-brand-cream transition-all ${
              activeIndex === items.length - 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
            }`}
            disabled={activeIndex === items.length - 1}
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
