"use client";
import Sidebar from '@/components/common/SideBar';
import { useState } from 'react';

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
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            All ({notifications.length})
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              filter === 'unread'
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
    </div>
  );
}

function NotificationCard({ 
  notification, 
  onMarkAsRead 
}: { 
  notification: Notification;
  onMarkAsRead: (id: number) => void;
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
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Accept
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
              Decline
            </button>
          </div>
        );
      default:
        return (
          <button
            onClick={() => onMarkAsRead(notification.id)}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            View
          </button>
        );
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl border transition-all hover:shadow-md ${
        notification.read 
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
                  onClick={() => onMarkAsRead(notification.id)}
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