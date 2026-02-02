import { GraduationCap, Building2, FlaskConical, Microscope } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Partnerships = () => {
  const { t, dir } = useLanguage();

  const partners = [
    { icon: GraduationCap, name: dir === 'rtl' ? 'جامعة الجزائر' : 'University of Algeria' },
    { icon: Building2, name: dir === 'rtl' ? 'وزارة الفلاحة' : 'Ministry of Agriculture' },
    { icon: FlaskConical, name: 'EMBRAPA Brazil' },
    { icon: Microscope, name: dir === 'rtl' ? 'مركز البحث الزراعي' : 'Agricultural Research Center' },
  ];

  return (
    <section id="partnerships" className="section-padding bg-background" dir={dir}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {dir === 'rtl' ? 'شراكاتنا' : 'Partnerships'}
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('partnerships.title')}
            </h2>
            
            <p className="text-xl text-muted-foreground mb-4">
              {t('partnerships.subtitle')}
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t('partnerships.desc')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-secondary">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">
                  {dir === 'rtl' ? 'شركاء' : 'Partners'}
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary">
                <div className="text-3xl font-bold text-primary mb-1">5</div>
                <div className="text-sm text-muted-foreground">
                  {dir === 'rtl' ? 'جامعات' : 'Universities'}
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary">
                <div className="text-3xl font-bold text-primary mb-1">3</div>
                <div className="text-sm text-muted-foreground">
                  {dir === 'rtl' ? 'دول' : 'Countries'}
                </div>
              </div>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-8 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <partner.icon className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-medium text-foreground text-center">
                  {partner.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
