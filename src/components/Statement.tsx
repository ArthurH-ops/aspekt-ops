import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Statement = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section id="statement" className="relative overflow-hidden">
      {/* Full bleed image - sanddunes for abstract feel */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg/sanddunes.jpg')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />

      <div className="container-wide relative z-10 py-32 md:py-48" ref={ref}>
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight">
            <span className="text-muted-foreground">"</span>
            The difference between a successful hardware startup and a failed one
            <span className="text-serif-accent"> isn't just the technology</span>
            <span className="text-muted-foreground">—</span>
            it's having someone who's been through it before.
            <span className="text-muted-foreground">"</span>
          </blockquote>
          <div className={`mt-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
                Our philosophy
              </span>
              <div className="w-12 h-px bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
