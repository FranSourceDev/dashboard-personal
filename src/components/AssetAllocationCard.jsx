import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Stocks', value: 65, color: '#135bec' },
    { name: 'Crypto', value: 25, color: '#0bda5e' },
    { name: 'Cash', value: 10, color: '#94a3b8' },
];

const AssetAllocationCard = () => {
    return (
        <div className="bg-white dark:bg-[#1c1f27] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all h-full flex flex-col justify-between">
            <h4 className="text-slate-900 dark:text-white text-sm font-bold mb-4">Asset Breakdown</h4>
            <div className="flex items-center justify-between">
                <div className="relative size-28 flex items-center justify-center">
                    <div className="size-full absolute inset-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={30}
                                    outerRadius={40}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} cornerRadius={10} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-xs font-bold text-slate-500">3 Assets</span>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    {data.map((item) => (
                        <div key={item.name} className="flex items-center gap-3">
                            <div className="size-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <span className="text-xs font-medium text-slate-500 dark:text-[#9da6b9]">{item.name}</span>
                            <span className="text-xs font-bold text-slate-900 dark:text-white">{item.value}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AssetAllocationCard;
