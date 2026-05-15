import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { Calendar, Tag, Eye } from "lucide-react"; // Assuming you use lucide-react for icons

const MyBookingPage = async () => {
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const {token} = await auth.api.getToken({
    headers: await headers()
  })

  const user = session?.user;

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto p-10 text-center">
        <h1 className="text-3xl font-bold">Please log in to view your bookings.</h1>
      </div>
    );
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user.id}`,{
    headers: {
      authoriztion: `Bearer ${token}`
    }
  })

  const bookings = await res.json();

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-medium text-gray-900">My Bookings</h1>
        <p className="text-gray-500 mt-2">Manage and view your upcoming travel plans</p>
      </div>

      <div className="space-y-6">
        {Array.isArray(bookings) && bookings.length > 0 ? (
          bookings.map((booking) => (
            <div 
              key={booking._id} 
              className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image Section */}
              <div className="relative w-full md:w-72 h-48 shrink-0">
                <Image
                  src={booking.imageUrl}
                  alt={booking.destinationName}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  {/* Status Badge - Static 'Confirmed' to match design */}
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Confirmed
                  </span>

                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-3">
                    {booking.destinationName}
                  </h2>

                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      Departure: {new Date(booking.departureDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-gray-400" />
                      Booking ID: {booking._id}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-3xl font-bold text-cyan-500">
                    ${booking.price}
                  </p>
                </div>
              </div>

              {/* Actions Section */}
              <div className="flex flex-row md:flex-col justify-end gap-3 mt-4 md:mt-0 md:min-w-[120px]">
                <BookingCancelAlert bookingId={booking._id} />
                
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors text-sm font-medium">
                  <Eye className="w-4 h-4" />
                  View
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="p-20 border border-dashed border-gray-300 rounded-xl text-center">
            <p className="text-xl text-gray-400 font-light">No bookings available at this time.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookingPage;