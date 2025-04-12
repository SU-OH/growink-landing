import { auth } from "./firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

// 관리자 계정 생성 함수
export async function createAdminUser(email: string, password: string) {
  try {
    // 이미 존재하는 계정인지 확인
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log("관리자 계정이 이미 존재합니다.")
      return { success: true, message: "관리자 계정이 이미 존재합니다." }
    } catch (error: any) {
      // 계정이 없는 경우에만 새로 생성
      if (error.code === "auth/user-not-found") {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log("관리자 계정이 생성되었습니다:", userCredential.user.uid)
        return { success: true, message: "관리자 계정이 생성되었습니다." }
      } else {
        throw error
      }
    }
  } catch (error: any) {
    console.error("관리자 계정 생성 오류:", error)
    return {
      success: false,
      message:
        error.code === "auth/email-already-in-use"
          ? "이미 사용 중인 이메일입니다."
          : "관리자 계정 생성 중 오류가 발생했습니다.",
    }
  }
}
