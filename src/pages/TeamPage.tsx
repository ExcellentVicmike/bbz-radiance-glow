import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Phone } from 'lucide-react';

const TeamPage = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'Visionary leader with 10+ years in the beauty industry. Passionate about creating products that enhance natural beauty.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'sarah@bbzafrique.com'
    },
    {
      name: 'Michael Chen',
      role: 'Admin & HR',
      description: 'Ensures smooth operations and maintains our company culture of excellence and innovation.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'michael@bbzafrique.com'
    },
    {
      name: 'Amara Okafor',
      role: 'General Manager',
      description: 'Oversees daily operations and strategic initiatives to drive business growth and customer satisfaction.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'amara@bbzafrique.com'
    },
    {
      name: 'Dr. James Williams',
      role: 'Director of Production',
      description: 'Ensures product quality and safety with expertise in cosmetic chemistry and manufacturing.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'james@bbzafrique.com'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Head of Marketing',
      description: 'Creative strategist who brings our brand story to life and connects with customers worldwide.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'lisa@bbzafrique.com'
    },
    {
      name: 'David Thompson',
      role: 'Sales Representative',
      description: 'Builds relationships with clients and ensures exceptional customer service and support.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'david@bbzafrique.com'
    },
    {
      name: 'Maria Santos',
      role: 'Logistics Officer',
      description: 'Manages supply chain and ensures timely delivery of products to customers globally.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'maria@bbzafrique.com'
    },
    {
      name: 'John Kariuki',
      role: 'Logistics Officer',
      description: 'Coordinates international shipping and maintains inventory management systems.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'john@bbzafrique.com'
    }
  ];

  return (
    <main className="pt-16 lg:pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 fade-up">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Our Team
            </Badge>
            <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
              Meet the Experts Behind 
              <span className="text-gradient-gold"> BBZ Afrique</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our passionate team combines expertise, creativity, and dedication to deliver 
              exceptional beauty products and customer experiences.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 stagger-children">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden beauty-hover bg-card shadow-card border-border/50">
                {/* Member Image */}
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-gold/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 gradient-rose rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {member.role}
                  </Badge>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Contact Actions */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="icon">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center fade-up">
            <div className="bg-gradient-to-r from-primary/10 to-gold/10 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold mb-3">
                Join Our Growing Team
              </h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for passionate individuals who share our vision for excellence in beauty and customer service.
              </p>
              <Button size="lg" className="gradient-primary text-white">
                View Open Positions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;