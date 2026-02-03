const myGroupsData = [
  {
    id: 1,
    name: "Team Payments",
    members: 25,
    totalOwed: 4823,
    status: "approval",
    date: "07 Dec approval",
    icon: "👥",
    color: "bg-purple-100"
  },
  {
    id: 2,
    name: "Family Trip",
    members: 6,
    totalOwed: 2340,
    status: "active",
    date: "Active",
    icon: "✈️",
    color: "bg-blue-100"
  },
  {
    id: 3,
    name: "Weekend Dinner",
    members: 8,
    totalOwed: 890,
    status: "settled",
    date: "Settled",
    icon: "🍽️",
    color: "bg-green-100"
  }
];

export default function MyGroups() {
  return (
    <div className="space-y-6">
      {/* Income Statistics Card */}
      <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-teal-100 mb-2">Per Month</p>
            <h3 className="text-4xl font-bold">$95.9</h3>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        <h4 className="text-lg font-semibold mb-2">Choose Best Plan For You!</h4>
        <div className="flex gap-2 mt-4">
          <button className="flex-1 px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/30 transition-colors">
            Details
          </button>
          <button className="flex-1 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
            Upgrade
          </button>
        </div>
      </div>

      {/* My Groups List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="px-5 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">My Groups</h3>
        </div>
        
        <div className="p-4 space-y-3">
          {myGroupsData.map((group) => (
            <div 
              key={group.id} 
              className="p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 ${group.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                  {group.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">{group.name}</h4>
                      <p className="text-xs text-gray-500">{group.members} members</p>
                    </div>
                    {group.status === "approval" && (
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{group.date}</span>
                    <span className="text-sm font-semibold text-gray-900">${group.totalOwed.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-5 py-3 border-t border-gray-100">
          <button className="w-full text-sm font-medium text-blue-600 hover:text-blue-700">
            View All Groups →
          </button>
        </div>
      </div>

      {/* Recent Payments Preview */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="px-5 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Recently Payments</h3>
        </div>
        
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emma" 
                alt="Emma Ryan"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="text-sm font-medium text-gray-900">Emma Ryan Jr.</h4>
                <p className="text-xs text-gray-500">Mar 9, 2023</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">$4,823</p>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Done</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Justin" 
                alt="Justin Weber"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="text-sm font-medium text-gray-900">Justin Weber</h4>
                <p className="text-xs text-gray-500">Mar 2, 2023</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">$3,937</p>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
