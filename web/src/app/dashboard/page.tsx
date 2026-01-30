"use client"
import Link from "next/link";

export default function DashboardPage() {
    // TODO: Fetch user data from database
    const stats = {
        totalGroups: 0,
        totalExpenses: 0,
        totalAmount: 0,
        balance: 0,
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-light to-white">
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                {/* Header */}
                <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-fade-in">
                    <div>
                        <h1 className="text-4xl font-bold text-dark mb-2 tracking-tight">
                            Dashboard
                        </h1>
                        <p className="text-dark/70 text-lg">
                            Vue d'ensemble de vos dépenses et groupes
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="px-6 py-2.5 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-light hover:scale-105 active:scale-95 font-medium"
                    >
                        ← Retour
                    </Link>
                </header>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '0ms' }}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-dark/60 mb-1 font-medium uppercase tracking-wide">
                                    Groupes
                                </p>
                                <p className="text-3xl font-bold text-dark">
                                    {stats.totalGroups}
                                </p>
                            </div>
                            <div className="text-5xl opacity-80 transition-transform hover:scale-110">
                                👥
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '100ms' }}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-dark/60 mb-1 font-medium uppercase tracking-wide">
                                    Dépenses
                                </p>
                                <p className="text-3xl font-bold text-dark">
                                    {stats.totalExpenses}
                                </p>
                            </div>
                            <div className="text-5xl opacity-80 transition-transform hover:scale-110">
                                💰
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '200ms' }}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-dark/60 mb-1 font-medium uppercase tracking-wide">
                                    Montant total
                                </p>
                                <p className="text-3xl font-bold text-dark">
                                    {stats.totalAmount.toFixed(2)} €
                                </p>
                            </div>
                            <div className="text-5xl opacity-80 transition-transform hover:scale-110">
                                💳
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '300ms' }}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-dark/60 mb-1 font-medium uppercase tracking-wide">
                                    Votre solde
                                </p>
                                <p
                                    className={`text-3xl font-bold transition-colors ${
                                        stats.balance > 0
                                            ? 'text-accent'
                                            : stats.balance < 0
                                            ? 'text-red-600'
                                            : 'text-dark'
                                    }`}
                                >
                                    {stats.balance > 0 ? '+' : ''}
                                    {stats.balance.toFixed(2)} €
                                </p>
                            </div>
                            <div className="text-5xl opacity-80 transition-transform hover:scale-110">
                                {stats.balance > 0 ? '📈' : stats.balance < 0 ? '📉' : '➖'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity & Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Recent Expenses */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-dark">
                                Dépenses récentes
                            </h2>
                            <span className="text-2xl">📊</span>
                        </div>
                        <div className="text-center py-12 text-gray-400">
                            <div className="text-5xl mb-3 opacity-50">📭</div>
                            <p className="font-medium">Aucune dépense récente</p>
                            <p className="text-sm mt-1">
                                Vos dernières dépenses apparaîtront ici
                            </p>
                        </div>
                    </div>

                    {/* Active Groups */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-dark">
                                Groupes actifs
                            </h2>
                            <span className="text-2xl">👥</span>
                        </div>
                        <div className="text-center py-12 text-gray-400">
                            <div className="text-5xl mb-3 opacity-50">📂</div>
                            <p className="font-medium">Aucun groupe actif</p>
                            <p className="text-sm mt-1">
                                Créez votre premier groupe pour commencer
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <h2 className="text-xl font-semibold mb-6 text-dark flex items-center gap-2">
                        <span className="text-2xl">⚡</span>
                        Actions rapides
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Link
                            href="/groups/new"
                            className="group p-6 border-2 border-dashed border-light rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200 text-center hover:scale-105 active:scale-95"
                        >
                            <div className="text-4xl mb-3 transition-transform group-hover:scale-110">
                                ➕
                            </div>
                            <p className="font-semibold text-dark">Créer un groupe</p>
                            <p className="text-xs text-dark/60 mt-1">
                                Commencez à partager vos dépenses
                            </p>
                        </Link>
                        <button
                            disabled
                            className="p-6 border-2 border-dashed border-light rounded-lg opacity-50 cursor-not-allowed text-center"
                        >
                            <div className="text-4xl mb-3">💸</div>
                            <p className="font-semibold text-dark">Ajouter une dépense</p>
                            <p className="text-xs text-gray-500 mt-1">
                                Créez d'abord un groupe
                            </p>
                        </button>
                        <button
                            disabled
                            className="p-6 border-2 border-dashed border-light rounded-lg opacity-50 cursor-not-allowed text-center"
                        >
                            <div className="text-4xl mb-3">🧾</div>
                            <p className="font-semibold text-dark">Voir les règlements</p>
                            <p className="text-xs text-gray-500 mt-1">
                                Créez d'abord un groupe
                            </p>
                        </button>
                    </div>
                </div>

                {/* Footer Info */}
                <div className="mt-8 text-center text-dark/50 text-sm animate-fade-in" style={{ animationDelay: '700ms' }}>
                    <p>💡 Astuce : Invitez vos amis pour partager facilement vos dépenses</p>
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

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }

                .animate-slide-up {
                    animation: slide-up 0.5s ease-out forwards;
                    opacity: 0;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.5s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
}