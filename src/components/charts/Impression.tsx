import { PureComponent } from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const data = [
    {
        name: 'Client A',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Client B',
        uv: 868,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'Client C',
        uv: 1397,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'Client D',
        uv: 1480,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'Client E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'Client F',
        uv: 1400,
        pv: 680,
        amt: 1700,
    },
];

export default class Impression extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/composed-chart-in-responsive-container-4vx38p';

    render() {
        return (
            <div style={{ width: '100%', height: 200, marginTop: 20 }}>
                <ResponsiveContainer>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        );
    }
}