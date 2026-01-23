import React from 'react';

const BalanceCard = () => {
    return (
        <div className="bg-white dark:bg-[#1c1f27] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group transition-all">
            <div className="absolute -right-4 -top-4 size-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-slate-500 dark:text-[#9da6b9] text-sm font-medium">Total Balance</p>
                    <div className="flex items-center gap-1 text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full text-[11px] font-bold">
                        <span className="material-symbols-outlined text-[14px]">trending_up</span>
                        +4.2%
                    </div>
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">$128,430.50</h3>
                <div className="flex items-center gap-4">
                    <div className="flex-1 h-12 flex items-end gap-1">
                        <div className="w-2 bg-slate-200 dark:bg-slate-800 rounded-t h-[40%]"></div>
                        <div className="w-2 bg-slate-200 dark:bg-slate-800 rounded-t h-[60%]"></div>
                        <div className="w-2 bg-slate-200 dark:bg-slate-800 rounded-t h-[45%]"></div>
                        <div className="w-2 bg-slate-200 dark:bg-slate-800 rounded-t h-[75%]"></div>
                        <div className="w-2 bg-primary rounded-t h-[90%]"></div>
                        <div className="w-2 bg-primary rounded-t h-[100%]"></div>
                    </div>
                    <button className="bg-primary hover:bg-blue-600 text-white p-2 rounded-lg transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BalanceCard;
