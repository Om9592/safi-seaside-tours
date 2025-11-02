import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
  <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">

  {/* Background Image */}
  <div className="absolute inset-0">
  <img
    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
    alt="Peggy's Cove Lighthouse"
    className="w-full h-full object-cover"
  />
</div>


  {/* Optional soft overlay — thoda contrast ke liye (remove if not needed) */}


  {/* Soft Overlay for readability */}
  <div className="absolute inset-0 bg-black/"></div>
  <div className="absolute inset-0 bg-linear-to-b "></div>

      {/* Overlay (optional for better readability) */}
      <div className="absolute inset-0 bg-white/15 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold oklch(51.8% 0.253 323.949) leading-tight"
        >
          Guiding Unforgettable Journeys <br />
          <span className="text-sky-600">Across Nova Scotia</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
        >
          Discover the beauty, charm, and culture of the coast with{" "}
          <span className="font-semibold">Safi Seaside Tours</span> — your trusted local guide for private and small-group adventures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 text-lg rounded-full shadow-lg flex items-center gap-2 transition-all duration-300">
            Book Your Tour <FaArrowRight />
          </button>

          <button className="border border-sky-900 text-sky-800 hover:bg-sky-50 px-8 py-3 text-lg rounded-full transition-all duration-300">
            Explore Tours
          </button>
        </motion.div>
      </div>

      {/* Decorative Wave at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 text-sky-100">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-24"
          fill="currentColor"
        >
          <path
            fillOpacity="1"
            d="M0,64L48,96C96,128,192,192,288,213.3C384,235,480,213,576,186.7C672,160,768,128,864,144C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320
             C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320
             C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
