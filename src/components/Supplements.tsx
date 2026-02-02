import { Droplet, Shield, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Supplements = () => {
  const { t, dir } = useLanguage();

  const supplements = [
    {
      name: t('supplements.lacta.name'),
      type: t('supplements.lacta.type'),
      description: t('supplements.lacta.desc'),
      icon: Droplet,
      color: 'from-blue-500 to-cyan-400',
      iconBg: 'bg-blue-100 text-blue-600',
    },
    {
      name: t('supplements.af.name'),
      type: t('supplements.af.type'),
      description: t('supplements.af.desc'),
      icon: Shield,
      color: 'from-emerald-500 to-teal-400',
      iconBg: 'bg-emerald-100 text-emerald-600',
    },
    {
      name: t('supplements.rep.name'),
      type: t('supplements.rep.type'),
      description: t('supplements.rep.desc'),
      icon: Heart,
      color: 'from-rose-500 to-pink-400',
      iconBg: 'bg-rose-100 text-rose-600',
    },
  ];

  return (
    <section id="supplements" className="section-padding bg-secondary" dir={dir}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {dir === 'rtl' ? 'المكملات' : 'Supplements'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('supplements.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('supplements.subtitle')}
          </p>
        </div>

        {/* Supplements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {supplements.map((supplement, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${supplement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${supplement.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <supplement.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {supplement.name}
                </h3>
                <div className="text-sm font-medium text-primary mb-4">
                  {supplement.type}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {supplement.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className={`absolute -bottom-10 -end-10 w-32 h-32 rounded-full bg-gradient-to-br ${supplement.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supplements;
