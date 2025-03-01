import React from "react";

const Button = ({ text, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`max-w-fit p-2 ${
        type === "income" ? "bg-green-600" : "bg-red-600"
      } rounded-sm font-bold text-slate-100 flex justify-center items-center cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default Button;
