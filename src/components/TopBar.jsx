import React from 'react';

const TopBar = () => {
    return (
        <header className="flex items-center justify-between sticky top-0 z-10 bg-white/80 dark:bg-[#101622]/80 backdrop-blur-md border-b border-slate-200 dark:border-[#282e39] px-8 py-4 transition-colors">
            <div className="flex items-center gap-6">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard Overview</h2>
                <label className="hidden md:flex flex-col min-w-64 !h-10">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-slate-100 dark:bg-[#282e39] transition-colors">
                        <div className="text-slate-400 dark:text-[#9da6b9] flex items-center justify-center pl-4">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </div>
                        <input className="w-full border-none bg-transparent focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-[#9da6b9] px-3 text-sm font-medium focus:outline-none" placeholder="Search assets, markers..." />
                    </div>
                </label>
            </div>
            <div className="flex items-center gap-4">
                <button className="p-2 rounded-xl bg-slate-100 dark:bg-[#282e39] text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-[#343b48] transition-colors relative cursor-pointer">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#282e39]"></span>
                </button>
                <button className="flex items-center gap-2 bg-slate-100 dark:bg-[#282e39] text-slate-900 dark:text-white px-3 py-2 rounded-xl text-sm font-bold hover:bg-slate-200 dark:hover:bg-[#343b48] transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    <span>Add Asset</span>
                </button>
            </div>
        </header>
    );
};

export default TopBar;
