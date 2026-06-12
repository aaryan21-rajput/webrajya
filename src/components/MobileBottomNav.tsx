import { Home, Code, LayoutGrid, DollarSign, MessageCircle, MessageSquareCode } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenConsultation: () => void;
  activeSection: string;
}

export default function MobileBottomNav({ onOpenConsultation, activeSection }: MobileBottomNavProps) {
  
  const handleScrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // WhatsApp redirection layout helper
  const handleWhatsAppTrigger = () => {
    const phoneNumber = "919630013483"; // Replace with real client line if customized
    const message = encodeURIComponent("Hello WebRajya! I am interested in building a premium, modern digital platform. I would love to request a free consultation session of my project.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const menuItems = [
    { id: 'top', label: 'Home', icon: Home, action: () => handleScrollTo('#hero') },
    { id: 'services', label: 'Services', icon: Code, action: () => handleScrollTo('#services') },
    { id: 'quote', label: 'Quote', icon: MessageSquareCode, action: onOpenConsultation, highlight: true },
    { id: 'portfolio', label: 'Portfolio', icon: LayoutGrid, action: () => handleScrollTo('#portfolio') },
    { id: 'pricing', label: 'Plans', icon: DollarSign, action: () => handleScrollTo('#pricing') },
  ];

  return (
    <>
      {/* Floating WhatsApp Action Button - Offset upwards so it sits directly above bottom nav on mobile */}
      <div 
        id="whatsapp-floating-trigger"
        className="fixed bottom-24 right-5 z-40 md:bottom-8 md:right-8 transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <button
          onClick={handleWhatsAppTrigger}
          className="relative group p-4 rounded-full bg-[#0F4C3A] text-brand-cream shadow-[0_10px_25px_rgba(15,76,58,0.2)] hover:shadow-[0_15px_30px_rgba(15,76,58,0.3)] transition-all cursor-pointer flex items-center justify-center animate-bounce border border-brand-gold/30"
          aria-label="Contact WebRajya on WhatsApp"
          style={{ animationDuration: '3.5s' }}
        >
          {/* Wave effect underneath */}
          <div className="absolute inset-0 rounded-full bg-[#2E7D62] animate-ping opacity-25"></div>
          
          <MessageCircle className="w-6 h-6 relative z-10 text-brand-gold" />
          
          {/* Label tooltip on desktop */}
          <span className="hidden md:group-hover:inline-block absolute right-16 bg-brand-dark backdrop-blur-md text-brand-cream text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap border border-brand-gold/20 shadow-lg">
            Chat on WhatsApp
          </span>
        </button>
      </div>

      {/* Modern Sticky Bottom Nav Bar for easy thumb usage on mobile */}
      <div 
        id="mobile-bottom-nav" 
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-brand-cream/95 backdrop-blur-xl border-t border-brand-dark/10 py-2.5 px-4 shadow-[0_-10px_35px_rgba(15,76,58,0.06)]"
      >
        <div className="max-w-md mx-auto flex items-center justify-between">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id || (item.id === 'top' && activeSection === '');
            
            if (item.highlight) {
              return (
                <button
                  key={item.id}
                  id={`bottom-nav-item-${item.id}`}
                  onClick={item.action}
                  className="relative -top-5 flex flex-col items-center justify-center font-bold"
                >
                  <div className="w-13 h-13 rounded-full bg-brand-dark p-[2px] border border-brand-gold/40 shadow-[0_5px_20px_rgba(15,76,58,0.15)] active:scale-95 transition-all">
                    <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center text-white">
                      <IconComponent className="w-5.5 h-5.5 text-brand-gold animate-pulse" />
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-brand-dark font-sans mt-0.5">
                    {item.label}
                  </span>
                </button>
              );
            }

            return (
              <button
                key={item.id}
                id={`bottom-nav-item-${item.id}`}
                onClick={item.action}
                className="flex flex-col items-center justify-center w-14 py-1 active:scale-95 transition-all"
              >
                <IconComponent 
                  className={`w-5.5 h-5.5 transition-colors ${
                    isActive 
                      ? 'text-brand-gold' 
                      : 'text-brand-text/60 hover:text-brand-dark'
                  }`} 
                />
                <span 
                  className={`text-[10px] font-bold mt-1 font-sans transition-colors ${
                    isActive 
                      ? 'text-brand-gold' 
                      : 'text-brand-text/50'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
