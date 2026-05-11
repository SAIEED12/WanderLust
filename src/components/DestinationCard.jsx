import { Button } from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";

const DestinationCard = ({ destination }) => {
  const { _id, imageUrl, price, destinationName, duration, country } = destination;

  return (
    <div className="border rounded-lg overflow-hidden flex flex-col h-full bg-white shadow-sm">
      {/* Container with fixed aspect ratio */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          alt={destinationName}
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-1 text-gray-600 text-sm mb-1">
          <LuMapPin size={14} /> <span>{country}</span>
        </div>

        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold leading-tight">{destinationName}</h2>
            <div className="flex gap-1 items-center text-sm text-gray-500 mt-1">
              <FaRegCalendar size={14} /> {duration}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold whitespace-nowrap">$ {price}</h3>
          </div>
        </div>

        <div className="mt-auto">
          <Link href={`/destinations/${_id}`} className="inline-block">
            <Button 
              variant="light" 
              className="px-0 text-cyan-500 hover:bg-transparent font-medium flex items-center gap-2"
            > 
              <FiExternalLink /> Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;