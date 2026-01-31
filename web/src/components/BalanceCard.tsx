export default function BalanceCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative flex items-center justify-between">
                <div>
                    <div className="text-sm text-slate-500 mb-1 flex items-center gap-2">
                        Total balance
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    
                    <div className="text-4xl font-bold text-slate-800">USD 424,540</div>
                    </div>
                    
                    <div className="w-20 h-20">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <circle cx="50" cy="50" r="45" fill="#FCD34D" opacity="0.3" />
                            <circle cx="50" cy="50" r="38" fill="#FCD34D" opacity="0.5" />
                            <circle cx="50" cy="50" r="30" fill="#FCD34D" />
                            <text x="50" y="58" textAnchor="middle" className="text-2xl font-bold" fill="white">$</text>
                        </svg>
                    </div>
            </div>
        </div>
    );
}