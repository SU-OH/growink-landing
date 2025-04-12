import type { Metadata } from "next"
import DashboardLayout from "@/components/admin/dashboard-layout"
import InquiryList from "@/components/admin/inquiry-list"

export const metadata: Metadata = {
  title: "문의 관리 - Growink",
  description: "Growink 문의 관리 대시보드",
}

export default function InquiriesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">문의 관리</h2>
          <p className="text-white/70">고객으로부터 받은 모든 문의를 관리하세요.</p>
        </div>

        <InquiryList />
      </div>
    </DashboardLayout>
  )
}
