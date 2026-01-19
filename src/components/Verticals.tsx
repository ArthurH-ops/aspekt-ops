import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const verticals = [
  {
    title: 'MedTech',
    description: 'Class I/II/III medical devices, regulatory pathways, clinical integration.',
    image: '/images/bg/biotech.jpg',
    stats: '15+ devices',
  },
  {
    title: 'BioTech & LabTech',
    description: 'Laboratory automation, analytical instruments, life science equipment.',
    image: '/images/bg/labautomatisation.jpg',
    stats: '20+ systems',
  },
  {
    title: 'Robotics & Automation',
    description: 'Industrial robotics, autonomous systems, precision mechatronics.',
    image: '/images/bg/robotics.jpg',
    stats: '10+ platforms',
  },
  {
    title: 'SpaceTech',
    description: 'Satellite subsystems, ground equipment, space-qualified hardware.',
    image: '/images/bg/spacetech.jpg',
    stats: '5+ projects',
  },
];

const Verticals = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="verticals" className="section-padding border-t border-border relative">
      <div className="container-wide" ref={ref}>
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">Industries</p>
          <h2 className="heading-section max-w-3xl">
            Deep expertise across<br />
            <span className="text-muted-foreground">high-stakes verticals.</span>
          </h2>
        </div>

        {/* Vertical cards grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {verticals.map((vertical, index) => (
            <div
              key={vertical.title}
              className={`group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${vertical.image}')` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-2">
                      {vertical.stats}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {vertical.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base max-w-md">
                      {vertical.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 border border-foreground/20">
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className={`mt-12 grid md:grid-cols-3 gap-8 pt-12 border-t border-border/50 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <div>
            <p className="text-3xl font-bold text-primary mb-2">AI & Edge</p>
            <p className="text-muted-foreground text-sm">Embedded ML, computer vision, real-time inference systems.</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-2">Industrial IoT</p>
            <p className="text-muted-foreground text-sm">Connected devices, sensor networks, predictive maintenance.</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-2">Consumer Hardware</p>
            <p className="text-muted-foreground text-sm">Mass production, DFM optimization, supply chain setup.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verticals;
