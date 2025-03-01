import React from "react";
import WalletBalance from "./WalletBalance";
import Expenses from "./Expenses";
import PiChart from "./PiChart";
import RecentTransactions from "./RecentTransactions";
import TopExpenses from "./TopExpenses";

function ExpenseTracker() {
  return (
    <div className="bg-slate-400 rounded-2xl p-4 lg:p-8">
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center md:space-x-6 space-y-4 md:space-y-0 p-4 bg-slate-200 rounded-xl">
        <div className="w-full md:w-auto flex justify-center">
          <WalletBalance />
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <Expenses />
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <PiChart />
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-x-4 ">
        <RecentTransactions />
        <TopExpenses />
      </div>
    </div>
  );
}

export default ExpenseTracker;
