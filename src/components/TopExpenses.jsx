import React from "react";
import { useFinanceStore } from "./store/store"; // Import the store
import HorizontalBar from "./HorizontalBarChart";

const TopExpenses = () => {
  const { transactions, expenses } = useFinanceStore(); // Get all transactions from the store

  // Group transactions by category and sum their values
  const groupedExpenses = transactions.reduce((acc, transaction) => {
    if (transaction.type === "expense") {
      if (!acc[transaction.category]) {
        acc[transaction.category] = 0;
      }
      acc[transaction.category] += transaction.amount;
    }
    return acc;
  }, {});

  // Normalize expenses to a range of 100 (percentage of total)
  const sortedExpenses = Object.entries(groupedExpenses)
    .map(([name, value]) => ({
      name,
      value: expenses > 0 ? (value / expenses) * 100 : 0, // Normalize
    }))
    .sort((a, b) => b.value - a.value); // Sort by value in descending order

  return (
    <div className="md:w-1/2">
      <h2 className="text-2xl py-2">Top Expenses</h2>
      <div className="space-y-2 p-4 bg-slate-200 rounded-xl">
        {sortedExpenses.map((expense) => (
          <HorizontalBar
            key={expense.name}
            name={expense.name}
            value={expense.value}
            max={100} // Max value is 100 as it's a percentage
          />
        ))}
      </div>
    </div>
  );
};

export default TopExpenses;
