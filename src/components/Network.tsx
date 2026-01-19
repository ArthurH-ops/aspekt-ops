import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    name: 'Brightmind',
    category: 'Medical Device',
    description: 'Non-invasive brain stimulation for migraine prevention. Prototype to CE certification.',
    image: '/images/projects/brightmind.jpeg',
    link: 'https://aspektdevelopment.com',
  },
  {
    name: 'Cellectric',
    category: 'Biotech',
    description: 'Laboratory electroporation system. Full product development.',
    image: '/images/projects/cellectric.jpeg',
    link: 'https://aspektdevelopment.com',
  },
  {
    name: 'Lifetaq',
    category: 'Biotech',
    description: '3D human cell models for pharma drug testing.',
    image: '/images/projects/lifetaq.jpeg',
    link: 'https://aspektdevelopment.com',
  },
  {
    name: 'DigniSens',
    category: 'Healthcare IoT',
    description: 'Digital sensor systems for nursing care.',
    image: '/images/projects/Dignisens.png',
    link: 'https://aspektdevelopment.com',
  },
  {
    name: 'EOOS',
    category: 'Consumer',
    description: 'Award-winning industrial design. Precision manufacturing.',
    image: '/images/projects/EOOS.png',
    link: 'https://aspektdevelopment.com',
  },
];

const Network = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="work" className="section-padding border-t border-border" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <div className={`mb-16 md:mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow mb-6">Selected Work</p>
          <h2 className="heading-section">
            Products we've
            <span className="text-muted-foreground"> helped ship.</span>
          </h2>
        </div>

        {/* Projects - editorial layout */}
        <div className="space-y-1">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block border-b border-border py-8 first:border-t transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <div className="flex items-center gap-6 md:gap-12">
                {/* Image - hidden on mobile, shown on hover feel */}
                <div className="hidden md:block w-24 h-24 overflow-hidden bg-secondary flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-1">
                      <h3 className="text-2xl md:text-3xl font-black group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>

                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Link */}
        <div className={`mt-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <a
            href="https://aspektdevelopment.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
          >
            Full portfolio on Aspekt Development
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Network;
