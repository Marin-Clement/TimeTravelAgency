import { useState } from "react";
import { ChatMessage } from "../types";

export interface QuickAction {
    id: string;
    label: string;
    prompt: string;
}

export function useChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: "1",
            text: "Bonjour ! Je suis Aria, votre chronoguide personnelle ✨ Posez-moi vos questions sur les voyages temporels !",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);

    const quickActions: QuickAction[] = [
        { id: "1", label: "🗼 Paris 1889", prompt: "Parle-moi de la destination Paris 1889" },
        { id: "2", label: "🦕 Le Crétacé", prompt: "Le Crétacé est-il dangereux ? Combien ça coûte ?" },
        { id: "3", label: "🎨 Florence 1504", prompt: "Que puis-je vivre à Florence en 1504 ?" },
        { id: "4", label: "💰 Tarifs", prompt: "Quels sont vos forfaits et tarifs ?" },
        { id: "5", label: "❓ FAQ", prompt: "Quelles sont les questions fréquentes sur le voyage temporel ?" },
    ];

    const toggleChat = () => setIsOpen((prev) => !prev);

    const sendMessage = async (text: string) => {
        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            text,
            sender: "user",
            timestamp: new Date(),
        };

        const updatedMessages = [...messages, userMsg];
        setMessages(updatedMessages);
        setIsTyping(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: updatedMessages }),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json();

            const botMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                text: data.reply,
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMsg]);
        } catch (error) {
            console.error("Chat error:", error);
            const errorMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                text: "Oups, une perturbation temporelle ! 🌀 Réessayez dans un instant...",
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMsg]);
        } finally {
            setIsTyping(false);
        }
    };

    return { isOpen, toggleChat, messages, sendMessage, isTyping, quickActions };
}
