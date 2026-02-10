import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { useScrollPosition } from "../../hooks/useScrollPosition";

interface NavbarProps {
    onOpenQuiz?: () => void;
}

export function Navbar({ onOpenQuiz }: NavbarProps) {
    const scrolled = useScrollPosition(50);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-deep-space/95 backdrop-blur-md border-b border-luxury-gold/20 shadow-[0_4px_20px_rgba(212,175,55,0.1)]"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                >
                    <Clock className="w-6 h-6 text-luxury-gold" />
                    <span className="text-xl tracking-wider text-white">
                        TimeTravel Agency
                    </span>
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
                        The Experience
                    </a>
                    <a
                        href="#pricing"
                        className="hidden md:block text-sm tracking-wide text-white hover:text-luxury-gold transition-colors"
                    >
                        Pricing
                    </a>
                    <button
                        onClick={onOpenQuiz}
                        className="px-6 py-2 bg-gradient-to-r from-luxury-gold to-rich-brown text-deep-space rounded-full text-sm tracking-wide hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300 font-semibold cursor-pointer"
                    >
                        Find Your Era
                    </button>
                </div>
            </nav>
        </header>
    );
}
