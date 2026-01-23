import React from 'react';

const Sidebar = () => {
    return (
        <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111318] flex flex-col justify-between p-4 transition-colors">
            <div className="flex flex-col gap-8">
                <div className="flex items-center gap-3 px-2">
                    <div className="bg-primary rounded-lg p-2 text-white">
                        <span className="material-symbols-outlined">payments</span>
                    </div>
                    <div>
                        <h1 className="text-slate-900 dark:text-white text-base font-bold leading-none">FinanceDash</h1>
                        <p className="text-slate-500 dark:text-[#9da6b9] text-[11px] font-medium uppercase tracking-wider mt-1">V1.0.4 PRO</p>
                    </div>
                </div>
                <nav className="flex flex-col gap-1">
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-white shadow-lg shadow-primary/20" href="#">
                        <span className="material-symbols-outlined text-[22px]">grid_view</span>
                        <p className="text-sm font-semibold">Portfolio</p>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#282e39] transition-colors" href="#">
                        <span className="material-symbols-outlined text-[22px]">monitoring</span>
                        <p className="text-sm font-medium">Markets</p>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#282e39] transition-colors" href="#">
                        <span className="material-symbols-outlined text-[22px]">receipt_long</span>
                        <p className="text-sm font-medium">Transactions</p>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#282e39] transition-colors" href="#">
                        <span className="material-symbols-outlined text-[22px]">account_balance_wallet</span>
                        <p className="text-sm font-medium">Wallets</p>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#282e39] transition-colors mt-4" href="#">
                        <span className="material-symbols-outlined text-[22px]">settings</span>
                        <p className="text-sm font-medium">Settings</p>
                    </a>
                </nav>
            </div>
            <div className="flex flex-col gap-4">
                <div className="p-4 bg-slate-50 dark:bg-[#1c1f27] rounded-xl border border-slate-200 dark:border-slate-800">
                    <p className="text-xs font-semibold text-slate-500 dark:text-[#9da6b9] mb-2">UPGRADE PLAN</p>
                    <p className="text-sm text-slate-900 dark:text-white mb-3">Get advanced analytics and insights.</p>
                    <button className="w-full bg-primary hover:bg-blue-600 text-white text-xs font-bold py-2 rounded-lg transition-colors cursor-pointer">Go Pro</button>
                </div>
                <div className="flex items-center gap-3 px-2">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzMlJmw1oyGc_IFELzBesXPsVbQeOZayQpMdiXd2u_5bHDjH3jqGwwvkDWR9QRbAgg0UsS-RsS6kKor6sHzP8zB2IVsqI9T0VVKV8EcuiFbryNyAE_1Xpbn8o2SyswAONfTQc_Ci73yNkVqWETOANEXBk2d4JL-quEiGx8cu8-uTwGFUSuDpiNVfcSQ1cw3ZTdiagJ4tNhzxirpJJJteWtQuoTrs0jbMKIaMikZsGz9fi7HNUWvh6sq1goTCjkdNktcFtEdaZag_8")' }}></div>
                    <div className="flex flex-col">
                        <h1 className="text-slate-900 dark:text-white text-sm font-bold leading-tight">Alex Sterling</h1>
                        <p className="text-slate-500 dark:text-[#9da6b9] text-xs font-normal">Premium Account</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
