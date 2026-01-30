import Link from "next/link";
import { Group } from "@/lib/types";

export default function Home() {
  // TODO: Fetch groups from database
  const groups: Group[] = []; // Placeholder for groups data

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">PayShare</h1>
          <p className="text-gray-600">
            Suivre, répartir et régler des dépenses communes en toute simplicité
          </p>
        </header>

        {/* Navigation */}
        <nav className="mb-8 flex gap-4">
          <Link
            href="/dashboard"
            className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200"
          >
            📊 Dashboard
          </Link>
          <Link
            href="/groups/new"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            ➕ Nouveau groupe
          </Link>
        </nav>

        {/* Groups List */}
        <main className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Vos groupes</h2>

          {groups.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👥</div>
              <p className="text-gray-500 mb-4">
                Vous n'avez pas encore de groupe
              </p>
              <Link
                href="/groups/new"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Créer votre premier groupe
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {groups.map((group: any) => (
                <Link
                  key={group.id}
                  href={`/groups/${group.id}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-lg">{group.name}</h3>
                  {group.description && (
                    <p className="text-sm text-gray-600 mt-1">
                      {group.description}
                    </p>
                  )}
                  <div className="flex gap-4 mt-2 text-xs text-gray-500">
                    <span>👥 {group.members?.length || 0} membres</span>
                    <span>💰 {group.expenses?.length || 0} dépenses</span>
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

