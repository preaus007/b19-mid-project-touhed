const TopExpenses = ({ categoryTotals, categoryPercentages }) => {
    return (
        <div>
            <h2 className="text-lg font-bold mb-3">Top Expenses</h2>
            
            {/* Entertainment */}
            <div className="mb-4">
                <div className="flex justify-between">
                    <div>Entertainment</div>
                    <div>₹{categoryTotals.entertainment}</div>
                </div>
                <div className="progress-bar" style={{ width: `${categoryPercentages.entertainment}%` }}></div>
            </div>
            
            {/* Food */}
            <div className="mb-4">
                <div className="flex justify-between">
                    <div>Food</div>
                    <div>₹{categoryTotals.food}</div>
                </div>
                <div className="progress-bar bg-teal-400" style={{ width: `${categoryPercentages.food}%` }}></div>
            </div>
            
            {/* Transport */}
            <div>
                <div className="flex justify-between">
                    <div>Travel</div>
                    <div>₹{categoryTotals.transport}</div>
                </div>
                <div className="progress-bar bg-yellow-500" style={{ width: `${categoryPercentages.transport}%` }}></div>
            </div>
        </div>
    );
};

export default TopExpenses;