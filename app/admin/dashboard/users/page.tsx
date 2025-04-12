import type { Metadata } from "next"
import DashboardLayout from "@/components/admin/dashboard-layout"

export const metadata: Metadata = {
  title: "사용자 관리 - Growink",
  description: "Growink 사용자 관리 대시보드",
}

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">사용자 관리</h2>
          <p className="text-white/70">시스템 사용자 및 고객 계정을 관리하세요.</p>
        </div>

        <div className="premium-card border-none p-6 rounded-lg">
          <div className="flex items-center justify-center h-40">
            <p className="text-white/70">이 기능은 현재 개발 중입니다.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
