import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: "Jan",
    uv: 2290,
    pv: 1850,
    amt: 2100,
    cnt: 1240,
  },
  {
    name: "Feb",
    uv: 1268,
    pv: 1067,
    amt: 1506,
    cnt: 690,
  },
  {
    name: "Mar",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Apr",
    uv: 1580,
    pv: 1260,
    amt: 1228,
    cnt: 540,
  },
  {
    name: "May",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Jun",
    uv: 1400,
    pv: 1080,
    amt: 1600,
    cnt: 450,
  },
  {
    name: "Jul",
    uv: 1820,
    pv: 1280,
    amt: 1170,
    cnt: 380,
  },
  {
    name: "Aug",
    uv: 1200,
    pv: 740,
    amt: 1700,
    cnt: 360,
  },
  {
    name: "Sep",
    uv: 1850,
    pv: 1290,
    amt: 1700,
    cnt: 400,
  },
  {
    name: "Oct",
    uv: 1300,
    pv: 780,
    amt: 1700,
    cnt: 380,
  },
  {
    name:"Nov",
    uv: 1200,
    pv: 720,
    amt: 1700,
    cnt: 380,
  },
  {
    name: "Dec",
    uv: 2130,
    pv: 1800,
    amt: 2000,
    cnt: 1360,
  },
];

export default class Charts extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-composed-chart-lyz572';

  render() {
    return (
      <div style={{ width: '100%', height:500 }}>
        <ResponsiveContainer>
          <ComposedChart
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
            <Scatter dataKey="cnt" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
