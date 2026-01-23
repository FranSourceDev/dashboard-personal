import React from 'react';

const AntigravityDashboard = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen flex h-screen overflow-hidden font-display">
            {/* SideNavBar */}
            <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111318] flex flex-col justify-between p-4">
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
                        <button className="w-full bg-primary hover:bg-blue-600 text-white text-xs font-bold py-2 rounded-lg transition-colors">Go Pro</button>
                    </div>
                    <div className="flex items-center gap-3 px-2">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20"
                            data-alt="User profile avatar portrait"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzMlJmw1oyGc_IFELzBesXPsVbQeOZayQpMdiXd2u_5bHDjH3jqGwwvkDWR9QRbAgg0UsS-RsS6kKor6sHzP8zB2IVsqI9T0VVKV8EcuiFbryNyAE_1Xpbn8o2SyswAONfTQc_Ci73yNkVqWETOANEXBk2d4JL-quEiGx8cu8-uTwGFUSuDpiNVfcSQ1cw3ZTdiagJ4tNhzxirpJJJteWtQuoTrs0jbMKIaMikZsGz9fi7HNUWvh6sq1goTCjkdNktcFtEdaZag_8")' }}
                        ></div>
                        <div className="flex flex-col">
                            <h1 className="text-slate-900 dark:text-white text-sm font-bold leading-tight">Alex Sterling</h1>
                            <p className="text-slate-500 dark:text-[#9da6b9] text-xs font-normal">Premium Account</p>
                        </div>
                    </div>
                </div>
            </aside>
            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-y-auto">
                {/* TopNavBar */}
                <header className="flex items-center justify-between sticky top-0 z-10 bg-white/80 dark:bg-[#101622]/80 backdrop-blur-md border-b border-slate-200 dark:border-[#282e39] px-8 py-4">
                    <div className="flex items-center gap-6">
                        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard Overview</h2>
                        <label className="hidden md:flex flex-col min-w-64 !h-10">
                            <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-slate-100 dark:bg-[#282e39]">
                                <div className="text-slate-400 dark:text-[#9da6b9] flex items-center justify-center pl-4">
                                    <span className="material-symbols-outlined text-[20px]">search</span>
                                </div>
                                <input className="w-full border-none bg-transparent focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-[#9da6b9] px-3 text-sm font-medium focus:outline-none" placeholder="Search assets, markers..." />
                            </div>
                        </label>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-xl bg-slate-100 dark:bg-[#282e39] text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-[#343b48] transition-colors relative">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#282e39]"></span>
                        </button>
                        <button className="flex items-center gap-2 bg-slate-100 dark:bg-[#282e39] text-slate-900 dark:text-white px-3 py-2 rounded-xl text-sm font-bold hover:bg-slate-200 dark:hover:bg-[#343b48] transition-colors">
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            <span>Add Asset</span>
                        </button>
                    </div>
                </header>
                {/* Dashboard Content */}
                <div className="p-8 grid grid-cols-12 gap-6 max-w-[1400px] mx-auto w-full">
                    {/* Left & Middle Column (Main Data) */}
                    <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Total Balance Card */}
                            <div className="bg-white dark:bg-[#1c1f27] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
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
                                        <button className="bg-primary hover:bg-blue-600 text-white p-2 rounded-lg transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Asset Allocation Card */}
                            <div className="bg-white dark:bg-[#1c1f27] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h4 className="text-slate-900 dark:text-white text-sm font-bold mb-4">Asset Breakdown</h4>
                                <div className="flex items-center justify-between">
                                    <div className="relative size-28 flex items-center justify-center">
                                        <svg className="size-full -rotate-90 transform" viewBox="0 0 100 100">
                                            {/* Donut chart mock */}
                                            <circle cx="50" cy="50" fill="transparent" r="40" stroke="#282e39" strokeWidth="10"></circle>
                                            <circle cx="50" cy="50" fill="transparent" r="40" stroke="#135bec" strokeDasharray="160 251" strokeLinecap="round" strokeWidth="10"></circle>
                                            <circle cx="50" cy="50" fill="transparent" r="40" stroke="#0bda5e" strokeDasharray="60 251" strokeDashoffset="-165" strokeLinecap="round" strokeWidth="10"></circle>
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-xs font-bold text-slate-500">3 Assets</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="size-2 rounded-full bg-primary"></div>
                                            <span className="text-xs font-medium text-slate-500 dark:text-[#9da6b9]">Stocks</span>
                                            <span className="text-xs font-bold text-slate-900 dark:text-white">65%</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="size-2 rounded-full bg-[#0bda5e]"></div>
                                            <span className="text-xs font-medium text-slate-500 dark:text-[#9da6b9]">Crypto</span>
                                            <span className="text-xs font-bold text-slate-900 dark:text-white">25%</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="size-2 rounded-full bg-slate-400"></div>
                                            <span className="text-xs font-medium text-slate-500 dark:text-[#9da6b9]">Cash</span>
                                            <span className="text-xs font-bold text-slate-900 dark:text-white">10%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Main Performance Chart */}
                        <div className="bg-white dark:bg-[#1c1f27] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-slate-900 dark:text-white text-lg font-bold">Portfolio Performance</h4>
                                    <p className="text-slate-500 dark:text-[#9da6b9] text-xs mt-1">Net profit growth over the last 12 months</p>
                                </div>
                                <div className="flex bg-slate-100 dark:bg-[#282e39] p-1 rounded-lg">
                                    <button className="px-3 py-1 text-xs font-bold rounded-md text-slate-500 dark:text-[#9da6b9] hover:text-slate-900 dark:hover:text-white">1M</button>
                                    <button className="px-3 py-1 text-xs font-bold rounded-md bg-white dark:bg-[#1c1f27] text-slate-900 dark:text-white shadow-sm">6M</button>
                                    <button className="px-3 py-1 text-xs font-bold rounded-md text-slate-500 dark:text-[#9da6b9] hover:text-slate-900 dark:hover:text-white">1Y</button>
                                    <button className="px-3 py-1 text-xs font-bold rounded-md text-slate-500 dark:text-[#9da6b9] hover:text-slate-900 dark:hover:text-white">ALL</button>
                                </div>
                            </div>
                            <div className="h-64 w-full relative group">
                                {/* Visual placeholder for a complex area chart */}
                                <div className="absolute inset-0 flex items-end justify-between px-2">
                                    <div className="w-1/12 h-[30%] bg-primary/20 rounded-t border-t-2 border-primary"></div>
                                    <div className="w-1/12 h-[45%] bg-primary/20 rounded-t border-t-2 border-primary"></div>
                                    <div className="w-1/12 h-[40%] bg-primary/20 rounded-t border-t-2 border-primary"></div>
                                    <div className="w-1/12 h-[60%] bg-primary/20 rounded-t border-t-2 border-primary"></div>
                                    <div className="w-1/12 h-[75%] bg-primary/20 rounded-t border-t-2 border-primary"></div>
                                    <div className="w-1/12 h-[65%] bg-primary/20 rounded-t border-t-2 border-primary"></div>
                                    <div className="w-1/12 h-[85%] bg-primary/20 rounded-t border-t-2 border-primary"></div>
                                    <div className="w-1/12 h-[80%] bg-primary/20 rounded-t border-t-2 border-primary"></div>
                                    <div className="w-1/12 h-[90%] bg-primary/20 rounded-t border-t-2 border-primary relative">
                                        <div className="absolute -top-12 -left-8 bg-slate-900 text-white px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                            Nov: $118k
                                        </div>
                                    </div>
                                    <div className="w-1/12 h-[100%] bg-primary/30 rounded-t border-t-2 border-primary relative">
                                        <div className="absolute -top-12 -left-8 bg-slate-900 text-white px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                            Dec: $128k
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 w-full h-px bg-slate-200 dark:bg-slate-800"></div>
                            </div>
                            <div className="flex justify-between text-[11px] font-bold text-slate-400 dark:text-slate-600 px-2">
                                <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span><span>DEC</span>
                            </div>
                        </div>
                    </div>
                    {/* Right Column (Transactions & Market) */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                        <div className="bg-white dark:bg-[#1c1f27] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
                            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                <h4 className="text-slate-900 dark:text-white text-base font-bold">Recent Transactions</h4>
                                <a className="text-primary text-xs font-bold hover:underline" href="#">View All</a>
                            </div>
                            <div className="flex flex-col">
                                {/* Transaction Item */}
                                <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors border-b border-slate-100 dark:border-slate-800/50">
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
                                {/* Transaction Item */}
                                <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors border-b border-slate-100 dark:border-slate-800/50">
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
                                {/* Transaction Item */}
                                <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors border-b border-slate-100 dark:border-slate-800/50">
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
                                {/* Transaction Item */}
                                <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors">
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
                        <div className="bg-primary p-6 rounded-xl border border-primary/20 shadow-xl shadow-primary/10 flex flex-col gap-4 text-white">
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
                            <button className="w-full mt-2 bg-white/10 hover:bg-white/20 py-2 rounded-lg text-xs font-bold transition-colors">Open Market Explorer</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AntigravityDashboard;
