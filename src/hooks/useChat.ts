import { useState } from "react";
import { ChatMessage } from "../types";

export function useChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: "1",
            text: "Welcome to TimeTravel Agency! How can I assist you with your temporal journey today?",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);

    const toggleChat = () => setIsOpen((prev) => !prev);

    const sendMessage = (text: string) => {
        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            text,
            sender: "user",
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMsg]);

        // Simulate bot response
        setTimeout(() => {
            const botMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                text: "That sounds fascinating! Our specialists can help arrange that. Would you like to see available dates?",
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMsg]);
        }, 1000);
    };

    return { isOpen, toggleChat, messages, sendMessage };
}
