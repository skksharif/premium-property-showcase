import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MapPin, Bed, Bath, Square, Heart, ArrowRight } from 'lucide-react';

const categories = ['All', 'Luxury', 'Apartments', 'Villas', 'Commercial'];

const properties = [
  {
    id: 1,
    title: 'Modern Waterfront Villa',
    category: 'Villas',
    price: '$2,450,000',
    location: 'Palm Beach, FL',
    beds: 5,
    baths: 4,
    sqft: '4,500',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Skyline Penthouse Suite',
    category: 'Luxury',
    price: '$3,200,000',
    location: 'Manhattan, NY',
    beds: 3,
    baths: 3,
    sqft: '3,200',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    featured: true,
  },
  {
    id: 3,
    title: 'Contemporary City Apartment',
    category: 'Apartments',
    price: '$890,000',
    location: 'Los Angeles, CA',
    beds: 2,
    baths: 2,
    sqft: '1,800',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    featured: false,
  },
  {
    id: 4,
    title: 'Prime Commercial Space',
    category: 'Commercial',
    price: '$1,500,000',
    location: 'Chicago, IL',
    beds: 0,
    baths: 2,
    sqft: '5,000',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    featured: false,
  },
  {
    id: 5,
    title: 'Beachfront Paradise Estate',
    category: 'Luxury',
    price: '$5,800,000',
    location: 'Malibu, CA',
    beds: 6,
    baths: 7,
    sqft: '8,200',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    featured: true,
  },
  {
    id: 6,
    title: 'Mountain View Villa',
    category: 'Villas',
    price: '$1,950,000',
    location: 'Aspen, CO',
    beds: 4,
    baths: 3,
    sqft: '3,800',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
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
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Featured Listings
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Discover Premium{' '}
            <span className="font-display italic text-primary">Properties</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our handpicked collection of luxury homes, apartments, and
            commercial spaces in prime locations.
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
                  ? 'bg-primary text-primary-foreground shadow-gold'
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
        'group bg-card rounded-2xl overflow-hidden shadow-sm hover-lift opacity-0',
        isVisible && 'animate-fade-up'
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            Featured
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
          {property.category}
        </div>

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background"
        >
          <Heart
            className={cn(
              'w-5 h-5 transition-colors',
              isLiked ? 'fill-primary text-primary' : 'text-foreground'
            )}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <span className="text-xl font-bold text-primary">{property.price}</span>
        </div>

        <div className="flex items-center gap-1.5 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Amenities */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          {property.beds > 0 && (
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Bed className="w-4 h-4" />
              <span className="text-sm">{property.beds} Beds</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Square className="w-4 h-4" />
            <span className="text-sm">{property.sqft} sqft</span>
          </div>
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
