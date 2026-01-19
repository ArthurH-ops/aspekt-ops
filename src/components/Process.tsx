import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We learn about your product, stage, and specific technical challenges. No prep needed — just a conversation.',
    duration: '30 min',
  },
  {
    number: '02',
    title: 'Technical Assessment',
    description: 'We review your architecture, identify risks, and map out what needs to happen for investor confidence.',
    duration: '1-2 weeks',
  },
  {
    number: '03',
    title: 'Documentation & Prep',
    description: 'We create the technical materials investors expect: architecture docs, roadmaps, risk assessments.',
    duration: '2-4 weeks',
  },
  {
    number: '04',
    title: 'Due Diligence Support',
    description: 'We prepare you for technical deep-dives and join calls if needed. You walk in confident.',
    duration: 'Ongoing',
  },
];

const Process = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding border-t border-border relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03]"
        style={{ backgroundImage: "url('/images/bg/AI.jpg')" }}
      />

      <div className="container-wide relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">How We Work</p>
            <h2 className="heading-section">
              Simple process.<br />
              <span className="text-muted-foreground">Real results.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            No complex engagements. We integrate with your workflow and deliver what you actually need.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative md:grid md:grid-cols-2 md:gap-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Left side (odd) / Right side (even) content */}
                <div className={`${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:col-start-2 md:pl-16'}`}>
                  {/* Step card */}
                  <div className="bg-card/50 rounded-lg p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-bold text-border/30 font-mono">{step.number}</span>
                      <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1 rounded">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center node */}
                <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <p className="text-muted-foreground mb-6">
            Most founders see results within the first month.
          </p>
          <a href="#contact" className="btn-outline">
            Book your discovery call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
