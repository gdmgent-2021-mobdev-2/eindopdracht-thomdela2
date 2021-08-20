import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, color = "primary", type = "button" }) => {
    return (
        <button
        className={`btn btn-${color}`}
        onClick={onClick}
        type={type}>
        {children}
        </button>
    )
};

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    color: PropTypes.oneOf(['primary', 'secundary', 'light', 'outline-light', 'dark'])
};

export default Button;