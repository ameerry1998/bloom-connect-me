
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail, Users, Bot, ChevronRight } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import CommunityLinks from "@/components/CommunityLinks";
import EmailSignup from "@/components/EmailSignup";

const Index = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="relative z-10 p-6 lg:p-8">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Your Name
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#resources" className="text-gray-600 hover:text-blue-600 transition-colors">Resources</a>
            <a href="#community" className="text-gray-600 hover:text-blue-600 transition-colors">Community</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
            ✨ Building the future of tech
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Empowering developers to
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              break into tech
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers getting exclusive insights, real stories, and proven strategies 
            to accelerate their tech careers.
          </p>

          {/* Email Signup - Primary CTA */}
          <div className="mb-12">
            <EmailSignup />
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white"></div>
              </div>
              <span>Join 10,000+ developers</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⭐⭐⭐⭐⭐</span>
              <span>Trusted by top companies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="px-6 lg:px-8 py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Resources to accelerate your growth
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to break into tech and advance your career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resource Cards */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:scale-105">
              <CardContent className="p-8">
                <div className="text-3xl mb-4">🍀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Career Stories</h3>
                <p className="text-gray-600 mb-4">
                  Real stories from software engineers who successfully broke into tech.
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-blue-100 text-blue-700">Premium</Badge>
                  <span className="text-2xl font-bold text-gray-900">$20</span>
                </div>
                <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Get early access <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 hover:scale-105">
              <CardContent className="p-8">
                <div className="text-3xl mb-4">👑</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Interview System</h3>
                <p className="text-gray-600 mb-4">
                  Step-by-step system to write winning resumes and pass interviews.
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-100 text-green-700">Free</Badge>
                  <span className="text-sm text-gray-500 line-through">$99</span>
                </div>
                <Button variant="outline" className="w-full mt-4 hover:bg-purple-50">
                  Learn more <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-50 hover:scale-105">
              <CardContent className="p-8">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Escape Plan</h3>
                <p className="text-gray-600 mb-4">
                  Know if you're ready to leave your job and build your escape plan.
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-100 text-green-700">Free</Badge>
                  <span className="text-2xl font-bold text-gray-900">$0</span>
                </div>
                <Button variant="outline" className="w-full mt-4 hover:bg-orange-50">
                  Learn more <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Join our thriving communities
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with like-minded developers, get support, and accelerate your growth
          </p>
          
          <CommunityLinks />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 lg:px-8 py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to transform your tech career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get exclusive insights and proven strategies delivered to your inbox
          </p>
          
          <div className="max-w-md mx-auto">
            <EmailSignup variant="dark" />
          </div>
          
          <p className="text-sm text-blue-200 mt-4">
            No spam. Unsubscribe at any time. Trusted by 10,000+ developers.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-8 py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white font-bold text-xl mb-4 md:mb-0">
              Your Name
            </div>
            
            <SocialLinks />
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
