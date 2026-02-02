import { useState } from 'react';
import { Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, dir } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: dir === 'rtl' ? 'تم الإرسال بنجاح!' : 'Message Sent!',
      description: dir === 'rtl' 
        ? 'سنتواصل معك في أقرب وقت ممكن.'
        : 'We will get back to you as soon as possible.',
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: Phone,
      label: dir === 'rtl' ? 'الهاتف' : 'Phone',
      value: '0668998991',
    },
    {
      icon: MapPin,
      label: dir === 'rtl' ? 'العنوان' : 'Address',
      value: dir === 'rtl' ? 'أدرار، الجزائر' : 'Adrar, Algeria',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground" dir={dir}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs sm:text-sm font-medium mb-4">
              {dir === 'rtl' ? 'اتصل بنا' : 'Contact Us'}
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
              {t('contact.title')}
            </h2>
            
            <p className="text-base sm:text-lg text-primary-foreground/80 mb-8 sm:mb-12">
              {t('contact.subtitle')}
            </p>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/20"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium text-primary-foreground/60 mb-1">
                      {info.label}
                    </div>
                    <div className="text-sm sm:text-base font-semibold">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {dir === 'rtl' ? 'الاسم الكامل' : 'Full Name'}
                </label>
                <Input
                  type="text"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-lg focus:ring-2 focus:ring-primary-foreground/30"
                  placeholder={dir === 'rtl' ? 'أدخل اسمك' : 'Enter your name'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  {dir === 'rtl' ? 'رقم الهاتف' : 'Phone Number'}
                </label>
                <Input
                  type="tel"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-lg focus:ring-2 focus:ring-primary-foreground/30"
                  placeholder={dir === 'rtl' ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  {dir === 'rtl' ? 'الرسالة' : 'Message'}
                </label>
                <Textarea
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-lg focus:ring-2 focus:ring-primary-foreground/30 resize-none"
                  placeholder={dir === 'rtl' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    {dir === 'rtl' ? 'جاري الإرسال...' : 'Sending...'}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    {dir === 'rtl' ? 'إرسال الرسالة' : 'Send Message'}
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
