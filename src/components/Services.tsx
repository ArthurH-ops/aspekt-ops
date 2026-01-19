import { ArrowUpRight, Cpu, Users, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Cpu,
    number: '01',
    title: 'Fractional CTO',
    description: 'Technical leadership without the full-time commitment. Architecture decisions, strategic direction, and hands-on problem solving for your hardware venture.',
    features: ['Technical strategy', 'Architecture review', 'Vendor selection', 'Process design'],
  },
  {
    icon: Users,
    number: '02',
    title: 'Team Building',
    description: 'Build your engineering team right from day one. We help you define roles, run interviews, and create a culture that ships.',
    features: ['Role definition', 'Interview process', 'Onboarding design', 'Culture building'],
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Fundraising Prep',
    description: 'Get investor-ready with technical due diligence preparation, pitch deck review, and documentation that stands up to scrutiny.',
    features: ['Tech DD prep', 'Pitch support', 'Documentation', 'Investor intros'],
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding border-t border-border">
      <div className="container-wide" ref={ref}>
        {/* Section header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Services</p>
            <h2 className="heading-section">
              How we help you<br />
              <span className="text-muted-foreground">ship faster.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            We've been in your shoes. Now we bring that experience to help you avoid the mistakes we made.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`card-bold group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-5xl font-bold text-border group-hover:text-primary/20 transition-colors duration-500">
                  {service.number}
                </span>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-500">
                <service.icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors duration-500" />
              </div>

              <h3 className="heading-card mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
