import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../../constants/data";

export function Testimonials() {
    return (
        <section className="py-32 px-6 bg-deep-space relative overflow-hidden text-white">
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-luxury-gold rounded-full blur-[200px] opacity-5"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl mb-6">
                        Traveler{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-rich-brown">
                            Stories
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Hear from those who've experienced history firsthand
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                            className="p-8 bg-gradient-to-br from-[#1a1a1a] to-deep-space border border-luxury-gold/20 rounded-2xl hover:border-luxury-gold/40 transition-all duration-300"
                        >
                            <div className="flex gap-1 mb-6">
                                {Array.from({
                                    length: testimonial.rating,
                                }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-luxury-gold text-luxury-gold"
                                    />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed italic">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxury-gold to-rich-brown flex items-center justify-center text-deep-space font-semibold">
                                    {testimonial.author[0]}
                                </div>
                                <div>
                                    <div className="font-semibold">{testimonial.author}</div>
                                    <div className="text-sm text-gray-500">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
