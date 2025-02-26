const PieChart = ({ categoryTotals }) => {
    // Calculate the percentage for each category
    const total = Object.values(categoryTotals).reduce((sum, val) => sum + val, 0);
    
    if (total === 0) {
        return (
            <div className="w-24 h-24 bg-gray-500 rounded-full"></div>
        );
    }

    // Calculate angles for each segment
    // Entertainment starts at top (90 degrees)
    const entertainmentPercent = categoryTotals.entertainment / total;
    const foodPercent = categoryTotals.food / total;
    
    const entertainmentDegrees = entertainmentPercent * 360;
    const foodDegrees = foodPercent * 360;
    
    // Create conic-gradient for the pie chart
    const gradient = `conic-gradient(
        ${categoryColors.entertainment} 0deg ${entertainmentDegrees}deg,
        ${categoryColors.food} ${entertainmentDegrees}deg ${entertainmentDegrees + foodDegrees}deg,
        ${categoryColors.transport} ${entertainmentDegrees + foodDegrees}deg 360deg
    )`;
    
    return (
        <div className="relative">
            <div className="w-24 h-24 rounded-full" style={{ background: gradient }}></div>
            <div className="text-xs mt-2 flex justify-between">
                <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-teal-400 mr-1"></div>
                    <span>Food</span>
                </div>
                <div className="flex items-center mx-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-1"></div>
                    <span>Entertainment</span>
                </div>
                <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
                    <span>Travel</span>
                </div>
            </div>
        </div>
    );
};

export default PieChart;