"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
    const pathname = usePathname();
    return (
        <nav className="sticky top-0 z-50 w-full bg-[#F5F9FA] backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="/logo.svg" alt="PayShare" width={40} height={40} />
                    <Link href="/" className="text-2xl font-bold text-dark hover:text-primary transition-colors tracking-tight">
                        PayShare
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {[
                        { href: "/services", label: "Services" },
                        { href: "/how-it-works", label: "How it works" },
                        { href: "/pricing", label: "Pricing" },
                        { href: "/business", label: "Business" },
                        { href: "/about", label: "About" },
                        { href: "/contact", label: "Contact" },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="cursor-pointer px-5 py-2.5 text-sm font-semibold text-dark hover:text-primary transition-colors">
                        <Link href="/user/dashboard">Login</Link>
                    </button>
                    <button className="cursor-pointer px-6 py-2.5 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-95">
                        <Link href="/sign-up">Sign Up</Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}