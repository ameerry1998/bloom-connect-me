
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Bot, ArrowRight, Star } from "lucide-react";

const CommunityLinks = () => {
  const communities = [
    {
      name: "ADHD Focus Accountability",
      description: "Turn scattered focus into laser-sharp productivity. Join 2,500+ ADHD minds crushing their goals together.",
      icon: Users,
      url: "https://circle.so/your-community",
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-50 to-green-50",
      members: "2,500+",
      price: "Free Forever",
      features: ["Daily check-ins", "Focus strategies", "Peer support"]
    },
    {
      name: "AI Implementation Mastery", 
      description: "Stop wondering, start implementing. Learn the AI tools that actually work in business and life.",
      icon: Bot,
      url: "https://skool.com/your-community",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      members: "1,800+",
      price: "14-Day Free Trial",
      originalPrice: "$97/month",
      features: ["AI tutorials", "Live sessions", "Business automation"]
    }
  ];

  return (
    <div className="space-y-4">
      {communities.map((community) => {
        const IconComponent = community.icon;
        return (
          <Card key={community.name} className={`group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br ${community.bgColor} overflow-hidden relative`}>
            <CardContent className="p-5">
              {/* Top section */}
              <div className="flex justify-between items-start mb-3">
                <Badge className="bg-white/90 text-gray-700 backdrop-blur-sm font-medium text-xs">
                  {community.price}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9</span>
                </div>
              </div>

              {/* Icon & Content */}
              <div className="flex items-start gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${community.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {community.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {community.description}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span className="font-medium">{community.members}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Active</span>
                  </div>
                </div>
                
                {/* Features as badges */}
                <div className="flex gap-1">
                  {community.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="text-xs bg-white/70 text-gray-600 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing for paid community */}
              {community.originalPrice && (
                <div className="text-center mb-3">
                  <span className="text-sm text-gray-500 line-through">{community.originalPrice}</span>
                  <span className="text-base font-bold text-gray-900 ml-2">Free for 14 days</span>
                </div>
              )}

              {/* CTA Button */}
              <Button 
                asChild
                size="lg"
                className={`w-full bg-gradient-to-r ${community.color} hover:shadow-lg transform active:scale-95 transition-all duration-200 text-sm font-semibold py-3 h-11`}
              >
                <a href={community.url} target="_blank" rel="noopener noreferrer">
                  {community.price === "Free Forever" ? "Join Free" : "Start Free Trial"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              {/* Fine print */}
              <p className="text-center text-xs text-gray-500 mt-2">
                {community.price === "Free Forever" 
                  ? "No credit card required" 
                  : "Cancel anytime"
                }
              </p>
            </CardContent>

            {/* Decorative element */}
            <div className={`absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r ${community.color} rounded-full opacity-10 group-hover:scale-125 transition-transform duration-500`}></div>
          </Card>
        );
      })}
    </div>
  );
};

export default CommunityLinks;
