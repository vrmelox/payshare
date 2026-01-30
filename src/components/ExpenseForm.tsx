import { Expense, Member } from '@/lib/types';

interface ExpenseFormProps {
    members: Member[];
    onSubmit: (expense: Partial<Expense>) => void;
    initialData?: Partial<Expense>;
}

export default function ExpenseForm({ members, onSubmit, initialData }: ExpenseFormProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const splitBetween = formData.getAll('splitBetween') as string[];

        onSubmit({
            description: formData.get('description') as string,
            amount: parseFloat(formData.get('amount') as string),
            paidBy: formData.get('paidBy') as string,
            splitBetween: splitBetween.length > 0 ? splitBetween : members.map(m => m.id),
            date: new Date(formData.get('date') as string),
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                    Description *
                </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    required
                    defaultValue={initialData?.description}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="amount" className="block text-sm font-medium mb-1">
                    Montant (€) *
                </label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    step="0.01"
                    required
                    defaultValue={initialData?.amount}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="paidBy" className="block text-sm font-medium mb-1">
                    Payé par *
                </label>
                <select
                    id="paidBy"
                    name="paidBy"
                    required
                    defaultValue={initialData?.paidBy}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Sélectionner...</option>
                    {members.map((member) => (
                        <option key={member.id} value={member.id}>
                            {member.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="date" className="block text-sm font-medium mb-1">
                    Date *
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    defaultValue={initialData?.date ? new Date(initialData.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">
                    Partagé entre (laisser vide pour tous)
                </label>
                <div className="space-y-2">
                    {members.map((member) => (
                        <label key={member.id} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="splitBetween"
                                value={member.id}
                                defaultChecked={initialData?.splitBetween?.includes(member.id)}
                                className="rounded"
                            />
                            <span>{member.name}</span>
                        </label>
                    ))}
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
                {initialData ? 'Modifier' : 'Ajouter'} la dépense
            </button>
        </form>
    );
}
