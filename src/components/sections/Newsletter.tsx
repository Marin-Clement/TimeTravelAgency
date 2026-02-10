import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";

export function Newsletter() {
    return (
        <section className="py-24 px-6 bg-deep-space relative overflow-hidden text-white">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-luxury-gold rounded-full blur-[200px] opacity-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center relative z-10"
            >
                <Mail className="w-16 h-16 text-luxury-gold mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl mb-6">
                    Join the{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-rich-brown">
                        Time Elite
                    </span>
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Be the first to discover new eras, exclusive offers, and temporal
                    insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-6 py-4 bg-[#1a1a1a] border border-luxury-gold/30 rounded-full focus:outline-none focus:border-luxury-gold transition-colors text-white placeholder-gray-500"
                    />
                    <button className="px-8 py-4 bg-gradient-to-r from-luxury-gold to-rich-brown text-deep-space rounded-full font-semibold hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                        Subscribe
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
