import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Stats } from "../components/sections/Stats";
import { Experience } from "../components/sections/Experience";
import { DestinationGallery } from "../features/destinations/DestinationGallery";
import { Testimonials } from "../components/sections/Testimonials";
import { Pricing } from "../components/sections/Pricing";
import { Newsletter } from "../components/sections/Newsletter";
import { ChatWidget } from "../features/chat/ChatWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-deep-space text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Experience />
      <DestinationGallery />
      <Testimonials />
      <Pricing />
      <Newsletter />
      <Footer />
      <ChatWidget />
    </div>
  );
}