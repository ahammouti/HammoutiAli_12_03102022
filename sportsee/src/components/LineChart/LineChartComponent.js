import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, } from 'recharts';
import PropTypes from 'prop-types';

/**
 * @component
 * @param {props} averageSessions json data of average session
 * @returns {jsxElement} Barchart component with activity session data
 */
const LineChartComponent = ({ averageSessions }) => {
    // console.log(averageSessions !== undefined && averageSessions.data.sessions)
    const dayTab = {
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D',
    }
    const itemDay = (item) => dayTab[item]
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="TooltipDuration">
                    <p className="TooltipTextDuration">{payload[0].value} min</p>
                </div>
            );
        }

        return null;
    }
    if (averageSessions !== undefined) {
        return (
            <div className='linechart'>
                <p className='textLegendSession'>Durée moyenne des sessions</p>
                <ResponsiveContainer height={(100 * 100) / 40} width="100%">
                    <LineChart
                        data={averageSessions !== undefined && (averageSessions.sessions || averageSessions.data.sessions)}
                        margin={{
                            top: 50,
                            right: 5,
                            left: 5,
                            bottom: 5
                        }}
                    >
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            mirror={true}
                            tickFormatter={itemDay}
                            tick={{ fill: 'rgba(255, 255, 255, 0.504)' }}
                        />
                        <YAxis
                            hide
                            domain={["dataMin-50", 'dataMax+50']}
                        />
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={{ stroke: 'none' }}
                        />
                        <Line
                            type="natural"
                            dataKey="sessionLength"
                            stroke="rgba(255, 255, 255, 0.9)"
                            dot={false}
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )

    } else {
        return (
            <div>
                <p>chargement</p>
            </div>
        )
    }
}

LineChartComponent.propTypes = {
    averageSessions: PropTypes.object,
};
export default LineChartComponent;