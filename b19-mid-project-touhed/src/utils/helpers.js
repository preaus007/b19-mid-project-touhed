// Category-related utility functions
const getCategoryIcon = (category) => {
    switch(category) {
        case 'food': return '🍔';
        case 'entertainment': return '🎬';
        case 'transport': return '🚗';
        default: return '💰';
    }
};

// Colors for each category
const categoryColors = {
    entertainment: '#7e64ff', // Purple
    food: '#4ECDC4',         // Teal
    transport: '#FF9F1C'     // Orange
};

// Calculate category totals from transaction list
const calculateCategoryTotals = (transactions) => {
    return {
        food: transactions.filter(t => t.category === 'food')
            .reduce((sum, t) => sum + t.amount, 0),
        entertainment: transactions.filter(t => t.category === 'entertainment')
            .reduce((sum, t) => sum + t.amount, 0),
        transport: transactions.filter(t => t.category === 'transport')
            .reduce((sum, t) => sum + t.amount, 0)
    };
};

// Calculate percentages for each category
const calculateCategoryPercentages = (categoryTotals) => {
    const totalSpending = Object.values(categoryTotals).reduce((a, b) => a + b, 0);
    
    return {
        entertainment: totalSpending > 0 ? (categoryTotals.entertainment / totalSpending) * 100 : 0,
        food: totalSpending > 0 ? (categoryTotals.food / totalSpending) * 100 : 0,
        transport: totalSpending > 0 ? (categoryTotals.transport / totalSpending) * 100 : 0
    };
};

export { getCategoryIcon, categoryColors, calculateCategoryTotals, calculateCategoryPercentages };