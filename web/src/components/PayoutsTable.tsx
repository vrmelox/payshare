import StatusBadge from "./StatusCard";

export default function PayoutsTable({ payouts }: { payouts: typeof payoutsData }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Date</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Status</th>
            <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase">Charges</th>
            <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase">Refunds</th>
            <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase">Fees</th>
            <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase">Total</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {payouts.map((payout, idx) => (
            <PayoutRow key={idx} payout={payout} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PayoutRow({ payout }: { payout: typeof payoutsData[0] }) {
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-6 py-4 text-sm text-slate-700">{payout.date}</td>
      <td className="px-6 py-4">
        <StatusBadge status={payout.status} />
      </td>
      <td className="px-6 py-4 text-right text-sm text-slate-700">${payout.charges.toLocaleString()}</td>
      <td className="px-6 py-4 text-right text-sm text-red-600">{payout.refunds !== 0 ? `-$${Math.abs(payout.refunds).toLocaleString()}` : '$0.00'}</td>
      <td className="px-6 py-4 text-right text-sm text-red-600">{payout.fees !== 0 ? `-$${Math.abs(payout.fees).toLocaleString()}` : '$0.00'}</td>
      <td className="px-6 py-4 text-right text-sm font-semibold text-slate-800">${payout.total.toLocaleString()}</td>
    </tr>
  );
}
