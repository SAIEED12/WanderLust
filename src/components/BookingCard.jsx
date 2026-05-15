"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import React, { useState } from "react";
import { LuMoveRight, LuCheck } from "react-icons/lu";
import { toast } from "react-toastify";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [departureDate, setDepartureDate] = useState(null);

  const { price, imageUrl, country, destinationName, _id } = destination;

  const handleBooking = async () => {
    // 1. Client-side Validation
    if (!user) {
      return toast.error("Please log in to book this trip!");
    }

    if (!departureDate) {
      return toast.error("Please select a departure date.");
    }

    // Prepare data - converting date to ISO string for the backend
    const bookingData = {
      userId: user.id,
      userImage: user.image,
      userName: user.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate).toISOString(),
    };

    const {data:tokenData} = await authClient.token()
    console.log(tokenData)

    try 
    {
      const res = await fetch("http://localhost:8000/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(bookingData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Server Error Response:", errorText);
        throw new Error("Failed to save booking on the server.");
      }

      const data = await res.json();
      toast.success("Booking Successful!");
      
    } 
    
    catch (error) 
    {
      console.error("Booking Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Card className="rounded-sm border border-gray-200 bg-white p-6 shadow-none">
      {/* Pricing Section */}
      <div className="mb-6">
        <p className="text-gray-500 text-sm">Starting from</p>
        <div className="flex items-baseline gap-1">
          <h2 className="text-4xl font-bold text-cyan-500">${price}</h2>
        </div>
        <p className="text-gray-500 text-sm">per person</p>
      </div>

      {/* Date Input */}
      <div className="mb-6">
        <DateField
          onChange={setDepartureDate}
          className="w-full"
          name="date"
        >
          <Label>Departure Date</Label>
          <DateField.Group>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
          </DateField.Group>
        </DateField>
      </div>

      {/* Action Button */}
      <Button
        onClick={handleBooking}
        className="w-full rounded-none bg-[#17A2B8] text-white font-medium h-12 mb-6"
        endContent={<LuMoveRight />}
      >
        Book Now
      </Button>

      {/* Feature List */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <LuCheck className="text-cyan-600" />
          <span>Free cancellation up to 7 days</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <LuCheck className="text-cyan-600" />
          <span>Travel insurance included</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <LuCheck className="text-cyan-600" />
          <span>24/7 customer support</span>
        </div>
      </div>
    </Card>
  );
};

export default BookingCard;