export default function StatusBadge({ status }: { status: string }) {
  const colors: { [key: string]: string } = {
    Paid: 'bg-green-100 text-green-700',
    Pending: 'bg-amber-100 text-amber-700',
    Failed: 'bg-red-100 text-red-700',
  };
  return <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status] || 'bg-slate-100 text-slate-700'}`}>{status}</span>;
}
