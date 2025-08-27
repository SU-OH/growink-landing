import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

// Firebase 환경변수 검증
const requiredEnvVars = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// 필수 환경변수 누락 검사
const missingVars = Object.entries(requiredEnvVars)
  .filter(([key, value]) => !value)
  .map(([key]) => key)

if (missingVars.length > 0) {
  throw new Error(`Firebase 환경변수가 누락되었습니다: ${missingVars.join(', ')}`)
}

const firebaseConfig = requiredEnvVars

// Firebase 앱 초기화 (중복 초기화 방지)
let app: ReturnType<typeof initializeApp>
let db: ReturnType<typeof getFirestore>
let auth: ReturnType<typeof getAuth>
let storage: ReturnType<typeof getStorage>

try {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
  db = getFirestore(app)
  auth = getAuth(app)
  storage = getStorage(app)
  
  // Firebase 초기화 성공 로그
  console.log('✅ Firebase 초기화 성공:', firebaseConfig.projectId)
} catch (error) {
  console.error('❌ Firebase 초기화 실패:', error)
  throw new Error(`Firebase 초기화에 실패했습니다: ${error}`)
}

export { app, db, auth, storage }
