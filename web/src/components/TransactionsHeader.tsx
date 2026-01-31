import React, { useState, useMemo } from 'react';
import { Merchants } from '../data/merchants';
import { Users } from '../data/users';

// --- Sub-components ---

const StatusBadge = ({ status }: { status: 'Success' | 'Pending' | 'Failed' }) => {
  const statusStyles = {
    Success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Pending: 'bg-amber-50 text-amber-700 border-amber-200',
    Failed: 'bg-red-50 text-red-700 border-red-200'
  };
  return (
    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

const CategoryBadge = ({ category }: { category: string }) => {
  const categoryStyles: Record<string, string> = {
    Transfer: 'bg-blue-50 text-blue-700',
    Rent: 'bg-orange-50 text-orange-700',
    Receive: 'bg-purple-50 text-purple-700',
    Shopping: 'bg-cyan-50 text-cyan-700',
    Subscription: 'bg-slate-50 text-slate-700'
  };

  const icons: Record<string, string> = {
    Transfer: '↑',
    Receive: '↓',
    Rent: '🏠',
    Shopping: '🛍️',
    Subscription: '📱'
  };

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${categoryStyles[category] || 'bg-slate-50 text-slate-700'}`}>
      {icons[category] || '•'}
      {category}
    </span>
  );
};

interface TransactionRowProps {
  cardType: 'visa' | 'mastercard' | 'black';
  cardNumber: string;
  date: string;
  status: 'Success' | 'Pending' | 'Failed';
  category: string;
  amount: string;
  recipientName: string;
  recipientAvatar?: string;
  recipientColor?: string;
  isMerchant?: boolean;
}

const TransactionRow = ({
  cardType,
  cardNumber,
  date,
  status,
  category,
  amount,
  recipientName,
  recipientAvatar,
  recipientColor = "from-slate-500 to-slate-600",
  isMerchant = false
}: TransactionRowProps) => {
  const cardColors = {
    visa: 'bg-blue-600',
    mastercard: 'bg-emerald-600',
    black: 'bg-slate-800'
  };

  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-7 ${cardColors[cardType]} rounded flex items-center justify-center text-white text-xs font-bold shadow-md`}>
            {cardType === 'visa' && 'VISA'}
            {cardType === 'mastercard' && 'MC'}
            {cardType === 'black' && '■'}
          </div>
          <div className="text-sm text-slate-600 font-mono">•••• •••• •••• {cardNumber}</div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-slate-700">{date}</div>
      </td>
      <td className="px-6 py-4">
        <StatusBadge status={status} />
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          {isMerchant && recipientAvatar ? (
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 overflow-hidden">
              <img src={recipientAvatar} alt={recipientName} className="w-5 h-5 object-contain" />
            </div>
          ) : (
            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${recipientColor} flex items-center justify-center text-white text-xs font-bold shadow-md`}>
              {recipientName.charAt(0)}
            </div>
          )}
          <div className="text-sm font-medium text-slate-700">{recipientName}</div>
        </div>
      </td>
      <td className="px-6 py-4">
        <CategoryBadge category={category} />
      </td>
      <td className="px-6 py-4 text-right">
        <div className="text-sm font-semibold text-slate-800">{amount}</div>
      </td>
      <td className="px-6 py-4 text-center">
        <button className="text-slate-400 hover:text-slate-600 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </td>
    </tr>
  );
};

const TableHeader = () => (
  <thead className="bg-slate-50 border-b border-slate-200">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider w-1/5">Account</th>
      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider w-1/5">
        <div className="flex items-center gap-1 cursor-pointer">
          Date
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </div>
      </th>
      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider w-1/5">
        <div className="flex items-center gap-1 cursor-pointer">
          Status
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </div>
      </th>
      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider w-1/5">Recipient</th>
      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider w-1/5">Category</th>
      <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider w-1/5">Amount</th>
      <th className="px-6 py-3 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider w-1/12"></th>
    </tr>
  </thead>
);

const MonthToggle = ({ month, isOpen, onClick }: { month: string, isOpen: boolean, onClick: () => void }) => (
  <tr className="bg-slate-50/50">
    <td colSpan={7} className="px-6 py-3">
      <button
        className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
        onClick={onClick}
      >
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        {month}
      </button>
    </td>
  </tr>
);

// --- Main Component ---

export default function TransactionsHeader() {
  const [selectedMonth, setSelectedMonth] = useState('February 2025');

  const avatarColors = [
    "from-blue-500 to-blue-600",
    "from-emerald-500 to-emerald-600",
    "from-slate-500 to-slate-600",
    "from-purple-500 to-purple-600",
    "from-pink-500 to-pink-600",
    "from-orange-500 to-orange-600",
    "from-indigo-500 to-indigo-600",
    "from-yellow-500 to-yellow-600",
    "from-green-500 to-green-600",
  ];

  // Helper to get random item
  const getRandomItem = (array: any[]) => array[Math.floor(Math.random() * array.length)];

  // Memoize random recipients to avoid changes on every re-render unless needed
  const randomTransactions = useMemo(() => {
    return [
      { id: 1, cardType: 'visa', cardNumber: '0799', date: 'Feb 17, 2025', status: 'Pending', category: 'Transfer', amount: 'USD 1,500' },
      { id: 2, cardType: 'mastercard', cardNumber: '7586', date: 'Feb 17, 2025', status: 'Success', category: 'Transfer', amount: 'USD 1,500' },
      { id: 3, cardType: 'visa', cardNumber: '0799', date: 'Feb 16, 2025', status: 'Success', category: 'Transfer', amount: 'USD 1,500' },
      { id: 4, cardType: 'visa', cardNumber: '0799', date: 'Feb 16, 2025', status: 'Success', category: 'Rent', amount: 'USD 1,000' },
      { id: 5, cardType: 'mastercard', cardNumber: '7586', date: 'Feb 14, 2025', status: 'Success', category: 'Transfer', amount: 'USD 1,500' },
      { id: 6, cardType: 'visa', cardNumber: '0799', date: 'Feb 13, 2025', status: 'Failed', category: 'Transfer', amount: 'USD 1,500' },
      { id: 7, cardType: 'black', cardNumber: '5560', date: 'Feb 10, 2025', status: 'Success', category: 'Receive', amount: 'USD 1,500' },
      { id: 8, cardType: 'visa', cardNumber: '3557', date: 'Feb 9, 2025', status: 'Success', category: 'Shopping', amount: 'USD 1,500' },
      { id: 9, cardType: 'visa', cardNumber: '3557', date: 'Feb 5, 2025', status: 'Success', category: 'Subscription', amount: 'USD 1,500' },
    ].map(t => {
      const isMerchant = Math.random() > 0.6; // 40% chance of being a merchant
      if (isMerchant) {
        const merchant = getRandomItem(Merchants);
        return { ...t, recipientName: merchant.name, recipientAvatar: merchant.logo, isMerchant: true };
      } else {
        const user = getRandomItem(Users);
        return { ...t, recipientName: `${user.first_name} ${user.last_name}`, recipientColor: getRandomItem(avatarColors), isMerchant: false };
      }
    });
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-800">Transactions activity</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            <button className="ml-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create Payment
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <TableHeader />
          <tbody className="divide-y divide-slate-100">
            <MonthToggle
              month="February 2025"
              isOpen={selectedMonth === 'February 2025'}
              onClick={() => setSelectedMonth(selectedMonth === 'February 2025' ? '' : 'February 2025')}
            />
            {selectedMonth === 'February 2025' && randomTransactions.map((t: any) => (
              <TransactionRow
                key={t.id}
                cardType={t.cardType}
                cardNumber={t.cardNumber}
                date={t.date}
                status={t.status}
                category={t.category}
                amount={t.amount}
                recipientName={t.recipientName}
                recipientAvatar={t.recipientAvatar}
                recipientColor={t.recipientColor}
                isMerchant={t.isMerchant}
              />
            ))}

            <MonthToggle
              month="January 2025"
              isOpen={selectedMonth === 'January 2025'}
              onClick={() => setSelectedMonth(selectedMonth === 'January 2025' ? '' : 'January 2025')}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}