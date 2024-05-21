import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Data {
    name: string
    uv: number
    pv: number
    amt: number
}

const data: Data[] = [
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

export default class Visitors extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/synchronized-area-chart-9jj95d';

    render() {
        return (
            <div className=' w-[100%] phone:w-[100%] '>
                <h4>All Visitors diagrams</h4>
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                        width={500}
                        height={200}
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    }
}