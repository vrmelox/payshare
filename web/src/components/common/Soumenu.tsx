"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { TabletSmartphone, LaptopMinimal, Headphones, Gamepad2, Cable, MonitorPlay, HardDrive } from 'lucide-react';

const Soumenu = () => {
  const pathname = usePathname();

  return (
    <div>
      <nav className="flex md:justify-center overflow-x-auto md:overflow-visible bg-[#1E2334] font-montserrat py-6 md:py-4 gap-6 md:gap-12 px-4 md:px-0 scrollbar-hide">
        {[
          { href: "/categories/tablettes", label: "Tablettes", color: "#FFD743", icon: TabletSmartphone },
          { href: "/categories/pc", label: "PC", color: "#FF8370", icon: LaptopMinimal },
          { href: "/categories/gaming", label: "Gaming", color: "#07BB9C", icon: Gamepad2 },
          { href: "/categories/casques", label: "Casques", color: "#FB5490", icon: Headphones },
          { href: "/categories/moniteurs", label: "Moniteurs", color: "#E42256", icon: MonitorPlay },
          { href: "/categories/imprimantes", label: "Imprimantes", color: "#07BB9C", icon: Cable },
          { href: "/categories/accessoires", label: "Accessoires", color: "#FF8370", icon: HardDrive },
        ].map(({ href, label, color, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="relative flex flex-col items-center justify-center min-w-[70px] md:min-w-0 gap-2 text-[12px] md:text-[14px] font-medium transition-colors hover:text-[#FAD02C] group py-2 md:py-0"
          >
            <div className="relative">
              <Icon size={28} className="text-white md:w-[35px] md:h-[35px]" />
              {href === "/categories/tablettes" || href === "/categories/gaming" || href === "/categories/moniteurs" || href === "/categories/accessoires" ? (
                <div
                  className="absolute top-0 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
              ) : (
                <div
                  className="absolute top-0 -right-1 text-lg md:text-xl font-bold leading-none"
                  style={{ color: color }}
                >
                  \\
                </div>
              )}
            </div>

            <div className="text-white relative whitespace-nowrap">
              {label}
              <div
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Soumenu;