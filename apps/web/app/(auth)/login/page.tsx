import { AuthFormCard } from "@/components/auth-form-card"
import { AuthMode } from "@/lib/auth-mode"

export default function LoginPage() {
  return <AuthFormCard mode={AuthMode.Login} />
}
