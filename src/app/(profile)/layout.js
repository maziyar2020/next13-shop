import vazirFont from "@/constants/localFonts"
import { Toaster } from "react-hot-toast"
import Providers from "@/pages/Providers"
import '../globals.css'
import BaseProfileSidebar from "@/components/sidebar/BaseProfileSidebar"

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
          <div className="grid grid-cols-4 bg-white h-screen">
            <div className="col-span-1 bg-gray-100 overflow-y-auto p-4">
              <BaseProfileSidebar />
            </div>
            <div className="col-span-3 overflow-y-auto p-4">{children}</div>
          </div>
        </Providers>

      </body>
    </html>
  )

}
