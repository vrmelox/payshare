import Link from "next/link";
import { Group } from "@/lib/types";
import Menu from "@/components/common/Menu";

export default function Groups() {
    // TODO: Fetch groups from database
    const groups: Group[] = []; // Placeholder for groups data

    return (
        <div className="min-h-screen bg-white">
            <Menu />

            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-bold text-dark mb-3 tracking-tight">Vos Groupes</h1>
                        <p className="text-gray-500 text-lg">
                            Gérez vos dépenses partagées avec vos amis et votre famille.
                        </p>
                    </div>
                    <Link
                        href="/groups/new"
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:-translate-y-0.5"
                    >
                        <span className="mr-2">➕</span> Nouveau groupe
                    </Link>
                </div>

                {/* Groups Grid/List */}
                <main className="bg-gray-50/50 rounded-3xl p-8 border border-gray-100">
                    {groups.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                            <div className="text-6xl mb-6 grayscale opacity-50">👥</div>
                            <h3 className="text-xl font-bold text-dark mb-2">Aucun groupe trouvé</h3>
                            <p className="text-gray-500 mb-8 max-w-xs mx-auto">
                                Commencez par créer un groupe pour suivre vos dépenses communes.
                            </p>
                            <Link
                                href="/groups/new"
                                className="inline-block px-8 py-3 bg-white text-dark font-bold rounded-xl border-2 border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-all"
                            >
                                Créer votre premier groupe
                            </Link>
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            {groups.map((group: any) => (
                                <Link
                                    key={group.id}
                                    href={`/groups/${group.id}`}
                                    className="group block p-6 bg-white border border-gray-100 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all"
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="font-bold text-xl text-dark group-hover:text-primary transition-colors">{group.name}</h3>
                                            {group.description && (
                                                <p className="text-gray-500 mt-2 line-clamp-1 italic">
                                                    "{group.description}"
                                                </p>
                                            )}
                                        </div>
                                        <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                                    </div>

                                    <div className="flex gap-4 mt-6">
                                        <div className="px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-600 flex items-center gap-2">
                                            <span className="opacity-70">👥</span> {group.members?.length || 0} membres
                                        </div>
                                        <div className="px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-600 flex items-center gap-2">
                                            <span className="opacity-70">💰</span> {group.expenses?.length || 0} dépenses
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

