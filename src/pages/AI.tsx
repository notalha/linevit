import React from 'react';
import { Clock, User } from 'lucide-react';

function AI() {
  return (
    <div className="pt-20">
      {/* AI Hero Section */}
      <section className="relative min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80"
            alt="AI Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Artificial Intelligence News & Insights
            </h1>
            <p className="text-xl text-gray-300">
              Stay updated with the latest developments in AI technology, research, and applications.
            </p>
          </div>
        </div>
      </section>

      {/* AI Articles Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80",
                title: "The Evolution of Machine Learning Models",
                excerpt: "How neural networks are becoming more efficient and powerful...",
                author: "Dr. Sarah Chen",
                role: "AI Researcher"
              },
              {
                image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
                title: "AI in Healthcare: 2025 Outlook",
                excerpt: "Transforming patient care through artificial intelligence...",
                author: "Michael Ross",
                role: "Healthcare Tech Analyst"
              },
              {
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
                title: "Ethics in AI Development",
                excerpt: "Addressing the challenges of responsible AI implementation...",
                author: "Emily Parker",
                role: "AI Ethics Consultant"
              }
            ].map((article, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#cd72f8] text-white px-3 py-1 rounded-full text-sm">
                      AI
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#cd72f8] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{article.excerpt}</p>
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium">{article.author}</p>
                      <p className="text-xs text-gray-500">{article.role}</p>
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

export default AI;