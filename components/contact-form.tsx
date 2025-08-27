"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CheckCircle, Send, Loader2, AlertCircle } from "lucide-react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    project: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Firestore에 문의 데이터 저장
      await addDoc(collection(db, "inquiries"), {
        name: formData.name,
        contact: formData.contact,
        project: formData.project,
        status: "pending", // 대기 중 상태로 초기화
        isRead: false, // 읽지 않음 상태로 초기화
        createdAt: serverTimestamp(), // 서버 타임스탬프
      })

      setIsSubmitting(false)
      setShowSuccess(true)
      // 폼 초기화
      setFormData({
        name: "",
        contact: "",
        project: "",
      })
    } catch (err) {
      console.error("문의 제출 오류:", err)
      setError("문의 제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.")
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <Alert variant="destructive" className="bg-red-900/20 border-red-900/50 text-red-50">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">
            이름
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="홍길동"
            required
            value={formData.name}
            onChange={handleChange}
            className="premium-input text-white placeholder:text-gray-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact" className="text-white">
            연락처 (이메일 또는 전화번호)
          </Label>
          <Input
            id="contact"
            name="contact"
            placeholder="email@example.com 또는 010-0000-0000"
            required
            value={formData.contact}
            onChange={handleChange}
            className="premium-input text-white placeholder:text-gray-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="project" className="text-white">
            프로젝트 개요
          </Label>
          <Textarea
            id="project"
            name="project"
            placeholder="필요한 서비스와 간략한 프로젝트 내용을 알려주세요."
            rows={4}
            required
            value={formData.project}
            onChange={handleChange}
            className="premium-input text-white placeholder:text-gray-500"
          />
        </div>

        <Button type="submit" className="w-full premium-button group" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              제출 중...
            </>
          ) : (
            <>
              문의하기
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>

        <div className="text-center text-sm text-white/70 pt-4">
          <p>또는 이메일로 직접 문의하세요:</p>
          <a href="mailto:growink.ai@gmail.com" className="text-accent hover:underline">
            growink.ai@gmail.com
          </a>
        </div>
      </form>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="bg-[#0F172A] text-white border border-accent/30">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-accent">
              <CheckCircle className="h-5 w-5" />
              문의가 접수되었습니다
            </DialogTitle>
            <DialogDescription className="text-white/70">
              Growink 팀이 검토 후 빠른 시일 내에 연락드리겠습니다. 감사합니다!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setShowSuccess(false)} className="premium-button">
              확인
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
