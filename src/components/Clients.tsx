import { useScrollAnimation } from '../hooks/useScrollAnimation';

const clients = [
  'Philips',
  'Palfinger',
  'Cellectric',
  'Brightmind',
  'Playbrush',
  'DigniSens',
];

const Clients = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 border-t border-border">
      <div className="container-wide" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <p
            className={`text-sm text-muted-foreground uppercase tracking-widest whitespace-nowrap transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            Trusted by
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {clients.map((client, index) => (
              <span
                key={client}
                className={`text-lg font-medium text-muted-foreground/60 hover:text-foreground transition-all duration-500 cursor-default ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
