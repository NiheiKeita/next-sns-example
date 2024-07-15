import Link from "next/link"
import React from "react"

export const Navbar = React.memo(function Navbar() {

  return (
    <nav className="mb-4 bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold text-white">Twitter Clone</h1>
        <div className="flex space-x-4">
          <Link href="/">
            <p className="text-white">Home</p>
          </Link>
          <Link href="/tweets">
            <p className="text-white">Tweets</p>
          </Link>
          <Link href="/search">
            <p className="text-white">Search</p>
          </Link>
          <Link href="/notifications">
            <p className="text-white">Notifications</p>
          </Link>
          <Link href="/profile">
            <p className="text-white">Profile</p>
          </Link>
          <Link href="/messages">
            <p className="text-white">Messages</p>
          </Link>
        </div>
      </div>
    </nav>
  )
})
