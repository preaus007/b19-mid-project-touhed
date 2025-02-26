const BalanceModal = ({ show, onClose, incomeAmount, setIncomeAmount, onAddBalance }) => {
    if (!show) return null;
    
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-title">Add Balance</div>
                <input 
                    type="number" 
                    placeholder="Income Amount" 
                    className="input-field"
                    value={incomeAmount}
                    onChange={(e) => setIncomeAmount(e.target.value)}
                />
                <div className="flex space-x-2">
                    <button className="action-btn flex-1" onClick={onAddBalance}>Add Balance</button>
                    <button className="cancel-btn flex-1" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default BalanceModal;