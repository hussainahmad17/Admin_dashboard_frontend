import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { barData } from "../..";
import { JumboCard } from "@jumbo/components";

const StackedBarChart = () => (
  <JumboCard
    title={"Stacked Bar Chart"}
    contentWrapper
    contentSx={{ backgroundColor: "background.paper" }}
  >
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={barData}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip
          labelStyle={{ color: "black" }}
          itemStyle={{ color: "black" }}
          cursor={false}
        />
        <Legend />
        <defs>
          <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6200EE" stopOpacity={1} />
            <stop offset="95%" stopColor="#B819D2" stopOpacity={1} />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1ABBDE" stopOpacity={1} />
            <stop offset="95%" stopColor="#09BCA7" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Bar dataKey="pv" stackId="a" fill={"#1e88e5"} />
        <Bar dataKey="uv" stackId="a" fill={"#e91e63"} />
      </BarChart>
    </ResponsiveContainer>
  </JumboCard>
);

export { StackedBarChart };
