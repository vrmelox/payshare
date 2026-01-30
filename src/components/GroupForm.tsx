import { Group } from '@/lib/types';

interface GroupFormProps {
    onSubmit: (group: Partial<Group>) => void;
    initialData?: Partial<Group>;
}

export default function GroupForm({ onSubmit, initialData }: GroupFormProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        onSubmit({
            name: formData.get('name') as string,
            description: formData.get('description') as string,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nom du groupe *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    defaultValue={initialData?.name}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    rows={3}
                    defaultValue={initialData?.description}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
                {initialData ? 'Modifier' : 'Créer'} le groupe
            </button>
        </form>
    );
}
