import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const painPoints = [
  {
    tension: 'You have a groundbreaking technology — but in six months, an investor needs to hold it in their hands.',
    insight: 'Vision alone won\'t unlock the next round. Tangible progress is the currency of survival.',
    image: '/images/bg/robotics.jpg',
  },
  {
    tension: 'You can\'t afford another prototype that fails in the real world.',
    insight: 'Every iteration burns time and trust. Hardware decisions must be grounded in scale, not just creativity.',
    image: '/images/bg/labautomatisation.jpg',
  },
  {
    tension: 'Your idea is brilliant — but right now, it only works with duct tape and a PhD.',
    insight: 'Usability, repeatability, and integration aren\'t nice-to-haves. They are what turn tech into a product.',
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
        <div className="space-y-4">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group relative overflow-hidden min-h-[280px] md:min-h-[320px]"
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
      </div>
    </section>
  );
};

export default Verticals;
