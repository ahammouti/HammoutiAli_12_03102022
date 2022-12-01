import PropTypes from 'prop-types';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ height: "100px", fontSize: "12px", background: "#E60000", color: "#f1f1f1", padding: "8px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", rowGap: "20px" }} className="custom-tooltip">
                <p className="label">{`${payload[0].value}Kcal`}</p>
                <p className="label">{`${payload[1].value}Kg`}</p>
            </div>
        );
    }
}

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
}
export default CustomTooltip;