import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  // Defensive check: if no user, don't attempt the fetch
  if (!user) {
    return (
      <div className="max-w-7xl mx-auto p-10 text-center">
        <h1 className="text-3xl font-bold">Please log in to view your bookings.</h1>
      </div>
    );
  }

  const res = await fetch(`http://localhost:8000/booking/${user.id}`);
  const bookings = await res.json();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-5">My Bookings</h1>
      <div className="space-y-5">
        {/* Check if bookings is actually an array before mapping */}
        {Array.isArray(bookings) ? (
          bookings.map((booking) => (
            <div key={booking._id} className="flex gap-5 border p-5 min-w-3xl">
              <Image
                src={booking.imageUrl}
                alt={booking.destinationName}
                height={200}
                width={200}
                className="object-cover"
              />
              <div>
                <h1 className="font-bold text-2xl">{booking.destinationName}</h1>
                <p>
                  {new Date(booking.departureDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                <p className="text-gray-500">Booking Id: {booking._id}</p>

                <p className="text-3xl font-bold text-cyan-500">
                  ${booking.price}
                </p>

                <div className="mt-4">
                  <BookingCancelAlert bookingId={booking._id} />
                </div>
              </div>
            </div>
          ))
        ) : (
          /* Fallback UI if the API returns an error object or empty response */
          <div className="p-10 border border-dashed text-center">
            <p className="text-xl text-gray-500">No bookings available at this time.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookingPage;