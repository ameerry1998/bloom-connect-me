
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Bot, ArrowRight, Star } from "lucide-react";

const CommunityLinks = () => {
  const communities = [
    {
      name: "Circle Focus Community",
      description: "Connect with focused developers and get accountability partners",
      icon: Users,
      url: "https://circle.so/your-community", // Replace with your actual Circle community URL
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      members: "2,500+",
      features: ["Daily check-ins", "Goal tracking", "Peer support"]
    },
    {
      name: "AI Community on Whop", 
      description: "Explore AI tools and automation for developers",
      icon: Bot,
      url: "https://whop.com/your-community", // Replace with your actual Whop community URL
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      members: "1,800+",
      features: ["AI tool reviews", "Automation guides", "Expert Q&A"]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {communities.map((community) => {
        const IconComponent = community.icon;
        return (
          <Card key={community.name} className={`group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br ${community.bgColor} hover:scale-105 overflow-hidden relative`}>
            <CardContent className="p-8">
              {/* Badge */}
              <div className="flex justify-between items-start mb-4">
                <Badge className="bg-white/80 text-gray-700 backdrop-blur-sm">
                  Free Community
                </Badge>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9</span>
                </div>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${community.color} flex items-center justify-center mb-6`}>
                <IconComponent className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {community.name}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {community.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{community.members} members</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Active daily</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {community.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                asChild
                className={`w-full bg-gradient-to-r ${community.color} hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
              >
                <a href={community.url} target="_blank" rel="noopener noreferrer">
                  Join Community <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>

            {/* Decorative background element */}
            <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r ${community.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-300`}></div>
          </Card>
        );
      })}
    </div>
  );
};

export default CommunityLinks;
