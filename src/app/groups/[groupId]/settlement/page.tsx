export default function SettlementPage({ params }: { params: { groupId: string } }) {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Règlement des comptes</h1>
            <p className="text-gray-600">Groupe ID: {params.groupId}</p>
            <p className="text-gray-600">Qui doit combien à qui - Page en construction...</p>
        </div>
    );
}
