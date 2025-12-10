import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckCircle2, ArrowRight, Shield, FileText, Users, MapPin } from 'lucide-react';

const highlights = [
  '10+ years of land mediation experience',
  'Verified land listings with clear titles',
  'Complete legal check & documentation assistance',
  'Direct negotiation between buyers and sellers',
  'Expertise in village layouts & gated ventures',
  'Transparent dealings with no hidden charges',
];

const stats = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 5000, suffix: '+', label: 'Happy Clients' },
  { value: 300, suffix: '+', label: 'Lands Sold' },
  { value: 25, suffix: '+', label: 'Districts Covered' },
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
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
            alt="Land surveyor marking plot boundaries in India"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Floating Card */}
        <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-lg max-w-xs border border-border">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-olive/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-olive" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Trusted Mediator</h4>
              <p className="text-sm text-muted-foreground">Since 2014</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.slice(0, 2).map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-olive/10 rounded-2xl -z-10" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-gold/20 rounded-2xl -z-10" />
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
      <span className="text-olive font-semibold text-sm uppercase tracking-wider">
        About Us
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
        Making Land Deals{' '}
        <span className="font-display italic text-primary">
          Simple, Safe & Transparent
        </span>
      </h2>

      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        With over a decade of experience in the land mediation industry, we have 
        helped thousands of families, farmers, and investors find their ideal plots. 
        Our commitment to transparency and fair dealings sets us apart.
      </p>

      <p className="text-muted-foreground leading-relaxed mb-8">
        Whether you're a first-time land buyer looking for residential plots or a 
        farmer seeking agricultural land, we provide personalized guidance through 
        every step of your land transaction. Our network spans 25+ districts with 
        verified listings and complete legal support.
      </p>

      {/* Highlights */}
      <div className="space-y-3 mb-10">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CheckCircle2 className="w-5 h-5 text-olive flex-shrink-0" />
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