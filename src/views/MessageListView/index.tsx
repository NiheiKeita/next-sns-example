
import Link from "next/link"
import React from "react"
import { Navbar } from "~/components/Navbar"

export const MessageListView = React.memo(function MessageListView() {

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="mb-4 text-2xl font-bold">Direct Messages</h1>
        <div className="border-b p-4">
          <Link href="/messages/1">
            <p className="text-blue-500">Chat with User1</p>
          </Link>
        </div>
        <div className="border-b p-4">
          <Link href="/messages/2">
            <p className="text-blue-500">Chat with User2</p>
          </Link>
        </div>
      </main>
    </div>
  )
})
