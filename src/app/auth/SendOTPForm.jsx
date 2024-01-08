import TextField from '@/common/TextField'
import React from 'react'

const SendOTPForm = ({ phoneNumber, onChange, onSubmit }) => {

    return (
        <div>
            <form onSubmit={onSubmit}>
                <TextField
                    name="phoneNumber"
                    label="شماره تلفن"
                    onChange={onChange}
                    value={phoneNumber}
                />
                <button type="submit" className="btn btn--primary">Submit</button>
            </form>
        </div>
    )
}

export default SendOTPForm
