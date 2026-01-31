import Sidebar from '@/components/common/SideBar';
import PayoutsSummary from '@/components/PayoutsSummary';
import PayoutsTable from '@/components/PayoutsTable';

const payoutsData = [
  { date: 'Apr 3, 2021', status: 'Pending', charges: 2851.99, refunds: 0, fees: -145.16, total: 2804.80 },
  { date: 'Apr 2, 2021', status: 'Paid', charges: 5872.87, refunds: -734.35, fees: 0, total: 4962.34 },
  { date: 'Apr 1, 2021', status: 'Paid', charges: 9225.35, refunds: -199.2, fees: 0, total: 8749.39 },
];

export default function MerchantPayoutsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeItem="payouts" />
      
      {/* Main Content */}
      <main className="ml-64">
        {/* Header */}
        <div className="bg-white border-b px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-semibold text-gray-900">Payouts</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Documents
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                Transactions
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Summary */}
          <PayoutsSummary />
          
          {/* Table Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">All Payouts</h2>
            <PayoutsTable payouts={payoutsData} />
          </div>
        </div>
      </main>
    </div>
  );
}