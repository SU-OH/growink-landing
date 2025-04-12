import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      <div className="circuit-pattern opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <Image src="/images/growink-logo.png" alt="Growink 로고" width={50} height={50} className="mr-3" />
              <div>
                <div className="text-2xl font-bold text-accent">Growink</div>
                <p className="text-xs text-white/50">무한한 성장의 시작</p>
              </div>
            </div>
            <p className="text-sm text-white/70 mt-2 max-w-xs">
              테크놀로지와 창의성을 결합하여 브랜드의 성장을 돕는 디지털 파트너
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-accent transition-colors group">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:scale-110 transition-transform"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-white/70 hover:text-accent transition-colors group">
              <span className="sr-only">YouTube</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:scale-110 transition-transform"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </a>
            <a href="#" className="text-white/70 hover:text-accent transition-colors group">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:scale-110 transition-transform"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-white/10">
          <div>
            <h3 className="text-white font-medium mb-4">회사 정보</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-accent transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  팀
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  채용
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  블로그
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-white/70 hover:text-accent transition-colors">
                  웹 제작
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-accent transition-colors">
                  숏폼 영상
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-accent transition-colors">
                  브랜딩
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-accent transition-colors">
                  마케팅
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">고객 지원</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-white/70 hover:text-accent transition-colors">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">연락처</h3>
            <ul className="space-y-2">
              <li className="text-white/70">경기도 의왕시 어내들로5</li>
              <li>
                <a href="mailto:growink.ai@gmail.com" className="text-accent hover:underline">
                  growink.ai@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:010-4903-7642" className="text-accent hover:underline">
                  010-4903-7642
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Growink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
