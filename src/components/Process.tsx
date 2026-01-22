import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn about your product, stage, and challenges. No prep needed.',
    time: '30 min call',
  },
  {
    number: '02',
    title: 'Assessment',
    description: "We review architecture, identify risks, map what's needed.",
    time: '1-2 weeks',
  },
  {
    number: '03',
    title: 'Documentation',
    description: 'We create technical materials investors expect.',
    time: '2-4 weeks',
  },
  {
    number: '04',
    title: 'Support',
    description: 'We prep you for due diligence and join calls if needed.',
    time: 'Ongoing',
  },
];

const Process = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="section-padding border-t border-border relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03]"
        style={{ backgroundImage: "url('/images/bg/spacetech.jpg')" }}
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div
          className="mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
            transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          <p className="eyebrow mb-6">How We Work</p>
          <h2 className="heading-section">
            Simple process.
            <span className="text-muted-foreground"> Real results.</span>
          </h2>
        </div>

        {/* Steps - horizontal on desktop */}
        <div className="grid md:grid-cols-4 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: `${100 + index * 80}ms`
              }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-border" />
              )}

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl md:text-5xl font-black text-primary">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {step.time}
                  </span>
                </div>
                <h3 className="text-xl font-black mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-20 pt-16 border-t border-border text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <p className="text-muted-foreground mb-6">Most founders see results within the first month.</p>
          <a href="#contact" className="btn-outline">
            Start your project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
