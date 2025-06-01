
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Download, Star, CheckCircle, Gift } from "lucide-react";

const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Replace with your actual form endpoint or integrate with your email service
      console.log("Lead captured:", { email, phone });
      
      toast({
        title: "Success! Check your email 📧",
        description: "Your free toolkit is on its way!",
      });
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Lead capture error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    "Daily focus ritual checklist",
    "AI tool comparison guide",
    "Community accountability templates",
    "Productivity tracking sheets"
  ];

  return (
    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 shadow-lg">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <Badge className="mb-3 bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 border-0 px-3 py-1 text-xs">
            <Gift className="h-3 w-3 mr-1" />
            Free Download
          </Badge>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
            The Complete Focus & AI Toolkit
          </h2>
          
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Get the exact templates used by our community to 10x their focus and implement AI tools that save time.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-6">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white"></div>
            </div>
            <span>5,000+ downloads</span>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>4.8/5</span>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-3 mb-6">
          <h3 className="text-sm font-bold text-gray-900">What's included:</h3>
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">{benefit}</span>
            </div>
          ))}
          
          <div className="mt-4 p-3 bg-white/80 rounded-lg border border-orange-200">
            <p className="text-xs text-gray-600">
              <strong className="text-orange-600">Bonus:</strong> Exclusive access to our private resource library and monthly challenges.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-9 h-10 border-gray-200 text-sm"
                required
              />
            </div>
            
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input
                type="tel"
                placeholder="Phone (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-9 h-10 border-gray-200 text-sm"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full h-11 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold text-sm active:scale-95 transition-transform"
            >
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Get Free Toolkit
                </>
              )}
            </Button>
            
            <p className="text-xs text-gray-500 text-center">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </CardContent>

      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20"></div>
      <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20"></div>
    </Card>
  );
};

export default LeadMagnet;
