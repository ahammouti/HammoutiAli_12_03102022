import React from 'react'
import PropTypes from 'prop-types';

const VerticalBarIcons = ({ path, alt }) => {
    return (
        <img src={path} className='buttonIcons' alt={alt}></img>
    )
}

VerticalBarIcons.propTypes = {
    path: PropTypes.node.isRequired,
    alt: PropTypes.node.isRequired
}

export default VerticalBarIcons