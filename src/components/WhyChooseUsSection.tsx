import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import {
  Scale,
  MapPinned,
  TrendingUp,
  Users,
  Handshake,
  FileCheck,
} from 'lucide-react';

const reasons = [
  {
    icon: Scale,
    title: 'Clear Legal Guidance',
    description: 'Complete legal verification including title check, EC, and survey records before any transaction.',
  },
  {
    icon: MapPinned,
    title: 'Village Map Verification',
    description: 'On-ground verification with revenue records and village boundary confirmation.',
  },
  {
    icon: TrendingUp,
    title: 'Market-Based Pricing',
    description: 'Fair pricing based on current market rates with transparent cost breakdown.',
  },
  {
    icon: Users,
    title: 'Visit Coordination',
    description: 'We arrange site visits with proper guidance and boundary marking for buyers.',
  },
  {
    icon: Handshake,
    title: 'Negotiation Support',
    description: 'Expert mediation between buyers and sellers to reach fair agreements.',
  },
  {
    icon: FileCheck,
    title: 'Fast Documentation',
    description: 'Complete assistance with registration, mutation, and all legal paperwork.',
  },
];

export function WhyChooseUsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-24 bg-charcoal text-primary-foreground relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-olive/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div
          ref={ref}
          className={cn(
            'text-center max-w-2xl mx-auto mb-16 opacity-0',
            isVisible && 'animate-fade-up'
          )}
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Why Choose{' '}
            <span className="font-display italic text-gold">Vegi Info</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Trusted by thousands of families for transparent and reliable land dealings across India.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} {...reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({
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
        'group p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-gold/50 transition-all duration-300 opacity-0',
        isVisible && 'animate-scale-in'
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold/30 transition-all duration-300">
        <Icon className="w-8 h-8 text-gold" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-primary-foreground/70 leading-relaxed">{description}</p>
    </div>
  );
}