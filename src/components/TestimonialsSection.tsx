import { useState, useEffect, useCallback } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Farmer, Warangal',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Vegi Info helped me sell my agricultural land at a fair price. Their team verified all documents and handled the complete registration process. Very trustworthy service.',
  },
  {
    id: 2,
    name: 'Lakshmi Devi',
    role: 'First-time Buyer, Hyderabad',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'As a first-time land buyer, I was worried about legal issues. They guided us through every step and helped us find a DTCP approved plot within our budget.',
  },
  {
    id: 3,
    name: 'Venkat Rao',
    role: 'Investor, Vijayawada',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'I have purchased 3 plots through Vegi Info over the years. Their market knowledge and honest dealings make them my go-to land mediator.',
  },
  {
    id: 4,
    name: 'Padma Reddy',
    role: 'NRI, USA',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Being an NRI, I needed someone trustworthy to handle my family land sale. They coordinated everything remotely and kept me updated at every step.',
  },
  {
    id: 5,
    name: 'Suresh Babu',
    role: 'Business Owner, Nalgonda',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Bought a commercial plot for my warehouse. The team helped with all approvals and the price negotiation saved me nearly 2 lakhs. Highly recommended!',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-olive/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            'text-center max-w-2xl mx-auto mb-16 opacity-0',
            isVisible && 'animate-fade-up'
          )}
        >
          <span className="text-olive font-semibold text-sm uppercase tracking-wider">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            What Our Clients{' '}
            <span className="font-display italic text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from families, farmers, and investors who trusted us with their land transactions.
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg relative border border-border">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-gold/20" />

            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    'transition-all duration-500',
                    index === currentIndex
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 absolute inset-0 translate-x-8'
                  )}
                >
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-gold/20"
                    />
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-all duration-300',
                    index === currentIndex ? 'bg-gold w-8' : 'bg-border hover:bg-muted-foreground'
                  )}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}