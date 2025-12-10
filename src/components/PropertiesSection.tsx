import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MapPin, Maximize, Droplets, Zap, Route, FileCheck, ArrowRight, Heart } from 'lucide-react';

const categories = ['All', 'Open Plots', 'DTCP/RERA', 'Agricultural', 'Farm Land', 'Residential'];

const properties = [
  {
    id: 1,
    title: 'DTCP Approved Layout - Warangal',
    category: 'DTCP/RERA',
    price: '₹18 - 25 Lakhs',
    pricePerUnit: '₹8,500/sq.yd',
    location: 'Warangal Rural, Telangana',
    size: '200-300 sq.yds',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    amenities: { water: true, electricity: true, road: true, clearTitle: true },
    featured: true,
  },
  {
    id: 2,
    title: 'Agricultural Land - Fertile Soil',
    category: 'Agricultural',
    price: '₹35 Lakhs/Acre',
    pricePerUnit: '₹35 Lakhs/Acre',
    location: 'Nalgonda District, Telangana',
    size: '5 Acres',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    amenities: { water: true, electricity: false, road: true, clearTitle: true },
    featured: true,
  },
  {
    id: 3,
    title: 'Highway Facing Open Plot',
    category: 'Open Plots',
    price: '₹45 Lakhs',
    pricePerUnit: '₹12,000/sq.yd',
    location: 'NH-65, Hyderabad-Vijayawada',
    size: '375 sq.yds',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80',
    amenities: { water: true, electricity: true, road: true, clearTitle: true },
    featured: false,
  },
  {
    id: 4,
    title: 'Farm Land with Mango Orchard',
    category: 'Farm Land',
    price: '₹1.2 Crores',
    pricePerUnit: '₹40 Lakhs/Acre',
    location: 'Chittoor District, AP',
    size: '3 Acres',
    image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800&q=80',
    amenities: { water: true, electricity: true, road: true, clearTitle: true },
    featured: true,
  },
  {
    id: 5,
    title: 'Gated Community Plot',
    category: 'Residential',
    price: '₹32 Lakhs',
    pricePerUnit: '₹9,000/sq.yd',
    location: 'Shamshabad, Hyderabad',
    size: '355 sq.yds',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    amenities: { water: true, electricity: true, road: true, clearTitle: true },
    featured: false,
  },
  {
    id: 6,
    title: 'RERA Approved Villa Plots',
    category: 'DTCP/RERA',
    price: '₹28 - 40 Lakhs',
    pricePerUnit: '₹7,500/sq.yd',
    location: 'Maheshwaram, RR District',
    size: '250-400 sq.yds',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
    amenities: { water: true, electricity: true, road: true, clearTitle: true },
    featured: false,
  },
];

export function PropertiesSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const filteredProperties =
    activeCategory === 'All'
      ? properties
      : properties.filter((p) => p.category === activeCategory);

  return (
    <section id="properties" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={ref}
          className={cn(
            'text-center max-w-2xl mx-auto mb-12 opacity-0',
            isVisible && 'animate-fade-up'
          )}
        >
          <span className="text-olive font-semibold text-sm uppercase tracking-wider">
            Featured Listings
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Available{' '}
            <span className="font-display italic text-primary">Land Plots</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our verified collection of plots across Telangana and Andhra Pradesh.
            Each listing is thoroughly vetted for legal clarity.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-earth'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyCard({
  property,
  index,
}: {
  property: (typeof properties)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        'group bg-card rounded-2xl overflow-hidden shadow-sm hover-lift border border-border opacity-0',
        isVisible && 'animate-fade-up'
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-olive text-primary-foreground text-xs font-semibold rounded-full">
            Featured
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
          {property.category}
        </div>

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-card"
        >
          <Heart
            className={cn(
              'w-5 h-5 transition-colors',
              isLiked ? 'fill-terracotta text-terracotta' : 'text-foreground'
            )}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {property.title}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Price & Size */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xl font-bold text-primary">{property.price}</span>
            <span className="text-xs text-muted-foreground block">{property.pricePerUnit}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Maximize className="w-4 h-4" />
            <span className="text-sm font-medium">{property.size}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <AmenityIcon icon={Droplets} label="Water" active={property.amenities.water} />
          <AmenityIcon icon={Zap} label="Electricity" active={property.amenities.electricity} />
          <AmenityIcon icon={Route} label="Road Access" active={property.amenities.road} />
          <AmenityIcon icon={FileCheck} label="Clear Title" active={property.amenities.clearTitle} />
        </div>

        {/* View Details Button */}
        <Button
          variant="ghost"
          className="w-full mt-4 group/btn"
        >
          View Details
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}

function AmenityIcon({
  icon: Icon,
  label,
  active,
}: {
  icon: React.ElementType;
  label: string;
  active: boolean;
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-1 px-2 py-1 rounded-md text-xs',
        active ? 'bg-olive/10 text-olive' : 'bg-muted text-muted-foreground line-through'
      )}
      title={label}
    >
      <Icon className="w-3.5 h-3.5" />
      <span className="hidden sm:inline">{label}</span>
    </div>
  );
}