import { motion, useScroll, useTransform } from "motion/react";
import { Sparkles, ChevronRight } from "lucide-react";

interface HeroProps {
    onOpenQuiz?: () => void;
}

export function Hero({ onOpenQuiz }: HeroProps) {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 150]);
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Generate floating particles
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 20,
    }));

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                        type="video/mp4"
                    />
                    {/* Fallback for browsers that don't support video */}
                </video>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60"></div>
                {/* Gradient overlay from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent"></div>
            </div>

            {/* Animated Background Layer (on top of video) */}
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#1a1a1a]/40 via-transparent to-[#2a1810]/40">
                {/* Floating Particles */}
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-luxury-gold rounded-full opacity-60"
                        style={{
                            left: `${particle.left}%`,
                            top: "-10px",
                        }}
                        animate={{
                            y: ["0vh", "110vh"],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNkNGFmMzciIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] animate-[drift_30s_ease-in-out_infinite]"></div>
                </div>

                {/* Radial Gradient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-gold rounded-full blur-[150px] opacity-10"></div>
            </div>

            {/* Overlay Content */}
            <motion.div
                style={{ y: heroY, opacity: heroOpacity }}
                className="relative z-20 text-center px-6 max-w-6xl"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/30 rounded-full backdrop-blur-sm mb-8">
                        <Sparkles className="w-4 h-4 text-luxury-gold" />
                        <span className="text-sm text-luxury-gold tracking-wider">
                            Premium Temporal Expeditions
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tight leading-none text-white"
                >
                    History is{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-[#f4d03f] to-rich-brown animate-[shimmer_3s_ease-in-out_infinite]">
                        Waiting
                    </span>
                    .
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 tracking-wide max-w-4xl mx-auto leading-relaxed"
                >
                    Curated luxury expeditions to Earth's greatest eras.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={onOpenQuiz}
                        className="group relative px-10 py-4 bg-gradient-to-r from-luxury-gold to-rich-brown text-deep-space rounded-full text-lg tracking-wide overflow-hidden hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all duration-500 font-semibold cursor-pointer"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Find Your Era
                            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-rich-brown to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </button>

                    <button className="group px-10 py-4 border-2 border-luxury-gold text-luxury-gold rounded-full text-lg tracking-wide hover:bg-luxury-gold/10 transition-all duration-300 font-semibold cursor-pointer">
                        <span className="flex items-center gap-2">
                            Watch Demo
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-luxury-gold rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
