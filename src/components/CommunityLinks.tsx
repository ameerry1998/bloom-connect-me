
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Bot, ArrowRight } from "lucide-react";

interface ColorScheme {
  name: string;
  cardBg: string;
  iconBg: string;
  iconColor: string;
  buttonBg: string;
  buttonHover: string;
  textColor: string;
  descColor: string;
}

const colorSchemes: ColorScheme[] = [
  {
    name: "Trust Blue",
    cardBg: "bg-white",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    buttonBg: "bg-blue-600 hover:bg-blue-700",
    buttonHover: "hover:shadow-lg",
    textColor: "text-gray-900",
    descColor: "text-gray-600"
  },
  {
    name: "Success Green", 
    cardBg: "bg-white",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    buttonBg: "bg-green-600 hover:bg-green-700",
    buttonHover: "hover:shadow-lg",
    textColor: "text-gray-900",
    descColor: "text-gray-600"
  },
  {
    name: "Premium Purple",
    cardBg: "bg-white",
    iconBg: "bg-purple-100", 
    iconColor: "text-purple-600",
    buttonBg: "bg-purple-600 hover:bg-purple-700",
    buttonHover: "hover:shadow-lg",
    textColor: "text-gray-900",
    descColor: "text-gray-600"
  }
];

const CommunityLinks = ({ colorScheme = 0 }: { colorScheme?: number }) => {
  const scheme = colorSchemes[colorScheme] || colorSchemes[0];
  
  const communities = [
    {
      name: "ADHD Focus Accountability",
      description: "Join our thriving community of people who will help you get your life on track. Join our free sessions for planning your week and our free life planning system.",
      icon: Users,
      url: "https://stan.store/engineeredfocus/p/book-a-11-consulting-session-s1kowruq",
      price: "Free Forever"
    },
    {
      name: "AI Implementation Mastery", 
      description: "Stop wondering, start implementing. Learn the AI tools that actually work in business and life.",
      icon: Bot,
      url: "https://stan.store/engineeredfocus/p/book-a-11-consulting-session-s1kowruq",
      price: "14-Day Free Trial"
    }
  ];

  return (
    <div className="space-y-4">
      {communities.map((community) => {
        const IconComponent = community.icon;
        return (
          <Card key={community.name} className={`${scheme.cardBg} border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden`}>
            <CardContent className="p-6">
              {/* Icon and Title Row */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 ${scheme.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className={`h-6 w-6 ${scheme.iconColor}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className={`text-lg font-semibold ${scheme.textColor} mb-2 leading-tight`}>
                    {community.name}
                  </h3>
                  <p className={`${scheme.descColor} text-sm leading-relaxed`}>
                    {community.description}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                asChild
                className={`w-full ${scheme.buttonBg} text-white font-medium py-3 h-12 rounded-lg ${scheme.buttonHover} transform active:scale-95 transition-all duration-200`}
              >
                <a href={community.url} target="_blank" rel="noopener noreferrer">
                  {community.price === "Free Forever" ? "Join Free Community" : "Start Free Trial"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              {/* Fine print */}
              <p className="text-center text-xs text-gray-500 mt-3">
                {community.price === "Free Forever" 
                  ? "No credit card required" 
                  : "Cancel anytime"
                }
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default CommunityLinks;
