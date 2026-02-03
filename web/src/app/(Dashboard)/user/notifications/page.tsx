"use client";
import Sidebar from '@/components/common/SideBar';
import { useState, useEffect } from 'react';

interface Notification {
  id: number;
  type: 'payment_request' | 'payment_received' | 'group_invite' | 'payment_reminder' | 'group_update' | 'payment_confirmed';
  title: string;
  message: string;
  time: string;
  icon: string;
  iconBg: string;
  read: boolean;
  amount?: number;
  fromUser?: {
    name: string;
    avatar: string;
  };
  groupName?: string;
  // Simulation Data
  simulationData?: {
    amountToPay: string;
    totalAmount: string;
    totalMembers: number;
    description: string;
  };
}

const notificationsData: Notification[] = [
  {
    id: 1,
    type: 'payment_request',
    title: 'Payment Request from Emma Ryan',
    message: 'Emma Ryan is requesting $450 for "Weekend Dinner" group',
    time: '1h ago',
    icon: '💰',
    iconBg: 'bg-yellow-100',
    read: false,
    amount: 450,
    fromUser: {
      name: 'Emma Ryan Jr.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
    },
    groupName: 'Weekend Dinner'
  },
  {
    id: 2,
    type: 'payment_received',
    title: 'Payment Received',
    message: 'Justin Weber sent you $320 for "Family Trip" expenses',
    time: '2h ago',
    icon: '✅',
    iconBg: 'bg-green-100',
    read: false,
    amount: 320,
    fromUser: {
      name: 'Justin Weber',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Justin'
    },
    groupName: 'Family Trip'
  },
  {
    id: 3,
    type: 'group_invite',
    title: 'New Group Invitation',
    message: 'Adrian Daren invited you to join "Rent Payment" group',
    time: '4h ago',
    icon: '👥',
    iconBg: 'bg-blue-100',
    read: false,
    fromUser: {
      name: 'Adrian Daren',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Adrian'
    },
    groupName: 'Rent Payment'
  },
  {
    id: 4,
    type: 'payment_reminder',
    title: 'Payment Reminder',
    message: 'You owe Roxanne Hills $125 for groceries. Payment due in 2 days',
    time: 'Yesterday',
    icon: '⏰',
    iconBg: 'bg-red-100',
    read: true,
    amount: 125,
    fromUser: {
      name: 'Roxanne Hills',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Roxanne'
    },
    groupName: 'Groceries'
  },
  {
    id: 5,
    type: 'group_update',
    title: 'Group Expense Updated',
    message: 'Cameron Williamson updated the total amount in "Team Lunch" to $840',
    time: 'Yesterday',
    icon: '📝',
    iconBg: 'bg-purple-100',
    read: true,
    amount: 840,
    fromUser: {
      name: 'Cameron Williamson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Cameron'
    },
    groupName: 'Team Lunch'
  },
  {
    id: 6,
    type: 'payment_confirmed',
    title: 'Payment Confirmed',
    message: 'Your payment of $200 to Jenny Wilson has been confirmed',
    time: '30 Jun',
    icon: '✨',
    iconBg: 'bg-teal-100',
    read: true,
    amount: 200,
    fromUser: {
      name: 'Jenny Wilson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jenny'
    },
    groupName: 'Utilities'
  }
];

