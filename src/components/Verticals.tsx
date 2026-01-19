import { useScrollAnimation } from '../hooks/useScrollAnimation';

const verticals = [
  {
    title: 'MedTech',
    description: 'Class I/II/III medical devices. Regulatory pathways. Clinical integration.',
    image: '/images/bg/labautomatisation.jpg',
    number: '01',
  },
  {
    title: 'BioTech',
    description: 'Laboratory automation. Analytical instruments. Life science equipment.',
    image: '/images/bg/biotech.jpg',
    number: '02',
  },
  {
    title: 'Robotics',
    description: 'Industrial robotics. Autonomous systems. Precision mechatronics.',
    image: '/images/bg/robotics.jpg',
    number: '03',
  },
  {
    title: 'SpaceTech',
    description: 'Satellite subsystems. Ground equipment. Space-qualified hardware.',
    image: '/images/bg/spacetech.jpg',
    number: '04',
  },
];

const Verticals = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="verticals" className="section-padding relative" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <div className={`mb-16 md:mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow mb-6">Industries</p>
          <h2 className="heading-section max-w-4xl">
            Deep expertise across
            <span className="text-muted-foreground"> high-stakes verticals.</span>
          </h2>
        </div>

        {/* Grid - asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {verticals.map((vertical, index) => (
            <div
              key={vertical.title}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ${
                index === 0 ? 'md:row-span-2 aspect-square md:aspect-auto' : 'aspect-[16/9]'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${vertical.image}')` }}
              />
              <div className="absolute inset-0 bg-background/70 dark:bg-background/60 group-hover:bg-background/50 transition-colors duration-500" />

              {/* Content */}
              <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
                <span className="text-6xl md:text-7xl font-black text-foreground/10 group-hover:text-primary/20 transition-colors">
                  {vertical.number}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-2 group-hover:text-primary transition-colors">
                    {vertical.title}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
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
