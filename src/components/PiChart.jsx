import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { useFinanceStore } from "./store/store";

const COLORS = [
  "#FF6384", // Red
  "#36A2EB", // Blue
  "#FFCE56", // Yellow
  "#4BC0C0", // Teal
  "#9966FF", // Purple
  "#FF9F40", // Orange
  "#FFB6C1", // Light Pink
  "#90EE90", // Light Green
  "#FF4500", // Orange Red
  "#8A2BE2", // Blue Violet
];

const PiChart = () => {
  const { transactions, expenses } = useFinanceStore();

  const groupedExpenses = transactions.reduce((acc, transaction) => {
    if (transaction.type === "expense") {
      if (!acc[transaction.category]) {
        acc[transaction.category] = 0;
      }
      acc[transaction.category] += transaction.amount;
    }
    return acc;
  }, {});

  const data = Object.entries(groupedExpenses).map(([name, value]) => ({
    name,
    value: expenses > 0 ? (value / expenses) * 100 : 0, // Normalize
  }));

  return (
    <div className="w-full md:w-[300px]">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey={transactions.amount}
            nameKey={transactions.category}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PiChart;
