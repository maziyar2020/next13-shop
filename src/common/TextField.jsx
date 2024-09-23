import React from 'react'

const TextField = ({ name, label, onChange, value }) => {
    return (
        <div className="">
            <label htmlFor={name} className="block text-red-300 mb-2">{label}</label>
            <input type="text"
                className="textField__input mb-2"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default TextField
