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

  // Animation delay on load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Typing animation logic
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
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background Image (Mobile Only) */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src="https://www.krahejarealty.com/img/blog/blog49.webp"
          alt="Indian agricultural land drone view"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Split Screen Wrapper */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen">

        {/* LEFT SECTION (IMAGE) - Hidden on Mobile, Visible on Desktop */}
        <div className="hidden lg:block relative w-full lg:h-screen lg:w-1/2 overflow-hidden">
          <div
            className={cn(
              "absolute inset-0",
              isLoaded && "animate-diagonal-mask"
            )}
            style={{ animationDelay: "0.3s" }}
          >
            <img
              src="https://www.krahejarealty.com/img/blog/blog49.webp"
              alt="Indian agricultural land drone view"
              className="w-full h-full object-cover object-center"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>

          {/* Plot Grid Overlay */}
          <div className="absolute inset-0 plot-grid opacity-10" />

          {/* Floating Land Marker */}
          <div className="absolute bottom-6 left-6">
            <div className="flex items-center gap-2 px-3 py-2 bg-card/80 backdrop-blur-sm rounded-lg shadow-md">
              <div className="w-3 h-3 rounded-full bg-olive marker-pulse" />
              <span className="text-sm font-medium">Verified Plot</span>
            </div>
          </div>

          <Particles count={10} />
        </div>

        {/* RIGHT SECTION (CONTENT) */}
        <div className="relative w-full lg:w-1/2 bg-transparent lg:bg-charcoal flex items-center justify-center px-6 py-10 sm:py-16 lg:py-0 z-10 lg:z-auto mt-20 lg:mt-0">

          {/* Subtle Texture */}
          <div className="absolute inset-0 opacity-5 bg-texture-pattern" />

          <div className="relative z-10 max-w-lg w-full">

            {/* Badge */}
            <div
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 mb-6 sm:mb-8 opacity-0",
                isLoaded && "animate-fade-up"
              )}
              style={{ animationDelay: "0.2s" }}
            >
              <Award className="w-4 h-4 text-gold" />
              <span className="text-xs sm:text-sm font-medium text-white">
                Trusted Land Mediator Since 2014
              </span>
            </div>

            {/* Headsline — Typing Animation */}
            <h1 className="mb-6 leading-tight">
              {headlineLines.map((line, index) => (
                <span
                  key={index}
                  className={cn(
                    "block text-3xl sm:text-4xl md:text-5xl font-bold opacity-0 text-white",
                    index <= textIndex && "animate-fade-up",
                    index === 1 && "italic text-gold"
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
                "h-px w-20 sm:w-24 bg-gradient-to-r from-gold to-transparent mb-5 sm:mb-6 opacity-0",
                isLoaded && "animate-line-slide"
              )}
              style={{ animationDelay: "1s" }}
            />

            {/* Subtitle */}
            <p
              className={cn(
                "text-base sm:text-lg text-white/80 mb-8 sm:mb-10 opacity-0",
                isLoaded && "animate-fade-up"
              )}
              style={{ animationDelay: "1.2s" }}
            >
              Transparent. Direct. Verified land dealings across India.
              Connecting buyers & sellers with trust and legal clarity.
            </p>

            {/* CTA Buttons */}
            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4 mb-10 opacity-0",
                isLoaded && "animate-curtain-reveal"
              )}
              style={{ animationDelay: "1.4s" }}
            >
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("#properties")}
                className="group w-full sm:w-auto"
              >
                View Available Plots
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="group w-full sm:w-auto"
              >
                <Handshake className="w-5 h-5" />
                Sell Your Land
              </Button>
            </div>

          </div>

          {/* Scroll Indicator */}
          <div
            className={cn(
              "absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-0",
              isLoaded && "animate-fade-up"
            )}
            style={{ animationDelay: "1.8s" }}
          >
            <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-widest">
              Scroll to Explore
            </span>
            <ChevronDown className="w-5 h-5 text-gold animate-bounce-subtle" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label, icon: Icon }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-1 mb-1">
        <Icon className="w-4 h-4 text-gold" />
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
          {value}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs text-white/60">{label}</span>
    </div>
  );
}
