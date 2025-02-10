import React from 'react';
import { Star, User } from 'lucide-react';

function Reviews() {
  return (
    <div className="pt-20">
      {/* Reviews Hero Section */}
      <section className="relative min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?auto=format&fit=crop&w=2000&q=80"
            alt="Tech Reviews"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Tech Reviews
            </h1>
            <p className="text-xl text-gray-300">
              In-depth analysis and hands-on reviews of the latest technology products.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80",
                title: "MacBook Pro M3 Max Review",
                rating: 4.5,
                excerpt: "The most powerful MacBook ever created...",
                author: "David Chen",
                role: "Senior Tech Reviewer"
              },
              {
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
                title: "Sony WH-1000XM5 Review",
                rating: 4.8,
                excerpt: "Setting new standards for noise cancellation...",
                author: "Sarah Miller",
                role: "Audio Expert"
              },
              {
                image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
                title: "iPhone 15 Pro Max Review",
                rating: 4.7,
                excerpt: "Apple's latest flagship pushes boundaries...",
                author: "Mike Ross",
                role: "Mobile Tech Analyst"
              }
            ].map((review, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={review.image}
                    alt={review.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1 bg-[#cd72f8] text-white px-3 py-1 rounded-full">
                      <Star className="h-4 w-4" />
                      <span className="text-sm">{review.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#cd72f8] transition-colors">
                    {review.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{review.excerpt}</p>
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium">{review.author}</p>
                      <p className="text-xs text-gray-500">{review.role}</p>
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

export default Reviews;