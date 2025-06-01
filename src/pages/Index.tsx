
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
    <div className="min-h-screen bg-white">
      {/* Header - Mobile Optimized */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 py-4">
        <nav className="max-w-md mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">
            Your Name
          </div>
          <div className="flex items-center">
            <SocialLinks />
          </div>
        </nav>
      </header>

      {/* Communities Section - Mobile First */}
      <section id="communities" className="px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
              Join thriving communities
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Connect with like-minded people and accelerate your growth
            </p>
          </div>
          
          <CommunityLinks />
        </div>
      </section>

      {/* Lead Magnet Section - Mobile Optimized */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-md mx-auto">
          <LeadMagnet />
        </div>
      </section>

      {/* Email Signup - Mobile Focused */}
      <section className="px-4 py-12 bg-gradient-to-b from-blue-600 to-indigo-600">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
            Get exclusive updates
          </h2>
          <p className="text-blue-100 mb-6 text-sm leading-relaxed">
            First access to new communities and proven strategies
          </p>
          
          <div className="mb-6">
            <EmailSignup variant="dark" />
          </div>
          
          <p className="text-xs text-blue-200">
            No spam. Join 10,000+ members.
          </p>
        </div>
      </section>

      {/* Footer - Minimal for Mobile */}
      <footer className="px-4 py-8 bg-gray-900">
        <div className="max-w-md mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-white font-bold text-lg">
              Your Name
            </div>
            <SocialLinks />
          </div>
          
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-xs">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
