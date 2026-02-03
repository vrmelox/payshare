const debtsData = [
  {
    id: 1,
    personName: "Emma Ryan Jr.",
    personAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    amount: 823,
    type: "owes_you", // They owe you
    groupName: "Family Trip",
    date: "Mar 9, 2023"
  },
  {
    id: 2,
    personName: "Justin Weber",
    personAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Justin",
    amount: 450,
    type: "you_owe", // You owe them
    groupName: "Weekend Dinner",
    date: "Mar 2, 2023"
  },
  {
    id: 3,
    personName: "Adrian Daren",
    personAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adrian",
    amount: 1200,
    type: "owes_you",
    groupName: "Rent Payment",
    date: "Feb 18, 2023"
  },
  {
    id: 4,
    personName: "Roxanne Hills",
    personAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roxanne",
    amount: 340,
    type: "you_owe",
    groupName: "Groceries",
    date: "Apr 16, 2023"
  }
];

export default function WhoOwesWho() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Who Owes Who</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All
          </button>
        </div>
      </div>

      {/* Debts List */}
      <div className="divide-y divide-gray-100">
        {debtsData.map((debt) => (
          <div key={debt.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src={debt.personAvatar} 
                  alt={debt.personName}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{debt.personName}</h3>
                  <p className="text-xs text-gray-500">{debt.groupName}</p>
                </div>
              </div>

              <div className="text-right">
                {debt.type === "owes_you" ? (
                  <div>
                    <p className="text-sm font-semibold text-green-600">+${debt.amount.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">owes you</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm font-semibold text-red-600">-${debt.amount.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">you owe</p>
                  </div>
                )}
              </div>

              <button className="ml-4 px-4 py-2 bg-primary cursor-pointer text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                {debt.type === "owes_you" ? "Request" : "Pay Now"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
