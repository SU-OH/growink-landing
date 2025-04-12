"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Eye, Mail, Calendar, CheckCircle, XCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { db } from "@/lib/firebase"
import { collection, query, orderBy, getDocs, doc, updateDoc, Timestamp, addDoc } from "firebase/firestore"

interface Inquiry {
  id: string
  name: string
  contact: string
  email?: string
  project: string
  status: string
  isRead: boolean
  createdAt: Timestamp
  response?: string
  respondedAt?: Timestamp
}

export default function InquiryList() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [responseText, setResponseText] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [isSending, setIsSending] = useState(false)

  // 문의 목록 불러오기
  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"))
        const querySnapshot = await getDocs(q)

        const inquiriesData: Inquiry[] = []
        querySnapshot.forEach((doc) => {
          const data = doc.data() as Omit<Inquiry, "id">
          inquiriesData.push({
            id: doc.id,
            ...data,
            createdAt: data.createdAt as Timestamp,
          })
        })

        setInquiries(inquiriesData)
      } catch (error) {
        console.error("문의 목록 불러오기 오류:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchInquiries()
  }, [])

  // 필터링된 문의 목록
  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesSearch =
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (inquiry.email?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      inquiry.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.project.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || inquiry.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // 문의 상세 보기
  const handleViewInquiry = async (inquiry: Inquiry) => {
    // 읽음 상태로 변경
    if (!inquiry.isRead) {
      try {
        await updateDoc(doc(db, "inquiries", inquiry.id), {
          isRead: true,
        })

        // 로컬 상태 업데이트
        setInquiries((prev) => prev.map((item) => (item.id === inquiry.id ? { ...item, isRead: true } : item)))
      } catch (error) {
        console.error("읽음 상태 업데이트 오류:", error)
      }
    }

    setSelectedInquiry(inquiry)
    setResponseText(inquiry.response || "")
    setIsDetailOpen(true)
  }

  // 문의 상태 변경
  const handleStatusChange = async (status: string) => {
    if (!selectedInquiry) return

    try {
      await updateDoc(doc(db, "inquiries", selectedInquiry.id), {
        status,
      })

      // 로컬 상태 업데이트
      setInquiries((prev) => prev.map((item) => (item.id === selectedInquiry.id ? { ...item, status } : item)))
      setSelectedInquiry({ ...selectedInquiry, status })
    } catch (error) {
      console.error("상태 업데이트 오류:", error)
    }
  }

  // 답변 임시 저장
  const handleSaveDraft = async () => {
    if (!selectedInquiry) return

    setIsSaving(true)
    try {
      await updateDoc(doc(db, "inquiries", selectedInquiry.id), {
        response: responseText,
        status: "in-progress",
      })

      // 로컬 상태 업데이트
      setInquiries((prev) =>
        prev.map((item) =>
          item.id === selectedInquiry.id ? { ...item, response: responseText, status: "in-progress" } : item,
        ),
      )
      setSelectedInquiry({ ...selectedInquiry, response: responseText, status: "in-progress" })
    } catch (error) {
      console.error("임시 저장 오류:", error)
    } finally {
      setIsSaving(false)
    }
  }

  // 답변 보내기
  const handleSendResponse = async () => {
    if (!selectedInquiry || !responseText.trim()) return

    setIsSending(true)
    try {
      const now = Timestamp.now()

      // 문의 상태 업데이트
      await updateDoc(doc(db, "inquiries", selectedInquiry.id), {
        response: responseText,
        status: "completed",
        respondedAt: now,
      })

      // 응답 기록 저장 (선택 사항)
      await addDoc(collection(db, "responses"), {
        inquiryId: selectedInquiry.id,
        response: responseText,
        sentAt: now,
        recipientName: selectedInquiry.name,
        recipientContact: selectedInquiry.contact,
      })

      // 로컬 상태 업데이트
      setInquiries((prev) =>
        prev.map((item) =>
          item.id === selectedInquiry.id
            ? {
                ...item,
                response: responseText,
                status: "completed",
                respondedAt: now,
              }
            : item,
        ),
      )
      setSelectedInquiry({
        ...selectedInquiry,
        response: responseText,
        status: "completed",
        respondedAt: now,
      })

      // 실제 이메일 전송은 Firebase Functions 또는 별도 API를 통해 구현해야 함
      // 여기서는 상태 업데이트만 진행
    } catch (error) {
      console.error("답변 전송 오류:", error)
    } finally {
      setIsSending(false)
    }
  }

  // 날짜 포맷 함수
  const formatDate = (timestamp: Timestamp | undefined) => {
    if (!timestamp) return "-"
    return new Date(timestamp.seconds * 1000).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <>
      <div className="premium-card border-none p-6 rounded-lg">
        {/* 필터 및 검색 */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
            <Input
              placeholder="이름, 이메일, 내용 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="premium-input text-white pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-white/50 h-4 w-4" />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="premium-input text-white w-[180px]">
                <SelectValue placeholder="상태 필터" />
              </SelectTrigger>
              <SelectContent className="bg-[#0F172A] border-white/10 text-white">
                <SelectItem value="all">모든 상태</SelectItem>
                <SelectItem value="pending">대기 중</SelectItem>
                <SelectItem value="in-progress">검토 중</SelectItem>
                <SelectItem value="completed">답변 완료</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 문의 목록 */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 text-accent animate-spin" />
            <span className="ml-3 text-white">문의 목록을 불러오는 중...</span>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white/70 font-medium">이름</th>
                  <th className="text-left py-3 px-4 text-white/70 font-medium">연락처</th>
                  <th className="text-left py-3 px-4 text-white/70 font-medium hidden md:table-cell">날짜</th>
                  <th className="text-left py-3 px-4 text-white/70 font-medium">상태</th>
                  <th className="text-right py-3 px-4 text-white/70 font-medium">액션</th>
                </tr>
              </thead>
              <tbody>
                {filteredInquiries.length > 0 ? (
                  filteredInquiries.map((inquiry) => (
                    <tr
                      key={inquiry.id}
                      className={cn("border-b border-white/5 hover:bg-white/5", !inquiry.isRead && "bg-accent/5")}
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          {!inquiry.isRead && <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>}
                          <span className="text-white">{inquiry.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-white/70">{inquiry.contact}</td>
                      <td className="py-3 px-4 text-white/70 hidden md:table-cell">{formatDate(inquiry.createdAt)}</td>
                      <td className="py-3 px-4">
                        <Badge
                          className={cn(
                            "font-normal",
                            inquiry.status === "pending"
                              ? "bg-yellow-900/20 text-yellow-400 hover:bg-yellow-900/30"
                              : inquiry.status === "in-progress"
                                ? "bg-blue-900/20 text-blue-400 hover:bg-blue-900/30"
                                : "bg-green-900/20 text-green-400 hover:bg-green-900/30",
                          )}
                        >
                          {inquiry.status === "pending"
                            ? "대기 중"
                            : inquiry.status === "in-progress"
                              ? "검토 중"
                              : "답변 완료"}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white/70 hover:text-white"
                          onClick={() => handleViewInquiry(inquiry)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          <span className="hidden sm:inline">상세보기</span>
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-white/70">
                      {searchTerm || statusFilter !== "all" ? "검색 결과가 없습니다." : "문의 내역이 없습니다."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 문의 상세 모달 */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="bg-[#0F172A] text-white border-white/10 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">문의 상세 정보</DialogTitle>
            <DialogDescription className="text-white/70">고객 문의 내용과 상태를 관리하세요.</DialogDescription>
          </DialogHeader>

          {selectedInquiry && (
            <div className="space-y-6">
              <Tabs defaultValue="details">
                <TabsList className="bg-black/30">
                  <TabsTrigger value="details">상세 정보</TabsTrigger>
                  <TabsTrigger value="response">답변 관리</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="space-y-4 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-white/50 text-sm">이름</p>
                      <p className="text-white font-medium">{selectedInquiry.name}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white/50 text-sm">상태</p>
                      <Select value={selectedInquiry.status} onValueChange={handleStatusChange}>
                        <SelectTrigger className="premium-input text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0F172A] border-white/10 text-white">
                          <SelectItem value="pending">대기 중</SelectItem>
                          <SelectItem value="in-progress">검토 중</SelectItem>
                          <SelectItem value="completed">답변 완료</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white/50 text-sm flex items-center">
                        <Mail className="h-4 w-4 mr-1" /> 이메일/연락처
                      </p>
                      <p className="text-white">{selectedInquiry.email || selectedInquiry.contact}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white/50 text-sm flex items-center">
                        <Calendar className="h-4 w-4 mr-1" /> 문의 날짜
                      </p>
                      <p className="text-white">{formatDate(selectedInquiry.createdAt)}</p>
                    </div>
                    {selectedInquiry.respondedAt && (
                      <div className="space-y-2">
                        <p className="text-white/50 text-sm flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1" /> 답변 날짜
                        </p>
                        <p className="text-white">{formatDate(selectedInquiry.respondedAt)}</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 pt-2">
                    <p className="text-white/50 text-sm">문의 내용</p>
                    <div className="premium-card p-4 rounded-lg bg-black/30 text-white">{selectedInquiry.project}</div>
                  </div>
                </TabsContent>
                <TabsContent value="response" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <p className="text-white/50 text-sm">답변 내용</p>
                    <textarea
                      className="premium-input text-white w-full h-32 resize-none"
                      placeholder="고객에게 보낼 답변을 작성하세요..."
                      value={responseText}
                      onChange={(e) => setResponseText(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      className="border-white/10 text-white hover:bg-white/5"
                      onClick={handleSaveDraft}
                      disabled={isSaving}
                    >
                      {isSaving ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          저장 중...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          임시 저장
                        </>
                      )}
                    </Button>
                    <Button
                      className="premium-button"
                      onClick={handleSendResponse}
                      disabled={isSending || !responseText.trim()}
                    >
                      {isSending ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          전송 중...
                        </>
                      ) : (
                        <>
                          <Mail className="h-4 w-4 mr-2" />
                          답변 보내기
                        </>
                      )}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          <DialogFooter className="border-t border-white/10 pt-4">
            <Button variant="ghost" className="text-white/70" onClick={() => setIsDetailOpen(false)}>
              <XCircle className="h-4 w-4 mr-2" />
              닫기
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
