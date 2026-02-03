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
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 32px, 0)',
            transition: 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          <p className="eyebrow text-primary-foreground/60 mb-8">The Reality</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-[1.1] tracking-tight max-w-5xl">
            Most deep-tech startups don't fail because the science is wrong.
            <span className="text-primary-foreground/50"> They fail because no one turned it into a buildable, fundable plan.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Statement;
