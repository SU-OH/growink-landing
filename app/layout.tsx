import React from "react"
import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
})

export const metadata: Metadata = {
  title: "Growink - 당신의 브랜드를 키우고, 세상과 연결하는 파트너",
  description: "웹사이트 제작, 숏폼 영상 제작, 브랜딩 및 마케팅 서비스를 제공하는 Growink입니다. 브랜드 성장을 위한 최적의 디지털 솔루션으로 온라인 매출 증대와 브랜드 인지도 향상을 경험하세요.",
  keywords: ["웹사이트 제작", "홈페이지 제작", "반응형 웹", "숏폼 영상", "브랜딩", "디지털 마케팅", "SNS 마케팅", "온라인 쇼핑몰", "브랜드 컨설팅", "Growink", "그로잉크"],
  authors: [{ name: "Growink", url: "https://growink.co.kr" }],
  creator: "Growink",
  publisher: "Growink",
  formatDetection: {
    telephone: true,
    email: true,
  },
  metadataBase: new URL("https://growink.co.kr"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/growink-logo.png",
    apple: "/images/growink-logo.png",
  },
  openGraph: {
    title: "Growink - 당신의 브랜드를 키우고, 세상과 연결하는 파트너",
    description: "웹사이트 제작, 숏폼 영상 제작, 브랜딩 및 마케팅 서비스를 제공하는 Growink입니다. 초기 창업가와 예비 창업자의 성장을 돕는 디지털 파트너.",
    url: "https://growink.co.kr",
    siteName: "Growink",
    images: [{
      url: "/images/growink-og.png",
      width: 1024,
      height: 536,
      alt: "Growink - 디지털 성장 파트너"
    }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growink - 당신의 브랜드를 키우고, 세상과 연결하는 파트너",
    description: "웹사이트 제작, 숏폼 영상 제작, 브랜딩 및 마케팅 서비스를 제공하는 Growink입니다.",
    images: ["/images/growink-og.png"],
    creator: "@growink",
  },
  generator: 'Growink',
  other: {
    "naver-site-verification": "20b0a6cc203a2f68758f8c609b4b9599cbac8a12"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <meta name="naver-site-verification" content="20b0a6cc203a2f68758f8c609b4b9599cbac8a12" />
        <meta name="NaverBot" content="All" />
        <meta name="NaverBot" content="index,follow" />
        <meta name="Yeti" content="All" />
        <meta name="Yeti" content="index,follow" />
      </head>
      <body className={`${notoSansKr.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        
        {/* 네이버 애널리틱스 - 네이버 서치어드바이저에서 발급받은 코드로 교체하세요 */}
        <Script id="naver-analytics" strategy="afterInteractive">
          {`
            (function(n,a,v,e,r){
              var i=n.navigator,o=n.location,c=n.document,s=["wss:","//",(o.hostname=="localhost"?"localhost.navercorp.com":a),"?v="+v+"&p="+(e?"e":"f")].join("");
              if(!n[r]||n[r]!=2){n[r]=n[r]?n[r]+1:1;
              if(i.appName=="Netscape"&&!i.userAgent.match(/Trident/)&&!i.userAgent.match(/Edge/)){var t=new WebSocket(s,""+r);
              t.onmessage=function(e){console.log(JSON.parse(e.data))};
              t.onerror=function(e){console.log(e)};}}})
            (window,"wcs.naver.net","1","false","NA_svr");
          `}
        </Script>
        
        {/* 네이버 사이트 인증 - 네이버 서치어드바이저에서 발급받은 코드로 교체하세요 */}
        <Script id="naver-site-verification" strategy="afterInteractive">
          {`
            window.naver_key="20b0a6cc203a2f68758f8c609b4b9599cbac8a12";
          `}
        </Script>
      </body>
    </html>
  )
}