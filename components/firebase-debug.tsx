"use client"

import React, { useEffect, useState } from 'react'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, Info } from 'lucide-react'
import { checkFirebaseConnection } from '@/lib/admin-utils'

interface FirebaseDebugProps {
  showDetails?: boolean
}

export default function FirebaseDebug({ showDetails = false }: FirebaseDebugProps) {
  const [status, setStatus] = useState<{ connected: boolean; message: string } | null>(null)
  const [envVars, setEnvVars] = useState<Record<string, string | undefined>>({})

  useEffect(() => {
    // Firebase 연결 상태 확인
    const connectionStatus = checkFirebaseConnection()
    setStatus(connectionStatus)

    // 환경 변수 확인 (클라이언트에서 접근 가능한 것만)
    setEnvVars({
      'API_KEY': process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? '설정됨' : '❌ 누락',
      'AUTH_DOMAIN': process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? '설정됨' : '❌ 누락',
      'PROJECT_ID': process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? '설정됨' : '❌ 누락',
      'STORAGE_BUCKET': process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ? '설정됨' : '❌ 누락',
      'MESSAGING_SENDER_ID': process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ? '설정됨' : '❌ 누락',
      'APP_ID': process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? '설정됨' : '❌ 누락',
    })
  }, [])

  if (!status) return null

  return (
    <div className="space-y-4">
      {/* 연결 상태 표시 */}
      <Alert 
        variant={status.connected ? "default" : "destructive"}
        className={
          status.connected 
            ? "bg-green-900/20 border-green-900/50 text-green-50" 
            : "bg-red-900/20 border-red-900/50 text-red-50"
        }
      >
        {status.connected ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
        <AlertDescription>
          <strong>Firebase 상태:</strong> {status.message}
        </AlertDescription>
      </Alert>

      {/* 상세 정보 표시 */}
      {showDetails && (
        <Alert className="bg-blue-900/20 border-blue-900/50 text-blue-50">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <div className="space-y-2">
              <strong>환경 변수 상태:</strong>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {Object.entries(envVars).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-sm">{key}:</span>
                    <Badge variant={value?.includes('❌') ? "destructive" : "secondary"}>
                      {value}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}