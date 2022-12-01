import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import React from 'react'
import CustomTooltip from "./CustomTooltip";
import PropTypes from 'prop-types';

/**
 * @component 
 * @param {props} activity json data activity
 * @returns {jsxElement} Barchart component with activity session data
 */
const BarChartComponent = ({ activity }) => {
  if (activity) {
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
          {/* {console.log(activity !== undefined && activity.sessions)} */}
          <ResponsiveContainer height={(100 * 100) / 40} width="100%">
            <BarChart
              data={activity !== undefined && (activity.sessions || activity.data.sessions)}
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
              <XAxis tickMargin={15} tickLine={false} axisLine={{ stroke: '#DEDEDE' }} tick={{ fill: '#9B9EAC', fontSize: '14px' }} dataKey="day" />
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
              <YAxis yAxisId="calories" dataKey="calories" hide={true} />
              <Tooltip cursor={{ background: '#C4C4C4', opacity: 0.5 }} content={<CustomTooltip />} />
              <Bar radius={[50, 50, 0, 0]} barSize={8} dataKey="calories" yAxisId="calories" fill="#E60000" />
              <Bar radius={[50, 50, 0, 0]} barSize={8} dataKey="kilogram" fill="#282D30" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    )
  }
}

BarChartComponent.propTypes = {
  activity: PropTypes.object
}
export default BarChartComponent;