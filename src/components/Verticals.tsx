import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const verticals = [
  {
    title: 'Robotics',
    description: 'Industrial systems. Automation. IoT. Manufacturing equipment.',
    image: '/images/bg/robotics.jpg',
    number: '01',
  },
  {
    title: 'BioTech',
    description: 'Life sciences. Sustainability hardware. Environmental monitoring.',
    image: '/images/bg/biotech.jpg',
    number: '02',
  },
  {
    title: 'MedTech',
    description: 'Medical devices. Diagnostics. Wearables. CE & regulatory pathways.',
    image: '/images/bg/labautomatisation.jpg',
    number: '03',
  },
  {
    title: 'Energy',
    description: 'Power systems. Grid technology. Renewable infrastructure.',
    image: '/images/bg/energy.jpg',
    number: '04',
  },
];

// Lazy loaded background image component
const LazyBackgroundImage = ({ src, className }: { src: string; className: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <img
        src={src}
        alt=""
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className="hidden"
      />
      <div
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: loaded ? `url('${src}')` : undefined,
          transition: 'opacity 0.5s ease-out'
        }}
      />
    </>
  );
};

const Verticals = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="verticals" className="section-padding relative" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <div
          className="mb-16 md:mb-24"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
            transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          <p className="eyebrow mb-6">Industries</p>
          <h2 className="heading-section max-w-4xl">
            Deep expertise across
            <span className="text-muted-foreground"> high-stakes verticals.</span>
          </h2>
        </div>

        {/* Grid - 2x2 square */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {verticals.map((vertical, index) => (
            <div
              key={vertical.title}
              className="group relative overflow-hidden cursor-pointer aspect-square"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
                transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: `${100 + index * 80}ms`,
                contain: 'layout style paint'
              }}
            >
              {/* Background - lazy loaded */}
              <LazyBackgroundImage
                src={vertical.image}
                className="absolute inset-0 bg-cover bg-center will-change-transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-background/70 dark:bg-background/60 group-hover:bg-background/50 transition-colors duration-500" />

              {/* Content */}
              <div className="relative h-full p-8 md:p-12 flex flex-col justify-between">
                <span className="text-7xl md:text-8xl lg:text-9xl font-black text-foreground/10 group-hover:text-primary/20 transition-colors duration-300">
                  {vertical.number}
                </span>
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 group-hover:text-primary transition-colors duration-300">
                    {vertical.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground max-w-md">
                    {vertical.description}
                  </p>
                </div>
              </div>

              {/* Border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
