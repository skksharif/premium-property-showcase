import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import {
  Home,
  ShieldCheck,
  Building2,
  Video,
  DollarSign,
  Headphones,
} from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Property Buying Assistance',
    description:
      'Expert guidance through every step of your property purchase journey, from search to settlement.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Listings',
    description:
      'Every property in our portfolio undergoes rigorous verification for legal clarity and authenticity.',
  },
  {
    icon: Building2,
    title: 'Luxury Properties Portfolio',
    description:
      'Exclusive access to premium residences, penthouses, and luxury estates in prime locations.',
  },
  {
    icon: Video,
    title: 'Virtual Tours',
    description:
      'Experience properties from anywhere with our immersive 360° virtual tour technology.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description:
      'No hidden fees or surprises. Complete cost breakdown with competitive market analysis.',
  },
  {
    icon: Headphones,
    title: '24×7 Client Support',
    description:
      'Round-the-clock assistance from dedicated relationship managers for all your queries.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeader />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'text-center max-w-2xl mx-auto opacity-0',
        isVisible && 'animate-fade-up'
      )}
    >
      <span className="text-primary font-semibold text-sm uppercase tracking-wider">
        Why Premium Estate
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
        Premium Real Estate{' '}
        <span className="font-display italic text-primary">Services</span>
      </h2>
      <p className="text-muted-foreground text-lg">
        Experience unparalleled service excellence with our comprehensive real
        estate solutions designed for discerning buyers.
      </p>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'group p-8 bg-background rounded-2xl shadow-sm hover-lift opacity-0',
        isVisible && 'animate-fade-up'
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
