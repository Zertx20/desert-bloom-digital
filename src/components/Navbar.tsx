import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#products', label: t('nav.products') },
    { href: '#supplements', label: t('nav.supplements') },
    { href: '#partnerships', label: t('nav.partnerships') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'lg:bg-card/95 lg:backdrop-blur-md lg:shadow-lg bg-transparent'
          : 'bg-transparent'
      }`}
      dir={dir}
    >
      <div className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group animate-fade-in">
            <div className="w-10 h-10 rounded-lg overflow-hidden group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
              <img 
                src="/logo.jpg" 
                alt="Green Energy Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {language === 'ar' ? 'الطاقة الخضراء' : 'Green Energy'}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-all duration-300 relative group hover:scale-105 animate-slide-down"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-lg" />
              </a>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="font-bold border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg animate-pulse-slow"
            >
              {language === 'ar' ? 'EN' : 'AR'}
            </Button>
            <Button 
              variant="default" 
              asChild
              className="transition-all duration-300 hover:scale-110 hover:shadow-xl animate-bounce-in"
            >
              <a href="#contact">{t('nav.contact')}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="font-bold border-primary/30 transition-all duration-300 hover:scale-110"
            >
              {language === 'ar' ? 'EN' : 'AR'}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="transition-all duration-300 hover:scale-110 hover:bg-primary/10"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 animate-rotate-in" />
              ) : (
                <Menu className="w-6 h-6 animate-rotate-in" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slide-down">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-secondary hover:text-primary font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                variant="default" 
                className="mt-2 transition-all duration-300 hover:scale-105 hover:shadow-lg" 
                asChild
              >
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('nav.contact')}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
