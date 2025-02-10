import React, { useState } from 'react';
import { Menu, X, CircuitBoard, Cpu, Github, Twitter, Linkedin, Youtube, Rss } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AI from './pages/AI';
import Reviews from './pages/Reviews';
import BuyingGuides from './pages/BuyingGuides';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="fixed w-full z-50 px-4 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-full px-8 py-4 border-2 border-white/10">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-3 group">
                  <div className="relative">
                    <CircuitBoard className="h-8 w-8 text-[#5d2ddc] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Cpu className="h-8 w-8 text-[#5d2ddc] group-hover:opacity-0 transition-opacity duration-300" />
                  </div>
                  <div className="font-bold text-2xl tracking-wider bg-gradient-to-r from-[#5d2ddc] to-[#cd72f8] bg-clip-text text-transparent">LINEVIT</div>
                </Link>
                
                {/* Mobile Menu Button */}
                <button 
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="text-gray-300" /> : <Menu className="text-gray-300" />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                  <Link to="/" className="text-gray-300 hover:text-[#5d2ddc] transition-colors">Home</Link>
                  <Link to="/ai" className="text-gray-300 hover:text-[#5d2ddc] transition-colors">AI</Link>
                  <Link to="/reviews" className="text-gray-300 hover:text-[#5d2ddc] transition-colors">Reviews</Link>
                  <Link to="/buying-guides" className="text-gray-300 hover:text-[#5d2ddc] transition-colors">Buying Guides</Link>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-white/5 backdrop-blur-md text-white px-4 py-2 rounded-full w-[200px] focus:outline-none focus:ring-2 focus:ring-[#5d2ddc] placeholder-gray-300 border border-white/10"
                    />
                  </div>
                </nav>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <nav className="md:hidden mt-4">
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 flex flex-col space-y-4 border-2 border-white/10">
                  <Link to="/" className="text-gray-300 hover:text-[#5d2ddc] transition-colors">Home</Link>
                  <Link to="/ai" className="text-gray-300 hover:text-[#5d2ddc] transition-colors">AI</Link>
                  <Link to="/reviews" className="text-gray-300 hover:text-[#5d2ddc] transition-colors">Reviews</Link>
                  <Link to="/buying-guides" className="text-gray-300 hover:text-[#5d2ddc] transition-colors">Buying Guides</Link>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white/5 backdrop-blur-md text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5d2ddc] placeholder-gray-300 border border-white/10"
                    />
                  </div>
                </div>
              </nav>
            )}
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/buying-guides" element={<BuyingGuides />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 pt-16 pb-12 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              {/* Company Info */}
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <Cpu className="h-6 w-6 text-[#5d2ddc]" />
                  <div className="text-lg font-bold tracking-wider bg-gradient-to-r from-[#5d2ddc] to-[#cd72f8] bg-clip-text text-transparent">LINEVIT</div>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Your trusted source for tech news, reviews, and insights. Stay ahead with the latest in technology.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">
                    <Rss className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-white font-semibold mb-4">Categories</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">News</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Reviews</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">How-to Guides</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Best Picks</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Deals</a></li>
                </ul>
              </div>

              {/* Topics */}
              <div>
                <h3 className="text-white font-semibold mb-4">Topics</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Artificial Intelligence</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Smartphones</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Gaming</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Laptops</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Software</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Advertise</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Ethics Policy</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-white font-semibold mb-4">Support</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Cookie Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">GDPR</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="border-t border-gray-800 pt-8 pb-12">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-white font-semibold mb-2">Subscribe to our newsletter</h3>
                <p className="text-gray-400 text-sm mb-4">Get the latest tech news and updates delivered to your inbox.</p>
                <form className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#5d2ddc]"
                  />
                  <button
                    type="submit"
                    className="bg-[#5d2ddc] text-white px-6 py-2 rounded-lg hover:bg-[#5d2ddc]/80 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">
                  © 2025 LINEVIT. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Sitemap</a>
                  <a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">RSS Feed</a>
                  <a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Accessibility</a>
                  <a href="#" className="text-gray-400 hover:text-[#5d2ddc] transition-colors">Do Not Sell My Info</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;