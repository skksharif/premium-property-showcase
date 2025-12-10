import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { PlotCategoriesSection } from '@/components/PlotCategoriesSection';
import { PropertiesSection } from '@/components/PropertiesSection';
import { AboutSection } from '@/components/AboutSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PlotCategoriesSection />
      <PropertiesSection />
      <AboutSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;