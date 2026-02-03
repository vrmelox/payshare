"use client";

import { useState } from 'react';
import Sidebar from '@/components/common/SideBar';

// Simulated user database for search
const usersDatabase = [
  { id: 1, name: "Emma Ryan Jr.", email: "emma.ryan@email.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma" },
  { id: 2, name: "Justin Weber", email: "justin.weber@email.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Justin" },
  { id: 3, name: "Adrian Daren", email: "adrian.daren@email.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adrian" },
  { id: 4, name: "Roxanne Hills", email: "roxanne.hills@email.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roxanne" },
  { id: 5, name: "Cameron Williamson", email: "cameron.w@email.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cameron" },
  { id: 6, name: "Jenny Wilson", email: "jenny.wilson@email.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jenny" },
  { id: 7, name: "Robert Fox", email: "robert.fox@email.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert" },
  { id: 8, name: "Esther Howard", email: "esther.h@email.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Esther" },
];

const merchants = [
  { id: 1, name: "JBL Store", logo: "/jbl.svg" },
  { id: 2, name: "Honda Dealer", logo: "/honda.svg" },
  { id: 3, name: "Dell Electronics", logo: "/dell.svg" },
];

interface SelectedMember {
  id: number;
  name: string;
  email: string;
  avatar: string;
  percentage: number;
}

