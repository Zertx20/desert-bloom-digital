import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = '0668998991';
  const message = encodeURIComponent(t('whatsapp.message'));
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    // Entrance animation after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip/Label - Hidden on mobile, visible on desktop */}
      <div
        className={`
          hidden md:block mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap
          transition-all duration-300 transform
          ${showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
          ${language === 'ar' ? 'ml-2' : 'mr-2'}
          relative
        `}
      >
        {t('whatsapp.label')}
        <div 
          className={`
            absolute top-1/2 -translate-y-1/2 w-0 h-0 
            border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800
            ${language === 'ar' ? '-right-1 border-l-0 border-r-4' : '-left-1 border-r-0 border-l-4'}
          `}
        />
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`
          relative w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full 
          flex items-center justify-center 
          shadow-lg hover:shadow-xl
          transition-all duration-300 transform
          hover:scale-110 hover:ring-4 hover:ring-[#25D366]/30
          focus:outline-none focus:ring-4 focus:ring-[#25D366]/30
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
        aria-label={t('whatsapp.label')}
      >
        {/* WhatsApp Icon */}
        <MessageCircle 
          size={language === 'ar' ? 28 : 28} 
          color="white" 
          strokeWidth={2}
          className="transform hover:scale-110 transition-transform duration-200 sm:size-7"
        />

        {/* Pulse animation */}
        <span 
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"
          style={{ animationDuration: '2s' }}
        />
      </button>

      {/* Mobile responsive adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .fixed {
            bottom: 5rem;
            right: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;
