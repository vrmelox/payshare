const expensesData = [
  {
    id: 1,
    name: "Emma Ryan Jr.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    type: "Salary",
    amount: 3892,
    status: "Pending",
    date: "Feb 19th, 2023"
  },
  {
    id: 2,
    name: "Adrian Daren",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adrian",
    type: "Bonus",
    amount: 1073,
    status: "Done",
    date: "Feb 18th, 2023"
  },
  {
    id: 3,
    name: "Roxanne Hills",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roxanne",
    type: "Salary",
    amount: 2790,
    status: "Done",
    date: "Apr 16th, 2023"
  }
];

export default function RecentExpenses() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Transactions</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Receiver</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {expensesData.map((expense) => (
              <tr key={expense.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={expense.avatar} 
                      alt={expense.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-900">{expense.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{expense.type}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    expense.status === "Done" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {expense.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{expense.date}</td>
                <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                  ${expense.amount.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <button className="px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
