import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import {
  Grid3X3,
  ShieldCheck,
  Tractor,
  Trees,
  Route,
  TrendingUp,
  Home,
  Building2,
} from 'lucide-react';

const categories = [
  {
    icon: Grid3X3,
    title: 'Open Plots',
    description: 'Clear land ready for construction with proper documentation',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80',
  },
  {
    icon: ShieldCheck,
    title: 'DTCP/RERA Approved',
    description: 'Government approved layouts with all clearances',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&q=80',
  },
  {
    icon: Tractor,
    title: 'Agricultural Land',
    description: 'Fertile farming land with water access and proper records',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80',
  },
  {
    icon: Trees,
    title: 'Farm Land',
    description: 'Scenic farm plots perfect for farmhouses and orchards',
    image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=400&q=80',
  },
  {
    icon: Route,
    title: 'Road-Facing Plots',
    description: 'Prime plots with direct highway or main road access',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&q=80',
  },
  {
    icon: TrendingUp,
    title: 'Investment Plots',
    description: 'High appreciation potential in developing areas',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&q=80',
  },
  {
    icon: Home,
    title: 'Residential Plots',
    description: 'Plots in gated communities with amenities',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
  {
    icon: Building2,
    title: 'Commercial Land',
    description: 'Strategic locations for shops, warehouses, and offices',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80',
  },
];

export function PlotCategoriesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="categories" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={ref}
          className={cn(
            'text-center max-w-2xl mx-auto mb-16 opacity-0',
            isVisible && 'animate-fade-up'
          )}
        >
          <span className="text-olive font-semibold text-sm uppercase tracking-wider">
            Plot Categories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Explore Land{' '}
            <span className="font-display italic text-primary">Types</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From agricultural land to approved layouts, find the perfect plot 
            that matches your needs and investment goals.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.title} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  icon: Icon,
  title,
  description,
  image,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'group relative rounded-2xl overflow-hidden cursor-pointer hover-lift opacity-0',
        isVisible && 'animate-fade-up'
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
      </div>

      {/* Plot Grid Overlay on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
        <div className="w-full h-full plot-grid" />
      </div>

      {/* Content */}
      <div className="relative p-6 h-64 flex flex-col justify-end">
        <div className="w-12 h-12 rounded-xl bg-gold/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
          <Icon className="w-6 h-6 text-gold" />
        </div>
        <h3 className="text-xl font-bold text-primary-foreground mb-2">{title}</h3>
        <p className="text-primary-foreground/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
        
        {/* Hover Border Effect */}
        <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/40 rounded-2xl transition-all duration-300" />
      </div>
    </div>
  );
}