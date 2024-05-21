import { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Client A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Client B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Client C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Client D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Client E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Client F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Client G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Statistic extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-reference-line-y6z3n5';

  render() {
    return (
      <ResponsiveContainer className=" w-[100%] h-[100%] ">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine x="Client C" stroke="red" label="Max PV Client" />
          <ReferenceLine y={9800} label="Max" stroke="red" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}