import React from 'react';
import { Users, Award, Globe } from 'lucide-react';

function About() {
  return (
    <div className="pt-20">
      {/* About Hero Section */}
      <section className="relative min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="Our Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About TechNews
            </h1>
            <p className="text-xl text-gray-300">
              Your trusted source for technology news, reviews, and insights.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#cd72f8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#cd72f8]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-400">Industry veterans with deep technical expertise</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#cd72f8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#cd72f8]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
                <p className="text-gray-400">Recognized for our in-depth analysis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#cd72f8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-[#cd72f8]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-gray-400">Serving readers worldwide</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                Founded in 2020, TechNews has grown to become one of the most trusted sources for technology news and reviews. Our team of experienced journalists and tech experts work tirelessly to bring you the latest insights and analysis from the world of technology.
              </p>
              <p className="text-gray-300 mb-6">
                We believe in delivering accurate, unbiased, and comprehensive coverage of the tech industry. Our mission is to help our readers make informed decisions about technology and stay ahead of the curve in an ever-evolving digital landscape.
              </p>
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <ul className="list-disc list-inside text-gray-300 mb-6">
                <li>Accuracy and integrity in reporting</li>
                <li>In-depth analysis and thorough research</li>
                <li>User-focused content and recommendations</li>
                <li>Independence from manufacturer influence</li>
                <li>Commitment to technical excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;