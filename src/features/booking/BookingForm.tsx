import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Users, Shield, Check, Loader2 } from "lucide-react";
import { DESTINATIONS } from "../../constants/data";
import { useTimeTravel } from "../../hooks/useTimeTravel";

export function BookingForm() {
    const { bookingStatus, submitBooking } = useTimeTravel();
    const [formData, setFormData] = useState({
        destinationId: DESTINATIONS[0].id,
        date: "",
        travelers: 1,
        insurance: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await submitBooking(formData);
    };

    const maxDate = new Date().toISOString().split("T")[0]; // Can't book future dates (relative to today)

    if (bookingStatus === "confirmed") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-deep-space p-8 rounded-3xl border border-luxury-gold text-center"
            >
                <div className="w-20 h-20 mx-auto bg-luxury-gold/20 rounded-full flex items-center justify-center mb-6">
                    <Check className="w-10 h-10 text-luxury-gold" />
                </div>
                <h3 className="text-3xl text-white font-serif mb-4">Journey Confirmed</h3>
                <p className="text-gray-300 mb-8">
                    Your temporal passport is being generated. A concierge will contact you shortly to finalize your itinerary.
                </p>
                <div className="p-4 bg-[#1a1a1a] rounded-xl border border-luxury-gold/10 text-sm text-gray-400">
                    Reference ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </div>
            </motion.div>
        );
    }

    return (
        <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-luxury-gold/20 relative overflow-hidden">
            {bookingStatus === "loading" && (
                <div className="absolute inset-0 z-10 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center">
                    <Loader2 className="w-12 h-12 text-luxury-gold animate-spin mb-4" />
                    <p className="text-luxury-gold tracking-widest text-sm uppercase">Generating Temporal Passport...</p>
                </div>
            )}

            <h3 className="text-2xl text-white mb-6 font-serif">Begin Your Expedition</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Destination */}
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 uppercase tracking-wide">Destination</label>
                    <select
                        value={formData.destinationId}
                        onChange={(e) => setFormData({ ...formData, destinationId: e.target.value })}
                        className="w-full bg-deep-space border border-luxury-gold/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors appearance-none cursor-pointer"
                    >
                        {DESTINATIONS.map(d => (
                            <option key={d.id} value={d.id}>{d.name}</option>
                        ))}
                    </select>
                </div>

                {/* Date & Travelers Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 uppercase tracking-wide">Target Date</label>
                        <div className="relative">
                            <input
                                type="date"
                                max={maxDate}
                                required
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                className="w-full bg-deep-space border border-luxury-gold/30 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors"
                            />
                            <Calendar className="w-4 h-4 text-luxury-gold absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 uppercase tracking-wide">Travelers</label>
                        <div className="relative">
                            <input
                                type="number"
                                min="1"
                                max="4"
                                value={formData.travelers}
                                onChange={(e) => setFormData({ ...formData, travelers: parseInt(e.target.value) })}
                                className="w-full bg-deep-space border border-luxury-gold/30 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors"
                            />
                            <Users className="w-4 h-4 text-luxury-gold absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Insurance Toggle */}
                <div
                    onClick={() => setFormData({ ...formData, insurance: !formData.insurance })}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer ${formData.insurance
                            ? "bg-luxury-gold/10 border-luxury-gold"
                            : "bg-deep-space border-luxury-gold/20 hover:border-luxury-gold/50"
                        }`}
                >
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${formData.insurance ? "bg-luxury-gold border-luxury-gold" : "border-gray-500"
                        }`}>
                        {formData.insurance && <Check className="w-3 h-3 text-deep-space" />}
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 text-white font-medium">
                            <Shield className="w-4 h-4 text-luxury-gold" />
                            Temporal Insurance (+15%)
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Covers paradox correction & rapid return.</p>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-luxury-gold to-rich-brown text-deep-space font-bold rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
                >
                    Request Reservation
                </button>
            </form>
        </div>
    );
}
