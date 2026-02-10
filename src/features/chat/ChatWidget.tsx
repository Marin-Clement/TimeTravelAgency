import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { useChat } from "../../hooks/useChat";

export function ChatWidget() {
    const { isOpen, toggleChat } = useChat();

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                delay: 1.5,
                duration: 0.5,
                type: "spring",
            }}
            className="fixed bottom-8 right-8 z-50"
        >
            <button
                onClick={toggleChat}
                className="group relative w-16 h-16 bg-gradient-to-br from-luxury-gold to-rich-brown rounded-full shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:shadow-[0_0_50px_rgba(212,175,55,0.8)] transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
                <Sparkles className="w-7 h-7 text-deep-space group-hover:rotate-12 transition-transform duration-300" />

                {/* Notification Bubble */}
                {!isOpen && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2, duration: 0.3 }}
                        className="absolute -top-2 -right-2 bg-deep-space text-luxury-gold text-xs px-3 py-1 rounded-full border border-luxury-gold whitespace-nowrap shadow-lg"
                    >
                        Need guidance?
                    </motion.div>
                )}

                {/* Pulsing Ring Effect */}
                <div className="absolute inset-0 rounded-full bg-luxury-gold animate-ping opacity-20"></div>
                <div className="absolute inset-0 rounded-full bg-luxury-gold opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500"></div>
            </button>

            {/* Chat Window Implementation would go here - keeping it simple as per original prototype,
          but now the state is managed in the hook if we want to expand it. */}
        </motion.div>
    );
}
