import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import {
  ShieldCheck,
  Scale,
  Landmark,
  FileCheck,
  TrendingUp,
  UserCheck,
} from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Verified Builders',
    description:
      'All our partner builders are thoroughly vetted for credibility, track record, and quality standards.',
  },
  {
    icon: Scale,
    title: 'Legal Assistance',
    description:
      'Complete legal support from documentation to registration, ensuring a hassle-free experience.',
  },
  {
    icon: Landmark,
    title: 'Easy Loan Support',
    description:
      'Partnerships with leading banks for quick loan approvals at competitive interest rates.',
  },
  {
    icon: FileCheck,
    title: '100% Transparent Deals',
    description:
      'No hidden charges or surprises. Complete clarity on pricing, terms, and conditions.',
  },
  {
    icon: TrendingUp,
    title: 'Market Expertise',
    description:
      'Deep insights into market trends, property valuations, and investment opportunities.',
  },
  {
    icon: UserCheck,
    title: 'Personalized Consultation',
    description:
      'Dedicated relationship managers providing tailored solutions for your unique requirements.',
  },
];

export function WhyChooseUsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-24 bg-charcoal text-primary-foreground relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div
          ref={ref}
          className={cn(
            'text-center max-w-2xl mx-auto mb-16 opacity-0',
            isVisible && 'animate-fade-up'
          )}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Why Choose{' '}
            <span className="font-display italic text-primary">Premium Estate</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Experience the difference with our commitment to excellence,
            transparency, and customer-first approach.
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
        'group p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-primary/50 transition-all duration-300 opacity-0',
        isVisible && 'animate-scale-in'
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-primary-foreground/70 leading-relaxed">{description}</p>
    </div>
  );
}
