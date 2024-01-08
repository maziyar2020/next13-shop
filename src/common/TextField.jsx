import React from 'react'

const TextField = ({ name, label, onChange, value }) => {
    return (
        <div>
            <label htmlFor={name} className="block text-red-300">{label}</label>
            <input type="text"
                className="bg-gray-50 p-2 rounded-sm"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default TextField
