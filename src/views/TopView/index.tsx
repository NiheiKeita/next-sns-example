import { Navbar } from "~/components/Navbar"
import React from "react"

export const TopView = React.memo(function TopView() {

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Welcome to Twitter Clone</h1>
      </main>
    </div>
  )
})
