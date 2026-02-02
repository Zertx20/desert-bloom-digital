import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import fodderKurumi from '@/assets/fodder-kurumi.jpg';
import fodderSarandi from '@/assets/fodder-sarandi.jpg';
import fodderCapiacu from '@/assets/fodder-capiacu.jpg';

const Products = () => {
  const { t, dir } = useLanguage();

  const products = [
    {
      name: t('products.capiacu.name'),
      type: t('products.capiacu.type'),
      description: t('products.capiacu.desc'),
      image: fodderCapiacu,
      badge: dir === 'rtl' ? 'الأكثر مبيعاً' : 'Best Seller',
    },
    {
      name: t('products.kurumi.name'),
      type: t('products.kurumi.type'),
      description: t('products.kurumi.desc'),
      image: fodderKurumi,
      badge: dir === 'rtl' ? 'جودة عالية' : 'Premium',
    },
    {
      name: t('products.sarandi.name'),
      type: t('products.sarandi.type'),
      description: t('products.sarandi.desc'),
      image: fodderSarandi,
      badge: dir === 'rtl' ? 'للصحراء' : 'Desert',
    },
  ];

  return (
    <section id="products" className="section-padding bg-background" dir={dir}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {dir === 'rtl' ? 'منتجاتنا' : 'Our Products'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('products.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-2"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                {product.badge}
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">
                  {product.type}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto font-medium text-primary hover:text-primary/80 group/btn"
                >
                  {dir === 'rtl' ? 'معرفة المزيد' : 'Learn More'}
                  <ArrowUpRight className="w-4 h-4 ms-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
