
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Bot, ArrowRight, Star, Clock, Target } from "lucide-react";

const CommunityLinks = () => {
  const communities = [
    {
      name: "ADHD Focus Accountability",
      description: "Break free from scattered focus and procrastination. Join a supportive community where ADHD minds thrive together through daily accountability and proven systems.",
      icon: Target,
      url: "https://circle.so/your-community", // Replace with your actual Circle community URL
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-50 to-green-50",
      members: "2,500+",
      price: "Free Forever",
      features: ["Daily accountability check-ins", "ADHD-specific strategies", "Peer support network", "Focus tracking tools"]
    },
    {
      name: "AI Implementation Mastery", 
      description: "Stop wondering how to use AI and start implementing. Learn practical AI tools and automation strategies that actually work in business and life.",
      icon: Bot,
      url: "https://skool.com/your-community", // Replace with your actual Skool community URL
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      members: "1,800+",
      price: "14-Day Free Trial",
      originalPrice: "$97/month",
      features: ["Step-by-step AI tutorials", "Live implementation sessions", "AI tool reviews & demos", "Business automation guides"]
    }
  ];

  return (
    <div className="space-y-6">
      {communities.map((community) => {
        const IconComponent = community.icon;
        return (
          <Card key={community.name} className={`group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br ${community.bgColor} overflow-hidden relative`}>
            <CardContent className="p-6">
              {/* Top badges */}
              <div className="flex justify-between items-start mb-4">
                <Badge className="bg-white/90 text-gray-700 backdrop-blur-sm font-medium text-xs">
                  {community.price}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9</span>
                </div>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${community.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <IconComponent className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {community.name}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {community.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span className="font-medium">{community.members}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Active</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {community.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs text-gray-700">
                    <div className="w-1 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              {community.originalPrice && (
                <div className="mb-4 text-center">
                  <span className="text-sm text-gray-500 line-through">{community.originalPrice}</span>
                  <span className="text-lg font-bold text-gray-900 ml-2">Free for 14 days</span>
                </div>
              )}

              {/* CTA Button - Larger for mobile */}
              <Button 
                asChild
                size="lg"
                className={`w-full bg-gradient-to-r ${community.color} hover:shadow-lg transform active:scale-95 transition-all duration-200 text-sm font-semibold py-4 h-12`}
              >
                <a href={community.url} target="_blank" rel="noopener noreferrer">
                  {community.price === "Free Forever" ? "Join Free Community" : "Start Free Trial"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              {/* Additional CTA text */}
              <p className="text-center text-xs text-gray-500 mt-2">
                {community.price === "Free Forever" 
                  ? "No credit card required" 
                  : "Cancel anytime during trial"
                }
              </p>
            </CardContent>

            {/* Decorative background element */}
            <div className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r ${community.color} rounded-full opacity-10 group-hover:scale-125 transition-transform duration-500`}></div>
          </Card>
        );
      })}
    </div>
  );
};

export default CommunityLinks;
