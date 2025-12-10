import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, MapPin, Users, Phone, Grid3X3 } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#categories', label: 'Plot Types', icon: Grid3X3 },
  { href: '#properties', label: 'Listings', icon: MapPin },
  { href: '#about', label: 'About', icon: Users },
  { href: '#contact', label: 'Contact', icon: Phone },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-earth flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary-foreground" />
          </div>
          <span
            className={cn(
              'text-xl font-bold transition-colors duration-300',
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            )}
          >
            Vegi<span className="text-gold"> Info</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={cn(
                'text-sm font-medium transition-all duration-300 hover:text-gold relative group',
                isScrolled ? 'text-foreground' : 'text-primary-foreground/90'
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            variant={isScrolled ? 'default' : 'heroOutline'}
            size="default"
            onClick={() => scrollToSection('#contact')}
          >
            Book Site Visit
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X
              className={cn(
                'w-6 h-6',
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              )}
            />
          ) : (
            <Menu
              className={cn(
                'w-6 h-6',
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              )}
            />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-card backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="flex items-center gap-3 text-foreground hover:text-gold transition-colors py-2"
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </a>
          ))}
          <Button
            variant="default"
            size="lg"
            className="mt-4"
            onClick={() => scrollToSection('#contact')}
          >
            Book Site Visit
          </Button>
        </div>
      </div>
    </header>
  );
}