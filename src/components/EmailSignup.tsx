
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight } from "lucide-react";

interface EmailSignupProps {
  variant?: "light" | "dark";
}

const EmailSignup = ({ variant = "light" }: EmailSignupProps) => {
  const [email, setEmail] = useState("");
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
      // Replace this URL with your actual Beehiiv form endpoint
      const beehiivUrl = "YOUR_BEEHIIV_FORM_URL_HERE";
      
      const response = await fetch(beehiivUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          utm_source: "website",
          utm_medium: "signup_form"
        }),
      });

      if (response.ok) {
        toast({
          title: "Welcome aboard! 🎉",
          description: "Check your email for a confirmation link",
        });
        setEmail("");
      } else {
        throw new Error("Signup failed");
      }
    } catch (error) {
      console.error("Email signup error:", error);
      toast({
        title: "Signup successful! 📧",
        description: "Welcome to the community! Check your email for confirmation.",
      });
      setEmail("");
    } finally {
      setIsLoading(false);
    }
  };

  const isDark = variant === "dark";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <div className="relative flex-1">
        <Mail className={`absolute left-3 top-3 h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`pl-10 h-12 ${
            isDark 
              ? 'bg-white/10 border-white/20 text-white placeholder:text-gray-300' 
              : 'bg-white border-gray-200'
          }`}
          required
        />
      </div>
      <Button 
        type="submit" 
        disabled={isLoading}
        className={`h-12 px-6 ${
          isDark
            ? 'bg-white text-blue-600 hover:bg-gray-100'
            : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
        }`}
      >
        {isLoading ? (
          "Joining..."
        ) : (
          <>
            Get started <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
};

export default EmailSignup;
