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
                    Rejoignez l'{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-rich-brown">
                        Élite Temporelle
                    </span>
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Soyez le premier à découvrir de nouvelles ères, des offres exclusives et des aperçus temporels.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                    <input
                        type="email"
                        placeholder="Entrez votre email"
                        className="flex-1 px-6 py-4 bg-[#1a1a1a] border border-luxury-gold/30 rounded-full focus:outline-none focus:border-luxury-gold transition-colors text-white placeholder-gray-500"
                    />
                    <button className="px-8 py-4 bg-gradient-to-r from-luxury-gold to-rich-brown text-deep-space rounded-full font-semibold hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                        S'abonner
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
