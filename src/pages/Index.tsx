import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Statement from '@/components/Statement';
import Verticals from '@/components/Verticals';
import Services from '@/components/Services';
import Network from '@/components/Network';
import Process from '@/components/Process';
import ValueProposition from '@/components/ValueProposition';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger page load animation after a brief moment
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsLoaded(true);
      });
    });
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.4s ease-out'
      }}
    >
      <Navigation />
      <main>
        <Hero />
        <Verticals />
        <Services />
        <Statement />
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
