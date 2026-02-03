export default function QuickActions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Create Group Button */}
      <button className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-6 hover:border-blue-500 hover:bg-blue-50/50 transition-all group">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-900">Create New Group</h3>
            <p className="text-sm text-gray-500 mt-0.5">Start managing expenses with friends</p>
          </div>
        </div>
      </button>

      {/* Add Expense Button */}
      <button className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-6 hover:border-green-500 hover:bg-green-50/50 transition-all group">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
            <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-900">Record Shared Expense</h3>
            <p className="text-sm text-gray-500 mt-0.5">Add a new group expense</p>
          </div>
        </div>
      </button>
    </div>
  );
}
