import StatusBadge from "./StatusCard";

export default function PayoutsSummary() {
  const summary = [
    { title: 'Previous payout', amount: 4962.34, date: 'Apr 2, 2021', status: 'Paid' },
    { title: 'Next payout', amount: 2804.80, date: 'Apr 3, 2021', status: 'Pending' },
    { title: 'Balance', amount: 5467.70, date: 'Est. by Apr 15, 2021' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {summary.map((item, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-sm border p-4 flex flex-col">
          <span className="text-sm text-slate-500">{item.title}</span>
          <div className="mt-2 text-2xl font-bold text-slate-800 flex items-center gap-2">
            ${item.amount.toLocaleString()}
            {item.status && <StatusBadge status={item.status} />}
          </div>
          <span className="text-xs text-slate-400 mt-1">{item.date}</span>
        </div>
      ))}
    </div>
  );
}
