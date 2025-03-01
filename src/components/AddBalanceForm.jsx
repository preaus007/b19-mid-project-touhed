import React, { useEffect, useState } from "react";
import { useFinanceStore } from "./store/store";

const AddBalanceForm = ({ setOpen, editTnx = null }) => {
  const [transaction, setTransaction] = useState({
    title: "Add money",
    category: "income",
    amount: "",
    type: "income",
    date: "",
  });

  useEffect(() => {
    if (editTnx) {
      setTransaction(editTnx);
    }
  }, [editTnx]); // Run only when editTnx changes

  const { addTransaction, editTransaction } = useFinanceStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!transaction.amount || isNaN(transaction.amount)) return;

    if (editTnx) {
      editTransaction(transaction.id, transaction);
    } else {
      addTransaction({
        ...transaction,
        id: Date.now(),
      });
    }

    // Clear form
    setTransaction({
      title: "Add money",
      category: "income",
      amount: "",
      type: "income",
      date: "",
    });
  };

  const handleChange = (e) => {
    setTransaction({
      ...transaction,
      amount: Number(e.target.value.replace(/[^0-9.]/g, "")),
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div>
      <form>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            marginBottom: "15px",
          }}
        >
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={transaction.amount || ""}
            onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              fontSize: "14px",
            }}
            required
          />
          <div className="flex justify-between gap-2">
            <button
              type="submit"
              onClick={handleSubmit}
              className="p-2.5 rounded-lg border-none bg-[#F9B84A] text-white font-bold cursor-pointer flex-1"
            >
              Add Income
            </button>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-2.5 rounded-lg border-none bg-[#F5F5F5] text-black font-bold cursor-pointer flex-1"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBalanceForm;
