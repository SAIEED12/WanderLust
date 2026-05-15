import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/Banner.png')] bg-cover bg-center text-white flex justify-between flex-col items-center gap-10 min-h-[calc(100vh-70px)] md:h-[600px] w-full">
      
      {/* Main Content Area */}
      <div className="p-4 sm:p-8 md:p-10 text-center flex justify-center flex-col items-center gap-5 flex-1 max-w-4xl mx-auto mt-10 md:mt-0">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight drop-shadow-md">
          Discover Your <br className="hidden sm:inline" /> Next Adventure
        </h1>

        <p className="text-base sm:text-lg md:text-2xl text-gray-100 max-w-2xl drop-shadow-sm">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
          <button className="uppercase bg-cyan-500 px-6 py-3 cursor-pointer font-semibold tracking-wider hover:bg-cyan-600 transition-colors w-full sm:w-auto">
            Explore Now
          </button>

          <button className="uppercase px-6 py-3 bg-white/30 backdrop-blur-sm cursor-pointer font-semibold tracking-wider hover:bg-white/40 transition-colors w-full sm:w-auto">
            View Destination
          </button>
        </div>
      </div>

      {/* Responsive Filter/Search Bar */}
      <div className="max-w-7xl mx-auto px-4 w-full mb-6 md:mb-10">
        <div className="bg-white/20 backdrop-blur-md border border-white/10 flex flex-col md:flex-row justify-between gap-4 md:gap-2 w-full items-stretch md:items-center rounded-xl md:rounded-none overflow-hidden p-4 md:p-0">
          
          {/* Location */}
          <div className="px-4 py-2 md:py-4 flex-1">
            <h3 className="text-xs uppercase tracking-wider text-cyan-200 font-semibold md:text-sm md:text-white md:normal-case md:font-normal">Location</h3>
            <p className="text-sm md:text-xs text-white/90">Address, City or Zip</p>
          </div>

          <Separator variant="tertiary" orientation="vertical" className="hidden md:block h-8 bg-white/30" />
          <hr className="border-white/10 block md:hidden" />

          {/* Date/Duration */}
          <div className="px-4 py-2 md:py-4 flex-1">
            <h3 className="text-xs uppercase tracking-wider text-cyan-200 font-semibold md:text-sm md:text-white md:normal-case md:font-normal">Date/Duration</h3>
            <p className="text-sm md:text-xs text-white/90">Anytime/3 Days</p>
          </div>

          <Separator variant="tertiary" orientation="vertical" className="hidden md:block h-8 bg-white/30" />
          <hr className="border-white/10 block md:hidden" />

          {/* Budget */}
          <div className="px-4 py-2 md:py-4 flex-1">
            <h3 className="text-xs uppercase tracking-wider text-cyan-200 font-semibold md:text-sm md:text-white md:normal-case md:font-normal">Budget</h3>
            <p className="text-sm md:text-xs text-white/90">$0-$3000</p>
          </div>

          <Separator variant="tertixl" orientation="vertical" className="hidden md:block h-8 bg-white/30" />
          <hr className="border-white/10 block md:hidden" />

          {/* People */}
          <div className="px-4 py-2 md:py-4 flex-1">
            <h3 className="text-xs uppercase tracking-wider text-cyan-200 font-semibold md:text-sm md:text-white md:normal-case md:font-normal">People</h3>
            <p className="text-sm md:text-xs text-white/90">5-10</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Banner;