import vazirFont from "@/constants/localFonts"
import { Toaster } from "react-hot-toast"
import Header from "../../Header"
import Providers from "../../Providers"
import '../../globals.css'


export const metadata = {
  title: 'پروفایل ادمین',
  description: 'پروفایل ادمین',
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
