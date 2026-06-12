import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageSquare, Code, LayoutGrid, Award, DollarSign, HelpCircle, Layers } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onOpenConsultation: () => void;
  activeSection: string;
}

export default function Header({ onOpenConsultation, activeSection }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Control scroll shadow/bg density
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide/Show header on scroll up/down
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: 'Services', href: '#services', icon: Code },
    { label: 'Work', href: '#portfolio', icon: LayoutGrid },
    { label: 'Process', href: '#process', icon: Award },
    { label: 'Pricing', href: '#pricing', icon: DollarSign },
    { label: 'FAQs', href: '#faq', icon: HelpCircle },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
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

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled 
            ? 'bg-brand-cream/90 backdrop-blur-md border-b border-brand-dark/5 py-3 shadow-[0_8px_30px_rgba(15,76,58,0.05)]' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              id="header-logo"
              className="flex items-center space-x-3 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Logo className="h-9 md:h-11 w-auto" />
              <div className="flex flex-col justify-center leading-none">
                <span className="font-serif font-bold text-lg md:text-xl tracking-wide text-brand-dark flex items-center leading-none">
                  Web<span className="text-brand-gold ml-0.5">Rajya</span>
                </span>
                <span className="text-[7.5px] font-mono tracking-widest text-brand-green uppercase mt-1 leading-none font-bold">
                  Digital Solutions
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.href.slice(1)
                      ? 'text-brand-dark bg-brand-dark/5 font-semibold border border-brand-dark/10'
                      : 'text-brand-text hover:text-brand-dark hover:bg-brand-dark/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA action button */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                id="header-consultation-btn"
                onClick={onOpenConsultation}
                className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-brand-dark text-brand-cream text-sm font-semibold transition-all duration-300 hover:bg-brand-green hover:shadow-md hover:shadow-brand-green/20 text-center cursor-pointer flex items-center gap-1.5 border border-brand-gold/20"
              >
                <span>Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-brand-gold" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center">
              <button
                id="mobile-hamburger"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-brand-dark hover:bg-brand-dark/5 focus:outline-none"
                aria-label="Open Site Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay with smooth animations */}
      <div
        id="mobile-menu-overlay"
        className={`fixed inset-0 z-50 bg-brand-cream/98 backdrop-blur-xl flex flex-col justify-between transition-all duration-500 md:hidden ${
          mobileMenuOpen 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        {/* Top bar of overlay */}
        <div className="p-4 flex items-center justify-between border-b border-brand-dark/5">
          <div className="flex items-center space-x-2.5">
            <Logo className="h-9 w-auto" />
            <span className="font-serif font-bold text-lg text-brand-dark">
              Web<span className="text-brand-gold">Rajya</span>
            </span>
          </div>
          <button
            id="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg text-brand-dark hover:bg-brand-dark/5"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links Area with rich layout optimized for thumb clicks */}
        <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col justify-center space-y-6">
          <p className="text-xs uppercase tracking-widest font-mono text-brand-green font-semibold mb-2">
            Agency Directory
          </p>
          <div className="space-y-4">
            {navItems.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <button
                  key={item.label}
                  id={`mobile-nav-item-${item.label.toLowerCase()}`}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left py-4 px-5 rounded-2xl bg-brand-muted/70 border border-brand-dark/5 flex items-center justify-between group active:bg-brand-dark/5 transition-all text-brand-dark hover:bg-brand-muted"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-cream border border-brand-dark/10 flex items-center justify-center text-brand-dark group-active:text-brand-cream group-active:bg-brand-dark transition-all">
                      <ItemIcon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <span className="text-lg font-semibold tracking-tight font-serif">{item.label}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand-gold group-hover:translate-x-1 transition-all" />
                </button>
              );
            })}
          </div>

          <div className="pt-6">
            <button
              id="mobile-menu-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-4 rounded-2xl bg-brand-dark text-brand-cream text-base font-bold shadow-lg shadow-brand-dark/10 flex items-center justify-center space-x-2 active:scale-[0.98] transition-all border border-brand-gold/30"
            >
              <MessageSquare className="w-5 h-5 text-brand-gold" />
              <span>Get Free Consultation</span>
            </button>
          </div>
        </div>

        {/* Footer info in overlay */}
        <div className="p-6 bg-brand-muted/50 border-t border-brand-dark/5 text-center">
          <p className="text-xs text-brand-dark font-medium">🔥 Turn ideas into profit-producing engines</p>
          <p className="text-[10px] text-brand-green mt-1 font-mono">Based in Nagpur, India • Serving Worldwide</p>
        </div>
      </div>
    </>
  );
}
