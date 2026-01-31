import StatusBadge from "./StatusCard";

const payoutsData = [
  { date: 'Apr 3, 2021', status: 'Pending', charges: 2851.99, refunds: 0, fees: -145.16, total: 2804.80 },
  { date: 'Apr 2, 2021', status: 'Paid', charges: 5872.87, refunds: -734.35, fees: 0, total: 4962.34 },
  { date: 'Apr 1, 2021', status: 'Paid', charges: 9225.35, refunds: -199.2, fees: 0, total: 8749.39 },
];

export default function PayoutsTable({ payouts }: { payouts: typeof payoutsData }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Filter Bar */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
          Filter payouts
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div className="flex-1 max-w-md ml-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-3 text-left">
                <button className="flex items-center gap-1 text-xs font-medium text-gray-600 uppercase hover:text-gray-900">
                  Date
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase">Charges</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase">Refunds</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase">Fees</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {payouts.map((payout, idx) => (
              <PayoutRow key={idx} payout={payout} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PayoutRow({ payout }: { payout: typeof payoutsData[0] }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          {payout.date}
        </button>
      </td>
      <td className="px-6 py-4">
        <StatusBadge status={payout.status} />
      </td>
      <td className="px-6 py-4 text-right text-sm text-gray-900">
        ${payout.charges.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </td>
      <td className="px-6 py-4 text-right text-sm text-red-600">
        {payout.refunds !== 0 
          ? `-$${Math.abs(payout.refunds).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` 
          : '$0.00'}
      </td>
      <td className="px-6 py-4 text-right text-sm text-red-600">
        {payout.fees !== 0 
          ? `-$${Math.abs(payout.fees).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` 
          : '$0.00'}
      </td>
      <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
        ${payout.total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </td>
    </tr>
  );
}