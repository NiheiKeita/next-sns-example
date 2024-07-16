
import Link from "next/link"
import React, { useState } from "react"

export const RegisterView = React.memo(function RegisterView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleRegister = () => {
    console.log('Register with:', { email, password, username })
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-xs">
        <h2 className="mb-4 text-center text-2xl">新規登録</h2>
        <input
          type="text"
          className="mb-2 w-full border p-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
          onClick={handleRegister}
        >
          Register
        </button>
        <div className="mt-4 text-center">
          <Link href="/login">
            <p className="text-blue-500">Already have an account? Login</p>
          </Link>
        </div>
      </div>
    </div>
  )
})
