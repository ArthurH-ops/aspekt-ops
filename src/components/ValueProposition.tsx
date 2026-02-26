import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ValueProposition = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative overflow-hidden bg-primary" ref={ref}>
      <div className="container-wide py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
              transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            <p className="eyebrow text-primary-foreground/60 mb-6">Why Us</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary-foreground leading-[0.95] tracking-tight mb-8">
              We don't just advise.
              <span className="text-primary-foreground/50"> We have actually built stuff.</span>
            </h2>
            <div className="space-y-6 text-primary-foreground/70 text-lg leading-relaxed">
              <p>
                We are technologists, and we believe most of the world's problems can be solved through realized breakthroughs.
              </p>
              <p>
                We're the team behind Aspekt Development — a product studio that has been
                turning deep-tech research into shippable hardware since 2016. We've been through this for years and know it's all about execution.
              </p>
              <p>
                But every great project starts with a good plan. That's our focus here: the roadmap from prototype to product. When it's time to build, that's where Aspekt Development comes in.
              </p>
            </div>
            <p className="text-primary-foreground font-bold text-xl mt-8">
              Not theory. A plan you can execute on.
            </p>
          </div>

          {/* Right - stats card */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
              transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
              transitionDelay: '120ms'
            }}
          >
            <div className="bg-background/10 backdrop-blur-sm p-8 md:p-12 border border-primary-foreground/20">
              <div className="space-y-6 mb-12">
                <div className="flex justify-between py-4 border-b border-primary-foreground/20">
                  <span className="text-primary-foreground/50">Based</span>
                  <span className="text-primary-foreground font-bold">Vienna, Austria</span>
                </div>
                <div className="flex justify-between py-4 border-b border-primary-foreground/20">
                  <span className="text-primary-foreground/50">Since</span>
                  <span className="text-primary-foreground font-bold">2016</span>
                </div>
                <div className="flex justify-between py-4 border-b border-primary-foreground/20">
                  <span className="text-primary-foreground/50">Focus</span>
                  <span className="text-primary-foreground font-bold">Deep-Tech / Hardware</span>
                </div>
                <div className="flex justify-between py-4 border-b border-primary-foreground/20">
                  <span className="text-primary-foreground/50">Output</span>
                  <span className="text-primary-foreground font-bold">Technical Project Plan</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Work with us
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://aspektdevelopment.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-primary-foreground/70 hover:text-primary-foreground font-bold uppercase tracking-wider text-sm transition-colors"
                >
                  See products
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
