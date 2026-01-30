import { Settlement, Member } from '@/lib/types';

interface SettlementListProps {
    settlements: Settlement[];
    members: Member[];
}

export default function SettlementList({ settlements, members }: SettlementListProps) {
    const getMemberName = (memberId: string) => {
        return members.find(m => m.id === memberId)?.name || 'Inconnu';
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Règlements suggérés</h2>
            {settlements.length === 0 ? (
                <p className="text-green-600 font-medium">✓ Tous les comptes sont réglés !</p>
            ) : (
                <ul className="space-y-3">
                    {settlements.map((settlement, index) => (
                        <li key={index} className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <p className="text-sm">
                                        <span className="font-semibold">{getMemberName(settlement.from)}</span>
                                        <span className="text-gray-600 mx-2">→</span>
                                        <span className="font-semibold">{getMemberName(settlement.to)}</span>
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-blue-600">
                                        {settlement.amount.toFixed(2)} €
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
