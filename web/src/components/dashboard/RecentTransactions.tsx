const transactionsData = [
  {
    id: 1,
    date: "Feb 25",
    name: "Savannah Nguyen",
    cardType: "VISA",
    cardLast4: "447",
    amount: 2623.69,
    status: "Success"
  },
  {
    id: 2,
    date: "Feb 25",
    name: "Jerome Bell",
    cardType: "VISA",
    cardLast4: "994",
    amount: 162.96,
    status: "Processing"
  },
  {
    id: 3,
    date: "Feb 24",
    name: "Kristin Watson",
    cardType: "AMEX",
    cardLast4: "798",
    amount: 284.83,
    status: "Success"
  },
  {
    id: 4,
    date: "Feb 20",
    name: "Darrell Steward",
    cardType: "MASTERCARD",
    cardLast4: "536",
    amount: 2004.13,
    status: "Failed"
  },
  {
    id: 5,
    date: "Feb 15",
    name: "Jenny Wilson",
    cardType: "STRIPE",
    cardLast4: "816",
    amount: 2728.95,
    status: "Success"
  },
  {
    id: 6,
    date: "Feb 15",
    name: "Cameron Williamson",
    cardType: "VISA",
    cardLast4: "647",
    amount: 6359.47,
    status: "Success"
  }
];

export default function RecentTransactions() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Paid this month</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">Last 30 Days</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-blue-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-6 py-3 text-left">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Card</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {transactionsData.map((transaction) => (
              <TransactionRow key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TransactionRow({ transaction }: { transaction: typeof transactionsData[0] }) {
  const statusStyles = {
    Success: "bg-green-50 text-green-700",
    Processing: "bg-blue-50 text-blue-700",
    Failed: "bg-red-50 text-red-700"
  };

  const cardLogos = {
    VISA: (
      <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
        VISA
      </div>
    ),
    MASTERCARD: (
      <div className="w-8 h-5 bg-red-600 rounded flex items-center justify-center">
        <div className="flex gap-0.5">
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        </div>
      </div>
    ),
    AMEX: (
      <div className="w-8 h-5 bg-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
        AMEX
      </div>
    ),
    STRIPE: (
      <div className="w-8 h-5 bg-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">
        S
      </div>
    )
  };

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4">
        <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
      </td>
      <td className="px-6 py-4 text-sm text-gray-600">{transaction.date}</td>
      <td className="px-6 py-4 text-sm font-medium text-gray-900">{transaction.name}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          {cardLogos[transaction.cardType as keyof typeof cardLogos]}
          <span className="text-sm text-gray-600">•••• {transaction.cardLast4}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
        ${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-center">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[transaction.status as keyof typeof statusStyles]}`}>
            {transaction.status}
          </span>
        </div>
      </td>
    </tr>
  );
}
