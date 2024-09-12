import React from 'react'

const LoadingSpinner = ({ large }) => {
    return (
        <div className={`lds-dual-ring ${large && "lds-duel-ring--large"}`}></div>
    )
}

export default LoadingSpinner
