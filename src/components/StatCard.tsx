interface StatCardProps {
    label: string;
    value: string | number;
    icon: string;
    trend?: 'up' | 'down' | 'neutral';
    color?: 'green' | 'red' | 'blue' | 'gray';
}

export default function StatCard({ label, value, icon, trend, color = 'gray' }: StatCardProps) {
    const colorClasses = {
        green: 'text-green-600',
        red: 'text-red-600',
        blue: 'text-blue-600',
        gray: 'text-gray-900',
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-600 mb-1">{label}</p>
                    <p className={`text-3xl font-bold ${colorClasses[color]}`}>
                        {value}
                    </p>
                    {trend && (
                        <p className="text-xs text-gray-500 mt-1">
                            {trend === 'up' ? '↗ En hausse' : trend === 'down' ? '↘ En baisse' : '→ Stable'}
                        </p>
                    )}
                </div>
                <div className="text-4xl">{icon}</div>
            </div>
        </div>
    );
}
