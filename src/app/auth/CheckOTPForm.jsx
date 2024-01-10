import OTPInput from 'react-otp-input'
import React from 'react'

const CheckOTPForm = ({ onSubmit , otp,setOtp }) => {
    return (
        <div>
            <form className="space-y-5" onSubmit={onSubmit}>
                <p>لطفا کد ورود خود را وارد کنید</p>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    inputStyle={{
                        width: "2.5rem",
                        padding: "0.5rem 0.2rem",
                        border: "1px solid rgb(var(--color-primary-300))",
                        borderRadius: '0.5rem'
                    }}
                    
                    containerStyle={{
                        direction: 'ltr',
                        display: 'flex',
                        justifyContent: 'center',
                        gap : '8px'
                    }}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                />


                <button type="submit" className="btn btn--primary w-full">
                    تایید
                </button>
            </form>
        </div>
    )
}

export default CheckOTPForm
