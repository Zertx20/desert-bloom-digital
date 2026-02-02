import { MapPin, Ruler, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import projectAdrar from '@/assets/project-adrar.jpg';

const Projects = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="projects" className="section-padding bg-muted" dir={dir}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {dir === 'rtl' ? 'مشاريعنا' : 'Projects'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Featured Project */}
        <div className="relative rounded-3xl overflow-hidden bg-card card-shadow">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-80 lg:h-auto min-h-[400px]">
              <img
                src={projectAdrar}
                alt="Adrar Project"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent lg:bg-gradient-to-t" />
              
              {/* Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-bold">
                {dir === 'rtl' ? 'مشروع جديد' : 'New Project'}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t('projects.adrar.title')}
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                {t('projects.adrar.desc')}
              </p>

              {/* Project Details */}
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {dir === 'rtl' ? 'الموقع' : 'Location'}
                    </div>
                    <div className="font-semibold text-foreground">
                      {dir === 'rtl' ? 'أدرار، الجزائر' : 'Adrar, Algeria'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Ruler className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {dir === 'rtl' ? 'المساحة' : 'Area'}
                    </div>
                    <div className="font-semibold text-foreground">
                      6,000 {dir === 'rtl' ? 'هكتار' : 'Hectares'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {dir === 'rtl' ? 'الحالة' : 'Status'}
                    </div>
                    <div className="font-semibold text-foreground">
                      {dir === 'rtl' ? 'قيد التنفيذ' : 'In Progress'}
                    </div>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-fit">
                {dir === 'rtl' ? 'معرفة المزيد' : 'Learn More'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
