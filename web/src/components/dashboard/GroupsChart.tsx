const topPayingGroups = [
  { 
    name: "Family Savings Group", 
    paymentCount: 48, 
    totalAmount: 15000, 
    percentage: 55, 
    logo: "/jbl.svg", 
    color: "bg-green-600",
    status: "Active"
  },
  { 
    name: "Entrepreneurs Club", 
    paymentCount: 32, 
    totalAmount: 9800, 
    percentage: 37, 
    logo: "/honda.svg", 
    color: "bg-blue-600",
    status: "Active"
  },
  { 
    name: "Friends & Business", 
    paymentCount: 28, 
    totalAmount: 8200, 
    percentage: 32, 
    logo: "/dell.svg", 
    color: "bg-purple-600",
    status: "Active"
  },
  { 
    name: "Solidarity Group", 
    paymentCount: 15, 
    totalAmount: 4500, 
    percentage: 17, 
    logo: "/adidas.svg", 
    color: "bg-yellow-600",
    status: "Active"
  }
];

export default function GroupsChart() {
  const totalPayments = topPayingGroups.reduce((sum, group) => sum + group.paymentCount, 0);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Top Paying Groups</h2>
        <span className="text-sm text-gray-500">{topPayingGroups.length} Groups</span>
      </div>

      {/* Donut Chart */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative w-48 h-48">
          {/* SVG Donut Chart */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="12"
            />
            
            {/* Green segment - 55% */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#10b981"
              strokeWidth="12"
              strokeDasharray={`${55 * 2.51} 251`}
              strokeDashoffset="0"
              className="transition-all duration-500"
            />
            
            {/* Blue segment - 37% */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#2563eb"
              strokeWidth="12"
              strokeDasharray={`${37 * 2.51} 251`}
              strokeDashoffset={`-${55 * 2.51}`}
              className="transition-all duration-500"
            />
            
            {/* Purple segment - 32% */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#9333ea"
              strokeWidth="12"
              strokeDasharray={`${32 * 2.51} 251`}
              strokeDashoffset={`-${(55 + 37) * 2.51}`}
              className="transition-all duration-500"
            />
            
            {/* Yellow segment - 17% */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#ca8a04"
              strokeWidth="12"
              strokeDasharray={`${17 * 2.51} 251`}
              strokeDashoffset={`-${(55 + 37 + 32) * 2.51}`}
              className="transition-all duration-500"
            />
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{totalPayments}</div>
              <div className="text-xs text-gray-500 mt-0.5">Payments</div>
            </div>
          </div>
        </div>
      </div>

      {/* Groups List - Sorted by payment count (descending) */}
      <div className="space-y-4">
        {topPayingGroups.map((group, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center p-1.5 flex-shrink-0">
                  <img 
                    src={group.logo} 
                    alt={group.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">{group.name}</span>
                    <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                      {group.status}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">${group.totalAmount.toLocaleString()} total</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-900">{group.paymentCount}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div 
                className={`h-1.5 rounded-full ${group.color} transition-all duration-500`}
                style={{ width: `${group.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
