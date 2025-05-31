
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail, Users, Bot, ChevronRight, Phone } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import CommunityLinks from "@/components/CommunityLinks";
import EmailSignup from "@/components/EmailSignup";
import LeadMagnet from "@/components/LeadMagnet";

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
            <a href="#communities" className="text-gray-600 hover:text-blue-600 transition-colors">Communities</a>
            <a href="#resources" className="text-gray-600 hover:text-blue-600 transition-colors">Resources</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Connect</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200 border-0">
            ✨ Join thriving communities
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Transform your life with
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              supportive communities
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands who've found their tribe, accountability, and growth through our 
            specialized communities for focus and AI implementation.
          </p>
        </div>
      </section>

      {/* Communities Section - Now at top */}
      <section id="communities" className="px-6 lg:px-8 py-12 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Join thriving communities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with like-minded individuals and accelerate your personal and professional growth
            </p>
          </div>
          
          <CommunityLinks />
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <LeadMagnet />
        </div>
      </section>

      {/* Social Proof & Email Signup */}
      <section className="px-6 lg:px-8 py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Stay connected & get exclusive updates
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get first access to new communities, resources, and proven strategies
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <EmailSignup variant="dark" />
          </div>

          {/* Social Links */}
          <div className="mb-8">
            <p className="text-blue-200 mb-4">Follow for daily insights:</p>
            <SocialLinks />
          </div>
          
          <p className="text-sm text-blue-200">
            No spam. Unsubscribe at any time. Join 10,000+ community members.
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
