import Link from "next/link";
import NavItem from "./../NavItem";

export default function Sidebar({ activeItem = '' }) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="PayShare" width={40} height={40} />
          <Link href="/" className="text-2xl font-bold text-dark hover:text-primary transition-colors tracking-tight">
            PayShare
          </Link>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b border-slate-100">
        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold shadow-md">
            ME
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-slate-800">Merchant</div>
            <div className="text-xs text-blue-600 font-medium">Buissiness account · Free Trial</div>
          </div>
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <Link href="/user/dashboard">
          <NavItem icon="home" label="Dashboard" active={activeItem === 'dashboard'} />
        </Link>

        <Link href="/merchant/payouts">
          <NavItem icon="payouts" label="Payouts" active={activeItem === 'payouts'} />
        </Link>

        <Link href="/merchant/transactions">
          <NavItem icon="transactions" label="Transactions" active={activeItem === 'transactions'} />
        </Link>

        <Link href="/user/groups">
          <NavItem icon="groups" label="Groups" active={activeItem === 'groups'} />
        </Link>

        <NavItem icon="messages" label="Messages" active={activeItem === 'messages'} />

        <Link href="/user/notifications">
          <NavItem icon="notifications" label="Notifications" active={activeItem === 'notifications'} />
        </Link>

      </nav>

      {/* Bottom actions */}
      <div className="p-4 space-y-2 border-t border-slate-100">
        <NavItem icon="settings" label="Settings" active={activeItem === 'settings'} />
      </div>
    </aside>
  );
}
