import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { ImageWithFallback } from "../../components/ui/ImageWithFallback";
import { Destination } from "../../types";

interface DestinationCardProps {
    destination: Destination;
    index: number;
}

export function DestinationCard({ destination, index }: DestinationCardProps) {
    const getTagColor = (color: string) => {
        switch (color) {
            case "gold":
                return "bg-luxury-gold";
            case "bronze":
                return "bg-rich-brown";
            default:
                return "bg-luxury-gold"; // Default fallback
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl bg-[#1a1a1a] border border-luxury-gold/20 hover:border-luxury-gold/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:-translate-y-2 h-full flex flex-col"
        >
            <div className="relative h-96 overflow-hidden shrink-0">
                <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
                {destination.tag && (
                    <div
                        className={`absolute top-4 right-4 px-3 py-1 ${getTagColor(
                            destination.tagColor
                        )} text-deep-space rounded-full text-xs font-semibold`}
                    >
                        {destination.tag}
                    </div>
                )}
            </div>
            <div className="p-8 flex flex-col flex-1">
                <h3 className="text-3xl mb-3 text-white">{destination.name}</h3>
                <p className="text-gray-400 mb-6 text-base tracking-wide leading-relaxed flex-1">
                    {destination.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {destination.location}
                        </span>
                        <span>{destination.duration}</span>
                    </div>
                    <div className="text-luxury-gold font-semibold">
                        {destination.price}
                    </div>
                </div>
                <button className="w-full py-3 border-2 border-luxury-gold text-luxury-gold rounded-full hover:bg-luxury-gold hover:text-deep-space transition-all duration-300 tracking-wide font-semibold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    Discover Era
                </button>
            </div>
        </motion.div>
    );
}
