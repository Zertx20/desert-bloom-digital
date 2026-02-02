import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Supplements from '@/components/Supplements';
import Partnerships from '@/components/Partnerships';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        
        {/* Main content with background image */}
        <div 
          className="relative"
          style={{
            backgroundImage: 'url(/background-image.png)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-background/30" />
          
          {/* Content */}
          <div className="relative z-10">
            <main>
              <About />
              <Products />
              <Supplements />
              <Partnerships />
              <Projects />
              <Contact />
            </main>
          </div>
        </div>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
