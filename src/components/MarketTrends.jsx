import React from 'react';

const MarketTrends = () => {
    return (
        <div className="bg-primary p-6 rounded-xl border border-primary/20 shadow-xl shadow-primary/10 flex flex-col gap-4 text-white transition-all">
            <div className="flex items-center justify-between">
                <h4 className="font-bold text-lg">Market Trends</h4>
                <span className="material-symbols-outlined">trending_up</span>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-white/20 p-1 rounded">
                            <span className="material-symbols-outlined text-[16px]">show_chart</span>
                        </div>
                        <span className="text-sm font-medium">S&P 500</span>
                    </div>
                    <span className="text-sm font-bold">+1.24%</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-white/20 p-1 rounded">
                            <span className="material-symbols-outlined text-[16px]">currency_bitcoin</span>
                        </div>
                        <span className="text-sm font-medium">Bitcoin</span>
                    </div>
                    <span className="text-sm font-bold text-red-200">-0.45%</span>
                </div>
            </div>
            <button className="w-full mt-2 bg-white/10 hover:bg-white/20 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer">Open Market Explorer</button>
        </div>
    );
};

export default MarketTrends;
