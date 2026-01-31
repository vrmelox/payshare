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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30">
            {/* Sidebar */}
            <Sidebar activeItem="payouts" />

            {/* Main Content */}
            <main className="ml-64 p-8 space-y-6">
              {/* Summary */}
              <PayoutsSummary />

              {/* Table */}
              <PayoutsTable payouts={payoutsData} />
            </main>
      </div>
  );
}
