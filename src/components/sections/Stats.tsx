import { motion } from "motion/react";
import { STATS } from "../../constants/data";

export function Stats() {
    return (
        <section className="relative py-20 bg-gradient-to-b from-deep-space to-[#1a1510] border-y border-luxury-gold/10 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-luxury-gold/20 to-rich-brown/20 border border-luxury-gold/30 mb-4">
                                <stat.icon className="w-8 h-8 text-luxury-gold" />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-rich-brown mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 text-sm tracking-wide">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
