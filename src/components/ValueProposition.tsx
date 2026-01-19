import { ArrowRight, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ValueProposition = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container-wide relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-mono text-sm tracking-widest uppercase mb-6 text-primary-foreground/60">
              About
            </p>
            <h2 className="heading-section mb-8">
              Practitioners first.<br />
              <span className="opacity-60">Advisors second.</span>
            </h2>
            <div className="space-y-6 text-lg text-primary-foreground/80 leading-relaxed">
              <p>
                We're not consultants who've only read about building hardware.
                We're the team behind Aspekt Development — a product studio that's
                shipped brain stimulation devices, biotech lab equipment, and
                industrial IoT systems.
              </p>
              <p>
                Now we bring that hands-on experience to help you navigate the
                complexities of scaling your hardware venture. No theoretical
                frameworks. Just real lessons from real products.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '150ms' }}>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-white/10">
              <p className="text-5xl md:text-6xl font-bold mb-2">50+</p>
              <p className="text-primary-foreground/60 mb-8">Hardware products shipped through Aspekt Development</p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-primary-foreground/60">Location</span>
                  <span className="font-medium">Vienna, Austria</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-primary-foreground/60">Founded</span>
                  <span className="font-medium">2016</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-primary-foreground/60">Focus</span>
                  <span className="font-medium">Deep-Tech / Hardware</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary bg-white text-black hover:bg-white/90">
                  Work with us
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://aspektdevelopment.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-primary-foreground/80 hover:text-white"
                >
                  Visit Aspekt Development
                  <ExternalLink className="w-4 h-4" />
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
