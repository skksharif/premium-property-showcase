import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Building2,
  User,
  AtSign,
  MessageSquare,
} from 'lucide-react';

const propertyTypes = [
  'Luxury Villa',
  'Penthouse',
  'Apartment',
  'Commercial Space',
  'Land/Plot',
  'Other',
];

const budgetRanges = [
  'Under $500K',
  '$500K - $1M',
  '$1M - $2M',
  '$2M - $5M',
  '$5M+',
];

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (800) 555-0199',
    href: 'tel:+18005550199',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@premiumestate.com',
    href: 'mailto:contact@premiumestate.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Luxury Avenue, New York, NY 10001',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon - Sat: 9:00 AM - 6:00 PM',
    href: '#',
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn('opacity-0', isVisible && 'animate-slide-right')}
    >
      <span className="text-primary font-semibold text-sm uppercase tracking-wider">
        Get In Touch
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
        Let's Find Your{' '}
        <span className="font-display italic text-primary">Dream Property</span>
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-10">
        Ready to start your property journey? Our expert consultants are here to
        guide you every step of the way. Fill out the form or reach us directly.
      </p>

      {/* Contact Details */}
      <div className="space-y-6">
        {contactInfo.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Map Placeholder */}
      <div className="mt-10 rounded-2xl overflow-hidden h-64 bg-secondary">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635959481000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        />
      </div>
    </div>
  );
}

function ContactForm() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Message Sent Successfully!',
      description:
        "We'll get back to you within 24 hours. Thank you for your interest!",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div
      ref={ref}
      className={cn('opacity-0', isVisible && 'animate-slide-left')}
    >
      <div className="bg-background rounded-3xl p-8 md:p-10 shadow-lg">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Building2 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">
              Schedule a Consultation
            </h3>
            <p className="text-sm text-muted-foreground">
              Free property consultation with our experts
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Full Name *
            </label>
            <div className="relative">
              <User
                className={cn(
                  'absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors',
                  focusedField === 'name' ? 'text-primary' : 'text-muted-foreground'
                )}
              />
              <input
                type="text"
                id="name"
                name="name"
                required
                className={cn(
                  'w-full pl-12 pr-4 py-3.5 rounded-xl border-2 bg-background transition-all duration-300',
                  focusedField === 'name'
                    ? 'border-primary shadow-gold/20 shadow-lg'
                    : 'border-border hover:border-primary/50'
                )}
                placeholder="John Doe"
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </div>

          {/* Phone & Email Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="relative">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Phone Number *
              </label>
              <div className="relative">
                <Phone
                  className={cn(
                    'absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors',
                    focusedField === 'phone' ? 'text-primary' : 'text-muted-foreground'
                  )}
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className={cn(
                    'w-full pl-12 pr-4 py-3.5 rounded-xl border-2 bg-background transition-all duration-300',
                    focusedField === 'phone'
                      ? 'border-primary shadow-gold/20 shadow-lg'
                      : 'border-border hover:border-primary/50'
                  )}
                  placeholder="+1 (555) 000-0000"
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email Address *
              </label>
              <div className="relative">
                <AtSign
                  className={cn(
                    'absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors',
                    focusedField === 'email' ? 'text-primary' : 'text-muted-foreground'
                  )}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={cn(
                    'w-full pl-12 pr-4 py-3.5 rounded-xl border-2 bg-background transition-all duration-300',
                    focusedField === 'email'
                      ? 'border-primary shadow-gold/20 shadow-lg'
                      : 'border-border hover:border-primary/50'
                  )}
                  placeholder="john@example.com"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>
          </div>

          {/* Property Type & Budget Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Property Type */}
            <div>
              <label
                htmlFor="propertyType"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Property Interest *
              </label>
              <select
                id="propertyType"
                name="propertyType"
                required
                className={cn(
                  'w-full px-4 py-3.5 rounded-xl border-2 bg-background transition-all duration-300 appearance-none cursor-pointer',
                  focusedField === 'propertyType'
                    ? 'border-primary shadow-gold/20 shadow-lg'
                    : 'border-border hover:border-primary/50'
                )}
                onFocus={() => setFocusedField('propertyType')}
                onBlur={() => setFocusedField(null)}
              >
                <option value="">Select property type</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Budget Range *
              </label>
              <select
                id="budget"
                name="budget"
                required
                className={cn(
                  'w-full px-4 py-3.5 rounded-xl border-2 bg-background transition-all duration-300 appearance-none cursor-pointer',
                  focusedField === 'budget'
                    ? 'border-primary shadow-gold/20 shadow-lg'
                    : 'border-border hover:border-primary/50'
                )}
                onFocus={() => setFocusedField('budget')}
                onBlur={() => setFocusedField(null)}
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Additional Message
            </label>
            <div className="relative">
              <MessageSquare
                className={cn(
                  'absolute left-4 top-4 w-5 h-5 transition-colors',
                  focusedField === 'message' ? 'text-primary' : 'text-muted-foreground'
                )}
              />
              <textarea
                id="message"
                name="message"
                rows={4}
                className={cn(
                  'w-full pl-12 pr-4 py-3.5 rounded-xl border-2 bg-background transition-all duration-300 resize-none',
                  focusedField === 'message'
                    ? 'border-primary shadow-gold/20 shadow-lg'
                    : 'border-border hover:border-primary/50'
                )}
                placeholder="Tell us about your requirements..."
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="gold"
            size="xl"
            className="w-full group"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
                Sending...
              </span>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            By submitting, you agree to our{' '}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
