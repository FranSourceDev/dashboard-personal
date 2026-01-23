import React from 'react';
import DashboardLayout from './components/DashboardLayout';
import BalanceCard from './components/BalanceCard';
import AssetAllocationCard from './components/AssetAllocationCard';
import PerformanceChart from './components/PerformanceChart';
import RecentTransactions from './components/RecentTransactions';
import MarketTrends from './components/MarketTrends';

function App() {
  return (
    <DashboardLayout>
      {/* Left & Middle Column (Main Data) */}
      <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          {/* h-full added to ensure AssetAllocationCard matches height if needed, though they seem independent rows usually. 
            Actually AssetAllocationCard had h-full to flex-col justified space. 
            BalanceCard has fixed content. 
            Let's keep it simple. */}
          <BalanceCard />
          <AssetAllocationCard />
        </div>
        <PerformanceChart />
      </div>

      {/* Right Column (Transactions & Market) */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
        <RecentTransactions />
        <MarketTrends />
      </div>
    </DashboardLayout>
  );
}

export default App;
