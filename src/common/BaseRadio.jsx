import React from 'react'

const BaseRadio = ({ id, label, name, value, checked, onChange }) => {
    return (
        <div>
            <input
                type="radio"
                id={id}
                name={name}
                label={label}
                value={value}
                checked={checked}
                onChange={onChange}
                className="cursor-pointer rounded-full border-none 
                bg-secondary-100/80 w-4 h-4 checked:text-primary-900"
            />
            <label htmlFor={id} className="cursor-pointer">{label}</label>
        </div>
    )
}

export default BaseRadio
