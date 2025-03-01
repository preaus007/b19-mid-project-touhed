import React, { useState } from "react";
import Button from "./Button";
import { useFinanceStore } from "./store/store";
import ExpenseModal from "./ExpenseModal";
import ExpenseForm from "./ExpenseForm";

const btn = {
  text: "Add Expenses",
  type: "expense",
};

const Expenses = () => {
  const { expenses } = useFinanceStore();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full md:w-[300px] flex flex-col items-center space-y-2 rounded-lg bg-amber-200 px-4 py-6">
      <h3 className="text-xl">Expences: {expenses}</h3>
      <Button text={btn.text} type={btn.type} onClick={() => setOpen(true)} />
      <ExpenseModal open={open} onClose={() => setOpen(false)}>
        <ExpenseForm setOpen={setOpen} />
      </ExpenseModal>
    </div>
  );
};

export default Expenses;
