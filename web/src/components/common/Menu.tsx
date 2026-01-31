"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
    const pathname = usePathname();
    return (
        <nav className="mb-8 flex items-center justify-between max-w-6xl mx-auto mt-4">
            <div className="flex items-center">
                <img src="/logo.svg" alt="PayShare" width={50} height={50} />
                <Link href="/" className="px-2 py-2 text-xl font-bold text-[#01263E] hover:text-primary">PayShare</Link>
            </div>
            <div className="flex items-center ">
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
                        className="px-2 py-2"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
            <div className="">
                <button className="px-2 py-2">Login</button>
                <button className="px-2 py-2">Sign Up</button>
            </div>
        </nav>
    )
}