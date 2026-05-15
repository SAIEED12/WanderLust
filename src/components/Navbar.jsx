"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white py-3 border-b border-gray-100 sticky top-0 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-6 relative">
        
        {/* Left Side: Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <li>
            <Link href={"/"} className="hover:text-black transition-colors">Home</Link>
          </li>
          <li>
            <Link href={"/destinations"} className="hover:text-black transition-colors">Destinations</Link>
          </li>
          <li>
            <Link href={"/my-bookings"} className="hover:text-black transition-colors">My Bookings</Link>
          </li>
          <li>
            <Link href={"/add-destination"} className="hover:text-black transition-colors">Add Destination</Link>
          </li>
        </ul>

        {/* Mobile: Hamburger Icon */}
        <button 
          onClick={toggleMenu} 
          className="block md:hidden text-gray-700 focus:outline-none order-1 md:order-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Center: Logo */}
        <div className="flex-shrink-0 order-2 md:order-none">
          <Link href="/">
            <Image
              src={"/assets/Wanderlast.png"}
              height={120}
              width={120}
              alt="logo"
              className="w-28 md:w-36 h-auto object-contain"
            />
          </Link>
        </div>

        {/* Right Side: Action/Auth Links */}
        <ul className="hidden md:flex items-center gap-5 text-gray-700 font-medium order-3 md:order-none">
          <li>
            <Link href={"/profile"} className="hover:text-black transition-colors">Profile</Link>
          </li>

          {user ? (
            <>
              <li>
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt={user.name || "User Avatar"}
                    src={user?.image}
                  />
                  <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
                </Avatar>
              </li>
              <li>
                <Button
                  size="sm"
                  onClick={handleSignOut}
                  color="danger"
                  className="rounded-md font-semibold"
                >
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={"/login"} className="hover:text-black transition-colors">Login</Link>
              </li>
              <li>
                <Link href={"/signup"}>
                  <Button size="sm" className="bg-black text-white font-semibold rounded-md">
                    Sign Up
                  </Button>
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile: Dynamic Header Actions (Avatar/Login) when menu is closed */}
        <div className="flex md:hidden items-center gap-3 order-3">
          {user ? (
            <Link href="/profile">
              <Avatar size="sm">
                <Avatar.Image referrerPolicy="no-referrer" alt="User Avatar" src={user?.image} />
                <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
              </Avatar>
            </Link>
          ) : (
            <Link href={"/login"} className="text-sm font-medium text-gray-700">Login</Link>
          )}
        </div>

        {/* Mobile Drawer/Drop-down Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden z-40 animate-in fade-in slide-in-from-top-5 duration-200">
            <Link href={"/"} onClick={toggleMenu} className="text-gray-700 font-medium py-1 border-b border-gray-50">Home</Link>
            <Link href={"/destinations"} onClick={toggleMenu} className="text-gray-700 font-medium py-1 border-b border-gray-50">Destinations</Link>
            <Link href={"/my-bookings"} onClick={toggleMenu} className="text-gray-700 font-medium py-1 border-b border-gray-50">My Bookings</Link>
            <Link href={"/add-destination"} onClick={toggleMenu} className="text-gray-700 font-medium py-1 border-b border-gray-50">Add Destination</Link>
            <Link href={"/profile"} onClick={toggleMenu} className="text-gray-700 font-medium py-1 border-b border-gray-50">Profile</Link>
            
            {user ? (
              <Button
                size="md"
                onClick={() => { handleSignOut(); toggleMenu(); }}
                color="danger"
                className="w-full mt-2 rounded-md"
              >
                Logout
              </Button>
            ) : (
              <Link href={"/signup"} onClick={toggleMenu} className="w-full mt-2">
                <Button size="md" className="bg-black text-white w-full rounded-md">
                  Sign Up
                </Button>
              </Link>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;