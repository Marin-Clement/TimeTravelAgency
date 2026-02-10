import { Shield, Zap, Calendar, Users, Globe, Award, TrendingUp } from "lucide-react";
import { Destination, Testimonial, PricingTier, Feature } from "../types";

export const DESTINATIONS: Destination[] = [
    {
        id: "paris-1889",
        name: "Paris 1889",
        description: "The Belle Époque & World's Fair. Witness the unveiling of the Eiffel Tower and experience Parisian high society.",
        location: "France",
        duration: "7 Days",
        price: "From $12,500",
        image: "https://images.unsplash.com/photo-1632749696219-4c3ba70af799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFaWZmZWwlMjBUb3dlciUyMDE4ODklMjB2aW50YWdlfGVufDF8fHx8MTc3MDcxMjQzOXww&ixlib=rb-4.1.0&q=80&w=1080",
        tag: "Popular",
        tagColor: "gold"
    },
    {
        id: "cretaceous",
        name: "The Cretaceous",
        description: "-65M Years Ago. Giants walk the Earth. Observe majestic dinosaurs in their natural habitat from safe luxury pods.",
        location: "Prehistoric",
        duration: "5 Days",
        price: "From $18,900",
        image: "https://images.unsplash.com/photo-1761549148556-a2cf3307f8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5vc2F1ciUyMHByZWhpc3RvcmljJTIwanVuZ2xlfGVufDF8fHx8MTc3MDcxMjQ0MHww&ixlib=rb-4.1.0&q=80&w=1080",
        tag: "Adventure",
        tagColor: "bronze"
    },
    {
        id: "florence-1504",
        name: "Florence 1504",
        description: "The Heart of the Renaissance. Meet Michelangelo and Da Vinci, witness art history in the making.",
        location: "Italy",
        duration: "10 Days",
        price: "From $14,750",
        image: "https://images.unsplash.com/photo-1685872438049-0d00dded97d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGbG9yZW5jZSUyMFJlbmFpc3NhbmNlJTIwYXJjaGl0ZWN0dXJlJTIwYXJ0fGVufDF8fHx8MTc3MDcxMjQ0MHww&ixlib=rb-4.1.0&q=80&w=1080",
        tag: "Cultural",
        tagColor: "gold"
    }
];

export const MORE_DESTINATIONS: Destination[] = [
    {
        id: "rome-44bc",
        name: "Ancient Rome 44 BC",
        description: "Experience the glory of the Roman Empire at its peak.",
        location: "Italy",
        duration: "5 Days", // inferred
        price: "From $16,200",
        image: "https://images.unsplash.com/photo-1649754377366-1e81d15164e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwUm9tZSUyMGNvbG9zc2V1bSUyMGhpc3RvcmljYWx8ZW58MXx8fHwxNzcwNzEyODg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        tag: "",
        tagColor: "default"
    },
    {
        id: "egypt-2500bc",
        name: "Ancient Egypt 2500 BC",
        description: "Witness the construction of the Great Pyramids.",
        location: "Egypt",
        duration: "7 Days", // inferred
        price: "From $19,500",
        image: "https://images.unsplash.com/photo-1758546705512-2071bf8dc17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFZ3lwdGlhbiUyMHB5cmFtaWRzJTIwYW5jaWVudCUyMGNpdmlsaXphdGlvbnxlbnwxfHx8fDE3NzA3MTI4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        tag: "",
        tagColor: "default"
    }
]

export const TESTIMONIALS: Testimonial[] = [
    {
        id: "t1",
        quote: "Walking through Renaissance Florence was beyond my wildest dreams. I watched Michelangelo work on David. Utterly breathtaking.",
        author: "Dr. Sarah Chen",
        role: "Art Historian",
        rating: 5,
    },
    {
        id: "t2",
        quote: "The Cretaceous expedition changed my perspective on life. Seeing a Tyrannosaurus in the wild—no words can describe it.",
        author: "Marcus Rodriguez",
        role: "Wildlife Photographer",
        rating: 5,
    },
    {
        id: "t3",
        quote: "Paris 1889 was magical. The attention to detail, the guides, the technology—absolutely flawless. Worth every penny.",
        author: "Eleanor Whitmore",
        role: "Travel Journalist",
        rating: 5,
    },
];

export const PRICING_TIERS: PricingTier[] = [
    {
        id: "explorer",
        name: "Explorer",
        price: "$9,999",
        period: "3-day expedition",
        features: [
            "One historical destination",
            "Standard temporal suite",
            "AI guide included",
            "Safety insurance",
            "Photo documentation",
        ],
        popular: false,
    },
    {
        id: "connoisseur",
        name: "Connoisseur",
        price: "$24,999",
        period: "7-day expedition",
        features: [
            "Two historical destinations",
            "Luxury temporal suite",
            "Expert historian guide",
            "Premium safety package",
            "HD video documentation",
            "Temporal concierge 24/7",
        ],
        popular: true,
    },
    {
        id: "legacy",
        name: "Legacy",
        price: "$59,999",
        period: "14-day expedition",
        features: [
            "Unlimited destinations",
            "Presidential temporal suite",
            "Personal historian team",
            "Ultimate safety package",
            "4K immersive recording",
            "White-glove concierge",
            "Custom itinerary design",
        ],
        popular: false,
    },
];

export const FEATURES: Feature[] = [
    {
        icon: Shield,
        title: "Absolute Safety",
        description: "Advanced quantum shields ensure complete temporal stability and traveler protection.",
    },
    {
        icon: Zap,
        title: "Instant Translation",
        description: "Neural AI translates any historical language in real-time, preserving authentic interactions.",
    },
    {
        icon: Calendar,
        title: "Flexible Duration",
        description: "Choose from hours to weeks—experience time at your own pace with zero aging.",
    },
];

export const STATS = [
    {
        icon: Users,
        value: "10K+",
        label: "Time Travelers",
    },
    {
        icon: Globe,
        value: "50+",
        label: "Historical Eras",
    },
    {
        icon: Award,
        value: "98%",
        label: "Satisfaction Rate",
    },
    {
        icon: TrendingUp,
        value: "4.9★",
        label: "Average Rating",
    },
];
