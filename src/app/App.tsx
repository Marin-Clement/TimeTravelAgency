import { useState } from "react";
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
import { QuizModal } from "../features/quiz/QuizModal";
import { BookingForm } from "../features/booking/BookingForm";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="min-h-screen bg-deep-space text-white overflow-x-hidden">
      <Navbar onOpenQuiz={() => setIsQuizOpen(true)} />

      <main>
        <Hero onOpenQuiz={() => setIsQuizOpen(true)} />

        {/* Floating "Find Your Era" Button as a persistent CTA */}
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          onClick={() => setIsQuizOpen(true)}
          className="fixed bottom-8 left-8 z-40 px-6 py-3 bg-luxury-gold/20 backdrop-blur-md border border-luxury-gold text-luxury-gold rounded-full font-semibold hover:bg-luxury-gold hover:text-deep-space transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          Find Your Era
        </motion.button>

        <Stats />
        <Experience />
        <DestinationGallery />

        {/* Integrated Booking Form Section */}
        <section id="book" className="py-24 px-6 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto">
            <BookingForm />
          </div>
        </section>

        <Testimonials />
        <Pricing />
        <Newsletter />
      </main>

      <Footer />
      <ChatWidget />
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
}