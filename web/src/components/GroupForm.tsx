import { Group } from '@/lib/types';
import { useState } from 'react';

interface GroupFormProps {
    onSubmit: (group: Partial<Group>) => void;
    initialData?: Partial<Group>;
}

export default function GroupForm({ onSubmit, initialData }: GroupFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<{ name?: string; description?: string }>({});

    const validateForm = (formData: FormData): boolean => {
        const newErrors: { name?: string; description?: string } = {};
        const name = formData.get('name') as string;
        const description = formData.get('description') as string;

        if (!name || name.trim().length === 0) {
            newErrors.name = 'Le nom du groupe est requis';
        } else if (name.trim().length < 3) {
            newErrors.name = 'Le nom doit contenir au moins 3 caractères';
        } else if (name.trim().length > 50) {
            newErrors.name = 'Le nom ne peut pas dépasser 50 caractères';
        }

        if (description && description.length > 200) {
            newErrors.description = 'La description ne peut pas dépasser 200 caractères';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        if (!validateForm(formData)) {
            return;
        }

        setIsSubmitting(true);

        try {
            await onSubmit({
                name: (formData.get('name') as string).trim(),
                description: (formData.get('description') as string)?.trim() || '',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = () => {
        // Clear errors when user starts typing
        if (Object.keys(errors).length > 0) {
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Group Name */}
            <div className="space-y-2">
                <label 
                    htmlFor="name" 
                    className="block text-sm font-semibold text-dark"
                >
                    Nom du groupe <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl">
                        👥
                    </span>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        maxLength={50}
                        defaultValue={initialData?.name}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                            errors.name 
                                ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                                : 'border-light hover:border-primary/40'
                        }`}
                        placeholder="Ex: Voyage à Paris, Colocation..."
                        disabled={isSubmitting}
                    />
                </div>
                {errors.name && (
                    <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                        <span>⚠️</span> {errors.name}
                    </p>
                )}
                <p className="text-xs text-dark/50">
                    Un nom clair et descriptif pour votre groupe
                </p>
            </div>

            {/* Group Description */}
            <div className="space-y-2">
                <label 
                    htmlFor="description" 
                    className="block text-sm font-semibold text-dark"
                >
                    Description <span className="text-dark/40 font-normal">(optionnel)</span>
                </label>
                <div className="relative">
                    <span className="absolute left-3 top-3 text-xl">
                        📝
                    </span>
                    <textarea
                        id="description"
                        name="description"
                        rows={4}
                        maxLength={200}
                        defaultValue={initialData?.description}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none ${
                            errors.description 
                                ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                                : 'border-light hover:border-primary/40'
                        }`}
                        placeholder="Ajoutez une description pour préciser le contexte du groupe..."
                        disabled={isSubmitting}
                    />
                </div>
                {errors.description && (
                    <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                        <span>⚠️</span> {errors.description}
                    </p>
                )}
                <p className="text-xs text-dark/50">
                    Décrivez le contexte ou l'objectif de ce groupe
                </p>
            </div>

            {/* Info Box */}
            <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-4">
                <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0"></span>
                    <div className="text-sm text-dark/80">
                        <p className="font-medium mb-1">Astuce</p>
                        <p>
                            Après la création, vous pourrez inviter des membres et commencer à ajouter des dépenses partagées.
                        </p>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary text-white py-3.5 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    isSubmitting
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]'
                }`}
            >
                {isSubmitting ? (
                    <>
                        <svg 
                            className="animate-spin h-5 w-5" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24"
                        >
                            <circle 
                                className="opacity-25" 
                                cx="12" 
                                cy="12" 
                                r="10" 
                                stroke="currentColor" 
                                strokeWidth="4"
                            />
                            <path 
                                className="opacity-75" 
                                fill="currentColor" 
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        <span>En cours...</span>
                    </>
                ) : (
                    <>
                        <span className="text-xl">
                            {initialData ? '✏️' : ''}
                        </span>
                        <span>
                            {initialData ? 'Modifier le groupe' : 'Créer le groupe'}
                        </span>
                    </>
                )}
            </button>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-4px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.2s ease-out;
                }
            `}</style>
        </form>
    );
}