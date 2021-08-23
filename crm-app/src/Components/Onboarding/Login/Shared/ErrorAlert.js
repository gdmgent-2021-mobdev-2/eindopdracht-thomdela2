import React from 'react';

const ErrorAlert = ({ error }) => {

    if(!error) {
        return null;
    }

    return (
        <div className="alert">
            {error.message || 'Something went wrong!'}
        </div>
    )
}

export default ErrorAlert;