import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Award, Users } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '10K+' },
    { icon: Award, label: 'Premium Products', value: '4' },
    { icon: Sparkles, label: 'Years Experience', value: '5+' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/20 to-background/40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto stagger-children">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-foreground/90">
              Premium Beauty & Cosmetics
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
            Transform Your Beauty
            <span className="block text-gradient-gold">
              Naturally
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover BBZ Afrique's premium collection of beauty essentials. From teeth whitening to hair care, 
            we craft products that enhance your natural beauty with professional-grade quality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="gradient-primary text-white shadow-elegant beauty-hover">
              Shop Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-foreground backdrop-blur-sm hover:bg-white/20">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center beauty-hover">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3 backdrop-blur-sm">
                  <stat.icon className="h-6 w-6 text-gold" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-glow" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gold/10 rounded-full blur-2xl animate-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-lg animate-glow" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;