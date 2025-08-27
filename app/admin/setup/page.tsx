"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, AlertCircle, CheckCircle } from "lucide-react"
import { createAdminUser, checkFirebaseConnection } from "@/lib/admin-utils"
import TechBackground from "@/components/tech-background"
import FirebaseDebug from "@/components/firebase-debug"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AdminSetupPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error" | "info"; text: string } | null>(null)
  const [firebaseStatus, setFirebaseStatus] = useState<{ connected: boolean; message: string } | null>(null)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  // Firebase 연결 상태 확인
  React.useEffect(() => {
    const status = checkFirebaseConnection()
    setFirebaseStatus(status)
    
    if (!status.connected) {
      setMessage({ type: "error", text: status.message })
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // 입력 중 오류 메시지 초기화
    if (message?.type === "error") {
      setMessage(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    // Firebase 연결 상태 재확인
    const connectionStatus = checkFirebaseConnection()
    if (!connectionStatus.connected) {
      setMessage({ type: "error", text: `Firebase 연결 오류: ${connectionStatus.message}` })
      setIsLoading(false)
      return
    }

    // 비밀번호 확인
    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: "error", text: "비밀번호가 일치하지 않습니다." })
      setIsLoading(false)
      return
    }

    // 기본 검증은 admin-utils에서 처리하므로 여기서는 제거

    try {
      const result = await createAdminUser(formData.email, formData.password)

      if (result.success) {
        setMessage({ type: "success", text: result.message })
        // 3초 후 로그인 페이지로 이동
        setTimeout(() => {
          router.push("/admin")
        }, 3000)
      } else {
        setMessage({ type: "error", text: result.message })
      }
    } catch (error) {
      console.error("관리자 설정 오류:", error)
      setMessage({ type: "error", text: "관리자 계정 설정 중 오류가 발생했습니다." })
    }

    setIsLoading(false)
  }

  return (
    <main className="min-h-screen flex flex-col relative bg-[#0F172A]">
      <div className="absolute inset-0 -z-10">
        <TechBackground />
      </div>
      <div className="circuit-pattern opacity-20 absolute inset-0 -z-10"></div>

      <div className="container mx-auto px-4 py-8">
        <Link href="/admin" className="inline-flex items-center text-white/70 hover:text-accent transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          로그인 페이지로 돌아가기
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">관리자 계정 설정</h1>
            <p className="text-white/70">Growink 관리자 계정을 생성합니다.</p>
          </div>

          <div className="premium-card p-8 rounded-lg elegant-shadow">
            {/* Firebase 디버깅 정보 */}
            <div className="mb-6">
              <FirebaseDebug showDetails={true} />
            </div>

            {message && (
              <Alert
                variant={message.type === "error" ? "destructive" : "default"}
                className={
                  message.type === "error"
                    ? "bg-red-900/20 border-red-900/50 text-red-50 mb-6"
                    : message.type === "success"
                    ? "bg-green-900/20 border-green-900/50 text-green-50 mb-6"
                    : "bg-blue-900/20 border-blue-900/50 text-blue-50 mb-6"
                }
              >
                {message.type === "error" ? <AlertCircle className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
                <AlertDescription>{message.text}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  이메일
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="premium-input text-white"
                  placeholder="관리자 이메일"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">
                  비밀번호
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="premium-input text-white"
                  placeholder="비밀번호 (최소 8자, 대소문자+숫자)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-white">
                  비밀번호 확인
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="premium-input text-white"
                  placeholder="비밀번호 확인"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full premium-button" 
                disabled={isLoading || (firebaseStatus && !firebaseStatus.connected)}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    계정 생성 중...
                  </>
                ) : firebaseStatus && !firebaseStatus.connected ? (
                  "Firebase 연결 필요"
                ) : (
                  "관리자 계정 생성"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
