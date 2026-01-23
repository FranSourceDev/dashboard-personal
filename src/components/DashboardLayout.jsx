import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-y-auto">
                <TopBar />
                <div className="p-8 grid grid-cols-12 gap-6 max-w-[1400px] mx-auto w-full">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
