// common & components
import TextField from '@/common/TextField'
// React and hooks
import React from 'react'

const SendOTPForm = ({ phoneNumber, onChange, onSubmit, isLoading }) => {

    return (
        <div>
            <form onSubmit={onSubmit} className="space-y-5">
                <TextField
                    name="phoneNumber"
                    label="شماره تلفن"
                    onChange={onChange}
                    value={phoneNumber}
                />
                <div>
                    {
                        isLoading ? (
                            <div className="btn btn--primary text-center">
                                loading
                            </div>
                        ) : (
                            <button className="btn btn--primary w-full">
                                submit
                            </button>
                        )
                    }
                </div>
            </form>
        </div>
    )
}

export default SendOTPForm
