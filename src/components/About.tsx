import { Leaf, Zap, Droplets } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, dir } = useLanguage();

  const features = [
    {
      icon: Leaf,
      title: t('about.feature1.title'),
      description: t('about.feature1.desc'),
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Zap,
      title: t('about.feature2.title'),
      description: t('about.feature2.desc'),
      color: 'bg-accent/10 text-accent-foreground',
    },
    {
      icon: Droplets,
      title: t('about.feature3.title'),
      description: t('about.feature3.desc'),
      color: 'bg-secondary text-secondary-foreground',
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted" dir={dir}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4">
              <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
              {dir === 'rtl' ? 'من نحن' : 'About Us'}
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              {t('about.title')}
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-3 sm:mb-4">
              {t('about.subtitle')}
            </p>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              {t('about.description')}
            </p>

            {/* Features */}
            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-card card-shadow hover:card-shadow-hover transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${feature.color} flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground mb-1 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative aspect-square max-w-md lg:max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin" style={{ animationDuration: '60s' }} />
              <div className="absolute inset-4 sm:inset-8 rounded-full border-2 border-dashed border-accent/20 animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
              
              {/* Center content */}
              <div className="absolute inset-8 sm:inset-12 lg:inset-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-2xl">
                <div className="text-center text-primary-foreground">
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-1 sm:mb-2">20%</div>
                  <div className="text-xs sm:text-sm lg:text-base font-medium opacity-90">
                    {dir === 'rtl' ? 'بروتين نقي' : 'Pure Protein'}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-card rounded-full shadow-lg text-xs sm:text-sm font-medium text-foreground">
                🌿 {dir === 'rtl' ? 'طبيعي' : 'Natural'}
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-card rounded-full shadow-lg text-xs sm:text-sm font-medium text-foreground">
                ✨ {dir === 'rtl' ? 'عضوي' : 'Organic'}
              </div>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-card rounded-full shadow-lg text-xs sm:text-sm font-medium text-foreground">
                💪 {dir === 'rtl' ? 'قوي' : 'Strong'}
              </div>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-card rounded-full shadow-lg text-xs sm:text-sm font-medium text-foreground">
                🌱 {dir === 'rtl' ? 'طازج' : 'Fresh'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
