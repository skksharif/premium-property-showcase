import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Particles } from './Particles';
import { ArrowRight, ChevronDown, MapPin, Award, Users, Handshake } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const headlineLines = [
    "Your Trusted",
    "Land Mediator",
    "for Selling & Purchasing"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const interval = setInterval(() => {
      setTextIndex(prev => {
        if (prev < headlineLines.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 600);
    return () => clearInterval(interval);
  }, [isLoaded]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Split Screen Layout */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* Left Side - Image with Diagonal Mask */}
        <div className="relative lg:w-1/2 h-[50vh] lg:h-screen overflow-hidden">
          <div
            className={cn(
              'absolute inset-0',
              isLoaded && 'animate-diagonal-mask'
            )}
            style={{ animationDelay: '0.3s' }}
          >
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
              alt="Open agricultural land with marked boundaries in India"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>

          {/* Plot Grid Overlay */}
          <div className="absolute inset-0 plot-grid opacity-20" />

          {/* Floating Land Markers */}
          <div className="absolute bottom-20 left-10 hidden lg:block">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-lg shadow-md">
              <div className="w-3 h-3 rounded-full bg-olive marker-pulse" />
              <span className="text-sm font-medium text-foreground">Verified Plot</span>
            </div>
          </div>

          {/* Particle Effects */}
          <Particles count={15} />
        </div>

        {/* Right Side - Content */}
        <div className="relative lg:w-1/2 flex items-center justify-center bg-charcoal px-6 py-16 lg:py-0">
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-5 bg-texture-pattern" />

          <div className="relative z-10 max-w-xl">
            {/* Badge */}
            <div
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 mb-8 opacity-0',
                isLoaded && 'animate-fade-up'
              )}
              style={{ animationDelay: '0.2s' }}
            >
              <Award className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-primary-foreground">
                Trusted Land Mediator Since 2014
              </span>
            </div>

            {/* Animated Headline */}
            <h1 className="mb-6">
            {headlineLines.map((line, index) => (
              <span
                key={index}
                className={cn(
                  'block text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 text-primary-foreground',
                  index <= textIndex && 'animate-fade-up',
                  index === 1 && 'font-display italic text-gold'
                )}
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                {line}
              </span>
            ))}
            </h1>

            {/* Golden Divider */}
            <div
              className={cn(
                'h-px w-24 bg-gradient-to-r from-gold to-transparent mb-6 opacity-0',
                isLoaded && 'animate-line-slide'
              )}
              style={{ animationDelay: '1s' }}
            />

            {/* Subtitle */}
            <p
              className={cn(
                'text-lg text-primary-foreground/80 mb-10 leading-relaxed opacity-0',
                isLoaded && 'animate-fade-up'
              )}
              style={{ animationDelay: '1.2s' }}
            >
              Transparent. Direct. Reliable land dealings across India. 
              We bridge buyers and sellers with verified listings and complete legal guidance.
            </p>

            {/* CTA Buttons */}
            <div
              className={cn(
                'flex flex-col sm:flex-row gap-4 mb-12 opacity-0',
                isLoaded && 'animate-curtain-reveal'
              )}
              style={{ animationDelay: '1.4s' }}
            >
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection('#properties')}
                className="group"
              >
                View Available Plots
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => scrollToSection('#contact')}
                className="group"
              >
                <Handshake className="w-5 h-5" />
                Sell Your Land
              </Button>
            </div>

            {/* Stats */}
            <div
              className={cn(
                'grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-0',
                isLoaded && 'animate-fade-up'
              )}
              style={{ animationDelay: '1.6s' }}
            >
              <StatItem value="5,000+" label="Successful Deals" icon={Users} />
              <StatItem value="300+" label="Lands Sold" icon={Award} />
              <StatItem value="25+" label="Districts Covered" icon={MapPin} />
              <StatItem value="10+" label="Years Experience" icon={Award} />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={cn(
              'absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0',
              isLoaded && 'animate-fade-up'
            )}
            style={{ animationDelay: '1.8s' }}
          >
            <span className="text-xs text-primary-foreground/60 uppercase tracking-wider">
              Scroll to Explore
            </span>
            <ChevronDown className="w-5 h-5 text-gold animate-bounce-subtle" />
          </div>
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
        <Icon className="w-4 h-4 text-gold" />
        <span className="text-xl md:text-2xl font-bold text-primary-foreground">
          {value}
        </span>
      </div>
      <span className="text-xs text-primary-foreground/60">{label}</span>
    </div>
  );
}