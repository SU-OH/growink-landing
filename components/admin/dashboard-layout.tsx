"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { LayoutDashboard, MessageSquare, Users, Settings, LogOut, Menu, X, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { auth } from "@/lib/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    setIsClient(true)

    // Firebase 인증 상태 확인
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setIsLoading(false)

      if (!currentUser) {
        router.push("/admin")
      }
    })

    return () => unsubscribe()
  }, [router])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.push("/admin")
    } catch (error) {
      console.error("로그아웃 오류:", error)
    }
  }

  const navItems = [
    { name: "대시보드", href: "/admin/dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: "문의 관리", href: "/admin/dashboard/inquiries", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "사용자 관리", href: "/admin/dashboard/users", icon: <Users className="h-5 w-5" /> },
    { name: "설정", href: "/admin/dashboard/settings", icon: <Settings className="h-5 w-5" /> },
  ]

  if (isLoading || !isClient) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
        <div className="text-white">로딩 중...</div>
      </div>
    )
  }

  if (!user) {
    return null // 인증되지 않은 경우 렌더링하지 않음 (리디렉션 처리됨)
  }

  return (
    <div className="min-h-screen bg-[#0F172A] flex">
      {/* 사이드바 (데스크톱) */}
      <aside className="hidden md:flex flex-col w-64 bg-black/30 backdrop-blur-sm border-r border-white/10">
        <div className="p-4 border-b border-white/10">
          <Link href="/" className="flex items-center">
            <Image src="/images/growink-logo.png" alt="Growink 로고" width={40} height={40} className="mr-2" />
            <div>
              <div className="text-xl font-bold text-accent">Growink</div>
              <div className="text-xs text-white/50">관리자 대시보드</div>
            </div>
          </Link>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg transition-colors",
                    pathname === item.href
                      ? "bg-accent/20 text-accent"
                      : "text-white/70 hover:bg-white/5 hover:text-white",
                  )}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-white/10">
          <Button
            variant="ghost"
            className="w-full justify-start text-white/70 hover:text-white hover:bg-white/5"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 mr-3" />
            로그아웃
          </Button>
        </div>
      </aside>

      {/* 모바일 메뉴 버튼 */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 bg-black/50 backdrop-blur-sm border-b border-white/10 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/growink-logo.png" alt="Growink 로고" width={30} height={30} className="mr-2" />
          <div className="text-lg font-bold text-accent">Growink Admin</div>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </Button>
      </div>

      {/* 모바일 사이드바 */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-20 bg-black/80 backdrop-blur-sm">
          <div className="pt-16 p-4">
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-lg transition-colors",
                        pathname === item.href
                          ? "bg-accent/20 text-accent"
                          : "text-white/70 hover:bg-white/5 hover:text-white",
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon}
                      <span className="ml-3">{item.name}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-white/70 hover:text-white hover:bg-white/5 mt-4"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-5 w-5 mr-3" />
                    로그아웃
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* 메인 콘텐츠 */}
      <div className="flex-1 flex flex-col">
        {/* 상단 헤더 */}
        <header className="hidden md:flex h-16 items-center justify-between px-6 bg-black/30 backdrop-blur-sm border-b border-white/10">
          <h1 className="text-xl font-medium text-white">
            {navItems.find((item) => item.href === pathname)?.name || "대시보드"}
          </h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center text-primary font-bold">
                {user?.email?.charAt(0).toUpperCase() || "A"}
              </div>
              <span className="ml-2 text-white">{user?.email || "관리자"}</span>
            </div>
          </div>
        </header>

        {/* 페이지 콘텐츠 */}
        <main className="flex-1 p-6 md:p-8 overflow-auto mt-16 md:mt-0">{children}</main>
      </div>
    </div>
  )
}
