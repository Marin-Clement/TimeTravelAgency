import { LucideIcon } from "lucide-react";

export interface Destination {
    id: string;
    name: string;
    description: string;
    location: string;
    duration: string;
    price: string;
    image: string;
    tag: string;
    tagColor: "gold" | "bronze" | "default";
}

export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    rating: number;
}

export interface PricingTier {
    id: string;
    name: string;
    price: string;
    period: string;
    features: string[];
    popular: boolean;
}

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface ChatMessage {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}
