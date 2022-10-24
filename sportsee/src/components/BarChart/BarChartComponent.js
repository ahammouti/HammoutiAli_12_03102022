import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

import React from 'react'

const data = [
  {
    name: "Page A",
    uv: 74,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 80,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 82,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 78,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 80,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 75,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 81,
    pv: 4300,
    amt: 2100
  }
];

const BarChartComponent = ({ activity }) => {

  // activity !== undefined && const act = activity.data.sessions
  return (
    <section className="barchart">
      <div className="barchart__head">
        <p className="title">Activité quotidienne</p>
        <ul className="barchart__legend">
          <li className="barchart__legend-colorWeight"><p>Poids (Kg)</p></li>
          <li className="barchart__legend-colorKcal"><p>Calories brûlées (kCal)</p></li>
        </ul>
      </div>
      <div className="barchart__graph">
        {console.log(activity !== undefined && activity.data.sessions)}
        <ResponsiveContainer height={(100 * 100) / 40} width="100%">
          <BarChart
            // data={data}
            data={activity !== undefined && activity.data.sessions}
            barGap={8}
            height="75%"
            width="100%"
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid style={{ padding: 0, right: 0 }} vertical={false} strokeDasharray={"1"} />
            <XAxis tickLine={false} tickMargin={15} dataKey="day" />
            <YAxis
              dataKey="kilogram"
              domain={['dataMin-2', 'dataMax+1']}
              tickCount="3.5"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9B9EAC', fontSize: '14px' }}
              style={{ marginLeft: '20px' }}
              dx={40}
              scale="auto" orientation="right" />
            <YAxis yAxisId="calories" dataKey="calories" hide={false} />

            <Tooltip />
            {/* <Legend /> */}
            <Bar radius={[50, 50, 0, 0]} barSize={8} dataKey="calories" yAxisId="calories" fill="#E60000" />
            <Bar radius={[50, 50, 0, 0]} barSize={8} dataKey="kilogram" fill="#282D30" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default BarChartComponent;