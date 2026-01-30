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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                {/* Header */}
                <header className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
                        <p className="text-gray-600">
                            Vue d'ensemble de vos dépenses et groupes
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200"
                    >
                        ← Retour
                    </Link>
                </header>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Groupes</p>
                                <p className="text-3xl font-bold text-gray-900">
                                    {stats.totalGroups}
                                </p>
                            </div>
                            <div className="text-4xl">👥</div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Dépenses</p>
                                <p className="text-3xl font-bold text-gray-900">
                                    {stats.totalExpenses}
                                </p>
                            </div>
                            <div className="text-4xl">💰</div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Montant total</p>
                                <p className="text-3xl font-bold text-gray-900">
                                    {stats.totalAmount.toFixed(2)} €
                                </p>
                            </div>
                            <div className="text-4xl">💳</div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Votre solde</p>
                                <p
                                    className={`text-3xl font-bold ${stats.balance > 0
                                            ? 'text-green-600'
                                            : stats.balance < 0
                                                ? 'text-red-600'
                                                : 'text-gray-900'
                                        }`}
                                >
                                    {stats.balance > 0 ? '+' : ''}
                                    {stats.balance.toFixed(2)} €
                                </p>
                            </div>
                            <div className="text-4xl">
                                {stats.balance > 0 ? '📈' : stats.balance < 0 ? '📉' : '➖'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity & Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Recent Expenses */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Dépenses récentes</h2>
                        <div className="text-center py-8 text-gray-500">
                            Aucune dépense récente
                        </div>
                    </div>

                    {/* Active Groups */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Groupes actifs</h2>
                        <div className="text-center py-8 text-gray-500">
                            Aucun groupe actif
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Actions rapides</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Link
                            href="/groups/new"
                            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-center"
                        >
                            <div className="text-3xl mb-2">➕</div>
                            <p className="font-medium">Créer un groupe</p>
                        </Link>
                        <button
                            disabled
                            className="p-4 border-2 border-dashed border-gray-300 rounded-lg opacity-50 cursor-not-allowed text-center"
                        >
                            <div className="text-3xl mb-2">💸</div>
                            <p className="font-medium">Ajouter une dépense</p>
                            <p className="text-xs text-gray-500 mt-1">Créez d'abord un groupe</p>
                        </button>
                        <button
                            disabled
                            className="p-4 border-2 border-dashed border-gray-300 rounded-lg opacity-50 cursor-not-allowed text-center"
                        >
                            <div className="text-3xl mb-2">🧾</div>
                            <p className="font-medium">Voir les règlements</p>
                            <p className="text-xs text-gray-500 mt-1">Créez d'abord un groupe</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
