import { AuthFormCard } from "@/components/auth-form-card"
import { AuthMode } from "@/lib/auth-mode"

export default function SignupPage() {
  return <AuthFormCard mode={AuthMode.Signup} />
}
