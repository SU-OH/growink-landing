"use client"

import { useState, useEffect } from "react"
import DashboardLayout from "@/components/admin/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Users, TrendingUp, Calendar, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { db } from "@/lib/firebase"
import { collection, query, orderBy, getDocs, where, limit, Timestamp } from "firebase/firestore"

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalInquiries: 0,
    newInquiries: 0,
    completedInquiries: 0,
    pendingInquiries: 0,
  })
  const [recentInquiries, setRecentInquiries] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // 일주일 전 날짜 계산
        const oneWeekAgo = new Date()
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
        const oneWeekAgoTimestamp = Timestamp.fromDate(oneWeekAgo)

        // 전체 문의 수 조회
        const inquiriesRef = collection(db, "inquiries")
        const totalSnapshot = await getDocs(inquiriesRef)
        const totalCount = totalSnapshot.size

        // 새로운 문의 수 조회 (일주일 이내)
        const newInquiriesQuery = query(inquiriesRef, where("createdAt", ">=", oneWeekAgoTimestamp))
        const newInquiriesSnapshot = await getDocs(newInquiriesQuery)
        const newCount = newInquiriesSnapshot.size

        // 완료된 문의 수 조회
        const completedQuery = query(inquiriesRef, where("status", "==", "completed"))
        const completedSnapshot = await getDocs(completedQuery)
        const completedCount = completedSnapshot.size

        // 대기 중인 문의 수 조회
        const pendingQuery = query(inquiriesRef, where("status", "==", "pending"))
        const pendingSnapshot = await getDocs(pendingQuery)
        const pendingCount = pendingSnapshot.size

        // 최근 문의 목록 조회
        const recentQuery = query(inquiriesRef, orderBy("createdAt", "desc"), limit(4))
        const recentSnapshot = await getDocs(recentQuery)
        const recentData = recentSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        // 상태 업데이트
        setStats({
          totalInquiries: totalCount,
          newInquiries: newCount,
          completedInquiries: completedCount,
          pendingInquiries: pendingCount,
        })
        setRecentInquiries(recentData)
      } catch (error) {
        console.error("대시보드 데이터 로딩 오류:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  // 날짜 포맷 함수
  const formatDate = (timestamp: any) => {
    if (!timestamp) return "-"
    return new Date(timestamp.seconds * 1000).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  }

  // 상태에 따른 배지 색상
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-900/20 text-green-400"
      case "pending":
        return "bg-yellow-900/20 text-yellow-400"
      case "in-progress":
        return "bg-blue-900/20 text-blue-400"
      default:
        return "bg-gray-900/20 text-gray-400"
    }
  }

  // 상태 텍스트 변환
  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "답변 완료"
      case "pending":
        return "대기 중"
      case "in-progress":
        return "검토 중"
      default:
        return "알 수 없음"
    }
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 text-accent animate-spin" />
          <span className="ml-3 text-white">대시보드 데이터를 불러오는 중...</span>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">안녕하세요, 관리자님</h2>
          <p className="text-white/70">Growink 관리자 대시보드에 오신 것을 환영합니다.</p>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "총 문의",
              value: stats.totalInquiries.toString(),
              icon: <MessageSquare className="h-6 w-6 text-accent" />,
              change: `+${stats.newInquiries} (지난주 대비)`,
              trend: "up",
            },
            {
              title: "대기 중인 문의",
              value: stats.pendingInquiries.toString(),
              icon: <Users className="h-6 w-6 text-accent" />,
              change: "즉시 확인 필요",
              trend: stats.pendingInquiries > 0 ? "up" : "neutral",
            },
            {
              title: "완료된 문의",
              value: stats.completedInquiries.toString(),
              icon: <TrendingUp className="h-6 w-6 text-accent" />,
              change: `진행률: ${stats.totalInquiries > 0 ? Math.round((stats.completedInquiries / stats.totalInquiries) * 100) : 0}%`,
              trend: "neutral",
            },
            {
              title: "오늘 날짜",
              value: new Date().toLocaleDateString("ko-KR", { month: "long", day: "numeric" }),
              icon: <Calendar className="h-6 w-6 text-accent" />,
              change: "좋은 하루 되세요!",
              trend: "neutral",
            },
          ].map((stat, i) => (
            <Card key={i} className="premium-card border-none">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-white text-sm font-medium">{stat.title}</CardTitle>
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">{stat.icon}</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <p
                  className={cn(
                    "text-xs mt-1",
                    stat.trend === "up" ? "text-green-400" : stat.trend === "down" ? "text-red-400" : "text-white/70",
                  )}
                >
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 최근 문의 */}
        <div className="premium-card border-none p-6 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-4">최근 문의</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white/70 font-medium">이름</th>
                  <th className="text-left py-3 px-4 text-white/70 font-medium">연락처</th>
                  <th className="text-left py-3 px-4 text-white/70 font-medium">날짜</th>
                  <th className="text-left py-3 px-4 text-white/70 font-medium">상태</th>
                </tr>
              </thead>
              <tbody>
                {recentInquiries.length > 0 ? (
                  recentInquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 px-4 text-white">
                        <div className="flex items-center">
                          {!inquiry.isRead && <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>}
                          {inquiry.name}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-white/70">{inquiry.contact}</td>
                      <td className="py-3 px-4 text-white/70">{formatDate(inquiry.createdAt)}</td>
                      <td className="py-3 px-4">
                        <span className={cn("px-2 py-1 rounded-full text-xs", getStatusBadgeClass(inquiry.status))}>
                          {getStatusText(inquiry.status)}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-white/70">
                      문의 내역이 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <Button variant="link" className="text-accent hover:text-accent/80" asChild>
              <Link href="/admin/dashboard/inquiries">모든 문의 보기</Link>
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
