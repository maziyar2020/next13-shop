// Fonts
import vazirFont from '@/constants/localFonts'
import React from 'react'
// popup
import { Toaster } from 'react-hot-toast'
// style
import '../globals.css'
import Header from '../Header'
import Providers from '../Providers'

export const metaData = {
    title: 'next shop',
    description: 'Next.js shop'
}

const RootLayout = ({ children }) => {
    return (
        <html lang="fa" dir="rtl">
            <body
                className={`${vazirFont.variable} font-sans`}
                suppressHydrationWarning={true}
            >
                <Providers>
                    <Toaster />
                    <Header />
                    <div className="container xl:max-w-screen-xl">
                        {children}
                    </div>
                </Providers>

            </body>
        </html>
    )
}

export default RootLayout
