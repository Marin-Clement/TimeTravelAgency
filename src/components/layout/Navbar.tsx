import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface NavbarProps {
  onOpenQuiz?: () => void;
}

export function Navbar({ onOpenQuiz }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY < 50) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-deep-space/95 backdrop-blur-md border-b border-luxury-gold/20 shadow-[0_4px_20px_rgba(212,175,55,0.1)]"
          : ""
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <a href="/" className="text-xl tracking-wider text-white">
            TimeTravel Agency
          </a>
        </motion.div>
        <div className="flex items-center gap-8">
          <a
            href="#destinations"
            className="hidden md:block text-sm tracking-wide text-white hover:text-luxury-gold transition-colors"
          >
            Destinations
          </a>
          <a
            href="#experience"
            className="hidden md:block text-sm tracking-wide text-white hover:text-luxury-gold transition-colors"
          >
            L'Expérience
          </a>
          <a
            href="#pricing"
            className="hidden md:block text-sm tracking-wide text-white hover:text-luxury-gold transition-colors"
          >
            Tarifs
          </a>
          <button
            onClick={onOpenQuiz}
            className="px-6 py-2 bg-gradient-to-r from-luxury-gold to-rich-brown text-deep-space rounded-full text-sm tracking-wide hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300 font-semibold"
          >
            Trouvez votre Époque
          </button>
        </div>
      </nav>
    </header>
  );
}
