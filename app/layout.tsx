import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
})

export const metadata: Metadata = {
  title: "Growink - 당신의 브랜드를 키우고, 세상과 연결하는 파트너",
  description: "웹사이트 제작, 숏폼 영상 제작, 브랜딩 및 마케팅 서비스를 제공하는 Growink입니다.",
  icons: {
    icon: "/images/growink-logo.png",
    apple: "/images/growink-logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${notoSansKr.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'