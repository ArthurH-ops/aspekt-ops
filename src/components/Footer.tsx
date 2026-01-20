import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-wide py-16">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <Logo className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex items-baseline gap-0">
                <span className="text-xl font-black lowercase tracking-tight">aspekt</span>
                <span className="text-xl font-black text-primary lowercase tracking-tight">/ops</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Technical advisory for early-stage hardware startups across Europe. Based in Vienna.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-16">
            <div>
              <p className="text-xs uppercase tracking-wider font-bold mb-4">Services</p>
              <ul className="space-y-3">
                <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Technical Architecture</a></li>
                <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Investor Readiness</a></li>
                <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Due Diligence</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-bold mb-4">Company</p>
              <ul className="space-y-3">
                <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Work</a></li>
                <li>
                  <a href="https://aspektdevelopment.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                    Aspekt Development
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-bold mb-4">Connect</p>
              <ul className="space-y-3">
                <li>
                  <a href="https://arthurh.tech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                    Arthur Handler
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li><a href="mailto:arthur@aspektdevelopment.com" className="text-muted-foreground hover:text-foreground transition-colors">Email</a></li>
                <li>
                  <a href="https://linkedin.com/company/aspekt-development" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                    LinkedIn
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Aspekt Operations GmbH
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
