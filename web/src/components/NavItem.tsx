import { group } from "console";
import Image from "next/image";

export default function NavItem({ icon, label, active = false }) {
  const icons = {
        home: "/home.png",
        transactions: "/transactions.png",
        payouts: "/payouts.png",
        messages: "/messages.png",
        notifications: "/notifications.png",
        groups: "/groups.png",
        settings: "/settings.png",
    };

    return (
    <button
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
        active
          ? 'bg-accent text-white shadow-md'
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
      }`}
    >
      <Image src={icons[icon]} alt={label} width={20} height={20} />
      <span>{label}</span>
    </button>
  );
}