export default function CreateGroupPage() {
  const [selectedMembers, setSelectedMembers] = useState<SelectedMember[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [formData, setFormData] = useState({
    groupName: '',
    description: '',
    merchantId: '',
    invoiceAmount: ''
  });

  // Filter users based on search query
  const searchResults = usersDatabase.filter(user => 
    !selectedMembers.some(member => member.id === user.id) &&
    (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     user.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const addMember = (user: typeof usersDatabase[0]) => {
    const equalPercentage = 100 / (selectedMembers.length + 1);
    
    // Recalculate percentages for all members
    const updatedMembers = selectedMembers.map(member => ({
      ...member,
      percentage: parseFloat(equalPercentage.toFixed(2))
    }));

    setSelectedMembers([
      ...updatedMembers,
      {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        percentage: parseFloat(equalPercentage.toFixed(2))
      }
    ]);
    
    setSearchQuery('');
    setShowSearchResults(false);
  };

  const removeMember = (memberId: number) => {
    const newMembers = selectedMembers.filter(m => m.id !== memberId);
    
    if (newMembers.length > 0) {
      const equalPercentage = 100 / newMembers.length;
      const updatedMembers = newMembers.map(member => ({
        ...member,
        percentage: parseFloat(equalPercentage.toFixed(2))
      }));
      setSelectedMembers(updatedMembers);
    } else {
      setSelectedMembers([]);
    }
  };

  const updateMemberPercentage = (memberId: number, newPercentage: number) => {
    setSelectedMembers(prev =>
      prev.map(member =>
        member.id === memberId
          ? { ...member, percentage: newPercentage }
          : member
      )
    );
  };

  const redistributeEqually = () => {
    const equalPercentage = 100 / selectedMembers.length;
    setSelectedMembers(prev =>
      prev.map(member => ({
        ...member,
        percentage: parseFloat(equalPercentage.toFixed(2))
      }))
    );
  };

  const totalPercentage = selectedMembers.reduce((sum, member) => sum + member.percentage, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Math.abs(totalPercentage - 100) > 0.01) {
      alert('Total percentage must equal 100%');
      return;
    }
    console.log({
      ...formData,
      members: selectedMembers
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeItem="groups" />
      
      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Create New Group</h1>
          </div>
          <p className="text-gray-500 ml-9">Set up a new payment group and invite members</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-4xl">
          <div className="space-y-6">
            {/* Group Name */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Group Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.groupName}
                onChange={(e) => setFormData({...formData, groupName: e.target.value})}
                placeholder="e.g., Family Trip 2024"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Add a brief description of this group..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Merchant Selection */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <label className="block text-sm font-semibold text-gray-900 mb-4">
                Select Merchant <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {merchants.map((merchant) => (
                  <label
                    key={merchant.id}
                    className={`relative flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      formData.merchantId === merchant.id.toString()
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="merchant"
                      required
                      value={merchant.id}
                      checked={formData.merchantId === merchant.id.toString()}
                      onChange={(e) => setFormData({...formData, merchantId: e.target.value})}
                      className="sr-only"
                    />
                    <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-2">
                      <img 
                        src={merchant.logo} 
                        alt={merchant.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{merchant.name}</span>
                    {formData.merchantId === merchant.id.toString() && (
                      <div className="absolute top-3 right-3 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* Invoice Amount */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Invoice Amount <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                <input
                  type="number"
                  required
                  step="0.01"
                  min="0"
                  value={formData.invoiceAmount}
                  onChange={(e) => setFormData({...formData, invoiceAmount: e.target.value})}
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-semibold"
                />
              </div>
            </div>

            {/* Search and Add Members */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-semibold text-gray-900">
                  Add Members <span className="text-red-500">*</span>
                </label>
                <span className="text-sm text-black">
                  {selectedMembers.length} member{selectedMembers.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Search Box */}
              <div className="relative mb-4">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchResults(true);
                  }}
                  onFocus={() => setShowSearchResults(true)}
                  placeholder="Search users by name or email..."
                  className="w-full pl-10 pr-4 text-black py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                {/* Search Results Dropdown */}
                {showSearchResults && searchQuery && (
                  <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                    {searchResults.length > 0 ? (
                      searchResults.map((user) => (
                        <button
                          key={user.id}
                          type="button"
                          onClick={() => addMember(user)}
                          className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                        >
                          <img 
                            src={user.avatar} 
                            alt={user.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="text-left">
                            <p className="text-sm font-medium text-gray-900">{user.name}</p>
                            <p className="text-xs text-gray-500">{user.email}</p>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="p-4 text-center text-sm text-gray-500">
                        No users found
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Selected Members with Percentage Control */}
              {selectedMembers.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-900">Payment Distribution</h4>
                    <button
                      type="button"
                      onClick={redistributeEqually}
                      className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Split Equally
                    </button>
                  </div>

                  {selectedMembers.map((member) => {
                    const amount = formData.invoiceAmount 
                      ? (parseFloat(formData.invoiceAmount) * member.percentage / 100).toFixed(2)
                      : '0.00';
                    
                    return (
                      <div
                        key={member.id}
                        className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                      >
                        <img 
                          src={member.avatar} 
                          alt={member.name}
                          className="w-12 h-12 rounded-full flex-shrink-0"
                        />
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-gray-900">{member.name}</h3>
                          <p className="text-xs text-gray-500">{member.email}</p>
                        </div>

                        <div className="flex items-center gap-3">
                          {/* Percentage Input */}
                          <div className="relative w-20">
                            <input
                              type="number"
                              min="0"
                              max="100"
                              step="0.01"
                              value={member.percentage}
                              onChange={(e) => updateMemberPercentage(member.id, parseFloat(e.target.value) || 0)}
                              className="w-full pr-6 py-2 text-black text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500">%</span>
                          </div>

                          {/* Amount Display */}
                          <div className="w-24 text-right">
                            <p className="text-sm font-semibold text-gray-900">${amount}</p>
                          </div>

                          {/* Remove Button */}
                          <button
                            type="button"
                            onClick={() => removeMember(member.id)}
                            className="w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    );
                  })}

                  {/* Total Percentage Indicator */}
                  <div className={`flex items-center justify-between p-4 rounded-lg ${
                    Math.abs(totalPercentage - 100) < 0.01
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    <span className="text-sm font-medium text-gray-900">Total</span>
                    <div className="flex items-center gap-4">
                      <span className={`text-lg font-bold ${
                        Math.abs(totalPercentage - 100) < 0.01 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {totalPercentage.toFixed(2)}%
                      </span>
                      {formData.invoiceAmount && (
                        <span className="text-sm font-semibold text-gray-900">
                          ${formData.invoiceAmount}
                        </span>
                      )}
                    </div>
                  </div>

                  {Math.abs(totalPercentage - 100) > 0.01 && (
                    <p className="text-sm text-red-600">
                      ⚠️ Total percentage must equal 100% (currently {totalPercentage.toFixed(2)}%)
                    </p>
                  )}
                </div>
              )}

              {selectedMembers.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-4">
                  Search and add members to this group
                </p>
              )}
            </div>

            {/* Submit Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                type="button"
                className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={selectedMembers.length === 0 || Math.abs(totalPercentage - 100) > 0.01}
                className="flex-1 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Create Group
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
