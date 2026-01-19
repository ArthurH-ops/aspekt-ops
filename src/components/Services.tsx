import { ArrowUpRight, FileText, Target, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: FileText,
    number: '01',
    title: 'Technical Architecture',
    description: 'System design, tech stack decisions, and feasibility assessments. The documentation you need to prove your product can be built.',
    features: ['System architecture', 'Tech stack selection', 'Risk assessment', 'Build vs buy analysis'],
  },
  {
    icon: Target,
    number: '02',
    title: 'Investor Readiness',
    description: 'Technical sections for pitch decks, data room materials, and the answers to questions investors will ask.',
    features: ['Pitch deck tech slides', 'Technical roadmap', 'Milestone planning', 'Data room prep'],
  },
  {
    icon: Shield,
    number: '03',
    title: 'Due Diligence Support',
    description: 'Prepare for technical due diligence before investors dig in. Know your weak spots and address them proactively.',
    features: ['Tech DD preparation', 'Risk documentation', 'Team assessment', 'Scalability review'],
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding border-t border-border relative overflow-hidden">
      {/* Background - AI */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06] dark:opacity-[0.04]"
        style={{ backgroundImage: "url('/images/bg/AI.jpg')" }}
      />

      <div className="container-wide relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">What We Do</p>
            <h2 className="heading-section">
              Get the technical<br />
              <span className="text-muted-foreground">credibility you need.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            Investors want proof. We help you build the technical story that
            gets you funded — based on what we've learned shipping real products.
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
                <span className="text-6xl font-bold text-border/50 group-hover:text-primary/20 transition-colors duration-500 font-mono">
                  {service.number}
                </span>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="heading-card mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Low barrier CTA */}
        <div className={`mt-16 p-8 md:p-12 bg-card/50 backdrop-blur-sm rounded-lg border border-border transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Not sure where to start?</h3>
              <p className="text-muted-foreground">Book a free 30-minute call. No commitment — just a conversation about your project.</p>
            </div>
            <a href="#contact" className="btn-primary whitespace-nowrap">
              Book a call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
