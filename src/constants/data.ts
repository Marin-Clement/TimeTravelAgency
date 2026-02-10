import { Shield, Zap, Calendar, Users, Globe, Award, TrendingUp } from "lucide-react";
import { Destination, Testimonial, PricingTier, Feature } from "../types";

export const DESTINATIONS: Destination[] = [
    {
        id: "paris-1889",
        name: "Paris 1889",
        description: "La Belle Époque & l'Exposition Universelle. Assistez à l'inauguration de la Tour Eiffel et découvrez la haute société parisienne.",
        location: "France",
        duration: "7 Jours",
        price: "À partir de 12 500 $",
        image: "/img/paris-1889.jpg",
        tag: "Populaire",
        tagColor: "gold"
    },
    {
        id: "cretaceous",
        name: "Le Crétacé",
        description: "-65M d'années. Les géants marchent sur Terre. Observez les majestueux dinosaures dans leur habitat naturel depuis des pods de luxe sécurisés.",
        location: "Préhistoire",
        duration: "5 Jours",
        price: "À partir de 18 900 $",
        image: "/img/cretaceous.jpg",
        tag: "Aventure",
        tagColor: "bronze"
    },
    {
        id: "florence-1504",
        name: "Florence 1504",
        description: "Le Cœur de la Renaissance. Rencontrez Michel-Ange et Léonard de Vinci, assistez à l'écriture de l'histoire de l'art.",
        location: "Italie",
        duration: "10 Jours",
        price: "À partir de 14 750 $",
        image: "/img/florence-1504.jpg",
        tag: "Culturel",
        tagColor: "gold"
    }
];

export const MORE_DESTINATIONS: Destination[] = [
    {
        id: "rome-44bc",
        name: "Rome Antique 44 av. J.-C.",
        description: "Vivez la gloire de l'Empire Romain à son apogée.",
        location: "Italie",
        duration: "5 Jours", // inferred
        price: "À partir de 16 200 $",
        image: "https://images.unsplash.com/photo-1649754377366-1e81d15164e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwUm9tZSUyMGNvbG9zc2V1bSUyMGhpc3RvcmljYWx8ZW58MXx8fHwxNzcwNzEyODg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        tag: "",
        tagColor: "default"
    },
    {
        id: "egypt-2500bc",
        name: "Égypte Ancienne 2500 av. J.-C.",
        description: "Assistez à la construction des Grandes Pyramides.",
        location: "Égypte",
        duration: "7 Jours", // inferred
        price: "À partir de 19 500 $",
        image: "https://images.unsplash.com/photo-1758546705512-2071bf8dc17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFZ3lwdGlhbiUyMHB5cmFtaWRzJTIwYW5jaWVudCUyMGNpdmlsaXphdGlvbnxlbnwxfHx8fDE3NzA3MTI4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        tag: "",
        tagColor: "default"
    }
]

export const TESTIMONIALS: Testimonial[] = [
    {
        id: "t1",
        quote: "Marcher dans la Florence de la Renaissance dépassait mes rêves les plus fous. J'ai vu Michel-Ange travailler sur David. Absolument époustouflant.",
        author: "Dr. Sarah Chen",
        role: "Historienne de l'Art",
        rating: 5,
    },
    {
        id: "t2",
        quote: "L'expédition au Crétacé a changé ma vision de la vie. Voir un Tyrannosaure dans la nature—aucun mot ne peut le décrire.",
        author: "Marcus Rodriguez",
        role: "Photographe Animalier",
        rating: 5,
    },
    {
        id: "t3",
        quote: "Paris 1889 était magique. Le souci du détail, les guides, la technologie—absolument parfait. Vaut chaque centime.",
        author: "Eleanor Whitmore",
        role: "Journaliste Voyage",
        rating: 5,
    },
];

export const PRICING_TIERS: PricingTier[] = [
    {
        id: "explorer",
        name: "Explorateur",
        price: "9 999 $",
        period: "Expédition de 3 jours",
        features: [
            "Une destination historique",
            "Suite temporelle standard",
            "Guide IA inclus",
            "Assurance sécurité",
            "Documentation photo",
        ],
        popular: false,
    },
    {
        id: "connoisseur",
        name: "Expert",
        price: "24 999 $",
        period: "Expédition de 7 jours",
        features: [
            "Deux destinations historiques",
            "Suite temporelle de luxe",
            "Guide historien expert",
            "Pack sécurité premium",
            "Documentation vidéo HD",
            "Concierge temporel 24/7",
        ],
        popular: true,
    },
    {
        id: "legacy",
        name: "Prestige",
        price: "59 999 $",
        period: "Expédition de 14 jours",
        features: [
            "Destinations illimitées",
            "Suite temporelle présidentielle",
            "Équipe d'historiens personnelle",
            "Pack sécurité ultime",
            "Enregistrement immersif 4K",
            "Concierge 'Gants Blancs'",
            "Itinéraire sur mesure",
        ],
        popular: false,
    },
];

export const FEATURES: Feature[] = [
    {
        icon: Shield,
        title: "Sécurité Absolue",
        description: "Des boucliers quantiques avancés assurent une stabilité temporelle complète et la protection des voyageurs.",
    },
    {
        icon: Zap,
        title: "Traduction Instantanée",
        description: "L'IA neurale traduit toute langue historique en temps réel, préservant des interactions authentiques.",
    },
    {
        icon: Calendar,
        title: "Durée Flexible",
        description: "Choisissez de quelques heures à plusieurs semaines—vivez le temps à votre rythme sans vieillir.",
    },
];

export const STATS = [
    {
        icon: Users,
        value: "10K+",
        label: "Voyageurs Temporels",
    },
    {
        icon: Globe,
        value: "50+",
        label: "Époques Historiques",
    },
    {
        icon: Award,
        value: "98%",
        label: "Taux de Satisfaction",
    },
    {
        icon: TrendingUp,
        value: "4.9★",
        label: "Note Moyenne",
    },
];
