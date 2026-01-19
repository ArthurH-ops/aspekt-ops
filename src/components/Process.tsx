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
    <section id="process" className="section-padding border-t border-border relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.04]"
        style={{ backgroundImage: "url('/images/bg/form.jpg')" }}
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

        {/* Process steps - horizontal timeline on desktop */}
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border/50 -translate-x-1/2" />
              )}

              {/* Step card */}
              <div className="bg-card/50 rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary font-mono">{step.number}</span>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground">
                    {step.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
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
