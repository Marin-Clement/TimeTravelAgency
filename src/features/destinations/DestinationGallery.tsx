import { motion } from "motion/react";
import { DestinationCard } from "./DestinationCard";
import { DESTINATIONS, MORE_DESTINATIONS } from "../../constants/data";

interface DestinationGalleryProps {
    onSelectDestination?: (destinationId: string) => void;
}

export function DestinationGallery({ onSelectDestination }: DestinationGalleryProps) {
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
                        Sélectionnez Votre{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-rich-brown">
                            Époque
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Voyagez vers des périodes historiques méticuleusement recréées, chacune avec une authenticité et un luxe inégalés.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {DESTINATIONS.map((destination, index) => (
                        <DestinationCard
                            key={destination.id}
                            destination={destination}
                            index={index}
                            onSelect={onSelectDestination}
                        />
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {MORE_DESTINATIONS.map((destination, index) => (
                        <DestinationCard
                            key={destination.id}
                            destination={destination}
                            index={index + 3}
                            onSelect={onSelectDestination}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
