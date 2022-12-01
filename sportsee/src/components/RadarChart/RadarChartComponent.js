import React from 'react'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts'
import PropTypes from 'prop-types';

/**
 * @component
 * @param {props} performance json data activity
 * @returns {jsxElement} RadarChart component with performance data
 */
const RadarChartComponent = ({ performance }) => {
    // console.log(performance)
    if (performance !== undefined) {
        const callbackData = (perf) => {
            const DataRadarTitle = perf.map((data) => {
                switch (data.kind) {
                    case 1:
                        return { ...data, kind: "Intensité" };
                    case 2:
                        return { ...data, kind: "Vitesse" };
                    case 3:
                        return { ...data, kind: "Force" };
                    case 4:
                        return { ...data, kind: "Endurance" };
                    case 5:
                        return { ...data, kind: "Energie" };
                    case 6:
                        return { ...data, kind: "Cardio" };
                    default:
                        return { ...data };
                }
            });
            return DataRadarTitle;
        }
        return (
            <div style={{ background: "#282D30", borderRadius: "8px", width: "300px" }}>
                <ResponsiveContainer height={(100 * 100) / 40} width="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={callbackData(performance.data.data || performance.data)} >
                        <PolarGrid stroke='#fff' radialLines={false} />
                        <PolarAngleAxis tickLine={false} stroke='#f1f1f1' dataKey="kind" style={{ fontSize: '14px' }} />
                        <Tooltip />
                        <Radar name="Valeur" dataKey="value" stroke="rgba(255, 1, 1, 1)" fill="rgba(255, 1, 1, 1)" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

RadarChartComponent.propTypes = {
    performance: PropTypes.object,
};
export default RadarChartComponent