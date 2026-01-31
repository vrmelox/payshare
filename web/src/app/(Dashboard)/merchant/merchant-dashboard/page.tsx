import Sidebar from '@/components/common/SideBar';

export default function MerchantDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30">
      {/* Sidebar */}
      <Sidebar activeItem="dashboard" />
    </div>
  );
}
