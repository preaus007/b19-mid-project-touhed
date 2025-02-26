const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination">
            <div 
                className="page-btn arrow-btn" 
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            >
                ◀
            </div>
            
            {[...Array(totalPages)].map((_, index) => (
                <div 
                    key={index}
                    className={`page-btn ${currentPage === index + 1 ? 'active-page' : ''}`}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </div>
            ))}
            
            <div 
                className="page-btn arrow-btn"
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            >
                ▶
            </div>
        </div>
    );
};


export default Pagination;