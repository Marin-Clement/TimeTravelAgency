import { motion } from "motion/react";
import { DestinationCard } from "./DestinationCard";
import { DESTINATIONS, MORE_DESTINATIONS } from "../../constants/data";

export function DestinationGallery() {
    return (
        <section
            id="destinations"
            className="py-32 px-6 bg-gradient-to-b from-deep-space to-[#1a1510]"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight text-white">
                        Select Your{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-rich-brown">
                            Era
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Journey to meticulously recreated historical periods, each with
                        unparalleled authenticity and luxury.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {DESTINATIONS.map((destination, index) => (
                        <DestinationCard
                            key={destination.id}
                            destination={destination}
                            index={index}
                        />
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {MORE_DESTINATIONS.map((destination, index) => (
                        <DestinationCard
                            key={destination.id}
                            destination={destination}
                            index={index + 3} // Offset index for delay
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
