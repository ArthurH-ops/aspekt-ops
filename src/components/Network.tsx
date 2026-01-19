import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    name: 'Brightmind',
    category: 'Medical Device',
    description: 'Non-invasive brain stimulation device for migraine prevention. From prototype to CE certification.',
    image: '/images/projects/brightmind.jpeg',
    link: 'https://aspektdevelopment.com',
  },
  {
    name: 'Cellectric',
    category: 'Biotech Equipment',
    description: 'Laboratory electroporation system for biotechnology research. Full product development.',
    image: '/images/projects/cellectric.jpeg',
    link: 'https://aspektdevelopment.com',
  },
  {
    name: 'Lifetaq',
    category: 'Biotech',
    description: '3D human cell models for pharmaceutical drug testing. Complex hardware-software integration.',
    image: '/images/projects/lifetaq.jpeg',
    link: 'https://aspektdevelopment.com',
  },
  {
    name: 'DigniSens',
    category: 'Healthcare IoT',
    description: 'Digital sensor systems for nursing care. Industrial-grade reliability meets healthcare compliance.',
    image: '/images/projects/Dignisens.png',
    link: 'https://aspektdevelopment.com',
  },
  {
    name: 'EOOS',
    category: 'Consumer Product',
    description: 'Award-winning industrial design collaboration. Precision manufacturing at scale.',
    image: '/images/projects/EOOS.png',
    link: 'https://aspektdevelopment.com',
  },
];

const Network = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="work" className="section-padding border-t border-border relative overflow-hidden">
      <div className="container-wide relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">Selected Work</p>
            <h2 className="heading-section">
              Products we've<br />
              <span className="text-muted-foreground">helped ship.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            Deep-tech ventures we've taken from concept to production through Aspekt Development.
          </p>
        </div>

        {/* Project grid - mixed layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block transition-all duration-700 ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Project image */}
              <div className={`${index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'} rounded-lg mb-4 overflow-hidden relative bg-secondary`}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </div>
                {/* Category badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary bg-background/80 backdrop-blur-sm px-3 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>

              <h3 className={`${index === 0 ? 'text-3xl' : 'text-xl'} font-semibold mb-2 group-hover:text-primary transition-colors duration-300`}>
                {project.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </a>
          ))}
        </div>

        {/* Link to main site */}
        <div className={`mt-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <a
            href="https://aspektdevelopment.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            View full portfolio on Aspekt Development
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Network;
