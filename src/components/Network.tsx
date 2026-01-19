import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    name: 'Brightmind',
    category: 'Medical Device',
    description: 'Non-invasive brain stimulation device for migraine prevention. From prototype to CE certification.',
    image: '/projects/brightmind.jpg',
  },
  {
    name: 'Cellectric',
    category: 'Biotech Equipment',
    description: 'Laboratory electroporation system for biotechnology research. Full product development.',
    image: '/projects/cellectric.jpg',
  },
  {
    name: 'Lifetaq',
    category: 'Biotech',
    description: '3D human cell models for pharmaceutical drug testing. Complex hardware-software integration.',
    image: '/projects/lifetaq.jpg',
  },
  {
    name: 'BluePlanet',
    category: 'AgTech / IoT',
    description: 'Automated aquaculture feeding systems. Industrial IoT at scale.',
    image: '/projects/blueplanet.jpg',
  },
];

const Network = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="work" className="section-padding border-t border-border">
      <div className="container-wide" ref={ref}>
        {/* Section header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Selected Work</p>
            <h2 className="heading-section">
              Products we've<br />
              <span className="text-muted-foreground">helped ship.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            A selection of deep-tech ventures we've worked with through Aspekt Development.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image placeholder */}
              <div className="aspect-[16/10] bg-secondary rounded-lg mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-border/50 group-hover:text-primary/20 transition-colors duration-500">
                    {project.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-primary">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Network;
