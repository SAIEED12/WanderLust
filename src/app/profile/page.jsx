"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import { Card, Skeleton } from "@heroui/react";
import { FaEnvelope, FaUser } from "react-icons/fa";

const ProfilePage = () => {
  const { data: session, isPending: sessionPending } = authClient.useSession();
  const user = session?.user;

  // Fallback for when no image exists
  const getInitials = (name) => {
    if (!name) return <FaUser />;
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  };

  if (sessionPending) {
    return (
      <div className="max-w-md mx-auto p-6 mt-20">
        <Card className="p-8 flex flex-col items-center gap-4">
          <Skeleton className="w-32 h-32 rounded-full" />
          <Skeleton className="h-6 w-3/4 rounded-lg" />
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 flex justify-center">
      <Card className="w-full max-w-md p-10 border border-gray-100 shadow-sm flex flex-col items-center text-center rounded-none bg-white">
        
        {/* Fixed Image Container */}
        <div className="mb-6">
          {user?.image ? (
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-500 shadow-md">
              <img
                src={user.image} 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if the custom URL fails to load
                  e.target.onerror = null; 
                  e.target.src = "https://ui-avatars.com/api/?name=" + (user?.name || "User");
                }}
              />
            </div>
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-gray-400 text-3xl font-bold">
              {getInitials(user?.name)}
            </div>
          )}
        </div>

        <h1 className="text-3xl font-bold text-gray-900 tracking-tight uppercase">
          {user?.name || "Guest User"}
        </h1>

        <div className="flex items-center gap-2 mt-3 text-gray-500">
          <FaEnvelope className="text-cyan-500" size={14} />
          <span className="text-base font-medium">{user?.email}</span>
        </div>

        <hr className="w-12 my-8 border-t-2 border-cyan-500" />
        
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">
          Traveler Profile
        </p>
      </Card>
    </div>
  );
};

export default ProfilePage;