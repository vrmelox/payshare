import { Balance } from '@/lib/types';

interface BalanceSummaryProps {
    balances: Balance[];
}

export default function BalanceSummary({ balances }: BalanceSummaryProps) {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Soldes</h2>
            {balances.length === 0 ? (
                <p className="text-gray-500">Aucun solde à afficher</p>
            ) : (
                <ul className="space-y-2">
                    {balances.map((balance) => (
                        <li key={balance.memberId} className="p-4 border rounded-lg">
                            <div className="flex justify-between items-center">
                                <span className="font-medium">{balance.memberName}</span>
                                <span
                                    className={`text-lg font-semibold ${balance.balance > 0
                                            ? 'text-green-600'
                                            : balance.balance < 0
                                                ? 'text-red-600'
                                                : 'text-gray-600'
                                        }`}
                                >
                                    {balance.balance > 0 ? '+' : ''}
                                    {balance.balance.toFixed(2)} €
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                                {balance.balance > 0
                                    ? 'Doit recevoir'
                                    : balance.balance < 0
                                        ? 'Doit payer'
                                        : 'À jour'}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
