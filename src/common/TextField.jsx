import React from 'react'

const TextField = ({ name, label, onChange, value }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default TextField
