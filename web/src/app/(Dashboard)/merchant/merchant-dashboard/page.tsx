import Sidebar from '@/components/common/SideBar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import BalanceCards from '@/components/dashboard/BalanceCards';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import GroupsChart from '@/components/dashboard/GroupsChart';

export default function MerchantDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeItem="dashboard" />
      
      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <DashboardHeader />

        {/* Balance Cards */}
        <div className="mt-8">
          <BalanceCards />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Left Column - Transactions */}
          <div className="lg:col-span-2">
            <RecentTransactions />
          </div>

          {/* Right Column - Groups Chart */}
          <div>
            <GroupsChart />
          </div>
        </div>
      </main>
    </div>
  );
}