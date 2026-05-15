import { Button } from "@heroui/react";
import Link from "next/link";
import DestinationCard from "./DestinationCard";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  const destinations = await res.json();
  
  return (
    <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Featured Destinations
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-1">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>

        <Link href={"/destinations"} className="w-full sm:w-auto">
          <Button
            variant="outline"
            className="rounded-none border-cyan-500 border-2 text-cyan-500 font-semibold hover:bg-cyan-50 transition-colors w-full sm:w-auto"
          >
            All Destinations
          </Button>
        </Link>
      </div>

      {/* Responsive Grid System */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 sm:mt-10">
        {destinations?.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Featured;