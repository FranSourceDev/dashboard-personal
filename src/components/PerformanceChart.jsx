import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'JAN', value: 4000 },
    { name: 'FEB', value: 3000 },
    { name: 'MAR', value: 2000 },
    { name: 'APR', value: 2780 },
    { name: 'MAY', value: 1890 },
    { name: 'JUN', value: 2390 },
    { name: 'JUL', value: 3490 },
    { name: 'AUG', value: 4000 },
    { name: 'SEP', value: 3000 },
    { name: 'OCT', value: 5000 },
    { name: 'NOV', value: 6000 },
    { name: 'DEC', value: 7000 },
];

const PerformanceChart = () => {
    return (
        <div className="bg-white dark:bg-[#1c1f27] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6 transition-all">
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="text-slate-900 dark:text-white text-lg font-bold">Portfolio Performance</h4>
                    <p className="text-slate-500 dark:text-[#9da6b9] text-xs mt-1">Net profit growth over the last 12 months</p>
                </div>
                <div className="flex bg-slate-100 dark:bg-[#282e39] p-1 rounded-lg">
                    <button className="px-3 py-1 text-xs font-bold rounded-md text-slate-500 dark:text-[#9da6b9] hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">1M</button>
                    <button className="px-3 py-1 text-xs font-bold rounded-md bg-white dark:bg-[#1c1f27] text-slate-900 dark:text-white shadow-sm transition-all">6M</button>
                    <button className="px-3 py-1 text-xs font-bold rounded-md text-slate-500 dark:text-[#9da6b9] hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">1Y</button>
                    <button className="px-3 py-1 text-xs font-bold rounded-md text-slate-500 dark:text-[#9da6b9] hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">ALL</button>
                </div>
            </div>
            <div className="h-64 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#135bec" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#135bec" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.1} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 11, fontWeight: 'bold', fill: '#94a3b8' }}
                            dy={10}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                            itemStyle={{ color: '#fff' }}
                            cursor={{ stroke: '#135bec', strokeWidth: 2 }}
                        />
                        <Area type="monotone" dataKey="value" stroke="#135bec" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PerformanceChart;
