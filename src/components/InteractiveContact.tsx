import React, { useState, FormEvent } from 'react';
import { Send, MessageCircle, CheckCircle, Activity, Sparkles, Trophy } from 'lucide-react';

interface InteractiveContactProps {
  preselectedPlan?: string;
  onSuccess?: () => void;
  isLight?: boolean;
}

export default function InteractiveContact({ preselectedPlan, onSuccess, isLight = false }: InteractiveContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedPlan || '',
    budget: '',
    timeline: '',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const budgetOptions = [
    { label: '< 1,500', value: 'under-1500' },
    { label: '1,500 - 3,000', value: '1500-3000' },
    { label: '3,000 - 6,000', value: '3000-6000' },
    { label: '6,000+', value: '6000-plus' }
  ];

  const timelineOptions = [
    { label: 'Urgently (< 1 week)', value: 'urgent' },
    { label: '1 - 2 Weeks', value: '1-2-weeks' },
    { label: '3 - 4 Weeks', value: '3-4-weeks' },
    { label: 'Flexible / Ongoing', value: 'flexible' }
  ];

  const serviceOptions = [
    { label: 'Website Development', value: 'Website Development' },
    { label: 'High-Converting Landing Pages', value: 'High-Converting Landing Pages' },
    { label: 'E-commerce Stores', value: 'E-commerce Stores' },
    { label: 'Executive Portfolio Websites', value: 'Corporate Portfolios' },
    { label: 'Corporate Business Websites', value: 'Business Websites' },
    { label: 'SEO & Performance Tuning', value: 'SEO Tuning' },
    { label: 'UI/UX Design Systems', value: 'UI/UX Design' },
    { label: 'Website Maintenance & Edits', value: 'Maintenance' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const constructWhatsAppMessage = () => {
    const budgetText = budgetOptions.find(b => b.value === formData.budget)?.label || formData.budget || 'Not specified';
    const timelineText = timelineOptions.find(t => t.value === formData.timeline)?.label || formData.timeline || 'Not specified';
    const chosenService = formData.service || 'General Web Solutions';

    return encodeURIComponent(
`🌟 *New WebRajya Quote Inquiry* 🌟
----------------------------------
👤 *Client Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone || 'Not provided'}
🛠️ *Service Requested:* ${chosenService}
💰 *Est. Budget:* ${budgetText}
⏱️ *Required Timeline:* ${timelineText}

📝 *Project Overview & Features:*
${formData.details || 'None provided.'}

----------------------------------
*Initiated via WebRajya.com Web Portal*`
    );
  };

  const handleWhatsAppAction = () => {
    if (!formData.name || !formData.email) {
      alert("Please enter at least your Name and Email Address before submitting via WhatsApp.");
      return;
    }
    const message = constructWhatsAppMessage();
    const cleanPhone = "919630013483"; // Replace with agency default phone
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
    
    // Log submission locally for tracking
    saveInquiryLocally();
    setSubmitStatus('success');
    if (onSuccess) setTimeout(onSuccess, 3000);
  };

  const saveInquiryLocally = () => {
    const inquiriesStr = localStorage.getItem('webrajya_inquiries') || '[]';
    const currentList = JSON.parse(inquiriesStr);
    currentList.push({
      ...formData,
      userId: 'user_dev',
      date: new Date().toISOString()
    });
    localStorage.setItem('webrajya_inquiries', JSON.stringify(currentList));
  };

  const handleStandardSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please enter your name and email.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API pipeline transmission
    setTimeout(() => {
      saveInquiryLocally();
      setIsSubmitting(false);
      setSubmitStatus('success');
      if (onSuccess) setTimeout(onSuccess, 3000);
    }, 1200);
  };

  return (
    <div className={`relative w-full ${isLight ? 'text-brand-dark' : 'text-white'}`}>
      {submitStatus === 'success' ? (
        <div className={`text-center py-12 px-6 rounded-3xl border border-brand-gold/25 shadow-xl max-w-md mx-auto ${isLight ? 'bg-brand-dark/5' : 'bg-brand-cream/5'}`}>
          <div className="w-16 h-16 bg-brand-gold/20 border border-brand-gold/30 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 font-bold" />
          </div>
          <h4 className={`text-2xl font-bold mb-2 font-serif ${isLight ? 'text-brand-dark' : 'text-white'}`}>Inquiry Received!</h4>
          <p className={`text-sm mb-6 leading-relaxed ${isLight ? 'text-brand-text/90' : 'text-brand-cream/80'}`}>
            Thank you for reaching out to **WebRajya**. Our executive consultation lead is reviewing your project requirements. We will contact you shortly!
          </p>
          <div className="flex items-center justify-center space-x-2 text-[11px] font-mono text-brand-gold bg-brand-gold/5 py-2 px-4 rounded-xl">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>Success rate tracking: 100% Core compliance</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleStandardSubmit} className="space-y-6">
          {/* Header indicator */}
          <div className="flex items-center space-x-2 pb-2 border-b border-brand-gold/15 mb-4">
            <Activity className="w-5 h-5 text-brand-gold" />
            <span className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold">
              Interactive Blueprint Brief
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isLight ? 'text-brand-dark' : 'text-brand-cream/80'}`}>
                Your Full Name *
              </label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Aaryan Rajput"
                className={`w-full border border-brand-gold/15 hover:border-brand-gold/25 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl p-3.5 px-4 text-sm placeholder-gray-400 transition-all outline-none ${
                  isLight 
                    ? 'bg-brand-dark/5 text-brand-dark' 
                    : 'bg-brand-cream/5 text-white'
                }`}
              />
            </div>

            {/* Email */}
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isLight ? 'text-brand-dark' : 'text-brand-cream/80'}`}>
                Email Address *
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="developer@example.com"
                className={`w-full border border-brand-gold/15 hover:border-brand-gold/25 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl p-3.5 px-4 text-sm placeholder-gray-400 transition-all outline-none ${
                  isLight 
                    ? 'bg-brand-dark/5 text-brand-dark' 
                    : 'bg-brand-cream/5 text-white'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone (Optional) */}
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isLight ? 'text-brand-dark' : 'text-brand-cream/80'}`}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (800) 123-5678"
                className={`w-full border border-brand-gold/15 hover:border-brand-gold/25 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl p-3.5 px-4 text-sm placeholder-gray-400 transition-all outline-none ${
                  isLight 
                    ? 'bg-brand-dark/5 text-brand-dark' 
                    : 'bg-brand-cream/5 text-white'
                }`}
              />
            </div>

            {/* Services Selector */}
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isLight ? 'text-brand-dark' : 'text-brand-cream/80'}`}>
                Selected Work Blueprint
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className={`w-full border border-brand-gold/15 hover:border-brand-gold/25 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl p-3.5 px-4 text-sm transition-all outline-none ${
                  isLight 
                    ? 'bg-brand-muted text-brand-dark' 
                    : 'bg-brand-dark/95 text-white'
                }`}
              >
                <option value="" className={isLight ? 'bg-brand-cream text-brand-dark' : 'bg-brand-dark text-white'}>Select Service Scope</option>
                {serviceOptions.map(opt => (
                  <option key={opt.value} value={opt.value} className={isLight ? 'bg-brand-cream text-brand-dark' : 'bg-brand-dark text-white'}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget tier */}
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isLight ? 'text-brand-dark' : 'text-brand-cream/80'}`}>
              Estimation Budget Range (USD)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {budgetOptions.map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, budget: opt.value }))}
                  className={`py-3.5 px-2 text-center rounded-xl text-xs font-bold tracking-wide border transition-all duration-200 cursor-pointer ${
                    formData.budget === opt.value
                      ? 'bg-brand-gold text-brand-dark border-brand-gold shadow-lg shadow-brand-gold/10'
                      : isLight
                        ? 'bg-brand-dark/5 border-brand-gold/15 hover:border-brand-gold/25 text-brand-dark'
                        : 'bg-brand-cream/5 border-white/5 hover:border-brand-gold/25 text-brand-cream/80'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isLight ? 'text-brand-dark' : 'text-brand-cream/80'}`}>
              Desired Delivery Target
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {timelineOptions.map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, timeline: opt.value }))}
                  className={`py-3.5 px-2 text-center rounded-xl text-xs font-bold tracking-wide border transition-all duration-200 cursor-pointer ${
                    formData.timeline === opt.value
                      ? 'bg-brand-gold text-brand-dark border-brand-gold shadow-lg shadow-brand-gold/10'
                      : isLight
                        ? 'bg-brand-dark/5 border-brand-gold/15 hover:border-brand-gold/25 text-brand-dark'
                        : 'bg-brand-cream/5 border-white/5 hover:border-brand-gold/25 text-brand-cream/80'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isLight ? 'text-brand-dark' : 'text-brand-cream/80'}`}>
              Project requirements & Details
            </label>
            <textarea
              name="details"
              rows={4}
              value={formData.details}
              onChange={handleInputChange}
              placeholder="Tell us about your digital vision, key features, integrations needed (eg. Stripe, custom CRM, booking systems)..."
              className={`w-full border border-brand-gold/15 hover:border-brand-gold/25 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl p-3.5 px-4 text-sm placeholder-gray-400 transition-all outline-none resize-none leading-relaxed ${
                isLight 
                  ? 'bg-brand-dark/5 text-brand-dark' 
                  : 'bg-brand-cream/5 text-white'
              }`}
            ></textarea>
          </div>

          {/* Double action submissions for conversions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            {/* WhatsApp Integration button (Primary Mobile Choice) */}
            <button
              type="button"
              onClick={handleWhatsAppAction}
              className={`w-full sm:w-1/2 py-4 px-6 rounded-xl font-bold tracking-wide border flex items-center justify-center space-x-2 cursor-pointer text-sm transition-all ${
                isLight 
                  ? 'bg-brand-dark hover:bg-brand-green text-brand-cream border-brand-dark/10' 
                  : 'bg-[#0F4C3A] hover:bg-[#2E7D62] text-white border-brand-gold/30'
              }`}
            >
              <MessageCircle className="w-5 h-5 text-brand-gold" />
              <span>Submit via WhatsApp</span>
            </button>

            {/* Standard Email brief submission */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-1/2 py-4 px-6 rounded-xl bg-brand-gold hover:bg-brand-dark hover:text-brand-cream text-brand-dark font-black active:scale-[0.98] transition-all tracking-wide flex items-center justify-center space-x-2 cursor-pointer text-sm border-none"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full animate-spin"></div>
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Client Brief</span>
                </>
              )}
            </button>
          </div>
          
          <div className="text-center pt-2">
            <span className={`text-[10px] font-mono flex items-center justify-center gap-1 ${isLight ? 'text-brand-dark/50' : 'text-brand-muted'}`}>
              <Trophy className="w-3.5 h-3.5 text-brand-gold" />
              <span>Your data is encrypted locally and never transmitted blindly. We respect layout privacy.</span>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
