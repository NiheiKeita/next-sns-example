import { Navbar } from "~/components/Navbar"
import { useRouter } from "next/router"
import React, { useState } from "react"

export const MessageView = React.memo(function MessageView() {
  const router = useRouter()
  const { id } = router.query
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  const handleSendMessage = () => {
    setMessages([...messages, message])
    setMessage('')
  }

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="mb-4 text-2xl font-bold">Chat with User{id}</h1>
        <div className="mb-4 h-64 overflow-y-scroll border p-4">
          {messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <div className="rounded bg-blue-100 p-2">{msg}</div>
            </div>
          ))}
        </div>
        <textarea
          className="mb-2 w-full border p-2"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="w-full rounded bg-blue-500 p-2 text-white"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </main>
    </div>
  )
})
