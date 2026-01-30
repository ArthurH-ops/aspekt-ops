import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-between relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg/hardcore engineering.jpg')" }}
      />
      <div className="absolute inset-0 bg-background/90 dark:bg-background/85" />

      {/* Top bar */}
      <div className="relative z-10 pt-32 md:pt-40">
        <div className="container-wide">
          <p className="eyebrow animate-fade-up">Vienna / Deep-Tech / Early-Stage</p>
        </div>
      </div>

      {/* Main content - the elevator pitch */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container-wide w-full">
          <h1 className="text-[10vw] sm:text-[8vw] md:text-[7vw] font-black tracking-[-0.04em] leading-[0.85] uppercase animate-fade-up">
            <span className="block">Millions of products</span>
            <span className="block text-primary">shipped.</span>
          </h1>
          <h2 className="text-[6vw] sm:text-[5vw] md:text-[4vw] font-black text-muted-foreground mt-4 md:mt-6 leading-[0.95] tracking-[-0.02em] animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Now we help early-stage founders ship theirs.
          </h2>
        </div>
      </div>

      {/* Bottom section */}
      <div className="relative z-10 pb-12 md:pb-20">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            {/* Left - description */}
            <div className="max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Medical devices. Robotics. Biotech hardware. We've built it all. Now we help you build yours.
              </p>
            </div>

            {/* Right - CTA and stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex gap-12">
                <div>
                  <p className="text-4xl md:text-5xl font-black">M+</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Products</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-black">8Y</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Building</p>
                </div>
              </div>
              <a href="#contact" className="btn-primary">
                Let's talk
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll line */}
        <div className="container-wide mt-12">
          <div className="h-px bg-border" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
