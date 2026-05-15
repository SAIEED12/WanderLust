const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-4 sm:px-8 md:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Branding Intro Section */}
        <div className="mb-10 md:mb-12 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight">
            Wanderlust
          </h1>
          <p className="mt-3 text-sm md:text-base max-w-xl mx-auto md:mx-0">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Dynamic Column Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          
          {/* Newsletter Box */}
          <div className="flex flex-col">
            <h3 className="text-white text-xs font-bold tracking-widest mb-3 uppercase">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <div className="flex items-center bg-gray-900 border border-gray-800 rounded-md px-4 py-3 focus-within:border-cyan-500 transition-colors">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm text-white placeholder-gray-500 w-full"
              />
              <button 
                className="text-white hover:text-cyan-400 text-lg ml-2 transition-colors focus:outline-none"
                aria-label="Subscribe"
              >
                ↗
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest mb-3 uppercase">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Home</li>
              <li className="hover:text-white transition-colors cursor-pointer">Destinations</li>
              <li className="hover:text-white transition-colors cursor-pointer">My Bookings</li>
              <li className="hover:text-white transition-colors cursor-pointer">My Profile</li>
            </ul>
          </div>

          {/* Support Content Links */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest mb-3 uppercase">Support</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest mb-3 uppercase">Contact Us</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">786 901 1622</li>
              <li className="hover:text-white transition-colors cursor-pointer">info@wandarland.com</li>
            </ul>
          </div>
        </div>

        {/* Separator Line and Legal Metadata */}
        <div className="border-t border-gray-900 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs md:text-sm text-gray-500">
            © {new Date().getFullYear()} Wanderlust. All rights reserved.
          </p>

          {/* Social Links Row */}
          <div className="flex gap-6 text-gray-400 text-lg">
            <span className="hover:text-white transition-colors cursor-pointer">X</span>
            <span className="hover:text-white transition-colors cursor-pointer font-serif lowercase">in</span>
            <span className="hover:text-white transition-colors cursor-pointer text-xl leading-none">◎</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;