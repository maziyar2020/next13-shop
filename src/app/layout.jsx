// Fonts
import vazirFont from '@/constants/localFonts'
import React from 'react'
// popup
import { Toaster } from 'react-hot-toast'
// style
import './globals.css'
import Header from './Header'
import Providers from './Providers'

export const metaData = {
    title: 'next shop',
    description: 'Next.js shop'
}

const RootLayout = ({ children }) => {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${vazirFont.variable} font-sans`}>
                <Toaster />
                <Header />
                <div className="container xl:max-w-screen-xl">
                    <Providers> {children}</Providers>
                </div>
            </body>
        </html>
    )
}

export default RootLayout
