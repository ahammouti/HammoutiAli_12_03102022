import React from 'react'
import { Legend, Pie, PieChart, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types';

/**
 * @component
 * @param {props} score json score data
 * @returns {jsxElement} PieChart component with score data
 */
const PieChartComponent = ({ score }) => {
    const customData = [
        { name: 'score', value: score, stroke: '#FF0000' },
        { name: 'score', value: 1 - score, stroke: 'transparent', fill: 'transparent' },
    ];

    const CustomLegend = (payload) => {
        return (
            <div className='custom-legend-score'>
                <p className='custom-legend-score-score'>
                    {payload?.payload[0]?.payload.value * 100}%
                    <br />
                </p>
                <p className='custom-legend-score-objectif'> de votre objectif</p>
            </div>
        )
    }

    if (score !== undefined) {
        return (
            <div style={{ height: "260px" }} className='scoreWrap'>
                <h3> Score </h3>
                <ResponsiveContainer height={"100%"} width="100%">
                    <PieChart>
                        <Pie nameKey={"name"} dataKey="value" startAngle={90} endAngle={470} cx='50%' cy='100%' innerRadius={100} barSize={8} outerRadius={100} data={customData} strokeWidth={10}
                            radius={[50, 50, 0, 0]}>
                        </Pie>
                        <Legend content={<CustomLegend />} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

PieChartComponent.propTypes = {
    score: PropTypes.any,
};
export default PieChartComponent