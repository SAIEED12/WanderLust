import DestinationCard from "@/components/DestinationCard";

const DestinationPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`);
  const destinations = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 md:mb-10 tracking-tight">
        All Destinations
      </h1>

      {/* Responsive Grid System */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations?.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;