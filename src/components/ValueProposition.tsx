import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ValueProposition = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative overflow-hidden bg-primary" ref={ref}>
      <div className="container-wide py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="eyebrow text-primary-foreground/60 mb-6">Why Us</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary-foreground leading-[0.95] tracking-tight mb-8">
              Builders first.
              <span className="text-primary-foreground/50"> Advisors second.</span>
            </h2>
            <div className="space-y-6 text-primary-foreground/70 text-lg leading-relaxed">
              <p>
                We're not consultants who've only read case studies. We're the team
                behind Aspekt Development—a product studio that ships hardware.
              </p>
              <p>
                Medical devices. Industrial systems. Cleantech hardware.
                We've seen the pitfalls and know the shortcuts.
              </p>
            </div>
            <p className="text-primary-foreground font-bold text-xl mt-8">
              No theory. Just lessons from real products.
            </p>
          </div>

          {/* Right - stats card */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '150ms' }}>
            <div className="bg-background/10 backdrop-blur-sm p-8 md:p-12 border border-primary-foreground/20">
              <div className="mb-12">
                <p className="text-[80px] md:text-[100px] font-black text-primary-foreground leading-none">M+</p>
                <p className="text-primary-foreground/50 text-sm uppercase tracking-wider mt-2">Products on market</p>
              </div>

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
