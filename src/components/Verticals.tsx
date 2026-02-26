import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const painPoints = [
  {
    tension: 'Your system needs to scale — but the architecture was never designed for manufacturing, testing, or certification.',
    insight: 'Scaling isn\'t just about building more. It requires a plan that accounts for production realities from day one.',
    image: '/images/bg/robotics.jpg',
  },
  {
    tension: 'Your next funding round needs proof — something tangible, testable, and presentable.',
    insight: 'Vision alone won\'t unlock the next round. Investors need to see a credible path from prototype to product.',
    image: '/images/bg/labautomatisation.jpg',
  },
  {
    tension: 'Your deciding factor is speed to reality — it represents the difference between being a first-mover or being left behind.',
    insight: 'Time kills deep-tech startups. A clear roadmap eliminates guesswork and accelerates every decision.',
    image: '/images/bg/biotech.jpg',
  },
];

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
          <p className="eyebrow mb-6">Deep-Tech / Hardware</p>
          <h2 className="heading-section max-w-4xl">
            Sound familiar?
          </h2>
        </div>

        {/* Pain points - cards with background images */}
        <div className="space-y-1">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group relative overflow-hidden min-h-[180px] md:min-h-[200px]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
                transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: `${100 + index * 120}ms`,
              }}
            >
              {/* Background image */}
              <LazyBackgroundImage
                src={point.image}
                className="absolute inset-0 bg-cover bg-center will-change-transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-background/80 dark:bg-background/75 group-hover:bg-background/70 dark:group-hover:bg-background/65 transition-colors duration-500" />

              {/* Content */}
              <div className="relative h-full p-8 md:p-12 flex flex-col justify-between">
                <div className="flex items-start gap-5">
                  <ArrowRight className="w-6 h-6 text-primary mt-1.5 shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                  <div>
                    <p className="text-xl md:text-2xl lg:text-3xl font-black leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                      {point.tension}
                    </p>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                      {point.insight}
                    </p>
                  </div>
                </div>
              </div>

              {/* Border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div
          className="mt-16 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
            transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
            transitionDelay: '500ms',
          }}
        >
          <p className="text-2xl md:text-3xl font-black">
            That's where we come in.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mt-2">
            Your IP stays yours — we plan, you own.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Verticals;
