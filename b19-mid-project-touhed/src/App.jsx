import { useState } from "react";
import SummarySection from "./components/SummarySection";
import TransactionList from "./components/TransactionList";
import TopExpenses from "./components/TopExpenses";
import ExpenseModal from "./components/ExpenseModal";
import BalanceModal from "./components/BalanceModal";
import { calculateCategoryPercentages, calculateCategoryTotals } from "./utils/helpers";

const App = () => {
    // State management
    const [walletBalance, setWalletBalance] = useState(4500);
    const [expenses, setExpenses] = useState(500);
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    const [showAddBalanceModal, setShowAddBalanceModal] = useState(false);
    const [showEditExpenseModal, setShowEditExpenseModal] = useState(false);
    const [newExpense, setNewExpense] = useState({ title: '', price: '', category: '', date: '' });
    const [incomeAmount, setIncomeAmount] = useState('');
    const [editingExpense, setEditingExpense] = useState(null);
    
    // Initial transaction data
    const [transactions, setTransactions] = useState([
        { id: 1, title: 'Samosa', date: 'March 20, 2024', amount: 150, category: 'food' },
        { id: 2, title: 'Movie', date: 'March 21, 2024', amount: 300, category: 'entertainment' },
        { id: 3, title: 'Auto', date: 'March 22, 2024', amount: 50, category: 'transport' }
    ]);
    
    // Calculate derived data
    const categoryTotals = calculateCategoryTotals(transactions);
    const categoryPercentages = calculateCategoryPercentages(categoryTotals);
    
    // Event Handlers
    const handleAddExpense = () => {
        if (newExpense.title && newExpense.price && newExpense.category && newExpense.date) {
            const amount = parseFloat(newExpense.price);
            setTransactions([
                ...transactions,
                {
                    id: transactions.length + 1,
                    title: newExpense.title,
                    date: newExpense.date,
                    amount: amount,
                    category: newExpense.category
                }
            ]);
            setExpenses(expenses + amount);
            setWalletBalance(walletBalance - amount);
            setNewExpense({ title: '', price: '', category: '', date: '' });
            setShowAddExpenseModal(false);
        }
    };

    const handleAddBalance = () => {
        if (incomeAmount) {
            const amount = parseFloat(incomeAmount);
            setWalletBalance(walletBalance + amount);
            setIncomeAmount('');
            setShowAddBalanceModal(false);
        }
    };

    const handleTransactionClick = (expense) => {
        setEditingExpense(expense);
        setNewExpense({
            title: expense.title,
            price: expense.amount.toString(),
            category: expense.category,
            date: expense.date
        });
        setShowEditExpenseModal(true);
    };

    const handleUpdateExpense = () => {
        if (newExpense.title && newExpense.price && newExpense.category && newExpense.date) {
            const newAmount = parseFloat(newExpense.price);
            const amountDifference = newAmount - editingExpense.amount;
            
            setTransactions(transactions.map(t => 
                t.id === editingExpense.id 
                    ? { ...t, title: newExpense.title, date: newExpense.date, amount: newAmount, category: newExpense.category }
                    : t
            ));
            
            setExpenses(expenses + amountDifference);
            setWalletBalance(walletBalance - amountDifference);
            setNewExpense({ title: '', price: '', category: '', date: '' });
            setShowEditExpenseModal(false);
            setEditingExpense(null);
        }
    };

    return (
        <div className="app-container">
            <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
            
            {/* Summary Section */}
            <SummarySection 
                walletBalance={walletBalance}
                expenses={expenses}
                categoryTotals={categoryTotals}
                onAddExpenseClick={() => setShowAddExpenseModal(true)}
                onAddBalanceClick={() => setShowAddBalanceModal(true)}
            />
            
            {/* Transactions and Top Expenses */}
            <div className="grid grid-cols-2 gap-4">
                {/* Recent Transactions */}
                <TransactionList 
                    transactions={transactions}
                    onTransactionClick={handleTransactionClick}
                />
                
                {/* Top Expenses */}
                <TopExpenses 
                    categoryTotals={categoryTotals}
                    categoryPercentages={categoryPercentages}
                />
            </div>
            
            {/* Modals */}
            <ExpenseModal 
                show={showAddExpenseModal}
                onClose={() => setShowAddExpenseModal(false)}
                expense={newExpense}
                setExpense={setNewExpense}
                onSubmit={handleAddExpense}
                isEditing={false}
            />
            
            <ExpenseModal 
                show={showEditExpenseModal}
                onClose={() => setShowEditExpenseModal(false)}
                expense={newExpense}
                setExpense={setNewExpense}
                onSubmit={handleUpdateExpense}
                isEditing={true}
            />
            
            <BalanceModal 
                show={showAddBalanceModal}
                onClose={() => setShowAddBalanceModal(false)}
                incomeAmount={incomeAmount}
                setIncomeAmount={setIncomeAmount}
                onAddBalance={handleAddBalance}
            />
        </div>
    );
};

export default App;