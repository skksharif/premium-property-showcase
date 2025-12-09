import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Particles } from './Particles';
import { ArrowRight, Play, MapPin, Award, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Luxury modern home with pool at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>

      {/* Building Silhouette Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-5 building-silhouette">
        <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="none">
          <path
            fill="currentColor"
            className="text-primary-foreground"
            d="M0,200 L0,100 L50,100 L50,60 L100,60 L100,100 L150,100 L150,40 L200,40 L200,100 L250,100 L250,80 L300,80 L300,100 L350,100 L350,20 L400,20 L400,100 L450,100 L450,50 L500,50 L500,100 L550,100 L550,70 L600,70 L600,100 L650,100 L650,30 L700,30 L700,100 L750,100 L750,60 L800,60 L800,100 L850,100 L850,40 L900,40 L900,100 L950,100 L950,80 L1000,80 L1000,100 L1050,100 L1050,50 L1100,50 L1100,100 L1150,100 L1150,70 L1200,70 L1200,200 Z"
          />
        </svg>
      </div>

      {/* Particle Effects */}
      <Particles count={25} />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8 opacity-0',
              isLoaded && 'animate-fade-up'
            )}
            style={{ animationDelay: '0.2s' }}
          >
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">
              15+ Years of Real Estate Excellence
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={cn(
              'text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight opacity-0',
              isLoaded && 'animate-fade-up'
            )}
            style={{ animationDelay: '0.4s' }}
          >
            Find Your{' '}
            <span className="font-display italic text-primary">Dream Home</span>
            <br />
            with Premium Experts
          </h1>

          {/* Subheading */}
          <p
            className={cn(
              'text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0',
              isLoaded && 'animate-fade-up'
            )}
            style={{ animationDelay: '0.6s' }}
          >
            Trust our legacy of excellence in luxury real estate. From verified listings 
            to personalized property consultation, we turn your vision into reality.
          </p>

          {/* CTA Buttons */}
          <div
            className={cn(
              'flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0',
              isLoaded && 'animate-fade-up'
            )}
            style={{ animationDelay: '0.8s' }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('#contact')}
              className="group"
            >
              Book a Site Visit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection('#properties')}
              className="group"
            >
              <Play className="w-5 h-5" />
              Explore Listings
            </Button>
          </div>

          {/* Stats */}
          <div
            className={cn(
              'grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto opacity-0',
              isLoaded && 'animate-fade-up'
            )}
            style={{ animationDelay: '1s' }}
          >
            <StatItem value="10,000+" label="Happy Families" icon={Users} />
            <StatItem value="500+" label="Luxury Properties" icon={Award} />
            <StatItem value="50+" label="Cities Covered" icon={MapPin} />
            <StatItem value="15+" label="Years Experience" icon={Award} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={cn(
          'absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0',
          isLoaded && 'animate-fade-in'
        )}
        style={{ animationDelay: '1.5s' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function StatItem({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon: React.ElementType;
}) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-1 mb-1">
        <Icon className="w-4 h-4 text-primary" />
        <span className="text-2xl md:text-3xl font-bold text-primary-foreground">
          {value}
        </span>
      </div>
      <span className="text-sm text-primary-foreground/70">{label}</span>
    </div>
  );
}
