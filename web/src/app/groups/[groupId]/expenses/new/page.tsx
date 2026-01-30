export default function NewExpensePage({ params }: { params: { groupId: string } }) {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Nouvelle dépense</h1>
            <p className="text-gray-600">Groupe ID: {params.groupId}</p>
            <p className="text-gray-600">Page en construction...</p>
        </div>
    );
}
