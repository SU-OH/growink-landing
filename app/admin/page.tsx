import type { Metadata } from "next"
import AdminLoginForm from "@/components/admin/login-form"
import TechBackground from "@/components/tech-background"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "관리자 로그인 - Growink",
  description: "Growink 관리자 페이지 로그인",
}

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen flex flex-col relative bg-[#0F172A]">
      <div className="absolute inset-0 -z-10">
        <TechBackground />
      </div>
      <div className="circuit-pattern opacity-20 absolute inset-0 -z-10"></div>

      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-white/70 hover:text-accent transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          메인으로 돌아가기
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Image src="/images/growink-logo.png" alt="Growink 로고" width={80} height={80} />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">관리자 로그인</h1>
            <p className="text-white/70">Growink 관리자 대시보드에 접속하려면 로그인하세요.</p>
          </div>

          <div className="premium-card p-8 rounded-lg elegant-shadow">
            <AdminLoginForm />
            <div className="mt-4 text-center">
              <p className="text-white/70 text-sm">
                관리자 계정이 없으신가요?{" "}
                <Link href="/admin/setup" className="text-accent hover:underline">
                  계정 설정하기
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