export default function UserNotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(notificationsData);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  // Simulation States
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success'>('pending');

  useEffect(() => {
    // Load simulated notifications from localStorage
    const savedNotifications = localStorage.getItem('simulated_notifications');
    if (savedNotifications) {
      try {
        const parsed = JSON.parse(savedNotifications);
        setNotifications(prev => [...parsed, ...prev]);
      } catch (e) {
        console.error('Failed to parse notifications', e);
      }
    }
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const handleNotificationClick = (notification: Notification) => {
    if (notification.simulationData) {
      setSelectedNotification(notification);
      markAsRead(notification.id);
    }
  };

  const handleAcceptInvite = () => {
    setShowPaymentModal(true);
    // Keep the detail modal open in background or close it? 
    // Usually replacing it is better for mobile.
    // For this MVP, let's just use conditional rendering in the modal area or close the first one.
    // Let's keep selectedNotification set but switch the view mode.
  };

  const handleValidatePayment = () => {
    setPaymentStatus('success');
  };

  const closeModal = () => {
    setSelectedNotification(null);
    setShowPaymentModal(false);
    setPaymentStatus('pending');
  };

  const filteredNotifications = filter === 'unread'
    ? notifications.filter(n => !n.read)
    : notifications;

  // Group notifications by date
  const groupedNotifications = filteredNotifications.reduce((groups, notif) => {
    let dateGroup = 'Today';
    if (notif.time === 'Yesterday') {
      dateGroup = 'Yesterday';
    } else if (notif.time.includes('Jun')) {
      dateGroup = '30 Jun';
    } else if (notif.time === 'Just now') {
      dateGroup = 'New';
    }

    if (!groups[dateGroup]) {
      groups[dateGroup] = [];
    }
    groups[dateGroup].push(notif);
    return groups;
  }, {} as Record<string, Notification[]>);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeItem="notifications" />

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            <p className="text-gray-500 mt-1">
              You have {unreadCount} notification{unreadCount !== 1 ? 's' : ''} to go through
            </p>
          </div>

          <button
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Mark all as Read
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${filter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
          >
            All ({notifications.length})
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${filter === 'unread'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
          >
            Unread ({unreadCount})
          </button>
        </div>

        {/* Notifications List */}
        <div className="max-w-4xl space-y-6">
          {Object.entries(groupedNotifications).map(([dateGroup, notifs]) => (
            <div key={dateGroup}>
              <h2 className="text-sm font-semibold text-gray-500 mb-3">{dateGroup}</h2>
              <div className="space-y-2">
                {notifs.map((notification) => (
                  <NotificationCard
                    key={notification.id}
                    notification={notification}
                    onMarkAsRead={markAsRead}
                    onClick={() => handleNotificationClick(notification)}
                  />
                ))}
              </div>
            </div>
          ))}

          {filteredNotifications.length === 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">No notifications</h3>
              <p className="text-sm text-gray-500">You're all caught up!</p>
            </div>
          )}
        </div>
      </main>

      {/* Detail / Payment Modal */}
      {selectedNotification && selectedNotification.simulationData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] max-w-lg w-full shadow-2xl overflow-hidden animate-scale-up border border-white/20">

            {!showPaymentModal ? (
              // STEP 1: Notification Detail
              <div className="flex flex-col h-full max-h-[90vh]">
                {/* Header Image/Gradient */}
                <div className="h-32 bg-gradient-to-br from-primary to-primary/80 relative flex items-end p-6">
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={closeModal}
                      className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all text-sm font-medium cursor-pointer"
                    >
                      ✕ Close
                    </button>
                  </div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">Group payment</h2>
                </div>

                <div className="p-8 space-y-8 overflow-y-auto">
                  {/* Creator Info */}
                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <img
                        src={selectedNotification.fromUser?.avatar}
                        alt={selectedNotification.fromUser?.name}
                        className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-primary text-white text-[10px] px-2 py-0.5 rounded-full border-2 border-white">
                        Admin
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-dark/60 uppercase tracking-wider">Invited by</p>
                      <p className="text-xl font-bold text-dark">{selectedNotification.fromUser?.name}</p>
                    </div>
                  </div>

                  {/* Group Info Card */}
                  <div className="bg-light/30 rounded-2xl p-6 border border-light/50">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-dark mb-1">{selectedNotification.groupName}</h3>
                        <p className="text-sm text-dark/60">
                          {selectedNotification.simulationData.description || 'No description provided.'}
                        </p>
                      </div>
                      <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-primary shadow-sm">
                        Trip
                      </span>
                    </div>

                    {/* Simulated Members */}
                    <div className="flex -space-x-3 mb-4">
                      <img className="w-8 h-8 rounded-full border-2 border-white z-30" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Justin" alt="" />
                      <img className="w-8 h-8 rounded-full border-2 border-white z-20" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Adrian" alt="" />
                      <img className="w-8 h-8 rounded-full border-2 border-white z-10" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Roxanne" alt="" />
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-dark/60 z-0">
                        +{selectedNotification.simulationData.totalMembers - 3}
                      </div>
                    </div>

                    <div className="h-px bg-dark/5 my-4"></div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-dark/50 font-medium uppercase">Total Budget</p>
                        <p className="text-lg font-bold text-dark">N{selectedNotification.simulationData.totalAmount}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-dark/50 font-medium uppercase">Your Share</p>
                        <p className="text-2xl font-bold text-primary">N{selectedNotification.simulationData.amountToPay}</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <button
                      onClick={closeModal}
                      className="flex-1 py-4 text-dark font-semibold hover:bg-gray-100 rounded-xl transition-colors border border-gray-200 cursor-pointer"
                    >
                      Decline
                    </button>
                    <button
                      onClick={handleAcceptInvite}
                      className="flex-1 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 transform active:scale-[0.98] cursor-pointer"
                    >
                      Accept Invitation
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // STEP 2: Payment Simulation
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
                  <h2 className="text-xl font-bold text-dark">Confirm Payment</h2>
                  <button onClick={closeModal} className="p-2 hover:bg-gray-200 rounded-full transition-colors text-dark/50 cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {paymentStatus === 'pending' ? (
                  <div className="p-8 space-y-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                        <span className="text-4xl">💳</span>
                      </div>
                      <p className="text-sm font-medium text-dark/50 uppercase tracking-wide mb-2">Total Amount Due</p>
                      <p className="text-5xl font-bold text-dark tracking-tight">
                        N{selectedNotification.simulationData.amountToPay}
                      </p>
                    </div>

                    {/* Breakdown */}
                    <div className="bg-gray-50 rounded-xl p-4 space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-dark/60">Subtotal</span>
                        <span className="font-medium text-dark">N{(parseFloat(selectedNotification.simulationData.amountToPay) * 0.98).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-dark/60">Platform Fee (2%)</span>
                        <span className="font-medium text-dark">N{(parseFloat(selectedNotification.simulationData.amountToPay) * 0.02).toFixed(2)}</span>
                      </div>
                      <div className="h-px bg-gray-200 my-2"></div>
                      <div className="flex justify-between text-base font-bold">
                        <span className="text-dark">Total</span>
                        <span className="text-primary">N{selectedNotification.simulationData.amountToPay}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleValidatePayment}
                      className="w-full py-4 bg-accent text-dark font-bold text-lg rounded-xl hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/30 flex items-center justify-center gap-2 transform active:scale-[0.98] cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        Pay N{selectedNotification.simulationData.amountToPay}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className="p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce-short shadow-green-200 shadow-xl">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>

                    <h3 className="text-3xl font-bold text-dark mb-2">Payment Successful!</h3>
                    <p className="text-dark/60 mb-8 max-w-xs mx-auto">
                      You have successfully contributed to <span className="font-semibold text-dark">{selectedNotification.groupName}</span>.
                    </p>

                    <div className="w-full bg-light/20 rounded-2xl p-6 space-y-4 mb-8 border border-light/60">
                      <div className="flex justify-between items-center border-b border-dark/5 pb-4">
                        <span className="text-dark/60 font-medium">Progress</span>
                        <span className="font-bold text-dark bg-white px-2 py-1 rounded-md shadow-sm text-sm">
                          1 / {selectedNotification.simulationData.totalMembers} paid
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-dark/60 font-medium">Amount</span>
                        <div className="text-right">
                          <span className="block font-bold text-dark">N{selectedNotification.simulationData.amountToPay}</span>
                          <span className="text-xs text-dark/40">of N{selectedNotification.simulationData.totalAmount} total</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={closeModal}
                      className="w-full py-4 bg-dark text-white font-bold rounded-xl hover:bg-dark/90 transition-colors shadow-lg cursor-pointer"
                    >
                      Return to Dashboard
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <style jsx>{`
            @keyframes scale-up {
              from { transform: scale(0.95) translateY(10px); opacity: 0; }
              to { transform: scale(1) translateY(0); opacity: 1; }
            }
            .animate-scale-up {
              animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
             @keyframes bounce-short {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            .animate-bounce-short {
               animation: bounce-short 0.6s ease-out;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}

function NotificationCard({
  notification,
  onMarkAsRead,
  onClick
}: {
  notification: Notification;
  onMarkAsRead: (id: number) => void;
  onClick: () => void;
}) {
  const getActionButton = () => {
    switch (notification.type) {
      case 'payment_request':
        return (
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Pay Now
          </button>
        );
      case 'group_invite':
        return (
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick(); // Trigger main click handler which opens modal
              }}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Invite
            </button>
          </div>
        );
      default:
        return (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMarkAsRead(notification.id);
            }}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            Mark as read
          </button>
        );
    }
  };

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl border transition-all hover:shadow-md cursor-pointer ${notification.read
        ? 'border-gray-200'
        : 'border-blue-200 bg-blue-50/30'
        }`}
    >
      <div className="p-5">
        <div className="flex gap-4">
          {/* Icon */}
          <div className={`w-12 h-12 ${notification.iconBg} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
            {notification.icon}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {notification.title}
                  {!notification.read && (
                    <span className="ml-2 inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                  )}
                </h3>
                <p className="text-sm text-gray-600">{notification.message}</p>
              </div>
              <span className="text-xs text-gray-500 ml-4 whitespace-nowrap">{notification.time}</span>
            </div>

            {/* User Info */}
            {notification.fromUser && (
              <div className="flex items-center gap-2 mt-3 mb-3">
                <img
                  src={notification.fromUser.avatar}
                  alt={notification.fromUser.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-xs text-gray-500">{notification.fromUser.name}</span>
                {notification.groupName && (
                  <>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{notification.groupName}</span>
                  </>
                )}
                {notification.amount && (
                  <>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs font-semibold text-gray-900">${notification.amount}</span>
                  </>
                )}
              </div>
            )}

            {/* Action Button */}
            <div className="flex items-center justify-between mt-4">
              {getActionButton()}

              {!notification.read && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onMarkAsRead(notification.id);
                  }}
                  className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Mark as read
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}