import { MapPin, Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  plots: [
    { label: 'Open Plots', href: '#properties' },
    { label: 'Agricultural Land', href: '#properties' },
    { label: 'DTCP/RERA Approved', href: '#properties' },
    { label: 'Farm Land', href: '#properties' },
  ],
  services: [
    { label: 'Buy Land', href: '#contact' },
    { label: 'Sell Land', href: '#contact' },
    { label: 'Legal Assistance', href: '#' },
    { label: 'Site Visits', href: '#contact' },
  ],
  support: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'FAQs', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-earth flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Vegi<span className="text-gold"> Info</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-sm">
              Your trusted land mediator for transparent and reliable land dealings across India. 10+ years of experience in plot mediation.
            </p>

            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-olive/20 border border-olive/30">
              <span className="text-sm text-olive">✓ Certified Land Mediator</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Plot Types</h4>
            <ul className="space-y-3">
              {footerLinks.plots.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Vegi Info. All rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-xs text-center">
              Disclaimer: We act as mediators only. All transactions are subject to legal verification.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-gold text-charcoal flex items-center justify-center hover:shadow-glow transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}