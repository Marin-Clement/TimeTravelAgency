import { motion } from "motion/react";
import { PRICING_TIERS } from "../../constants/data";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32 px-6 bg-gradient-to-b from-deep-space to-[#1a1510] text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6">
            Choisissez Votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-rich-brown">
              Voyage
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sélectionnez le forfait parfait pour votre aventure temporelle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className={`flex flex-col justify-between relative p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${
                tier.popular
                  ? "bg-gradient-to-br from-luxury-gold/10 to-rich-brown/10 border-luxury-gold shadow-[0_0_50px_rgba(212,175,55,0.3)]"
                  : "bg-[#1a1a1a] border-luxury-gold/20 hover:border-luxury-gold/40"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-luxury-gold to-rich-brown text-deep-space rounded-full text-sm font-semibold">
                  Le Plus Populaire
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl mb-2">{tier.name}</h3>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-rich-brown mb-2">
                  {tier.price}
                </div>
                <div className="text-gray-400 text-sm">{tier.period}</div>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-luxury-gold"></div>
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`block w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  tier.popular
                    ? "bg-gradient-to-r from-luxury-gold to-rich-brown text-deep-space hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] p-4"
                    : "border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-deep-space p-4"
                }`}
              >
                Commencer le Voyage
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
