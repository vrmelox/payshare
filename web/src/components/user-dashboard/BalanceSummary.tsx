export default function BalanceSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Balance Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">+8%</span>
        </div>
        <p className="text-sm text-gray-500 mb-1">Total Balance</p>
        <h3 className="text-3xl font-bold text-gray-900">$5,839</h3>
        <p className="text-xs text-red-500 mt-2">↓ -11% last week</p>
      </div>

      {/* You Are Owed Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
          </div>
          <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">Active</span>
        </div>
        <p className="text-sm text-gray-500 mb-1">You Are Owed</p>
        <h3 className="text-3xl font-bold text-green-600">$2,340</h3>
        <p className="text-xs text-gray-500 mt-2">From 5 people</p>
      </div>

      {/* You Owe Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
            </svg>
          </div>
          <span className="text-xs text-red-600 font-medium bg-red-50 px-2 py-1 rounded-full">Pending</span>
        </div>
        <p className="text-sm text-gray-500 mb-1">You Owe</p>
        <h3 className="text-3xl font-bold text-red-600">$890</h3>
        <p className="text-xs text-gray-500 mt-2">To 3 people</p>
      </div>
    </div>
  );
}
