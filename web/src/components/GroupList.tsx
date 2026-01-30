import { Group } from '@/lib/types';

interface GroupListProps {
    groups: Group[];
}

export default function GroupList({ groups }: GroupListProps) {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Vos groupes</h2>
            {groups.length === 0 ? (
                <p className="text-gray-500">Aucun groupe pour le moment</p>
            ) : (
                <ul className="space-y-2">
                    {groups.map((group) => (
                        <li key={group.id} className="p-4 border rounded-lg hover:bg-gray-50">
                            <a href={`/groups/${group.id}`}>
                                <h3 className="font-medium">{group.name}</h3>
                                {group.description && (
                                    <p className="text-sm text-gray-600">{group.description}</p>
                                )}
                                <p className="text-xs text-gray-500 mt-2">
                                    {group.members.length} membre(s)
                                </p>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
