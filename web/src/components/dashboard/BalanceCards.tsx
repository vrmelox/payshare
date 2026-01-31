export default function BalanceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Balance Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            +23%
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-1">Total Balance</p>
        <h3 className="text-2xl font-bold text-gray-900">$ 34,500.12</h3>
      </div>

      {/* Total Paid Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <button className="text-sm text-gray-500 hover:text-gray-700">
            Monthly ▼
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-1">Total Paid</p>
        <h3 className="text-2xl font-bold text-gray-900">$ 4,500.12</h3>
      </div>

      {/* Due Payment Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <p className="text-sm text-gray-500">2 Due Payment</p>
          <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
            Pay
          </button>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mt-4">$ 1,320</h3>
      </div>

      {/* Submission Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <p className="text-sm text-gray-500">4 Submission</p>
          <button className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-lg hover:bg-green-100 transition-colors border border-green-200">
            Approve
          </button>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mt-4">$ 4,434.89</h3>
      </div>
    </div>
  );
}
