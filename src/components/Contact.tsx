import { useState } from 'react';
import { ArrowRight, Check, Mail, Calendar } from 'lucide-react';
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
    <section id="contact" className="section-padding border-t border-border relative overflow-hidden">
      {/* Background - waveform */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08] dark:opacity-[0.05]"
        style={{ backgroundImage: "url('/images/bg/waveform.jpg')" }}
      />

      <div className="container-wide relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">Get Started</p>
            <h2 className="heading-section mb-8">
              Let's talk about<br />
              <span className="text-muted-foreground">your project.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              No pitch required. Just tell us what you're working on and we'll
              figure out if we can help. Most conversations start with a quick
              30-minute call — no strings attached.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:arthur@aspektdevelopment.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors group bg-card/50 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">Email us directly</p>
                  <p className="text-sm text-muted-foreground">arthur@aspektdevelopment.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium">Response time</p>
                  <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-4 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-4 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-3">
                Company / Project <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <input
                type="text"
                id="company"
                value={formState.company}
                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                className="w-full px-4 py-4 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                placeholder="Your company or project name"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-3">
                What are you working on?
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-4 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground resize-none"
                placeholder="Tell us about your project — stage, challenges, what you're looking for..."
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
                  Message sent
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
                Something went wrong. Please email us directly at{' '}
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
