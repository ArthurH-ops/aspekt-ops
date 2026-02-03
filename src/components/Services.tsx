import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    number: '01',
    title: 'Technical Assessment',
    description: "You have working tech but no clear path to a product. We assess what you've built, identify the gaps, and map what it takes to get from here to something real.",
    deliverables: ['Feasibility validation', 'Architecture review', 'Risk identification', 'Build vs buy analysis'],
  },
  {
    number: '02',
    title: 'Technical Project Plan',
    description: "Founders tell us the hardest part isn't the science — it's knowing what to build next. We deliver a concrete plan: architecture, milestones, cost structure, and the roadmap to get there.",
    deliverables: ['System architecture', 'Development roadmap', 'Milestone planning', 'Cost estimation'],
  },
  {
    number: '03',
    title: 'Fundraise Support',
    description: "When it comes to technical due diligence, we've seen founders struggle with questions they weren't prepared for. We help you build the technical narrative and materials before you need them.",
    deliverables: ['Tech narrative for pitch', 'Technical roadmap', 'DD preparation', 'Data room materials'],
  },
];

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn about your technology, your stage, and where you\'re stuck. No prep needed.',
    time: '30 min call',
  },
  {
    number: '02',
    title: 'Assessment',
    description: 'We dig into what you\'ve built, identify risks, and map the gap between prototype and product.',
    time: '1-2 weeks',
  },
  {
    number: '03',
    title: 'Project Plan',
    description: 'We deliver your technical project plan — architecture, milestones, and a roadmap you can build on.',
    time: '2-4 weeks',
  },
  {
    number: '04',
    title: 'Support',
    description: 'We stay available for follow-up: technical questions, fundraise prep, or due diligence support.',
    time: 'As needed',
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding border-t border-border" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <div
          className="flex flex-col lg:flex-row lg:justify-between gap-8 mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
            transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          <div>
            <p className="eyebrow mb-6">What We Deliver</p>
            <h2 className="heading-section">
              From prototype<br />
              to project plan.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg lg:text-right lg:self-end">
            The bridge between working tech and a buildable product is a plan. We deliver that plan — grounded in real engineering, not slides.
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

        {/* Process steps - integrated */}
        <div
          className="mt-20 pt-16 border-t border-border"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
            transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
            transitionDelay: '400ms'
          }}
        >
          <p className="eyebrow mb-12">How We Work</p>

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                  transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                  transitionDelay: `${450 + index * 80}ms`
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
        </div>

        {/* CTA */}
        <div className={`mt-16 pt-16 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '700ms' }}>
          <div>
            <p className="text-xl font-bold mb-1">Not sure where to start?</p>
            <p className="text-muted-foreground">30-minute call. No commitment. From first call to project plan — typically within a few weeks.</p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            Book a call
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
