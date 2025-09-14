import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Package } from 'lucide-react';
import teethWhiteningImg from '@/assets/teeth-whitening.jpg';
import pinkLipsCreamImg from '@/assets/pink-lips-cream.jpg';
import beardOilImg from '@/assets/beard-oil.jpg';
import hairGrowthCreamImg from '@/assets/hair-growth-cream.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Teeth Whitening Powder',
      description: 'Natural teeth whitening powder that safely removes stains and brightens your smile.',
      price: { retail: 25, wholesale: 18 },
      rating: 4.9,
      reviews: 150,
      category: 'Dental Care',
      image: teethWhiteningImg,
      features: ['Natural ingredients', 'Fast results', 'Enamel safe']
    },
    {
      id: 2,
      name: 'Pink Lips Cream',
      description: 'Luxurious lip cream that moisturizes and enhances your natural lip color.',
      price: { retail: 20, wholesale: 14 },
      rating: 4.8,
      reviews: 89,
      category: 'Lip Care',
      image: pinkLipsCreamImg,
      features: ['Long-lasting', 'Natural pink tint', 'Moisturizing']
    },
    {
      id: 3,
      name: 'Beard Oil',
      description: 'Premium beard oil that nourishes, softens, and promotes healthy beard growth.',
      price: { retail: 30, wholesale: 22 },
      rating: 4.9,
      reviews: 203,
      category: 'Beard Care',
      image: beardOilImg,
      features: ['Organic oils', 'Non-greasy', 'Pleasant scent']
    },
    {
      id: 4,
      name: 'Hair Growth Cream',
      description: 'Advanced hair growth cream that strengthens hair follicles and promotes growth.',
      price: { retail: 35, wholesale: 25 },
      rating: 4.7,
      reviews: 112,
      category: 'Hair Care',
      image: hairGrowthCreamImg,
      features: ['Clinically tested', 'All hair types', 'Visible results']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Our Products
          </Badge>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">
            Premium Beauty 
            <span className="text-gradient-rose"> Essentials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully crafted products using the finest ingredients to enhance your natural beauty
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          {products.map((product, index) => (
            <Card key={product.id} className="overflow-hidden beauty-hover bg-card shadow-card border-border/50">
              {/* Product Image */}
              <div className="aspect-square bg-muted/30 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                  {product.category}
                </Badge>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-gold fill-gold'
                            : 'text-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-1">
                    <span>Retail:</span>
                    <span className="font-semibold">${product.price.retail}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary">Wholesale (6+):</span>
                    <span className="font-semibold text-primary">${product.price.wholesale}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Button className="w-full gradient-primary text-white">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-up">
          <div className="bg-gradient-to-r from-primary/10 to-gold/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold mb-3">
              Need Wholesale Pricing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get special rates for orders of 6+ pieces. Perfect for salons, spas, and retailers.
            </p>
            <Button size="lg" variant="outline" className="gradient-primary text-white border-0">
              Contact for Wholesale
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;