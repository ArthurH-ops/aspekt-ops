import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    number: '01',
    title: 'Technical Architecture',
    description: 'System design, tech stack decisions, and feasibility assessments. The documentation you need to prove your product can be built.',
    deliverables: ['System architecture', 'Tech stack selection', 'Risk assessment', 'Build vs buy'],
  },
  {
    number: '02',
    title: 'Investor Readiness',
    description: 'Technical sections for pitch decks, data room materials, and the answers to questions investors will ask.',
    deliverables: ['Pitch deck tech slides', 'Technical roadmap', 'Milestone planning', 'Data room'],
  },
  {
    number: '03',
    title: 'Due Diligence',
    description: 'Prepare for technical due diligence before investors dig in. Know your weak spots and address them proactively.',
    deliverables: ['Tech DD preparation', 'Risk documentation', 'Team assessment', 'Scalability review'],
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding border-t border-border" ref={ref}>
      <div className="container-wide">
        {/* Header - left aligned, bold */}
        <div className={`flex flex-col lg:flex-row lg:justify-between gap-8 mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="eyebrow mb-6">What We Do</p>
            <h2 className="heading-section">
              Get the technical<br />
              credibility you need.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg lg:text-right lg:self-end">
            From first prototype to investor pitch. We help early-stage founders build the technical story that gets funded.
          </p>
        </div>

        {/* Services - stacked, full width */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`group card-brutal flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
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
