import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Heart, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'Every product is crafted with genuine passion for enhancing natural beauty.'
    },
    {
      icon: Target,
      title: 'Quality Focus',
      description: 'We never compromise on quality, using only premium ingredients and rigorous testing.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results that exceed customer expectations.'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'Bringing African beauty excellence to customers worldwide with authentic products.'
    }
  ];

  const milestones = [
    { year: '2019', title: 'Founded', description: 'BBZ Afrique was born from a passion for natural beauty' },
    { year: '2020', title: 'First Products', description: 'Launched our signature teeth whitening powder' },
    { year: '2022', title: 'Product Line Expansion', description: 'Added lip care, beard oil, and hair growth products' },
    { year: '2024', title: 'Global Reach', description: 'Serving customers across multiple continents' }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Our Story
          </Badge>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
            Where Passion Meets 
            <span className="text-gradient-gold"> Professional Excellence</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div className="space-y-6 fade-up">
            <h3 className="text-2xl font-playfair font-semibold text-primary">
              Our Journey to Beauty Excellence
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                BBZ Afrique was founded on a simple yet powerful belief: everyone deserves access to 
                high-quality beauty products that enhance their natural radiance. What started as a 
                personal quest to find effective, safe beauty solutions has evolved into a mission 
                to serve thousands of customers worldwide.
              </p>
              <p>
                Our founder's journey began with a personal struggle to find teeth whitening products 
                that were both effective and gentle. After extensive research and testing, the first 
                BBZ Afrique product was born – a natural teeth whitening powder that delivered 
                professional results without harsh chemicals.
              </p>
              <p>
                Today, we've expanded our line to include premium lip care, beard oil, and hair growth 
                products, each crafted with the same dedication to quality and effectiveness that 
                defined our founding product.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-gold/5 rounded-xl p-6 border border-primary/10">
              <h4 className="font-semibold text-primary mb-2">Our Mission</h4>
              <p className="text-muted-foreground">
                To empower individuals to embrace their natural beauty through innovative, 
                high-quality products that deliver professional results while maintaining 
                the highest standards of safety and effectiveness.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative fade-up">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-gold/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 gradient-rose rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Crafted with Love</h4>
                <p className="text-muted-foreground">Every product tells a story of care</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-glow" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/10 rounded-full blur-2xl animate-glow" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-center mb-12 fade-up">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center beauty-hover bg-card shadow-card border-border/50">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="fade-up">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-center mb-12">
            Our Journey
          </h3>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6 pb-8 relative">
                {/* Timeline line */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-primary to-primary/30" />
                )}
                
                {/* Timeline dot */}
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                  <span className="text-white font-bold text-sm">{milestone.year.slice(-2)}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-lg">{milestone.title}</h4>
                    <Badge variant="outline" className="text-xs">{milestone.year}</Badge>
                  </div>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;