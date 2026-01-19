import { Linkedin, ExternalLink } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-16">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                <Logo className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-bold tracking-tight">aspekt</span>
                <span className="text-xs text-muted-foreground font-medium">ops</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strategic advisory for hardware and deep-tech startups.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Fractional CTO
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Team Building
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Fundraising Prep
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a
                  href="https://aspektdevelopment.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  Aspekt Development
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold mb-5">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:arthur@aspektdevelopment.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/aspekt-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn
                  <Linkedin className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Aspekt Operations GmbH. Vienna, Austria.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Imprint
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
