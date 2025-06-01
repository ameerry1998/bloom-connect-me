
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";

interface ColorSchemeToggleProps {
  onSchemeChange: (scheme: number) => void;
  currentScheme: number;
}

const ColorSchemeToggle = ({ onSchemeChange, currentScheme }: ColorSchemeToggleProps) => {
  const schemes = [
    { name: "Trust Blue", color: "bg-blue-600" },
    { name: "Success Green", color: "bg-green-600" },
    { name: "Premium Purple", color: "bg-purple-600" }
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg border p-3">
        <div className="flex items-center gap-2 mb-2">
          <Palette className="h-4 w-4 text-gray-600" />
          <span className="text-xs font-medium text-gray-700">Color Scheme</span>
        </div>
        <div className="flex gap-2">
          {schemes.map((scheme, index) => (
            <Button
              key={index}
              size="sm"
              variant={currentScheme === index ? "default" : "outline"}
              className={`w-8 h-8 p-0 rounded-full ${scheme.color} ${
                currentScheme === index ? "" : "bg-transparent border-2"
              }`}
              onClick={() => onSchemeChange(index)}
              style={{
                borderColor: currentScheme !== index ? scheme.color.replace('bg-', '#') : undefined
              }}
            >
              <span className="sr-only">{scheme.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorSchemeToggle;
