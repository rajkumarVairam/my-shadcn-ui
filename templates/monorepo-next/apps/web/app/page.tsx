import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import { Input } from "@workspace/ui/components/input"
import { LoginForm } from "@workspace/ui/components/login-form"

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <LoginForm></LoginForm>
    </div>
  )
}
