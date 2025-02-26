/* eslint-disable react/prop-types */
import { useState } from "react";
import Pagination from "./Pagination";

const TransactionList = ({ transactions, onTransactionClick }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Number of transactions to show per page
    
    // Calculate total pages
    const totalPages = Math.ceil(transactions.length / itemsPerPage);
    
    // Get current page transactions
    const currentTransactions = transactions.slice(
        (currentPage - 1) * itemsPerPage, 
        currentPage * itemsPerPage
    );
    
    return (
        <div>
            <h2 className="text-lg font-bold mb-3">Recent Transactions</h2>
            
            {currentTransactions.map(transaction => (
                <div 
                    key={transaction.id} 
                    className="expense-row"
                    onClick={() => onTransactionClick(transaction)}
                >
                    <div className="icon-circle">{getCategoryIcon(transaction.category)}</div>
                    <div className="flex-1">
                        <div>{transaction.title}</div>
                        <div className="text-xs text-gray-400">{transaction.date}</div>
                    </div>
                    <div className="text-yellow-400 font-bold">₹{transaction.amount}</div>
                    <div className={`category-dot dot-${transaction.category}`}></div>
                </div>
            ))}
            
            {totalPages > 1 && (
                <Pagination  
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={setCurrentPage} 
                />
            )}
        </div>
    );
};

export default TransactionList;