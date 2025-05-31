
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
    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 shadow-2xl">
      <CardContent className="p-8 lg:p-12">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 border-0 px-4 py-2">
            <Gift className="h-4 w-4 mr-2" />
            Limited Time Free Download
          </Badge>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The Complete Focus & AI Toolkit
          </h2>
          
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Get the exact templates and systems used by our community members to 10x their focus 
            and implement AI tools that actually save time.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-2 border-white"></div>
            </div>
            <span>Downloaded by 5,000+ people</span>
            <div className="flex items-center gap-1 ml-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>4.8/5 rating</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Benefits */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What's included:</h3>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
            
            <div className="mt-6 p-4 bg-white/60 rounded-lg border border-orange-200">
              <p className="text-sm text-gray-600">
                <strong className="text-orange-600">Bonus:</strong> Get exclusive access to our private 
                resource library and monthly community challenges.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 border-gray-200"
                  required
                />
              </div>
              
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <Input
                  type="tel"
                  placeholder="Phone number (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-10 h-12 border-gray-200"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold"
              >
                {isLoading ? (
                  "Sending toolkit..."
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Get Free Toolkit Now
                  </>
                )}
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </CardContent>

      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20"></div>
      <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20"></div>
    </Card>
  );
};

export default LeadMagnet;
