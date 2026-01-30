import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    number: '01',
    title: 'Technical Architecture',
    description: "You have an idea but no clear path to build it. We validate feasibility, define the architecture, and give you a roadmap you can actually execute on.",
    deliverables: ['System architecture', 'Tech stack selection', 'Risk assessment', 'Build vs buy'],
  },
  {
    number: '02',
    title: 'Investor Readiness',
    description: "Investors ask technical questions you can't answer yet. We build the tech slides, roadmap, and data room materials that make them stop asking.",
    deliverables: ['Pitch deck tech slides', 'Technical roadmap', 'Milestone planning', 'Data room'],
  },
  {
    number: '03',
    title: 'Due Diligence',
    description: "Technical scrutiny kills deals you've worked months to close. We find your weak spots before investors do and help you fix them.",
    deliverables: ['Tech DD preparation', 'Risk documentation', 'Team assessment', 'Scalability review'],
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding border-t border-border" ref={ref}>
      <div className="container-wide">
        {/* Header - left aligned, bold */}
        <div
          className="flex flex-col lg:flex-row lg:justify-between gap-8 mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
            transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          <div>
            <p className="eyebrow mb-6">What We Do</p>
            <h2 className="heading-section">
              You need technical<br />
              credibility. Fast.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg lg:text-right lg:self-end">
            Without a technical co-founder, investors won't take you seriously. We close that gap. From feasibility to fundable.
          </p>
        </div>

        {/* Services - stacked, full width */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="group card-brutal flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.2s',
                transitionDelay: `${100 + index * 80}ms`
              }}
            >
              {/* Number */}
              <div className="flex items-center justify-between lg:block">
                <span className="text-5xl md:text-6xl font-black text-border group-hover:text-primary transition-colors">
                  {service.number}
                </span>
                <ArrowUpRight className="w-6 h-6 lg:hidden text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Content */}
              <div className="flex-1 lg:flex lg:gap-16">
                <div className="lg:flex-1">
                  <h3 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="mt-6 lg:mt-0 lg:w-64">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Deliverables</p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="text-sm flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Arrow - desktop */}
              <ArrowUpRight className="hidden lg:block w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-16 pt-16 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
          <div>
            <p className="text-xl font-bold mb-1">Not sure where to start?</p>
            <p className="text-muted-foreground">30-minute call. No commitment.</p>
          </div>
          <a href="#contact" className="btn-primary">
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
