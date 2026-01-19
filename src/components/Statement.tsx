import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Statement = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="statement" className="relative overflow-hidden bg-primary">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay"
        style={{ backgroundImage: "url('/images/bg/sanddunes.jpg')" }}
      />

      <div className="container-wide py-24 md:py-32 lg:py-40 relative z-10" ref={ref}>
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="eyebrow text-primary-foreground/60 mb-8">Our Philosophy</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-[1.1] tracking-tight max-w-5xl">
            The difference between success and failure in hardware
            <span className="text-primary-foreground/50"> isn't just technology—</span>
            it's having someone who's been through it before.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Statement;
