
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Star, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Booking = () => {
  const [selectedTime, setSelectedTime] = useState<string>("");
  
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "This session completely changed my approach to productivity. Highly recommend!",
      rating: 5
    },
    {
      name: "Mike R.", 
      text: "Amazing insights and actionable strategies. Worth every penny.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Product Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/ede3b914-03bb-4611-b28e-9996a211e62f.png"
                alt="Consultant"
                className="w-20 h-20 rounded-full mb-4"
              />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Book a 1:1 Consulting Session
              </h1>
              <p className="text-gray-600 text-lg mb-4">
                Get personalized guidance and actionable strategies in a private one-on-one session
              </p>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(47 reviews)</span>
              </div>

              <div className="text-3xl font-bold text-gray-900 mb-6">
                $49
              </div>
            </div>

            {/* What's Included */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">60-minute private consultation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Personalized action plan</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Follow-up resources via email</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Recording of the session</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-white rounded-lg">
                <Shield className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Secure</div>
                <div className="text-xs text-gray-600">Payment</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">500+</div>
                <div className="text-xs text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">24/7</div>
                <div className="text-xs text-gray-600">Support</div>
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">What People Say:</h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="ml-2 text-sm font-medium text-gray-900">{testimonial.name}</span>
                      </div>
                      <p className="text-sm text-gray-600">{testimonial.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Book Your Session</h3>
                  
                  {/* Time Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      <Clock className="inline h-4 w-4 mr-2" />
                      Select Time
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTime(slot)}
                          className={`p-3 text-sm border rounded-lg transition-colors ${
                            selectedTime === slot
                              ? 'border-blue-600 bg-blue-50 text-blue-600'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  {/* Price Summary */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">1:1 Consulting Session</span>
                      <span className="font-medium">$49.00</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span>$49.00</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 h-12 rounded-lg mb-4"
                    disabled={!selectedTime}
                  >
                    Complete Booking
                  </Button>

                  <div className="text-center">
                    <p className="text-xs text-gray-500">
                      By booking, you agree to our terms of service and privacy policy
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
