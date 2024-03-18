import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Week 1", guest: 4000, user: 2400, amt: 2400 },
  { name: "Week 2", guest: 3000, user: 1398, amt: 2210 },
  { name: "Week 3", guest: 2000, user: 9800, amt: 2290 },
  { name: "Week 4", guest: 2780, user: 3908, amt: 2000 },
];

const LineChartGraph = () => {
  return (
    <LineChart
      width={400}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="user"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="guest" stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineChartGraph;
