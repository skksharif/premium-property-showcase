import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const highlights = [
  'Trusted by 10,000+ satisfied families',
  'Partnerships with 200+ verified builders',
  'Transparent deals with no hidden charges',
  'Complete legal assistance and documentation',
];

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 10000, suffix: '+', label: 'Happy Clients' },
  { value: 500, suffix: '+', label: 'Properties Sold' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ImageColumn />
          <ContentColumn />
        </div>
      </div>
    </section>
  );
}

function ImageColumn() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'relative opacity-0',
        isVisible && 'animate-slide-right'
      )}
    >
      <div className="relative">
        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
            alt="Luxury home interior showcasing premium real estate"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Floating Card */}
        <div className="absolute -bottom-8 -right-8 bg-background rounded-2xl p-6 shadow-lg max-w-xs">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Trusted Agency</h4>
              <p className="text-sm text-muted-foreground">Since 2009</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.slice(0, 2).map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10" />
      </div>
    </div>
  );
}

function ContentColumn() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn('opacity-0', isVisible && 'animate-slide-left')}
    >
      <span className="text-primary font-semibold text-sm uppercase tracking-wider">
        About Premium Estate
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
        Your Trusted Partner in{' '}
        <span className="font-display italic text-primary">
          Luxury Real Estate
        </span>
      </h2>

      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        With 15+ years of excellence in the real estate industry, Premium Estate
        has helped over 10,000 families find their perfect home. Our commitment
        to transparency, quality, and customer satisfaction sets us apart in the
        luxury property market.
      </p>

      <p className="text-muted-foreground leading-relaxed mb-8">
        From first-time homebuyers to seasoned investors, we provide personalized
        guidance through every step of your property journey. Our team of expert
        consultants, legal advisors, and market analysts work together to ensure
        seamless transactions and lasting relationships.
      </p>

      {/* Highlights */}
      <div className="space-y-4 mb-10">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-foreground font-medium">{highlight}</span>
          </div>
        ))}
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4 mb-10 py-6 border-y border-border">
        {stats.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </div>

      {/* CTA */}
      <Button variant="default" size="lg" className="group">
        Learn More About Us
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-primary">
        {count}
        {suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
