
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";

const BookingCalendar = () => {
  const [date, setDate] = useState<Date>();

  const availableSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  return (
    <section className="px-4 py-12 bg-gray-50">
      <div className="max-w-md mx-auto">
        <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
          <CardContent className="p-6 text-center">
            {/* Header */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CalendarIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Book a 1:1 Consulting Session
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                Book a private coaching session with me!
              </p>
              <div className="text-2xl font-bold text-blue-600">
                $49
              </div>
            </div>

            {/* Calendar - Centered */}
            <div className="mb-6 flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border-0 p-0 mx-auto"
                classNames={{
                  months: "flex flex-col space-y-4",
                  month: "space-y-4",
                  caption: "flex justify-center pt-1 relative items-center mb-4",
                  caption_label: "text-lg font-semibold",
                  nav: "space-x-1 flex items-center",
                  nav_button: "h-8 w-8 bg-transparent p-0 hover:bg-gray-100 rounded-full",
                  nav_button_previous: "absolute left-1",
                  nav_button_next: "absolute right-1",
                  table: "w-full border-collapse space-y-1",
                  head_row: "flex mb-2",
                  head_cell: "text-gray-500 rounded-md w-9 font-medium text-xs text-center",
                  row: "flex w-full",
                  cell: "h-9 w-9 text-center text-sm p-0 relative",
                  day: "h-9 w-9 p-0 font-normal hover:bg-gray-100 rounded-full",
                  day_range_end: "day-range-end",
                  day_selected: "bg-gray-900 text-white hover:bg-gray-900 hover:text-white rounded-full",
                  day_today: "bg-gray-100 text-gray-900 rounded-full",
                  day_outside: "text-gray-400 opacity-50",
                  day_disabled: "text-gray-400 opacity-50",
                  day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                  day_hidden: "invisible",
                }}
                disabled={(date) => date < new Date()}
              />
            </div>

            {/* Time Slots */}
            {date && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center justify-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Available Times for {format(date, "MMM d")}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {availableSlots.map((slot) => (
                    <Button
                      key={slot}
                      variant="outline"
                      className="text-sm py-2 rounded-lg border-gray-200 hover:border-blue-600 hover:text-blue-600"
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button 
                asChild
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 h-12 rounded-lg"
              >
                <a href="/booking" rel="noopener noreferrer">
                  Book a 1:1 Call with Me
                </a>
              </Button>
              
              <Button 
                asChild
                variant="ghost"
                className="w-full text-blue-600 hover:text-blue-700 font-medium"
              >
                <a href="/booking" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingCalendar;
