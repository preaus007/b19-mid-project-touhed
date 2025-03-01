import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useFinanceStore } from "./store/store";
import ExpenseForm from "./ExpenseForm";
import AddBalanceForm from "./AddBalanceForm";
import ExpenseModal from "./ExpenseModal";

const TransactionItems = ({ transaction }) => {
  const { deleteTransaction, transactions, editTransaction } =
    useFinanceStore();
  const [tnx, setTnx] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    deleteTransaction(transaction.id);
  };

  const handleEdit = () => {
    const selectedTransaction = transactions.find(
      (t) => t.id === transaction.id
    );
    if (selectedTransaction) {
      setTnx(selectedTransaction);
    }
    setOpen(true);
  };

  return (
    <div className="flex justify-between items-center border-b-2">
      <div className=" w-full flex justify-between items-center px-2">
        <div>
          <h3>{transaction.title}</h3>
          <p>{transaction.date}</p>
        </div>
        <div>
          <p>{transaction.amount}</p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 px-2">
        <button className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-red-200">
          <AiTwotoneDelete onClick={handleDelete} />
        </button>
        <button className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-orange-200">
          <FaRegEdit onClick={handleEdit} />
        </button>
        <ExpenseModal open={open} onClose={() => setOpen(false)}>
          {transaction.type === "income" ? (
            <AddBalanceForm setOpen={setOpen} editTnx={tnx} />
          ) : (
            <ExpenseForm setOpen={setOpen} editTnx={tnx} />
          )}
        </ExpenseModal>
      </div>
    </div>
  );
};

export default TransactionItems;
