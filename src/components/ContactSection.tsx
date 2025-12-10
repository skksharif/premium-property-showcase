import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';

const interestTypes = ['Buying Land', 'Selling Land', 'Investment Consultation', 'Legal Assistance', 'Other'];
const plotTypes = ['Open Plots', 'Agricultural Land', 'DTCP/RERA Approved', 'Farm Land', 'Commercial Land', 'Any'];

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: Mail, label: 'Email', value: 'contact@vegiinfo.com', href: 'mailto:contact@vegiinfo.com' },
  { icon: MapPin, label: 'Office', value: 'Warangal, Telangana, India', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon - Sat: 9:00 AM - 6:00 PM', href: '#' },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-gold/20 marker-pulse" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
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
    <div ref={ref} className={cn('opacity-0', isVisible && 'animate-slide-right')}>
      <span className="text-olive font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
        Start Your{' '}
        <span className="font-display italic text-primary">Land Journey</span>
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-10">
        Whether you want to buy verified land or sell your property at the best price, 
        our team is here to assist. Book a free consultation today.
      </p>

      <div className="space-y-6">
        {contactInfo.map((item) => (
          <a key={item.label} href={item.href} className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-olive/10 flex items-center justify-center group-hover:bg-olive/20 transition-colors">
              <item.icon className="w-5 h-5 text-olive" />
            </div>
            <div>
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <p className="font-medium text-foreground group-hover:text-primary transition-colors">{item.value}</p>
            </div>
          </a>
        ))}
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-forest text-primary-foreground rounded-xl hover:bg-forest/90 transition-colors"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Chat on WhatsApp
      </a>
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({ title: 'Message Sent!', description: "We'll contact you within 24 hours." });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div ref={ref} className={cn('opacity-0', isVisible && 'animate-slide-left')}>
      <div className="bg-card rounded-3xl p-8 md:p-10 shadow-lg border border-border">
        <h3 className="text-xl font-bold text-foreground mb-2">Schedule a Site Visit</h3>
        <p className="text-sm text-muted-foreground mb-8">Free consultation with our land experts</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField id="name" label="Full Name *" icon={User} focusedField={focusedField} setFocusedField={setFocusedField} placeholder="Your Name" required />
          
          <div className="grid md:grid-cols-2 gap-6">
            <InputField id="phone" label="Phone Number *" icon={Phone} focusedField={focusedField} setFocusedField={setFocusedField} placeholder="+91 98765 43210" type="tel" required />
            <InputField id="email" label="Email" icon={Mail} focusedField={focusedField} setFocusedField={setFocusedField} placeholder="email@example.com" type="email" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <SelectField id="interest" label="I am interested in *" options={interestTypes} focusedField={focusedField} setFocusedField={setFocusedField} required />
            <SelectField id="plotType" label="Plot Type" options={plotTypes} focusedField={focusedField} setFocusedField={setFocusedField} />
          </div>

          <InputField id="location" label="Preferred Location" icon={MapPin} focusedField={focusedField} setFocusedField={setFocusedField} placeholder="e.g., Warangal, Hyderabad" />

          <TextareaField id="message" label="Message" icon={MessageSquare} focusedField={focusedField} setFocusedField={setFocusedField} placeholder="Tell us about your requirements..." />

          <Button type="submit" variant="default" size="xl" className="w-full group" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>}
          </Button>
        </form>
      </div>
    </div>
  );
}

function InputField({ id, label, icon: Icon, focusedField, setFocusedField, ...props }: any) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground mb-2">{label}</label>
      <div className="relative">
        <Icon className={cn('absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5', focusedField === id ? 'text-primary' : 'text-muted-foreground')} />
        <input
          id={id}
          name={id}
          className={cn('w-full pl-12 pr-4 py-3.5 rounded-xl border-2 bg-background transition-all duration-300', focusedField === id ? 'border-primary shadow-earth' : 'border-border hover:border-primary/50')}
          onFocus={() => setFocusedField(id)}
          onBlur={() => setFocusedField(null)}
          {...props}
        />
      </div>
    </div>
  );
}

function SelectField({ id, label, options, focusedField, setFocusedField, ...props }: any) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground mb-2">{label}</label>
      <select
        id={id}
        name={id}
        className={cn('w-full px-4 py-3.5 rounded-xl border-2 bg-background transition-all duration-300', focusedField === id ? 'border-primary shadow-earth' : 'border-border hover:border-primary/50')}
        onFocus={() => setFocusedField(id)}
        onBlur={() => setFocusedField(null)}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}

function TextareaField({ id, label, icon: Icon, focusedField, setFocusedField, ...props }: any) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground mb-2">{label}</label>
      <div className="relative">
        <Icon className={cn('absolute left-4 top-4 w-5 h-5', focusedField === id ? 'text-primary' : 'text-muted-foreground')} />
        <textarea
          id={id}
          name={id}
          rows={4}
          className={cn('w-full pl-12 pr-4 py-3.5 rounded-xl border-2 bg-background transition-all duration-300 resize-none', focusedField === id ? 'border-primary shadow-earth' : 'border-border hover:border-primary/50')}
          onFocus={() => setFocusedField(id)}
          onBlur={() => setFocusedField(null)}
          {...props}
        />
      </div>
    </div>
  );
}