import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Instagram, 
  Twitter, 
  Linkedin,
  Download,
  Send
} from 'lucide-react';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Call us for immediate assistance',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@bbzafrique.com',
      description: 'Send us a detailed message',
      action: 'Send Email'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+1 (555) 123-4567',
      description: 'Chat with us instantly',
      action: 'Chat Now'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: '123 Beauty Boulevard, Lagos, Nigeria',
      description: 'Visit our headquarters',
      action: 'Get Directions'
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', url: '#', followers: '50K' },
    { icon: Twitter, label: 'Twitter', url: '#', followers: '25K' },
    { icon: Linkedin, label: 'LinkedIn', url: '#', followers: '15K' }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <main className="pt-16 lg:pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 fade-up">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Contact Us
            </Badge>
            <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
              Let's Start a 
              <span className="text-gradient-gold"> Beautiful Conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Choose your preferred way to connect with our team 
              and let's discuss how we can help enhance your beauty journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-card shadow-card border-border/50 fade-up">
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      className="mt-1 min-h-[120px]" 
                    />
                  </div>
                  
                  <Button className="w-full gradient-primary text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="space-y-4 stagger-children">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="p-6 beauty-hover bg-card shadow-card border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <method.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{method.title}</h4>
                        <p className="text-foreground font-medium mb-1">{method.details}</p>
                        <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                        <Button variant="outline" size="sm">
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Office Hours */}
              <Card className="p-6 bg-card shadow-card border-border/50 fade-up">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Office Hours</h4>
                </div>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6 bg-card shadow-card border-border/50 fade-up">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                          <social.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium">{social.label}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{social.followers}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            {/* Company Profile */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-gold/5 border-primary/10">
              <div className="flex items-center gap-4 mb-4">
                <Download className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Company Profile</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Download our comprehensive company profile to learn more about our history, 
                products, capabilities, and achievements.
              </p>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </Card>

            {/* Location Map */}
            <Card className="p-8 bg-card shadow-card border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Visit Our Office</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Located in the heart of Lagos, our office is easily accessible. 
                Schedule a visit to see our operations and meet our team.
              </p>
              <div className="bg-gradient-to-br from-primary/10 to-gold/10 rounded-lg h-32 flex items-center justify-center mb-4">
                <MapPin className="h-12 w-12 text-primary/50" />
              </div>
              <Button variant="outline" className="w-full">
                Get Directions
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;