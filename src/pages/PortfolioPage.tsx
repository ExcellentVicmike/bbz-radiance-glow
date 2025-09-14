import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, TrendingUp, Users, Award } from 'lucide-react';

const PortfolioPage = () => {
  const caseStudies = [
    {
      title: 'Spa Chain Partnership',
      client: 'Luxury Spa Network',
      category: 'Wholesale B2B',
      results: {
        sales: '+300%',
        satisfaction: '98%',
        retention: '95%'
      },
      description: 'Partnered with a premium spa chain to provide custom-branded beauty products across 25 locations.',
      challenge: 'The spa needed high-quality, consistent products that aligned with their luxury brand image.',
      solution: 'We developed a custom product line with premium packaging and provided comprehensive staff training.',
      outcome: 'Increased spa revenue by 300% and achieved 98% customer satisfaction scores.',
      testimonial: {
        text: "BBZ Afrique transformed our spa services. Our clients love the products and we've seen incredible results.",
        author: "Jennifer Walsh",
        position: "Operations Director"
      }
    },
    {
      title: 'Influencer Collaboration',
      client: 'Beauty Influencer Network',
      category: 'Marketing Partnership',
      results: {
        reach: '2M+',
        engagement: '+450%',
        conversions: '25%'
      },
      description: 'Collaborated with top beauty influencers to showcase our products to diverse audiences.',
      challenge: 'Needed to increase brand awareness and reach new customer segments authentically.',
      solution: 'Developed authentic partnerships with influencers who genuinely loved and used our products.',
      outcome: 'Reached over 2 million potential customers with a 25% conversion rate.',
      testimonial: {
        text: "The quality speaks for itself. My followers noticed the difference immediately.",
        author: "Maya Johnson",
        position: "Beauty Influencer"
      }
    },
    {
      title: 'Retail Chain Expansion',
      client: 'Beauty Supply Stores',
      category: 'Retail Partnership',
      results: {
        stores: '150+',
        growth: '+200%',
        revenue: '$500K+'
      },
      description: 'Successfully launched in 150+ retail locations across three countries.',
      challenge: 'Scaling distribution while maintaining product quality and brand consistency.',
      solution: 'Implemented robust quality control and training programs for retail partners.',
      outcome: 'Generated $500K+ in additional revenue and established strong retail presence.',
      testimonial: {
        text: "BBZ Afrique products fly off our shelves. Customers keep coming back for more.",
        author: "Robert Kim",
        position: "Store Manager"
      }
    },
    {
      title: 'Corporate Wellness Program',
      client: 'Fortune 500 Company',
      category: 'B2B Wellness',
      results: {
        employees: '5,000+',
        satisfaction: '92%',
        retention: '88%'
      },
      description: 'Integrated our products into a comprehensive employee wellness program.',
      challenge: 'Corporate client wanted to enhance employee satisfaction and wellness offerings.',
      solution: 'Created customized wellness kits with our signature products for all employees.',
      outcome: 'Improved employee satisfaction by 92% and program retention by 88%.',
      testimonial: {
        text: "Our employees love the wellness kits. It's become one of our most popular benefits.",
        author: "Sarah Chen",
        position: "HR Director"
      }
    }
  ];

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '10,000+' },
    { icon: Award, label: 'Success Stories', value: '500+' },
    { icon: TrendingUp, label: 'Average Growth', value: '250%' },
    { icon: Star, label: 'Client Satisfaction', value: '4.9/5' }
  ];

  return (
    <main className="pt-16 lg:pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 fade-up">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Portfolio
            </Badge>
            <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
              Success Stories That 
              <span className="text-gradient-gold"> Speak Volumes</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses and individuals achieve remarkable results 
              with our premium beauty products and services.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 stagger-children">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center beauty-hover bg-card shadow-card border-border/50">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Case Studies */}
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden bg-card shadow-card border-border/50 fade-up">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="text-primary border-primary/20">
                        {study.category}
                      </Badge>
                      <Badge variant="secondary">
                        Case Study
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-playfair font-bold mb-2">{study.title}</h3>
                    <p className="text-muted-foreground mb-6">{study.client}</p>
                    
                    <p className="text-foreground mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-muted/30 rounded-lg">
                          <div className="text-lg font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-r from-primary/5 to-gold/5 rounded-xl p-6 border border-primary/10 mb-6">
                      <p className="text-foreground italic mb-3">"{study.testimonial.text}"</p>
                      <div>
                        <div className="font-semibold text-sm">{study.testimonial.author}</div>
                        <div className="text-xs text-muted-foreground">{study.testimonial.position}</div>
                      </div>
                    </div>

                    <Button className="gradient-primary text-white">
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className="bg-gradient-to-br from-primary/10 to-gold/10 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 gradient-rose rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Award className="h-12 w-12 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{study.title}</h4>
                      <p className="text-muted-foreground text-sm">{study.outcome}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center fade-up">
            <div className="bg-gradient-to-r from-primary/10 to-gold/10 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold mb-3">
                Ready to Create Your Success Story?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how BBZ Afrique can help your business achieve similar results. 
                Our team is ready to create a customized solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-primary text-white">
                  Start Your Project
                </Button>
                <Button size="lg" variant="outline">
                  Download Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;