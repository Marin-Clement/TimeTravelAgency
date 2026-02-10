import { useState, useEffect } from "react";
import { ChatMessage } from "../types";

export interface QuickAction {
    id: string;
    label: string;
    prompt: string;
}

const ARIA_PERSONA = `You are Aria, a professional and enthusiastic chronoguide for TimeTravel Agency. Your tone is luxury-oriented and knowledgeable.
You have expertise in:
- Paris 1889: The Belle Époque, Eiffel Tower, World's Fair.
- The Cretaceous: -65M years, dinosaurs, raw nature, safety protocols (quantum shields).
- Florence 1504: Renaissance art, Michelangelo, Da Vinci.
Keep responses concise (under 200 characters) and inviting.`;

export function useChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: "1",
            text: "Bonjour! I am Aria, your personal chronoguide. Which era calls to you today?",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);

    const quickActions: QuickAction[] = [
        { id: "1", label: "Is the Cretaceous safe?", prompt: "Is the Cretaceous period safe for travel?" },
        { id: "2", label: "Tell me about Paris 1889", prompt: "What can I experience in Paris 1889?" },
        { id: "3", label: "Meet Leonardo da Vinci", prompt: "Can I meet Leonardo da Vinci in Florence?" },
    ];

    const toggleChat = () => setIsOpen((prev) => !prev);

    const getBotResponse = (text: string): string => {
        const lowerText = text.toLowerCase();
        if (lowerText.includes("paris") || lowerText.includes("eiffel")) {
            return "Paris 1889 is absolutely magical! You can witness the Eiffel Tower's grand opening and sip champagne at the World's Fair.";
        }
        if (lowerText.includes("cretaceous") || lowerText.includes("dinosaur") || lowerText.includes("safe")) {
            return "The Cretaceous is wild but perfectly safe. Our quantum shields provide 100% protection while you watch T-Rexes hunt.";
        }
        if (lowerText.includes("florence") || lowerText.includes("davinci") || lowerText.includes("leonardo")) {
            return "Florence 1504 is the cradle of genius. You can watch Michelangelo sculpt or discuss sketches with Leonardo himself.";
        }
        return "That is a fascinating choice! Our timeline specialists can arrange almost anything. Shall we look at the booking options?";
    };

    const sendMessage = (text: string) => {
        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            text,
            sender: "user",
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMsg]);
        setIsTyping(true);

        // Simulate network delay and "typing"
        setTimeout(() => {
            const botResponse = getBotResponse(text);
            const botMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return { isOpen, toggleChat, messages, sendMessage, isTyping, quickActions };
}
