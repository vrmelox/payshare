import { Member } from '@/lib/types';

interface MemberSelectorProps {
    members: Member[];
    selectedMembers: string[];
    onSelectionChange: (memberIds: string[]) => void;
    label?: string;
}

export default function MemberSelector({
    members,
    selectedMembers,
    onSelectionChange,
    label = 'Sélectionner des membres',
}: MemberSelectorProps) {
    const handleToggle = (memberId: string) => {
        if (selectedMembers.includes(memberId)) {
            onSelectionChange(selectedMembers.filter(id => id !== memberId));
        } else {
            onSelectionChange([...selectedMembers, memberId]);
        }
    };

    const handleSelectAll = () => {
        if (selectedMembers.length === members.length) {
            onSelectionChange([]);
        } else {
            onSelectionChange(members.map(m => m.id));
        }
    };

    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <label className="block text-sm font-medium">{label}</label>
                <button
                    type="button"
                    onClick={handleSelectAll}
                    className="text-sm text-primary hover:text-primary/80"
                >
                    {selectedMembers.length === members.length ? 'Tout désélectionner' : 'Tout sélectionner'}
                </button>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto border rounded-lg p-3">
                {members.map((member) => (
                    <label
                        key={member.id}
                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                    >
                        <input
                            type="checkbox"
                            checked={selectedMembers.includes(member.id)}
                            onChange={() => handleToggle(member.id)}
                            className="rounded"
                        />
                        <span>{member.name}</span>
                        {member.email && (
                            <span className="text-xs text-gray-500">({member.email})</span>
                        )}
                    </label>
                ))}
            </div>
            <p className="text-xs text-gray-500">
                {selectedMembers.length} membre(s) sélectionné(s)
            </p>
        </div>
    );
}
