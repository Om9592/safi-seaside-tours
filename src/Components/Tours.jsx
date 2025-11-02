export default function ToursSection() {
  return (
    <section id="Tours" className="bg-white dark:bg-gray-900 py-16">
      <div className="container px-6 mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          Tours & Experiences
        </h1>

        <p className="max-w-3xl mx-auto mb-12 text-center text-gray-500 dark:text-gray-300">
          Experience the beauty, history, and charm of Nova Scotia with Safi Seaside Tours — your trusted local guide for private and small-group adventures.
          Enjoy door-to-door pickup, comfortable vehicles, and complimentary Nova Scotia Lobster Rolls — all part of your authentic seaside experience.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Tour 1 */}
          <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl border hover:shadow-xl hover:bg-blue-600 transition-all duration-300">
            <img
              className="w-full h-48 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
              alt="Peggy's Cove"
            />
            <h2 className="text-2xl font-semibold mt-4 text-gray-800 group-hover:text-white">
              Peggy’s Cove Tour
            </h2>
            <p className="mt-2 text-gray-500 group-hover:text-gray-200">
              Discover the world-famous Peggy’s Cove Lighthouse and the picturesque fishing village that defines Nova Scotia’s coastal beauty.
            </p>
            <p className="mt-3 font-semibold text-blue-700 group-hover:text-white">$160 / person</p>
            <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
              Book Now
            </button>
          </div>

          {/* Tour 2 */}
          <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl border hover:shadow-xl hover:bg-blue-600 transition-all duration-300">
            <img
              className="w-full h-48 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
              alt="Lunenburg"
            />
            <h2 className="text-2xl font-semibold mt-4 text-gray-800 group-hover:text-white">
              Lunenburg Tour
            </h2>
            <p className="mt-2 text-gray-500 group-hover:text-gray-200">
              Explore the UNESCO World Heritage town of Lunenburg — famous for its colorful harbor, maritime museums, and authentic seafood experiences.
            </p>
            <p className="mt-3 font-semibold text-blue-700 group-hover:text-white">$175 / person</p>
            <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
              Book Now
            </button>
          </div>

          {/* Tour 3 */}
          <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl border hover:shadow-xl hover:bg-blue-600 transition-all duration-300">
            <img
              className="w-full h-48 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="Peggy's Cove + Lunenburg Combo"
            />
            <h2 className="text-2xl font-semibold mt-4 text-gray-800 group-hover:text-white">
              Peggy’s Cove + Lunenburg Combo
            </h2>
            <p className="mt-2 text-gray-500 group-hover:text-gray-200">
              Enjoy the best of both worlds with a full-day adventure combining Peggy’s Cove’s rugged coastline and Lunenburg’s historic charm.
            </p>
            <p className="mt-3 font-semibold text-blue-700 group-hover:text-white">$200 / person</p>
            <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
              Book Now
            </button>
          </div>

          {/* Tour 4 */}
          <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl border hover:shadow-xl hover:bg-blue-600 transition-all duration-300">
            <img
              className="w-full h-48 object-cover rounded-xl"
              src="https://www.tripsavvy.com/thmb/Gsgnxl5Qou91tE3U_Z5-jeeIcEo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Manarola-Liguria-Coast-Italy-Sunset-5b5fcb3b46e0fb00828b35dd.jpg"
              alt="Custom Tours"
            />
            <h2 className="text-2xl font-semibold mt-4 text-gray-800 group-hover:text-white">
              Custom Tours
            </h2>
            <p className="mt-2 text-gray-500 group-hover:text-gray-200">
              Create your own adventure! Choose your destinations, timing, and preferences — perfect for families, couples, and small groups.
            </p>
            <p className="mt-3 font-semibold text-blue-700 group-hover:text-white">$175–$200 / person</p>
            <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
