import React from "react";

const AboutUs = () => {
  return (
    <section id="AboutUs" className="w-full flex flex-col items-center justify-center py-16 px-6 bg-white">
      {/* Header */}
      <div className="max-w-4xl text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-gray-500 text-base leading-relaxed">
          As a Web Development Services we are committed to building custom web
          solutions that drive business success.
        </p>
      </div>

      {/* First Section */}
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 mb-16 items-center ">
        <img
          src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?cs=srgb&dl=boat-exotic-freedom-1371360.jpg&fm=jpg "
          alt="Team Working"
          className="rounded-2xl shadow-lg object-cover w-full h-full hover:opacity-70 transition-opacity duration-300" 
        />

        <div className="bg-gray-50 rounded-2xl p-8">

          <h3 className="text-2xl font-semibold text-blue-500 mb-4">
            Our Story
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Safi Seaside Tours, every journey begins with a passion for discovery and a deep love for Nova Scotia’s breathtaking coastal beauty.
            Founded by Asif Safi, an experienced and multilingual tour guide with over 15 years of international tourism experience, our goal is simple — to share the magic of Nova Scotia with travelers from all over the world in the most authentic way possible.

            After guiding visitors across Europe, the Middle East, and North America, Asif decided to make Halifax his home and create something special — a tour company that blends global experience with local warmth.
            From charming fishing villages to world-famous lighthouses, every tour we offer reflects our commitment to comfort, hospitality, and genuine storytelling.
          </p>
          <a
            href="#"
            className="text-indigo-600 font-medium hover:underline"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Second Section */}
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-gray-50 rounded-2xl p-8 order-2 lg:order-1">
          <h4 className="text-2xl font-semibold text-blue-500 uppercase mb-2">
            Our Mission
          </h4>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Empowering Memorable Journeys Across Nova Scotia
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Safi Seaside Tours, our mission is to create unforgettable travel experiences that connect people with the true beauty, culture, and warmth of Nova Scotia.
            We believe that every journey should be more than sightseeing — it should be a story worth sharing. Led by our founder Asif Safi, a multilingual guide with over 15 years of global tourism experience, we are dedicated to offering personalized, comfortable, and scenic tours that go beyond expectations.

            Our goal is to combine authentic local insight, professional service, and heartfelt hospitality — ensuring that every guest feels like family while exploring the breathtaking coastal charm of our province.
          </p>
          <ul type="none" className="list-disc list-inside text-gray-600 mb-4 space-y-2 text-xl">
            <li type="none">
              <strong>✨</strong>  “Travel with comfort. Explore with heart. Experience Nova Scotia with Safi.”
            </li>
          </ul>
          <a
            href="#"
            className="text-indigo-600 font-medium hover:underline"
          >
            Read More
          </a>
        </div>

        <img
          src="https://images.unsplash.com/photo-1597430379423-3b91d1539dbf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
          alt="Team Discussion"
          className="rounded-2xl shadow-lg object-cover w-full h-full order-1 lg:order-2 hover:opacity-70 transition-opacity duration-300"
        />
      </div>
    </section>
  );
};

export default AboutUs;
