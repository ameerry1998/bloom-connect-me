
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
  },
  {
    name: "Pastel Green",
    cardBg: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    buttonBg: "bg-green-500 hover:bg-green-600",
    buttonHover: "hover:shadow-lg",
    textColor: "text-gray-900",
    descColor: "text-gray-600"
  },
  {
    name: "Pastel Purple",
    cardBg: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    buttonBg: "bg-purple-500 hover:bg-purple-600",
    buttonHover: "hover:shadow-lg",
    textColor: "text-gray-900",
    descColor: "text-gray-600"
  }
];

const CommunityLinks = ({ colorScheme = 0 }: { colorScheme?: number }) => {
  const scheme = colorSchemes[colorScheme] || colorSchemes[0];
  
  const communities = [
    {
      name: "ADHD Focus Accountability - Free",
      description: "Join our community of people getting their life on track",
      icon: Users,
      url: "https://stan.store/engineeredfocus/p/book-a-11-consulting-session-s1kowruq",
      price: "Free Forever"
    },
    {
      name: "AI Implementation Mastery", 
      description: "Learn the AI tools that actually work in business",
      icon: Bot,
      url: "https://stan.store/engineeredfocus/p/book-a-11-consulting-session-s1kowruq",
      price: "14-Day Free Trial"
    }
  ];

  return (
    <div className="space-y-3">
      {communities.map((community) => {
        const IconComponent = community.icon;
        const isFree = community.price === "Free Forever";
        const isPaid = community.price === "14-Day Free Trial";
        
        // Use specific color schemes for each card
        let cardScheme;
        if (isFree) {
          cardScheme = colorSchemes[3]; // Pastel green for free community
        } else if (isPaid) {
          cardScheme = colorSchemes[4]; // Pastel purple for paid community
        } else {
          cardScheme = scheme;
        }
        
        return (
          <a 
            key={community.name} 
            href={community.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <Card className={`${cardScheme.cardBg} border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden cursor-pointer`}>
              <CardContent className="p-4">
                {/* Icon, Title and Arrow Row */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${cardScheme.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`h-5 w-5 ${cardScheme.iconColor}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-base font-semibold ${cardScheme.textColor} mb-1 leading-tight`}>
                      {community.name}
                    </h3>
                    <p className={`${cardScheme.descColor} text-sm leading-relaxed`}>
                      {community.description}
                    </p>
                  </div>

                  <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                </div>
              </CardContent>
            </Card>
          </a>
        );
      })}
    </div>
  );
};

export default CommunityLinks;
