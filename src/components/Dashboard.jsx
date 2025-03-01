import React from "react";
import ExpenseTracker from "./ExpenseTracker";

const Dashboard = () => {
  return (
    <div className="mx-8 lg:mx-10">
      <h2 className="text-center text-3xl font-bold my-4">Expense Tracker</h2>
      <ExpenseTracker />
    </div>
  );
};

export default Dashboard;
