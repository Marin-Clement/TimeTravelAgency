import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calendar as CalendarIcon, Users, Shield, Check, Loader2, Mail, Clock } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { DESTINATIONS } from "../../constants/data";
import { useTimeTravel } from "../../hooks/useTimeTravel";
import { Calendar } from "../../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import { cn } from "../../components/ui/utils";

interface BookingFormProps {
    selectedDestinationId?: string;
}

export function BookingForm({ selectedDestinationId }: BookingFormProps) {
    const { bookingStatus, submitBooking } = useTimeTravel();
    const [formData, setFormData] = useState<{
        destinationId: string;
        email: string;
        startDate: Date | undefined;
        duration: number;
        travelers: number;
        insurance: boolean;
    }>({
        destinationId: selectedDestinationId || DESTINATIONS[0].id,
        email: "",
        startDate: undefined,
        duration: 3,
        travelers: 1,
        insurance: false,
    });
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    useEffect(() => {
        if (selectedDestinationId) {
            setFormData(prev => ({ ...prev, destinationId: selectedDestinationId }));
        }
    }, [selectedDestinationId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await submitBooking(formData);
    };

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
                <h3 className="text-3xl text-white font-serif mb-4">Voyage Confirmé</h3>
                <p className="text-gray-300 mb-8">
                    Votre passeport temporel est en cours de création. Un concierge vous contactera sous peu pour finaliser votre itinéraire.
                </p>
                <div className="p-4 bg-[#1a1a1a] rounded-xl border border-luxury-gold/10 text-sm text-gray-400">
                    Référence : #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </div>
            </motion.div>
        );
    }

    return (
        <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-luxury-gold/20 relative overflow-hidden">
            {bookingStatus === "loading" && (
                <div className="absolute inset-0 z-10 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center">
                    <Loader2 className="w-12 h-12 text-luxury-gold animate-spin mb-4" />
                    <p className="text-luxury-gold tracking-widest text-sm uppercase">Génération du Passeport Temporel...</p>
                </div>
            )}

            <h3 className="text-2xl text-white mb-6 font-serif">Commencez votre Expédition</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Destination */}
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 uppercase tracking-wide">Destination</label>
                    <div className="relative">
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
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 uppercase tracking-wide">Email</label>
                    <div className="relative">
                        <input
                            type="email"
                            required
                            placeholder="votre@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-deep-space border border-luxury-gold/30 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-gray-600"
                        />
                        <Mail className="w-4 h-4 text-luxury-gold absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                </div>

                {/* Date & Duration Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 flex flex-col">
                        <label className="text-sm text-gray-400 uppercase tracking-wide">Date de départ</label>
                        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                            <PopoverTrigger asChild>
                                <button
                                    className={cn(
                                        "w-full bg-deep-space border border-luxury-gold/30 rounded-xl pl-10 pr-4 py-3 text-left focus:outline-none focus:border-luxury-gold transition-colors flex items-center relative",
                                        !formData.startDate && "text-gray-500"
                                    )}
                                >
                                    {formData.startDate ? format(formData.startDate, "PPP", { locale: fr }) : <span>Choisir...</span>}
                                    <CalendarIcon className="w-4 h-4 text-luxury-gold absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-deep-space border-luxury-gold/30 text-white" align="start">
                                <Calendar
                                    mode="single"
                                    selected={formData.startDate}
                                    onSelect={(date) => {
                                        setFormData({ ...formData, startDate: date });
                                        setIsCalendarOpen(false);
                                    }}
                                    initialFocus
                                    className="p-3 pointer-events-auto"
                                    classNames={{
                                        day_selected: "bg-luxury-gold text-deep-space hover:bg-luxury-gold hover:text-deep-space focus:bg-luxury-gold focus:text-deep-space",
                                        day_today: "bg-luxury-gold/20 text-white",
                                        day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-luxury-gold/20 rounded-md cursor-pointer",
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 uppercase tracking-wide">Durée (Jours)</label>
                        <div className="relative">
                            <input
                                type="number"
                                min="1"
                                max="30"
                                value={formData.duration}
                                onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                                className="w-full bg-deep-space border border-luxury-gold/30 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors"
                            />
                            <Clock className="w-4 h-4 text-luxury-gold absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Travelers */}
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 uppercase tracking-wide">Voyageurs</label>
                    <div className="relative">
                        <input
                            type="number"
                            min="1"
                            max="8"
                            value={formData.travelers}
                            onChange={(e) => setFormData({ ...formData, travelers: parseInt(e.target.value) })}
                            className="w-full bg-deep-space border border-luxury-gold/30 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors"
                        />
                        <Users className="w-4 h-4 text-luxury-gold absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
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
                            Assurance Temporelle (+15%)
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Couvre la correction de paradoxes et le retour rapide.</p>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-luxury-gold to-rich-brown text-deep-space font-bold rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
                >
                    Demander une Réservation
                </button>
            </form>
        </div>
    );
}
