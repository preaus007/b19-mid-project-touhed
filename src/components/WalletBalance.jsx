import { useState } from "react";
import Button from "./Button";
import ExpenseModal from "./ExpenseModal";
import { useFinanceStore } from "./store/store";
import AddBalanceForm from "./AddBalanceForm";

const WalletBalance = () => {
  const { balance } = useFinanceStore();
  const [open, setOpen] = useState(false);

  const btn = {
    text: "Add Money",
    type: "income",
  };

  return (
    <div className="w-full md:w-[300px] rounded-lg flex flex-col items-center space-y-2 bg-amber-200 px-4 py-6">
      <h3 className="text-xl">Wallet balance: {balance}</h3>
      <Button text={btn.text} type={btn.type} onClick={() => setOpen(true)} />
      <ExpenseModal open={open} onClose={() => setOpen(false)}>
        <AddBalanceForm setOpen={setOpen} />
      </ExpenseModal>
    </div>
  );
};

export default WalletBalance;
