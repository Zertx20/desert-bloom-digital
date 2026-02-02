import { Leaf, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, dir, language } = useLanguage();

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#products', label: t('nav.products') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-foreground text-background" dir={dir}>
      <div className="container-custom section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                {language === 'ar' ? 'الطاقة الخضراء' : 'Green Energy'}
              </span>
            </a>
            <p className="text-background/60 max-w-md mb-6">
              {language === 'ar'
                ? 'نحول الزراعة الصحراوية إلى اقتصاد مستدام وعالي القيمة من خلال الأعلاف الخضراء والمكملات الطبيعية.'
                : 'Transforming desert agriculture into a sustainable, high-value economy through green fodder and natural supplements.'}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              {language === 'ar' ? 'اتصل بنا' : 'Contact'}
            </h4>
            <ul className="space-y-3 text-background/60">
              <li>0668998991</li>
              <li>{language === 'ar' ? 'أدرار، الجزائر' : 'Adrar, Algeria'}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>
            © {new Date().getFullYear()} {t('footer.company')}. {t('footer.rights')}.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
