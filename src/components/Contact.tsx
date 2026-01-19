import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          subject: `New inquiry from ${formState.name} - Aspekt Operations`,
          from_name: 'Aspekt Operations Website',
          ...formState,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed');
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding border-t border-border" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="eyebrow mb-6">Get Started</p>
            <h2 className="heading-section mb-8">
              Let's talk about
              <span className="text-muted-foreground"> your project.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              No pitch required. Just tell us what you're building and we'll
              figure out if we can help. Most conversations start with a quick
              30-minute call.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:arthur@aspektdevelopment.com"
                className="block p-6 border-2 border-border hover:border-primary transition-colors group"
              >
                <p className="font-bold group-hover:text-primary transition-colors mb-1">Email directly</p>
                <p className="text-sm text-muted-foreground">arthur@aspektdevelopment.com</p>
              </a>
              <div className="p-6 border-2 border-border">
                <p className="font-bold mb-1">Response time</p>
                <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-wider font-bold mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-wider font-bold mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-xs uppercase tracking-wider font-bold mb-3">
                Company <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <input
                type="text"
                id="company"
                value={formState.company}
                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                placeholder="Your company"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-wider font-bold mb-3">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className="btn-primary w-full sm:w-auto disabled:opacity-70"
            >
              {status === 'submitting' ? (
                'Sending...'
              ) : status === 'success' ? (
                <>
                  <Check className="w-5 h-5" />
                  Sent
                </>
              ) : status === 'error' ? (
                'Try again'
              ) : (
                <>
                  Send message
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {status === 'error' && (
              <p className="text-sm text-muted-foreground">
                Something went wrong. Email us at{' '}
                <a href="mailto:arthur@aspektdevelopment.com" className="text-primary hover:underline">
                  arthur@aspektdevelopment.com
                </a>
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
