import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations = {
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.products': 'المنتجات',
    'nav.supplements': 'المكملات',
    'nav.partnerships': 'الشراكات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.title': 'الطاقة الخضراء',
    'hero.subtitle': 'تحويل الزراعة الصحراوية إلى اقتصاد عالي القيمة',
    'hero.cta.contact': 'تواصل معنا',
    'hero.cta.products': 'اكتشف منتجاتنا',
    
    // About
    'about.title': 'اختر الأعلاف الطبيعية',
    'about.subtitle': 'نزرع محاصيلنا بشكل طبيعي وبالعناية التامة',
    'about.description': 'تُنتج شركة أوبتيفيد أعلافًا خضراء من إنتاج شركة إمبرابا البرازيلية لتغذية الماشية. نستخدم أساليب متنوعة من الزراعة الحقلية إلى مكملات الأعلاف الطبيعية.',
    'about.feature1.title': 'طبيعي 100%',
    'about.feature1.desc': 'منتجات عضوية خالية من المواد الكيميائية',
    'about.feature2.title': 'قيمة بروتين عالية',
    'about.feature2.desc': 'تصل إلى 20% من البروتين النقي',
    'about.feature3.title': 'خضراء وطازجة دائمًا',
    'about.feature3.desc': 'أعلاف طازجة على مدار العام',
    
    // Products
    'products.title': 'منتجاتنا',
    'products.subtitle': 'أعلاف خضراء عالية الجودة من EMBRAPA البرازيلية',
    'products.capiacu.name': 'BRS CAPIAÇU',
    'products.capiacu.type': 'أعلاف EMBRAPA',
    'products.capiacu.desc': 'ذو المردودية العالية',
    'products.kurumi.name': 'BRS KURUMI',
    'products.kurumi.type': 'أعلاف EMBRAPA',
    'products.kurumi.desc': 'خضراء ذات جودة عالية',
    'products.sarandi.name': 'BRS SARANDI',
    'products.sarandi.type': 'أعلاف EMBRAPA',
    'products.sarandi.desc': 'مخصصة للأراضي غير الخصبة',
    
    // Supplements
    'supplements.title': 'المكملات الطبيعية',
    'supplements.subtitle': 'تركيبات طبيعية لصحة أفضل للماشية',
    'supplements.lacta.name': 'LACTA+',
    'supplements.lacta.type': 'مكمل غذائي طبيعي',
    'supplements.lacta.desc': 'للرضاعة الطبيعية ورفع إنتاج الحليب',
    'supplements.af.name': 'AF+',
    'supplements.af.type': 'تركيبة طبيعية مضادة للفطريات',
    'supplements.af.desc': 'صالحة للأغنام، الماعز، الأبقار',
    'supplements.rep.name': 'REP+',
    'supplements.rep.type': 'مكمل غذائي طبيعي',
    'supplements.rep.desc': 'لتجديد العناصر الغذائية والفيتامينات ودعم الاستعداد للتكاثر والولادة',
    
    // Partnerships
    'partnerships.title': 'شراكاتنا',
    'partnerships.subtitle': 'نبني شراكات مع الجامعات والمؤسسات العلمية',
    'partnerships.desc': 'البحث والتطوير الزراعي المستدام',
    
    // Projects
    'projects.title': 'مشاريعنا',
    'projects.subtitle': 'نوسع نطاق الزراعة المستدامة',
    'projects.adrar.title': 'مشروع جديد في أدرار',
    'projects.adrar.desc': 'تنمية 6000 هكتار من الأعلاف الخضراء',
    'projects.adrar.location': 'الجزائر',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نحن هنا للإجابة على استفساراتك',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.message': 'رسالتك',
    'contact.submit': 'اتصل بنا',
    'contact.location': 'أدرار',
    'contact.address': 'العنوان',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.company': 'الطاقة الخضراء',
    
    // WhatsApp Button
    'whatsapp.label': 'تواصل معنا على واتساب',
    'whatsapp.message': 'مرحبا، أريد الاستفسار عن الأعلاف والخدمات',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.supplements': 'Supplements',
    'nav.partnerships': 'Partnerships',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Green Energy',
    'hero.subtitle': 'Transforming Desert Agriculture into High-Value Economy',
    'hero.cta.contact': 'Contact Us',
    'hero.cta.products': 'Discover Products',
    
    // About
    'about.title': 'Choose Natural Feed',
    'about.subtitle': 'We grow our crops naturally with complete care',
    'about.description': 'Optifeed produces green fodder from Brazilian EMBRAPA for livestock nutrition. We use diverse methods from field farming to natural feed supplements.',
    'about.feature1.title': '100% Natural',
    'about.feature1.desc': 'Organic products free from chemicals',
    'about.feature2.title': 'High Protein Value',
    'about.feature2.desc': 'Up to 20% pure protein content',
    'about.feature3.title': 'Always Fresh & Green',
    'about.feature3.desc': 'Fresh fodder all year round',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'High-quality green fodder from Brazilian EMBRAPA',
    'products.capiacu.name': 'BRS CAPIAÇU',
    'products.capiacu.type': 'EMBRAPA Fodder',
    'products.capiacu.desc': 'High Yield Performance',
    'products.kurumi.name': 'BRS KURUMI',
    'products.kurumi.type': 'EMBRAPA Fodder',
    'products.kurumi.desc': 'Premium Green Quality',
    'products.sarandi.name': 'BRS SARANDI',
    'products.sarandi.type': 'EMBRAPA Fodder',
    'products.sarandi.desc': 'Designed for Infertile Lands',
    
    // Supplements
    'supplements.title': 'Natural Supplements',
    'supplements.subtitle': 'Natural formulas for better livestock health',
    'supplements.lacta.name': 'LACTA+',
    'supplements.lacta.type': 'Natural Supplement',
    'supplements.lacta.desc': 'For natural nursing and increased milk production',
    'supplements.af.name': 'AF+',
    'supplements.af.type': 'Natural Antifungal Formula',
    'supplements.af.desc': 'Suitable for sheep, goats, and cattle',
    'supplements.rep.name': 'REP+',
    'supplements.rep.type': 'Natural Supplement',
    'supplements.rep.desc': 'For nutrient renewal and reproduction support',
    
    // Partnerships
    'partnerships.title': 'Our Partnerships',
    'partnerships.subtitle': 'Building partnerships with universities and scientific institutions',
    'partnerships.desc': 'Sustainable Agricultural Research and Development',
    
    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Expanding sustainable agriculture',
    'projects.adrar.title': 'New Project in Adrar',
    'projects.adrar.desc': 'Development of 6,000 hectares of green fodder',
    'projects.adrar.location': 'Algeria',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to answer your inquiries',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.message': 'Your Message',
    'contact.submit': 'Send Message',
    'contact.location': 'Adrar',
    'contact.address': 'Address',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.company': 'Green Energy',
    
    // WhatsApp Button
    'whatsapp.label': 'Chat with us on WhatsApp',
    'whatsapp.message': 'Hello, I would like to ask about your green feed products and services.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
