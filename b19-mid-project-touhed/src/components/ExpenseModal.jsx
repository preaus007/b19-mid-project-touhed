const ExpenseModal = ({ 
    show, 
    onClose, 
    expense, 
    setExpense, 
    onSubmit, 
    isEditing = false 
}) => {
    if (!show) return null;
    
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-title">{isEditing ? 'Edit' : 'Add'} Expenses</div>
                <input 
                    type="text" 
                    placeholder="Title" 
                    className="input-field"
                    value={expense.title}
                    onChange={(e) => setExpense({...expense, title: e.target.value})}
                />
                <input 
                    type="number" 
                    placeholder="Price" 
                    className="input-field"
                    value={expense.price}
                    onChange={(e) => setExpense({...expense, price: e.target.value})}
                />
                <select 
                    className="input-field"
                    value={expense.category}
                    onChange={(e) => setExpense({...expense, category: e.target.value})}
                >
                    <option value="">Select Category</option>
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="transport">Transport</option>
                </select>
                <input 
                    type="text" 
                    placeholder="dd/mm/yyyy" 
                    className="input-field"
                    value={expense.date}
                    onChange={(e) => setExpense({...expense, date: e.target.value})}
                />
                <button 
                    className="action-btn" 
                    onClick={onSubmit}
                >
                    {isEditing ? 'Update' : 'Add'} Expense
                </button>
                <button 
                    className="cancel-btn" 
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ExpenseModal;