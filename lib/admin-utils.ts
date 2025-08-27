import { auth } from "./firebase"
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth"

// 이메일 검증 함수
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// 비밀번호 검증 함수
function validatePassword(password: string): { isValid: boolean; message?: string } {
  if (password.length < 8) {
    return { isValid: false, message: "비밀번호는 최소 8자 이상이어야 합니다." }
  }
  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
    return { isValid: false, message: "비밀번호는 대문자, 소문자, 숫자를 포함해야 합니다." }
  }
  return { isValid: true }
}

// 관리자 계정 생성 함수 (수정된 로직)
export async function createAdminUser(email: string, password: string) {
  try {
    // 입력값 검증
    if (!validateEmail(email)) {
      return { success: false, message: "유효하지 않은 이메일 주소입니다." }
    }

    const passwordValidation = validatePassword(password)
    if (!passwordValidation.isValid) {
      return { success: false, message: passwordValidation.message! }
    }

    // Firebase 연결 상태 확인
    if (!auth) {
      return { success: false, message: "Firebase 인증이 초기화되지 않았습니다." }
    }

    // 이미 존재하는 이메일인지 확인 (올바른 방법)
    const signInMethods = await fetchSignInMethodsForEmail(auth, email)
    
    if (signInMethods.length > 0) {
      return { success: false, message: "이미 존재하는 이메일입니다. 다른 이메일을 사용하세요." }
    }

    // 새 관리자 계정 생성
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    
    console.log("✅ 관리자 계정 생성 성공:", {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      timestamp: new Date().toISOString()
    })

    return { 
      success: true, 
      message: "관리자 계정이 성공적으로 생성되었습니다.",
      uid: userCredential.user.uid
    }

  } catch (error: any) {
    console.error("❌ 관리자 계정 생성 오류:", error)
    
    // 상세한 오류 처리
    switch (error.code) {
      case "auth/email-already-in-use":
        return { success: false, message: "이미 사용 중인 이메일입니다." }
      case "auth/invalid-email":
        return { success: false, message: "유효하지 않은 이메일 주소입니다." }
      case "auth/weak-password":
        return { success: false, message: "비밀번호가 너무 약합니다. 더 강한 비밀번호를 사용하세요." }
      case "auth/network-request-failed":
        return { success: false, message: "네트워크 오류가 발생했습니다. 인터넷 연결을 확인하세요." }
      case "auth/too-many-requests":
        return { success: false, message: "너무 많은 요청이 있었습니다. 잠시 후 다시 시도하세요." }
      default:
        return { 
          success: false, 
          message: `관리자 계정 생성 중 오류가 발생했습니다: ${error.message}` 
        }
    }
  }
}

// Firebase 연결 상태 확인 함수
export function checkFirebaseConnection(): { connected: boolean; message: string } {
  try {
    if (!auth) {
      return { connected: false, message: "Firebase 인증이 초기화되지 않았습니다." }
    }
    
    if (!auth.app) {
      return { connected: false, message: "Firebase 앱이 연결되지 않았습니다." }
    }

    return { connected: true, message: "Firebase 연결이 정상입니다." }
  } catch (error: any) {
    return { connected: false, message: `Firebase 연결 오류: ${error.message}` }
  }
}
