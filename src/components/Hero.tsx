import { ArrowDown, Phone, ShoppingBag, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const { t, dir } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir={dir}
    >
      {/* Background Image with enhanced effects */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Desert Agriculture"
          className="w-full h-full object-cover animate-zoom-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80 animate-pulse-slow" />
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-secondary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-primary/20 rounded-full blur-2xl animate-spin-slow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 text-primary-foreground mb-8 animate-fade-in-up hover:scale-105 transition-all duration-300 shadow-lg">
            <Sparkles className="w-4 h-4 animate-spin" />
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-semibold">
              {dir === 'rtl' ? 'الزراعة المستدامة في الصحراء' : 'Sustainable Desert Agriculture'}
            </span>
            <Sparkles className="w-4 h-4 animate-spin" style={{ animationDirection: 'reverse' }} />
          </div>

          {/* Enhanced Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-6 animate-slide-in-up hover:scale-105 transition-all duration-500 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-foreground to-white animate-gradient">
              {t('hero.title')}
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-10 leading-relaxed animate-fade-in-up max-w-3xl mx-auto hover:text-white transition-colors duration-300" style={{ animationDelay: '0.3s' }}>
            {t('hero.subtitle')}
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg md:text-xl px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group animate-bounce-in"
              asChild
            >
              <a href="#contact" className="flex items-center gap-3">
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                {t('hero.cta.contact')}
                <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg md:text-xl px-8 py-6 bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 hover:border-white/60 transition-all duration-500 hover:scale-105 hover:-translate-y-1 group"
              asChild
            >
              <a href="#products" className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 group-hover:animate-bounce" />
                {t('hero.cta.products')}
                <ArrowDown className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300" />
              </a>
            </Button>
          </div>

          {/* Additional decorative elements */}
          <div className="mt-12 flex justify-center gap-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium">{dir === 'rtl' ? '100% طبيعي' : '100% Natural'}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300">
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm font-medium">{dir === 'rtl' ? 'مستدام' : 'Sustainable'}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300">
              <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="text-sm font-medium">{dir === 'rtl' ? 'عضوي' : 'Organic'}</span>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-in">
          <a href="#about" className="flex flex-col items-center text-white/70 hover:text-white transition-all duration-300 group">
            <span className="text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {dir === 'rtl' ? 'اسحب للأسفل' : 'Scroll Down'}
            </span>
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
