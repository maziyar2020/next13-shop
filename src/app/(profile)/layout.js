import vazirFont from "@/constants/localFonts"
import { Toaster } from "react-hot-toast"
import Header from "../Header"
import Providers from "../Providers"
import '../globals.css'

export const metadata = {
  title: 'پروفایل کاربر',
  description: 'پروفایل کاربر',
}

export default function RootLayout({ children }) {

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
