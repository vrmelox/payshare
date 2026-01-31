import React, { useState } from 'react';

export default function TransactionsHeader() {
  const [selectedMonth, setSelectedMonth] = useState('February 2025');

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

          {/* Transactions Table */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
                <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider w-1/5">
                    Account
                    </th>
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
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider w-1/5">
                    Recipient
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider w-1/5">
                    Category
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider w-1/5">
                    Amount
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider w-1/12">
                    {/* Actions */}
                    </th>
                </tr>
                </thead>

              <tbody className="divide-y divide-slate-100">
                {/* February 2025 */}
                <tr className="bg-slate-50/50">
                  <td colSpan={7} className="px-6 py-3">
                    <button 
                      className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                      onClick={() => setSelectedMonth(selectedMonth === 'February 2025' ? '' : 'February 2025')}
                    >
                      <svg 
                        className={`w-4 h-4 transition-transform ${selectedMonth === 'February 2025' ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      February 2025
                    </button>
                  </td>
                </tr>
                
                {selectedMonth === 'February 2025' && (
                  <>
                    <TransactionRow
                      cardType="visa"
                      cardNumber="0799"
                      date="Feb 17, 2025"
                      status="Pending"
                      recipient="Adam Barbara"
                      category="Transfer"
                      amount="USD 1,500"
                      avatarColor="from-blue-500 to-blue-600"
                    />
                    <TransactionRow
                      cardType="mastercard"
                      cardNumber="7586"
                      date="Feb 17, 2025"
                      status="Success"
                      recipient="Cameron Wil..."
                      category="Transfer"
                      amount="USD 1,500"
                      avatarColor="from-emerald-500 to-emerald-600"
                    />
                    <TransactionRow
                      cardType="visa"
                      cardNumber="0799"
                      date="Feb 16, 2025"
                      status="Success"
                      recipient="Floyd Miles"
                      category="Transfer"
                      amount="USD 1,500"
                      avatarColor="from-slate-500 to-slate-600"
                    />
                    <TransactionRow
                      cardType="visa"
                      cardNumber="0799"
                      date="Feb 16, 2025"
                      status="Success"
                      recipient="AHS Rentals"
                      category="Rent"
                      amount="USD 1,000"
                      avatarColor="from-purple-500 to-purple-600"
                    />
                    <TransactionRow
                      cardType="mastercard"
                      cardNumber="7586"
                      date="Feb 14, 2025"
                      status="Success"
                      recipient="Jane Cooper"
                      category="Transfer"
                      amount="USD 1,500"
                      avatarColor="from-pink-500 to-pink-600"
                    />
                    <TransactionRow
                      cardType="visa"
                      cardNumber="0799"
                      date="Feb 13, 2025"
                      status="Failed"
                      recipient="Courtney Ha..."
                      category="Transfer"
                      amount="USD 1,500"
                      avatarColor="from-orange-500 to-orange-600"
                    />
                    <TransactionRow
                      cardType="black"
                      cardNumber="5560"
                      date="Feb 10, 2025"
                      status="Success"
                      recipient="Akmal Nasrul..."
                      category="Receive"
                      amount="USD 1,500"
                      avatarColor="from-indigo-500 to-indigo-600"
                    />
                    <TransactionRow
                      cardType="visa"
                      cardNumber="3557"
                      date="Feb 9, 2025"
                      status="Success"
                      recipient="Amazon"
                      category="Shopping"
                      amount="USD 1,500"
                      avatarColor="from-yellow-500 to-yellow-600"
                    />
                    <TransactionRow
                      cardType="visa"
                      cardNumber="3557"
                      date="Feb 5, 2025"
                      status="Success"
                      recipient="Spotify"
                      category="Subscription"
                      amount="USD 1,500"
                      avatarColor="from-green-500 to-green-600"
                    />
                  </>
                )}

                {/* January 2025 */}
                <tr className="bg-slate-50/50">
                  <td colSpan={7} className="px-6 py-3">
                    <button 
                      className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                    >
                      <svg 
                        className="w-4 h-4"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      January 2025
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    );
}

function TransactionRow({ cardType, cardNumber, date, status, recipient, category, amount, avatarColor }) {
  const statusStyles = {
    Success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Pending: 'bg-amber-50 text-amber-700 border-amber-200',
    Failed: 'bg-red-50 text-red-700 border-red-200'
  };

  const categoryStyles = {
    Transfer: 'bg-blue-50 text-blue-700',
    Rent: 'bg-orange-50 text-orange-700',
    Receive: 'bg-purple-50 text-purple-700',
    Shopping: 'bg-cyan-50 text-cyan-700',
    Subscription: 'bg-slate-50 text-slate-700'
  };

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
        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[status]}`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${avatarColor} flex items-center justify-center text-white text-xs font-bold shadow-md`}>
            {recipient.charAt(0)}
          </div>
          <div className="text-sm font-medium text-slate-700">{recipient}</div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${categoryStyles[category]}`}>
          {category === 'Transfer' && '↑'}
          {category === 'Receive' && '↓'}
          {category === 'Rent' && '🏠'}
          {category === 'Shopping' && '🛍️'}
          {category === 'Subscription' && '📱'}
          {category}
        </span>
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
}