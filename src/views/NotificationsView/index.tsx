import { Navbar } from "~/components/Navbar"
import React from "react"

export const NotificationsView = React.memo(function NotificationsView() {

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="mb-4 text-2xl font-bold">Notifications</h1>
        <div className="border-b p-4">You have no notifications.</div>
      </main>
    </div>
  )
})
