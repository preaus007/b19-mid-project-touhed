const HorizontalBar = ({ value, max = 100, name }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-md overflow-hidden">
      <div
        className="bg-blue-500 h-8 rounded-md px-4 flex items-center text-white text-sm font-bold"
        style={{ width: `${percentage}%` }}
      >
        <span className="truncate w-full">
          {name} - {percentage.toFixed(0)}%
        </span>
      </div>
    </div>
  );
};

export default HorizontalBar;
