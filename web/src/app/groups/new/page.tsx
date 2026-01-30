"use client"

import GroupForm from "@/components/GroupForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Group } from "@/lib/types";

export default function NewGroupPage() {
    const router = useRouter();

    const handleSubmit = async (group: Partial<Group>) => {
        try {
            // TODO: Add API call to create group
            console.log('Creating group:', group);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Redirect to dashboard or group page after creation
            router.push('/dashboard');
        } catch (error) {
            console.error('Error creating group:', error);
            // TODO: Add error handling/toast notification
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-light to-white">
            <div className="container mx-auto px-4 py-8 max-w-3xl">
                {/* Header */}
                <header className="mb-8 animate-fade-in">
                    <Link
                        href="/dashboard"
                        className="inline-flex items-center gap-2 text-dark/70 hover:text-dark transition-colors mb-4 group"
                    >
                        <span className="transition-transform group-hover:-translate-x-1">←</span>
                        <span>Retour au dashboard</span>
                    </Link>
                    <div className="flex items-start gap-4">
                        <div className="text-5xl">👥</div>
                        <div>
                            <h1 className="text-4xl font-bold text-dark mb-2">
                                Créer un groupe
                            </h1>
                            <p className="text-dark/70 text-lg">
                                Commencez à partager vos dépenses avec vos amis
                            </p>
                        </div>
                    </div>
                </header>

                {/* Main Card */}
                <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up">
                    <GroupForm onSubmit={handleSubmit} />
                </div>

                {/* Info Cards */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in-delayed">
                    <div className="bg-white rounded-lg p-4 shadow border border-light">
                        <div className="text-3xl mb-2">✨</div>
                        <h3 className="font-semibold text-dark mb-1">Simple</h3>
                        <p className="text-sm text-dark/70">
                            Créez un groupe en quelques secondes
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow border border-light">
                        <div className="text-3xl mb-2">🤝</div>
                        <h3 className="font-semibold text-dark mb-1">Collaboratif</h3>
                        <p className="text-sm text-dark/70">
                            Invitez vos amis et partagez les frais
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow border border-light">
                        <div className="text-3xl mb-2">📊</div>
                        <h3 className="font-semibold text-dark mb-1">Transparent</h3>
                        <p className="text-sm text-dark/70">
                            Suivez toutes les dépenses en temps réel
                        </p>
                    </div>
                </div>

                {/* Steps Preview */}
                <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border-2 border-dashed border-light animate-fade-in-delayed">
                    <h3 className="font-semibold text-dark mb-4 flex items-center gap-2">
                        <span className="text-2xl">🎯</span>
                        Prochaines étapes
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                                1
                            </div>
                            <div>
                                <p className="font-medium text-dark">Créez votre groupe</p>
                                <p className="text-sm text-dark/60">Donnez-lui un nom et une description</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 opacity-60">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-dark/20 text-dark flex items-center justify-center text-sm font-bold">
                                2
                            </div>
                            <div>
                                <p className="font-medium text-dark">Invitez des membres</p>
                                <p className="text-sm text-dark/60">Ajoutez vos amis au groupe</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 opacity-60">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-dark/20 text-dark flex items-center justify-center text-sm font-bold">
                                3
                            </div>
                            <div>
                                <p className="font-medium text-dark">Ajoutez des dépenses</p>
                                <p className="text-sm text-dark/60">Commencez à partager vos frais</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in-delayed {
                    0% {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.6s ease-out;
                }

                .animate-slide-up {
                    animation: slide-up 0.5s ease-out;
                }

                .animate-fade-in-delayed {
                    animation: fade-in-delayed 0.6s ease-out 0.2s both;
                }
            `}</style>
        </div>
    );
}