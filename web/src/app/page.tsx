import Link from "next/link";
import Menu from "@/components/common/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F9FA]">
      <Menu />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 pt-4 pb-12 flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">

          {/* Left Column */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-3">
              <span className="inline-block px-3 text-md font-bold text-primary font-epilogue">
                Merchants
              </span>
              <p className="text-gray-500 text-sm font-medium mb-15">
                Trusted by 50,000+ businesses worldwide
              </p>
              <div className="relative inline-block">
                <h1 className="text-6xl md:text-7xl font-black text-[#01263E] tracking-tighter leading-none">
                  Share is Growth
                  <span className="inline-block ml-3 text-[#2CEBCB]">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                  </span>
                </h1>
              </div>
            </div>

            <div className="mt-15 grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-dark">I'm a Business</h3>
                <p className="text-gray-500 leading-relaxed text-xs">
                  Accept global payments instantly, reduce fees, and grow your revenue.
                </p>
                <Link href="/get-started" className="inline-flex items-center text-dark text-sm font-bold hover:gap-2 transition-all group">
                  Get Started <span className="ml-1 text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                </Link>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-dark">I'm a User</h3>
                <p className="text-gray-500 leading-relaxed text-xs">
                  Together, we can share and pay easily.
                </p>
                <Link href="/get-started" className="inline-flex items-center text-dark text-sm font-bold hover:gap-2 transition-all group">
                  Get Started <span className="ml-1 text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Overlays */}
          <div className="relative max-w-[500px] lg:ml-auto">
            <div className="rounded-[32px] overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="/share.jpg"
                alt="Hero"
                width={500}
                height={625}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Overlay: Customer Activity */}
            <div className="absolute -top-4 -left-8 bg-[#3498A0] text-white p-3 rounded-xl shadow-lg w-56 hidden xl:block animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-bold text-[8px]">EH</div>
                    <div>
                      <div className="font-medium">Esther Howard</div>
                      <div className="opacity-70">Paid: $1250</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#2CEBCB]">★</span>
                    <span>4.8</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-bold text-[8px]">JW</div>
                    <div>
                      <div className="font-bold">Jenny Wilson</div>
                      <div className="opacity-70">Paid: $1250</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#2CEBCB]">★</span>
                    <span>4.8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlay: Payment Gateway */}
            <div className="absolute bottom-30 -right-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-64 hidden xl:block animate-in fade-in slide-in-from-right-4 duration-700">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-dark text-xs">Payment Gateway</h4>
                  <div className="flex items-center gap-1.5 text-[9px]">
                    <span className="text-gray-400 font-medium">Status:</span>
                    <span className="text-[#3498A0] font-extrabold uppercase tracking-tight">Live</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[9px] text-gray-400">Received today:</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-dark tracking-tight">$22,025 USD</span>
                  <div className="flex gap-1">
                    <div className="w-5 h-5 rounded-full bg-[#444CDB]/10 flex items-center justify-center text-[5px]">🟣</div>
                    <div className="w-5 h-5 rounded-full bg-[#2CEBCB]/10 flex items-center justify-center text-[5px]">🟢</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlay: Merchant Balance */}
            <div className="absolute -bottom-12 right-52 bg-[#01263E] text-white p-4 rounded-xl shadow-2xl w-72 hidden md:block border border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-bold text-xs">Merchant Balance</h4>
                  <div className="flex items-center gap-1.5 text-[9px]">
                    <span className="opacity-60 font-medium">Status:</span>
                    <span className="text-[#2CEBCB] font-bold">Verified</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[9px] opacity-60">Allocated Fund:</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-tight">$52,500 USD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
