import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";
const piData = [
  {
    count: 55,
    name: "Basic Trees",
    color: "#98D89E",
  },
  {
    count: 31,
    name: "Custom Short Pants",
    color: "#EE8484",
  },
  {
    count: 14,
    name: "Super Hoodies",
    color: "#F6DC7D",
  },
];


const PiChart = () => {
  return (
    <ResponsiveContainer height={200} width={'100%'}>
      <PieChart>
        <Pie
          data={piData}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="70%"
          dataKey="count"
        >
          {piData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              label={`${entry.name} (${entry.count}%)`}
            />
          ))}
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PiChart;