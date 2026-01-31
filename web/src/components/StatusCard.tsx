export default function StatusBadge({ status }: { status: string }) {
  const colors: { [key: string]: string } = {
    Paid: 'bg-green-50 text-green-700 border-green-200',
    Pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    Failed: 'bg-red-50 text-red-700 border-red-200',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${colors[status] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
      {status}
    </span>
  );
}