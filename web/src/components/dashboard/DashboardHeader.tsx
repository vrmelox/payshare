export default function DashboardHeader() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: '2-digit' 
  });

  return (
    <div>
      <p className="text-sm text-gray-500">{currentDate}</p>
      <h1 className="text-3xl font-semibold text-gray-900 mt-1">Good Evening! Merchant</h1>
    </div>
  );
}
