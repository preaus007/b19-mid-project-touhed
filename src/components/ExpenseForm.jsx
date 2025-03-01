import React, { useEffect, useState } from "react";
import { useFinanceStore } from "./store/store";

const ExpenseForm = ({ setOpen, editTnx = null }) => {
  const [transaction, setTransaction] = useState({
    title: "",
    category: "",
    amount: "",
    type: "expense",
    date: "",
  });

  useEffect(() => {
    if (editTnx) {
      setTransaction(editTnx);
    }
  }, [editTnx]); // Run only when editTnx changes

  const { addTransaction, editTransaction } = useFinanceStore();

  const handleChange = (e) => {
    setTransaction({
      ...transaction,
      [e.target.name]:
        e.target.name === "amount" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!transaction.title || !transaction.amount) return;

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
      title: "",
      amount: "",
      category: "",
      type: "expense",
      date: "",
    });
  };

  return (
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
          type="text"
          placeholder="Title"
          name="title"
          value={transaction.title}
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "14px",
          }}
          required
        />

        <input
          type="number"
          placeholder="Amount"
          name="amount"
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

        <select
          value={transaction.category}
          onChange={handleChange}
          name="category"
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "14px",
            appearance: "none",
            backgroundColor: "white",
          }}
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="entertainment">Entertainment</option>
          <option value="utilities">Utilities</option>
          <option value="other">Other</option>
        </select>

        <input
          type="date"
          placeholder="dd/mm/yyyy"
          name="date"
          value={transaction.date}
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "14px",
          }}
          required
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <button
          type="submit"
          onClick={handleSubmit}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#F9B84A",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            flex: "1",
          }}
        >
          Add Expense
        </button>

        <button
          type="button"
          onClick={() => setOpen(false)}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            backgroundColor: "#F5F5F5",
            color: "#333",
            cursor: "pointer",
            flex: "1",
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
