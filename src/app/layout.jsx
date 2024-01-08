import vazirFont from '@/constants/localFonts'
import React from 'react'
import './globals.css'
import Header from './Header'

export const metaData = {
    title: 'next shop',
    description : 'Next.js shop'
}

const RootLayout = ({children}) => {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${vazirFont.variable} font-sans`}>
                <Header />
                <div className="container xl:max-w-screen-xl">
                    {children}
                </div>
            </body>
        </html>
    )
}

export default RootLayout
