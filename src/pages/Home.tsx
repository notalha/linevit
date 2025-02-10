import React from 'react';
import { ArrowRight, BookOpen, Users, MessageSquare, Clock, Star, ChevronRight } from 'lucide-react';

function Home() {
  return (
    <>
      {/* Featured Article Hero */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80"
            alt="AI Technology"
            className="w-full h-full object-cover object-[center_65%] opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
          <div className="max-w-3xl pt-32">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Rise of Artificial General Intelligence: A New Era Begins
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Exploring the latest breakthroughs in AGI development and their implications for humanity's future.
            </p>
          </div>
        </div>
      </section>

      {/* How-to Guides */}
      <section className="relative py-20 bg-black overflow-hidden">
        {/* Sophisticated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#5d2ddc 1.5px, transparent 1.5px), linear-gradient(to right, #5d2ddc 1.5px, transparent 1.5px)`,
            backgroundSize: '4rem 4rem',
          }}></div>
        </div>
        
        {/* Purple Glow Effects */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-700/30 rounded-full blur-[128px] -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-900/30 rounded-full blur-[128px] -translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">How-to</h2>
            <a href="#" className="text-[#5d2ddc] hover:text-[#5d2ddc]/80 flex items-center">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
                title: "How to Build a Custom PC in 2025",
                excerpt: "A step-by-step guide to building your dream gaming rig...",
                readTime: "15 min read",
                difficulty: "Intermediate"
              },
              {
                image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80",
                title: "Setting Up a Home Server",
                excerpt: "Create your personal cloud storage and media server...",
                readTime: "20 min read",
                difficulty: "Advanced"
              },
              {
                image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80",
                title: "Smart Home Automation Guide",
                excerpt: "Automate your home with these simple IoT solutions...",
                readTime: "12 min read",
                difficulty: "Beginner"
              }
            ].map((guide, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#5d2ddc] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{guide.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{guide.readTime}</span>
                    <span className="px-3 py-1 rounded-full bg-gray-800">{guide.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Reviews</h2>
            <a href="#" className="text-[#5d2ddc] hover:text-[#5d2ddc]/80 flex items-center">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&w=800&q=80",
                title: "MacBook Pro M3 Max",
                excerpt: "The most powerful MacBook ever - but is it worth the upgrade?",
                rating: 4.8,
                verdict: "Editor's Choice"
              },
              {
                image: "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?auto=format&fit=crop&w=800&q=80",
                title: "Sony WH-1000XM5",
                excerpt: "Setting new standards for noise cancellation and audio quality",
                rating: 4.9,
                verdict: "Best in Class"
              },
              {
                image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
                title: "Samsung S24 Ultra",
                excerpt: "A new era of AI-powered smartphone photography",
                rating: 4.7,
                verdict: "Highly Recommended"
              }
            ].map((review, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={review.image}
                    alt={review.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <div className="flex items-center space-x-1 bg-[#5d2ddc] text-white px-3 py-1 rounded-full">
                      <Star className="h-4 w-4" />
                      <span className="text-sm">{review.rating}</span>
                    </div>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                      {review.verdict}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#5d2ddc] transition-colors">
                    {review.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{review.excerpt}</p>
                  <div className="flex items-center text-[#5d2ddc] group-hover:text-[#5d2ddc]/80 transition-colors">
                    Read Full Review <ChevronRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts Grid */}
      <section className="relative py-20 bg-black overflow-hidden">
        {/* Purple Glow Effects */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-700/30 rounded-full blur-[160px] -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[160px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-purple-800/20 rounded-full blur-[180px] -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Posts</h2>
            <a href="#" className="text-[#5d2ddc] hover:text-[#5d2ddc]/80 flex items-center">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
                category: "Cloud",
                title: "The Future of Cloud Computing in 2025",
                excerpt: "How edge computing and AI are reshaping cloud infrastructure...",
                author: "Sarah Chen",
                role: "Cloud Architect"
              },
              {
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
                category: "Security",
                title: "Zero Trust Security: Beyond the Basics",
                excerpt: "Implementing modern security paradigms in enterprise environments...",
                author: "Michael Ross",
                role: "Security Expert"
              },
              {
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
                category: "Development",
                title: "The Rise of Low-Code Platforms",
                excerpt: "How citizen developers are transforming enterprise software...",
                author: "Emily Parker",
                role: "Tech Analyst"
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
                    <span className="bg-[#5d2ddc] text-white px-3 py-1 rounded-full text-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#5d2ddc] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{article.excerpt}</p>
                  <div className="flex items-center space-x-3">
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

      {/* Trending Topics */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Trending Topics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
                title: "Quantum Computing",
                description: "Breaking barriers in computational power",
                articles: 42
              },
              {
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
                title: "Web3 & Blockchain",
                description: "The future of decentralized internet",
                articles: 38
              }
            ].map((topic, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl">
                <div className="absolute inset-0">
                  <img 
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="relative p-8 min-h-[300px] flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-2">{topic.title}</h3>
                  <p className="text-gray-300 mb-4">{topic.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{topic.articles} articles</span>
                    <button className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-colors">
                      Explore Topic
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <BookOpen className="h-8 w-8 text-[#5d2ddc]" />, value: "100+", label: "Tech Guides" },
              { icon: <MessageSquare className="h-8 w-8 text-[#5d2ddc]" />, value: "24/7", label: "Tech Support" },
              { icon: <Users className="h-8 w-8 text-[#5d2ddc]" />, value: "12", label: "Expert Writers" },
              { icon: <Clock className="h-8 w-8 text-[#5d2ddc]" />, value: "Daily", label: "Updates" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#5d2ddc]/10 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8">
            Get the latest tech news and insights delivered directly to your inbox.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-gray-900 border border-gray-800 focus:outline-none focus:border-[#5d2ddc]"
            />
            <button
              type="submit"
              className="bg-[#5d2ddc] text-white px-8 py-3 rounded-full hover:bg-[#5d2ddc]/80 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;