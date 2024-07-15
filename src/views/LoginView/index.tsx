
import Link from "next/link"
import React, { useState } from "react"

export const LoginView = React.memo(function LoginView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // ログイン処理を追加
    console.log('Login with:', { email, password })
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-xs">
        <h2 className="mb-4 text-center text-2xl">Login</h2>
        <input
          type="email"
          className="mb-2 w-full border p-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="mb-2 w-full border p-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full rounded bg-blue-500 p-2 text-white"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <Link href="/register">
            <p className="text-blue-500">Create an account</p>
          </Link>
        </div>
      </div>
    </div>
  )
})
