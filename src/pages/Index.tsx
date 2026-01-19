import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Verticals from '@/components/Verticals';
import Services from '@/components/Services';
import Network from '@/components/Network';
import Process from '@/components/Process';
import ValueProposition from '@/components/ValueProposition';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Verticals />
        <Services />
        <Network />
        <Process />
        <ValueProposition />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
