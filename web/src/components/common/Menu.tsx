"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Menu() {
    const pathname = usePathname();
    return (
        <nav className="mb-8 flex gap-4">
            {[
                {href: "/services", label: "Services"},
                {href: "/how-it-works", label: "How it works"},
                {href: "/pricing", label: "Pricing"},
                {href: "/business", label: "Business"},
                {href: "/about", label: "About"},
                {href: "/contact", label: "Contact"},
            ].map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200"
                >
                    {item.label}
                </Link>
            ))}
          <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200">Login</button>
          <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200">Sign Up</button>
        </nav>
    )
}