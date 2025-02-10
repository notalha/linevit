import React from 'react';
import { ShoppingCart, User } from 'lucide-react';

function BuyingGuides() {
  return (
    <div className="pt-20">
      {/* Buying Guides Hero Section */}
      <section className="relative min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=2000&q=80"
            alt="Tech Shopping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tech Buying Guides
            </h1>
            <p className="text-xl text-gray-300">
              Make informed decisions with our comprehensive buying guides and recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Buying Guides Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
                title: "Best Laptops for Professionals 2025",
                excerpt: "Top picks for different professional needs and budgets...",
                author: "Alex Thompson",
                role: "Tech Consultant"
              },
              {
                image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
                title: "Smart Home Essentials Guide",
                excerpt: "Building your perfect smart home ecosystem...",
                author: "Lisa Chen",
                role: "Smart Home Expert"
              },
              {
                image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80",
                title: "Gaming PC Build Guide 2025",
                excerpt: "How to build the ultimate gaming rig...",
                author: "Chris Martinez",
                role: "Gaming Hardware Specialist"
              }
            ].map((guide, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1 bg-[#cd72f8] text-white px-3 py-1 rounded-full">
                      <ShoppingCart className="h-4 w-4" />
                      <span className="text-sm">Guide</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#cd72f8] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{guide.excerpt}</p>
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium">{guide.author}</p>
                      <p className="text-xs text-gray-500">{guide.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BuyingGuides;