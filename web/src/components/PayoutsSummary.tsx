import StatusBadge from "./StatusCard";

export default function PayoutsSummary() {
  const summary = [
    { title: 'Previous payout', amount: 4962.34, date: 'Apr 2, 2021', status: 'Paid' },
    { title: 'Next payout', amount: 2804.80, date: 'Apr 3, 2021', status: 'Pending' },
    { title: 'Balance', amount: 5467.70, date: 'Est. by Apr 15, 2021' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {summary.map((item, idx) => (
        <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">{item.title}</span>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View transactions
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-3xl font-semibold text-gray-900">
                ${item.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              {item.status && <StatusBadge status={item.status} />}
            </div>
            
            <span className="text-sm text-gray-500">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}