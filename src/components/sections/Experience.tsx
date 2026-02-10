import { motion } from "motion/react";
import { FEATURES } from "../../constants/data";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-6 bg-deep-space relative overflow-hidden text-white"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-luxury-gold rounded-full blur-[200px] opacity-5"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-rich-brown">
            The Ultimate Immersive Experience
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-16 max-w-4xl mx-auto">
            Our voyages transcend traditional tourism. Guided by
            state-of-the-art quantum AI and temporal synchronization technology,
            each journey is meticulously crafted to immerse you in the authentic
            sights, sounds, and sensations of history's most magnificent
            moments.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="group relative p-8 bg-gradient-to-br from-[#1a1a1a] to-deep-space border border-luxury-gold/20 rounded-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold rounded-full blur-[80px] opacity-0"></div>
                <feature.icon className="w-12 h-12 text-luxury-gold mb-6" />
                <h3 className="text-2xl mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
