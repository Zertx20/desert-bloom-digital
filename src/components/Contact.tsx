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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
              {dir === 'rtl' ? 'تواصل معنا' : 'Contact Us'}
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t('contact.title')}
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-10">
              {t('contact.subtitle')}
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/60">{info.label}</div>
                    <div className="font-semibold text-lg">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-card text-card-foreground rounded-2xl p-8 lg:p-10 card-shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('contact.name')}
                </label>
                <Input
                  required
                  placeholder={dir === 'rtl' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                  className="bg-secondary border-0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('contact.email')}
                </label>
                <Input
                  type="email"
                  required
                  placeholder={dir === 'rtl' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                  className="bg-secondary border-0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('contact.phone')}
                </label>
                <Input
                  type="tel"
                  placeholder={dir === 'rtl' ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                  className="bg-secondary border-0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('contact.message')}
                </label>
                <Textarea
                  required
                  rows={4}
                  placeholder={dir === 'rtl' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                  className="bg-secondary border-0 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5 me-2" />
                    {t('contact.submit')}
                  </>
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
