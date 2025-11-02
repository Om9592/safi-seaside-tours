import tourImage from "../assets/8_1sasa11.jpg";
export default function Navbar() {
  return (
    <div className="container min-w-80 ">
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        
        <h1 className="text-2xl font-bold text-blue-700 flex items-center">
          <img src={tourImage} alt="Safi Seaside Tours Logo" className="h-12 w-auto object-contain rounded-md" />Safi Seaside Tours</h1>
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li><a href="#hero" className="hover:text-blue-700">Home</a></li>
          <li><a href="#AboutUs" className="hover:text-blue-700">About</a></li>
          <li><a href="#Tours" className="hover:text-blue-700">Tours</a></li>
          <li><a href="#contact" className="hover:text-blue-700">Contact</a></li>
        </ul>
      </div>
    </nav>
     </div>
  );
}
