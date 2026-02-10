import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, X, MessageSquare, User } from "lucide-react";
import { useChat } from "../../hooks/useChat";

export function ChatWidget() {
    const { isOpen, toggleChat, messages, sendMessage, isTyping, quickActions } = useChat();
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const handleSend = () => {
        if (inputValue.trim()) {
            sendMessage(inputValue);
            setInputValue("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-deep-space border border-luxury-gold/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-luxury-gold/10 to-transparent border-b border-luxury-gold/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-luxury-gold flex items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-deep-space" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Aria</h3>
                                    <p className="text-xs text-luxury-gold">Chronoguide AI</p>
                                </div>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="p-1 text-gray-400 hover:text-white transition-colors"
                                aria-label="Close chat"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-luxury-gold/20 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === "user"
                                                ? "bg-luxury-gold text-deep-space rounded-tr-none"
                                                : "bg-[#1a1a1a] text-gray-200 border border-luxury-gold/10 rounded-tl-none"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-[#1a1a1a] border border-luxury-gold/10 rounded-2xl rounded-tl-none p-3 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                                        <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                                        <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        <div className="px-4 pb-2 flex flex-wrap gap-2">
                            {quickActions.map((action) => (
                                <button
                                    key={action.id}
                                    onClick={() => sendMessage(action.prompt)}
                                    className="px-3 py-1 bg-luxury-gold/5 border border-luxury-gold/20 rounded-full text-xs text-luxury-gold hover:bg-luxury-gold/10 transition-colors cursor-pointer"
                                >
                                    {action.label}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-luxury-gold/10 bg-[#0a0a0a]">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Posez votre question..."
                                    className="flex-1 bg-[#1a1a1a] border border-luxury-gold/20 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 transition-all placeholder-gray-500"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className="p-2 bg-luxury-gold text-deep-space rounded-full hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                        Besoin d'aide ?
                    </motion.div>
                )}

                {/* Pulsing Ring Effect */}
                <div className="absolute inset-0 rounded-full bg-luxury-gold animate-ping opacity-20"></div>
                <div className="absolute inset-0 rounded-full bg-luxury-gold opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500"></div>
            </button>
        </div>
    );
}
