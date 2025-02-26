import PieChart from "./PieChart";

const SummarySection = ({ 
    walletBalance, 
    expenses, 
    categoryTotals,
    onAddExpenseClick,
    onAddBalanceClick
}) => {
    return (
        <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-700 p-4 rounded-lg">
            {/* Wallet Balance */}
            <div className="summary-card">
                <div className="text-sm text-gray-300 mb-2">Wallet Balance:</div>
                <div className="balance-amount">₹{walletBalance}</div>
                <button 
                    className="add-btn mt-2"
                    onClick={onAddBalanceClick}
                >
                    + Add Income
                </button>
            </div>
            
            {/* Expenses */}
            <div className="summary-card">
                <div className="text-sm text-gray-300 mb-2">Expenses:</div>
                <div className="expense-amount">₹{expenses}</div>
                <button 
                    className="expense-btn mt-2"
                    onClick={onAddExpenseClick}
                >
                    + Add Expense
                </button>
            </div>
            
            {/* Pie Chart */}
            <div className="summary-card flex justify-center items-center">
                <PieChart categoryTotals={categoryTotals} />
            </div>
        </div>
    );
};

export default SummarySection;