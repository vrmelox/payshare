import { Expense, Member } from '@/lib/types';

interface ExpenseListProps {
    expenses: Expense[];
    members: Member[];
}

export default function ExpenseList({ expenses, members }: ExpenseListProps) {
    const getMemberName = (memberId: string) => {
        return members.find(m => m.id === memberId)?.name || 'Inconnu';
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Dépenses</h2>
            {expenses.length === 0 ? (
                <p className="text-gray-500">Aucune dépense pour le moment</p>
            ) : (
                <ul className="space-y-2">
                    {expenses.map((expense) => (
                        <li key={expense.id} className="p-4 border rounded-lg">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-medium">{expense.description}</h3>
                                    <p className="text-sm text-gray-600">
                                        Payé par {getMemberName(expense.paidBy)}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Partagé entre: {expense.splitBetween.map(getMemberName).join(', ')}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {new Date(expense.date).toLocaleDateString('fr-FR')}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-semibold">{expense.amount.toFixed(2)} €</p>
                                    <p className="text-xs text-gray-500">
                                        {(expense.amount / expense.splitBetween.length).toFixed(2)} € / pers.
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
