import { ArrowRight, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background image - hardcore engineering */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg/hardcore engineering.jpg')" }}
      />
      {/* Overlay - adapts to theme */}
      <div className="absolute inset-0 bg-background/85 dark:bg-background/80" />
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-8 animate-fade-up">
            Technical Advisory / Vienna
          </p>

          {/* Main headline */}
          <h1 className="heading-hero mb-8">
            <span className="animate-fade-up block">Hardware is hard.</span>
            <span className="animate-fade-up block" style={{ animationDelay: '0.1s' }}>
              <span className="text-serif-accent">We make it possible.</span>
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 animate-fade-up leading-relaxed"
            style={{ animationDelay: '0.2s' }}
          >
            Millions of products shipped through Aspekt Development. Medical devices,
            biotech equipment, industrial systems. We've built what most call impossible —
            now we help founders do the same.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a href="#contact" className="btn-primary">
              Start a conversation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#work" className="btn-outline">
              See the work
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-border/50 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <div>
            <p className="text-4xl md:text-5xl font-bold text-primary">M+</p>
            <p className="text-sm text-muted-foreground mt-1">Products on market</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold">8+</p>
            <p className="text-sm text-muted-foreground mt-1">Years building</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold">€50M+</p>
            <p className="text-sm text-muted-foreground mt-1">Client funding raised</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold">EU</p>
            <p className="text-sm text-muted-foreground mt-1">Deep-tech hub</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <a href="#statement" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-[0.2em]">Explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
