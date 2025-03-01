import React from "react";
import TransactionItems from "./TransactionItems";
import Pagination from "./Pagination";
import { useFinanceStore } from "./store/store";
import { useState } from "react";

const RecentTransactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const { transactions } = useFinanceStore();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedTransactions = transactions.slice(startIndex, endIndex);

  const totalPage = Math.ceil(transactions.length / itemsPerPage);

  return (
    <div className="md:w-1/2">
      <h1 className="text-2xl py-2">Recent Transactions</h1>
      <div className="space-y-2 p-4 bg-slate-200 rounded-xl">
        {displayedTransactions.map((transaction) => (
          <TransactionItems key={transaction.id} transaction={transaction} />
        ))}
        <div className="flex justify-center">
          <Pagination
            totalPages={totalPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
