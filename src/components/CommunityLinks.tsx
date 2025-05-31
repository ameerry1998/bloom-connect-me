
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
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {communities.map((community) => {
        const IconComponent = community.icon;
        return (
          <Card key={community.name} className={`group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br ${community.bgColor} hover:scale-105 overflow-hidden relative`}>
            <CardContent className="p-8">
              {/* Top badges */}
              <div className="flex justify-between items-start mb-6">
                <Badge className="bg-white/90 text-gray-700 backdrop-blur-sm font-medium">
                  {community.price}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9</span>
                </div>
              </div>

              {/* Icon */}
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${community.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="h-10 w-10 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                {community.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
                {community.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="font-medium">{community.members} members</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Active community</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {community.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              {community.originalPrice && (
                <div className="mb-4 text-center">
                  <span className="text-lg text-gray-500 line-through">{community.originalPrice}</span>
                  <span className="text-2xl font-bold text-gray-900 ml-2">Free for 14 days</span>
                </div>
              )}

              {/* CTA Button */}
              <Button 
                asChild
                size="lg"
                className={`w-full bg-gradient-to-r ${community.color} hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-base font-semibold py-6`}
              >
                <a href={community.url} target="_blank" rel="noopener noreferrer">
                  {community.price === "Free Forever" ? "Join Free Community" : "Start Free Trial"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              {/* Additional CTA text */}
              <p className="text-center text-xs text-gray-500 mt-3">
                {community.price === "Free Forever" 
                  ? "No credit card required • Join instantly" 
                  : "No commitment • Cancel anytime during trial"
                }
              </p>
            </CardContent>

            {/* Decorative background element */}
            <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-r ${community.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`}></div>
          </Card>
        );
      })}
    </div>
  );
};

export default CommunityLinks;
