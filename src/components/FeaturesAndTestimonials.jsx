"use client"; 
import React from "react";
import Image from "next/image";
import { Card, Button } from "@heroui/react"; 
import { 
  FaShieldAlt, 
  FaMapMarkedAlt, 
  FaHeadset, 
  FaChevronLeft, 
  FaChevronRight, 
  FaArrowRight 
} from "react-icons/fa";
import Link from "next/link";

const FeaturesAndTestimonials = () => {
  return (
    <section className="pt-20 pb-0 bg-white">
      {/* --- Why Choose Wanderlust --- */}
      <div className="max-w-7xl mx-auto px-4 bg-cyan-50/30 py-16 rounded-3xl mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-900 mb-2">Why Choose Wanderlust</h2>
          <p className="text-gray-500">Your trusted partner for exceptional travel experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <FaShieldAlt />, title: "Safe & Secure", desc: "Your safety is our priority with comprehensive travel insurance and 24/7 support." },
            { icon: <FaMapMarkedAlt />, title: "Expert Guides", desc: "Local experts who bring destinations to life with authentic cultural insights." },
            { icon: <FaHeadset />, title: "24/7 Support", desc: "Round-the-clock customer service to assist you wherever your journey takes you." }
          ].map((item, index) => (
            <Card key={index} className="border-none shadow-sm bg-white">
              <div className="p-6 flex flex-col items-start gap-3">
                <div className="p-3 bg-cyan-100 text-cyan-600 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* --- What Travelers Say --- */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-serif text-gray-900 mb-2">What Travelers Say</h2>
            <p className="text-gray-500">Real experiences from our happy travelers</p>
          </div>
          <div className="flex gap-2">
            <Button isIconOnly variant="bordered" className="rounded-full border-gray-200"><FaChevronLeft /></Button>
            <Button isIconOnly variant="bordered" className="rounded-full border-gray-200"><FaChevronRight /></Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border border-gray-100 shadow-sm rounded-none bg-white overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6 p-8">
              <div className="flex-1">
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."
                </p>
                <div>
                  <h4 className="font-bold text-cyan-600">— Michael Chen</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Singapore</p>
                </div>
              </div>
              <div className="relative w-full md:w-40 h-52 shrink-0">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" 
                  alt="Michael Chen"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </Card>

          <Card className="border border-gray-100 shadow-sm rounded-none bg-white overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6 p-8">
              <div className="flex-1">
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"
                </p>
                <div>
                  <h4 className="font-bold text-cyan-600">— Sarah Johnson</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">New York, USA</p>
                </div>
              </div>
              <div className="relative w-full md:w-40 h-52 shrink-0">
                <Image 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" 
                  alt="Sarah Johnson"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* --- Ready to Start Journey (CTA) --- */}
      <div className="relative h-[500px] w-full flex items-center justify-center overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?q=80&w=1633"
          alt="Travel Background"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="relative text-center text-white px-4 z-10">
          <h2 className="text-5xl md:text-6xl font-serif mb-6 uppercase tracking-tight">Ready To Start Your Journey?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Join thousands of travelers who have discovered the world with us
          </p>
          <Link href="/destinations" 
            className="bg-white text-black font-bold px-10 py-7 rounded-none hover:bg-cyan-500 hover:text-white transition-all uppercase tracking-widest text-sm"
            endContent={<FaArrowRight />}
          >
            Book Your Trip Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndTestimonials;