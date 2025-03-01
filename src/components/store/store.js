import { create } from "zustand";

// Helper function to load state from local storage
const loadState = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

// Zustand store with local storage integration
export const useFinanceStore = create((set, get) => ({
  transactions: loadState("transactions", []), // Load transactions from local storage
  balance: loadState("balance", 0),
  expenses: loadState("expenses", 0),

  // Save state to local storage
  saveState: () => {
    const { transactions, balance, expenses } = get();
    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("balance", JSON.stringify(balance));
    localStorage.setItem("expenses", JSON.stringify(expenses));
  },

  // Add a transaction and update local storage
  addTransaction: (transaction) => {
    set((state) => {
      const updatedTransactions = [...state.transactions, transaction];

      // Update balance & expenses based on transaction type
      const updatedBalance =
        transaction.type === "income"
          ? state.balance + transaction.amount
          : state.balance - transaction.amount;

      const updatedExpenses =
        transaction.type === "expense"
          ? state.expenses + transaction.amount
          : state.expenses;

      // Save to local storage
      localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
      localStorage.setItem("balance", JSON.stringify(updatedBalance));
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

      return {
        transactions: updatedTransactions,
        balance: updatedBalance,
        expenses: updatedExpenses,
      };
    });
  },

  // Edit a transaction
  editTransaction: (id, updatedTransaction) => {
    set((state) => {
      const oldTransaction = state.transactions.find((t) => t.id === id);
      if (!oldTransaction) return state;

      // Remove old transaction values from balance/expenses
      let updatedBalance = state.balance;
      let updatedExpenses = state.expenses;

      if (oldTransaction.type === "income") {
        updatedBalance -= oldTransaction.amount;
      } else {
        updatedBalance += oldTransaction.amount;
        updatedExpenses -= oldTransaction.amount;
      }

      // Add updated transaction values
      if (updatedTransaction.type === "income") {
        updatedBalance += updatedTransaction.amount;
      } else {
        updatedBalance -= updatedTransaction.amount;
        updatedExpenses += updatedTransaction.amount;
      }

      // Update transactions list
      const updatedTransactions = state.transactions.map((t) =>
        t.id === id ? { ...t, ...updatedTransaction } : t
      );

      // Save to local storage
      localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
      localStorage.setItem("balance", JSON.stringify(updatedBalance));
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

      return {
        transactions: updatedTransactions,
        balance: updatedBalance,
        expenses: updatedExpenses,
      };
    });
  },

  // Delete a transaction and update local storage
  deleteTransaction: (id) => {
    set((state) => {
      const updatedTransactions = state.transactions.filter(
        (transaction) => transaction.id !== id
      );

      // Recalculate balance and expenses after deletion
      const updatedBalance = updatedTransactions.reduce(
        (acc, transaction) =>
          acc +
          (transaction.type === "income"
            ? transaction.amount
            : -transaction.amount),
        0
      );

      const updatedExpenses = updatedTransactions.reduce(
        (acc, transaction) =>
          acc + (transaction.type === "expense" ? transaction.amount : 0),
        0
      );

      // Save to local storage
      localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
      localStorage.setItem("balance", JSON.stringify(updatedBalance));
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

      return {
        transactions: updatedTransactions,
        balance: updatedBalance,
        expenses: updatedExpenses,
      };
    });
  },
}));
