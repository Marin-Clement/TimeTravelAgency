import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { QUIZ_QUESTIONS, useTimeTravel } from "../../hooks/useTimeTravel";
import { DESTINATIONS } from "../../constants/data";
import { Destination } from "../../types";

interface QuizModalProps {
    onClose: () => void;
    isOpen: boolean;
    onSelectDestination?: (destinationId: string) => void;
}

export function QuizModal({ onClose, isOpen, onSelectDestination }: QuizModalProps) {
    // We're lifting state up to the parent component in a real app,
    // but for this modular feature, we can instantiate the hook here or pass it down.
    // For simplicity, let's assume we use the hook inside.
    // In a full app context provider would be better.

    // NOTE: In this implementation self-contained state is easier for the "modal" lifecycle.
    // Let's adapt useTimeTravel slightly or just use local state for the visual flow if needed,
    // but better to stick to the hook structure.

    // We actually need the logic from useTimeTravel to stick around even if closed?
    // Probably reset on open.

    // For this demo: using the hook logic locally.
    const {
        currentStep,
        currentQuestionIndex,
        handleAnswer,
        recommendedId,
        startQuiz
    } = useTimeTravel();

    // Need a way to trigger startQuiz when modal opens if it's not started
    // useEffect(() => { if (isOpen) startQuiz(); }, [isOpen]); 
    // But we can't call hook inside useEffect conditionally.
    // For now, let's rely on initial state "intro"

    const question = QUIZ_QUESTIONS[currentQuestionIndex];
    const recommendedDestination = DESTINATIONS.find(d => d.id === recommendedId);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="bg-deep-space border border-luxury-gold/30 rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-[0_0_50px_rgba(212,175,55,0.15)]"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Content Area */}
                    <div className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center text-center">

                        {/* INTRO STEP */}
                        {currentStep === "intro" && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="w-20 h-20 mx-auto bg-luxury-gold/10 rounded-full flex items-center justify-center mb-6">
                                    <div className="w-12 h-12 border-2 border-luxury-gold rounded-full animate-spin-slow"></div>
                                </div>
                                <h2 className="text-3xl md:text-4xl text-white font-serif">
                                    Découvrez votre Époque Idéale
                                </h2>
                                <p className="text-gray-300 text-lg max-w-md mx-auto">
                                    Répondez à 3 questions simples pour laisser notre IA Temporelle trouver
                                    la destination qui résonne avec votre âme.
                                </p>
                                <button
                                    onClick={startQuiz}
                                    className="mt-8 px-8 py-3 bg-luxury-gold text-deep-space rounded-full font-semibold hover:bg-white transition-colors"
                                >
                                    Commencer le Voyage
                                </button>
                            </motion.div>
                        )}

                        {/* QUESTION STEP */}
                        {currentStep === "question" && question && (
                            <motion.div
                                key={question.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-8"
                            >
                                <div className="text-sm text-luxury-gold uppercase tracking-widest mb-2">
                                    Question {currentQuestionIndex + 1} sur {QUIZ_QUESTIONS.length}
                                </div>
                                <h2 className="text-3xl text-white mb-8">{question.text}</h2>
                                <div className="grid gap-4">
                                    {question.options.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => handleAnswer(option.value)}
                                            className="group flex items-center justify-between p-4 rounded-xl border border-luxury-gold/20 hover:border-luxury-gold hover:bg-luxury-gold/5 transition-all text-left"
                                        >
                                            <span className="text-lg text-gray-200 group-hover:text-white">
                                                {option.label}
                                            </span>
                                            <ArrowRight className="w-5 h-5 text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* RESULT STEP */}
                        {currentStep === "result" && recommendedDestination && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center"
                            >
                                <div className="mb-2 text-luxury-gold uppercase tracking-widest text-sm">
                                    Votre Correspondance Parfaite
                                </div>
                                <h2 className="text-4xl md:text-5xl text-white mb-6 font-serif">
                                    {recommendedDestination.name}
                                </h2>

                                <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-8 border border-luxury-gold/30">
                                    <img src={recommendedDestination.image} alt={recommendedDestination.name} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-left">
                                        <p className="text-white text-lg font-medium">{recommendedDestination.location}</p>
                                        <p className="text-luxury-gold">{recommendedDestination.price}</p>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto">
                                    Selon vos préférences, cette époque offre l'équilibre parfait entre expérience et atmosphère pour vous.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button onClick={onClose} className="px-6 py-3 border border-luxury-gold/30 rounded-full text-gray-300 hover:bg-white/5 transition-colors">
                                        Fermer
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (recommendedDestination) {
                                                onSelectDestination?.(recommendedDestination.id);
                                            }
                                            onClose();
                                        }}
                                        className="px-8 py-3 bg-gradient-to-r from-luxury-gold to-rich-brown text-deep-space rounded-full font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-shadow"
                                    >
                                        Réserver cette Époque
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
