import React from 'react';

const RecentTransactions = () => {
    return (
        <div className="bg-white dark:bg-[#1c1f27] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden transition-all">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h4 className="text-slate-900 dark:text-white text-base font-bold">Recent Transactions</h4>
                <a className="text-primary text-xs font-bold hover:underline" href="#">View All</a>
            </div>
            <div className="flex flex-col">
                <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors border-b border-slate-100 dark:border-slate-800/50 cursor-pointer">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-xl bg-orange-100 dark:bg-orange-500/10 text-orange-600 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">Amazon Marketplace</p>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9]">Dec 24, 2023 • Shopping</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-bold text-slate-900 dark:text-white">-$142.00</p>
                        <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-tight">Completed</p>
                    </div>
                </div>
                <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors border-b border-slate-100 dark:border-slate-800/50 cursor-pointer">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[20px]">currency_bitcoin</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">Coinbase Transfer</p>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9]">Dec 22, 2023 • Crypto</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-bold text-emerald-500">+$2,450.00</p>
                        <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-tight">Completed</p>
                    </div>
                </div>
                <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors border-b border-slate-100 dark:border-slate-800/50 cursor-pointer">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-xl bg-purple-100 dark:bg-purple-500/10 text-purple-600 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[20px]">restaurant</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">Starbucks Coffee</p>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9]">Dec 21, 2023 • Food</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-bold text-slate-900 dark:text-white">-$12.50</p>
                        <p className="text-[10px] font-bold text-amber-500 uppercase tracking-tight">Pending</p>
                    </div>
                </div>
                <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-xl bg-slate-100 dark:bg-slate-500/10 text-slate-600 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[20px]">work</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">Monthly Salary</p>
                            <p className="text-xs text-slate-500 dark:text-[#9da6b9]">Dec 01, 2023 • Income</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-bold text-emerald-500">+$8,500.00</p>
                        <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-tight">Completed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentTransactions;
