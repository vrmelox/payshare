import Sidebar from '@/components/common/SideBar';
import DashboardHeader from '@/components/user-dashboard/DashboardHeader';
import QuickActions from '@/components/user-dashboard/QuickActions';
import BalanceSummary from '@/components/user-dashboard/BalanceSummary';
import WhoOwesWho from '@/components/user-dashboard/WhoOwesWho';
import RecentExpenses from '@/components/user-dashboard/RecentExpenses';
import MyGroups from '@/components/user-dashboard/MyGroups';

export default function UserDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeItem="dashboard" />
      
      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <DashboardHeader />

        {/* Quick Actions */}
        <div className="mt-8">
          <QuickActions />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Left Column - Balance & Debts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Balance Summary */}
            <BalanceSummary />
            
            {/* Who Owes Who */}
            <WhoOwesWho />
            
            {/* Recent Expenses */}
            <RecentExpenses />
          </div>

          {/* Right Column - My Groups */}
          <div>
            <MyGroups />
          </div>
        </div>
      </main>
    </div>
  );
}
