import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import AboutSection from "./Components/About.jsx";
import ToursSection from "./Components/Tours.jsx";
import ContactSection from "./Components/Contact.jsx";
import Footer from "./Components/footer.jsx";

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <AboutSection />
      <ToursSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
