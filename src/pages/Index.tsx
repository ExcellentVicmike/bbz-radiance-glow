import React from 'react';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';

const Index = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Beauty Enthusiast',
      rating: 5,
      text: 'The teeth whitening powder is absolutely amazing! I saw results in just one week. My smile has never looked better.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Michael Chen',
      role: 'Spa Owner',
      rating: 5,
      text: 'We use BBZ Afrique products in our spa. Our clients love the quality and the results speak for themselves.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Amara Okafor',
      role: 'Verified Customer',
      rating: 5,
      text: 'The pink lips cream is my go-to product. It keeps my lips soft and gives them such a natural, beautiful color.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'David Rodriguez',
      role: 'Beard Enthusiast',
      rating: 5,
      text: 'Best beard oil I\'ve ever used. My beard is softer, healthier, and smells fantastic. Highly recommend!',
      image: '/api/placeholder/80/80'
    }
  ];

  return (
    <main>
      <Hero />
      <Products />
      <About />
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-up">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">
              What Our Customers
              <span className="text-gradient-rose"> Are Saying</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from real people who trust BBZ Afrique for their beauty needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 beauty-hover bg-card shadow-card border-border/50">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold fill-gold" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-foreground/90 italic leading-relaxed pl-6">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-rose rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 fade-up">
            <div className="bg-gradient-to-r from-primary/10 to-gold/10 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold mb-3">
                Ready to Join Our Happy Customers?
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience the quality and results that our customers rave about. 
                Start your beauty journey with BBZ Afrique today.
              </p>
              <Button size="lg" className="gradient-primary text-white">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
