const CustomLegend = (payload) => {
    return (
        <div className='custom-legend-score'>
            <p className='custom-legend-score-score'>
                {/* {payload?.payload[0]?.payload.todayScore}% */}
            </p>
            <p className='custom-legend-score-objectif'> de votre objectif</p>
        </div>
    )
}

export default CustomLegend;