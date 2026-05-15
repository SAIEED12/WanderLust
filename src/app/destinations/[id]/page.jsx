import BookingCard from "@/components/BookingCard";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar, FaStar } from "react-icons/fa6";
import { LuMapPin, LuMoveLeft } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
const { token } = await auth.api.getToken({
  headers: await headers()
})
  console.log(token)
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${id}`,{
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const destination = await res.json();

  const { imageUrl, price, destinationName, duration, country, description } =
    destination;

    console.log(destination)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Top Navigation & Actions */}
      <div className="flex items-center justify-between mb-6">
        <Link 
          href="/destinations" 
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
        >
          <LuMoveLeft /> Back to Destinations
        </Link>
        <div className="flex items-center gap-3">
          <EditModal destination={destination} />
          <DeleteAlert destination={destination} />
        </div>
      </div>

      {/* Main Image */}
      <div className="relative w-full h-[500px] mb-10 overflow-hidden rounded-xl">
        <Image
          className="object-cover"
          alt={destinationName}
          src={imageUrl}
          fill
          priority
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Content Column */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-1 text-gray-500 mb-2">
            <LuMapPin className="text-sm" /> 
            <span className="text-sm font-medium uppercase tracking-wider">{country}</span>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">{destinationName}</h1>

          <div className="flex items-center gap-6 mb-8 text-gray-700">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span className="font-bold">4.9</span>
              <span className="text-gray-400">(234 reviews)</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaRegCalendar className="text-gray-400" /> 
              <span className="font-medium">{duration}</span>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Highlights</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
              {[
                "Luxury beachfront accommodation",
                "Traditional Balinese spa treatment",
                "Sunrise trek to Mount Batur",
                "Visit Uluwatu Temple at sunset",
                "Private beach dinner experience"
              ].map((highlight, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <span className="text-teal-500">✓</span> {highlight}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Sidebar (Booking Card) */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <BookingCard destination={destination} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;