import { useState } from "react";
import { DESTINATIONS } from "../constants/data";

interface QuizAnswer {
    questionId: number;
    selectedOption: string;
}

interface BookingData {
    destinationId: string;
    date: string; // ISO string
    travelers: number;
    insurance: boolean;
}

export type QuizStep = "intro" | "question" | "result" | "booking";

export const QUIZ_QUESTIONS = [
    {
        id: 1,
        text: "What drives your spirit?",
        options: [
            { id: "art", label: "Art & Culture", value: "cultural" },
            { id: "nature", label: "Nature & Adventure", value: "nature" },
            { id: "elegance", label: "Elegance & Society", value: "elegant" },
        ],
    },
    {
        id: 2,
        text: "Which era fascinates you?",
        options: [
            { id: "renaissance", label: "Renaissance", value: "renaissance" },
            { id: "modern", label: "Industrial/Modern", value: "industrial" },
            { id: "origins", label: "Ancient Origins", value: "ancient" },
        ],
    },
    {
        id: 3,
        text: "Preferred environment?",
        options: [
            { id: "urban", label: "Bustling City", value: "urban" },
            { id: "wild", label: "Untamed Wild", value: "wild" },
            { id: "studio", label: "Quiet Studio/Museum", value: "quiet" },
        ],
    },
];

export function useTimeTravel() {
    const [currentStep, setCurrentStep] = useState<QuizStep>("intro");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<QuizAnswer[]>([]);
    const [recommendedId, setRecommendedId] = useState<string | null>(null);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [bookingStatus, setBookingStatus] = useState<"idle" | "loading" | "confirmed">("idle");

    const startQuiz = () => {
        setCurrentStep("question");
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setRecommendedId(null);
    };

    const handleAnswer = (optionValue: string) => {
        const newAnswers = [
            ...answers,
            { questionId: QUIZ_QUESTIONS[currentQuestionIndex].id, selectedOption: optionValue },
        ];
        setAnswers(newAnswers);

        if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            calculateResult(newAnswers);
        }
    };

    const calculateResult = (finalAnswers: QuizAnswer[]) => {
        // Simple scoring logic
        const traits = finalAnswers.map((a) => a.selectedOption);

        // Default fallback
        let resultId = "paris-1889";

        if (traits.includes("nature") || traits.includes("ancient") || traits.includes("wild")) {
            resultId = "cretaceous";
        } else if (traits.includes("cultural") || traits.includes("renaissance") || traits.includes("quiet")) {
            resultId = "florence-1504";
        } else if (traits.includes("elegant") || traits.includes("industrial") || traits.includes("urban")) {
            resultId = "paris-1889";
        }

        setRecommendedId(resultId);
        setCurrentStep("result");
    };

    const openBooking = (destinationId?: string) => {
        if (destinationId) {
            // Pre-fill destination if provided
        }
        setIsBookingOpen(true);
    };

    const closeBooking = () => {
        setIsBookingOpen(false);
        setBookingStatus("idle");
    };

    const submitBooking = async (data: BookingData) => {
        setBookingStatus("loading");
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setBookingStatus("confirmed");
    };

    return {
        currentStep,
        currentQuestionIndex,
        answers,
        recommendedId,
        startQuiz,
        handleAnswer,
        isBookingOpen,
        bookingStatus,
        openBooking,
        closeBooking,
        submitBooking,
        recommendedDestination: DESTINATIONS.find(d => d.id === recommendedId)
    };
}
