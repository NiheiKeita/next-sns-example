import { Navbar } from "~/components/Navbar"
import { TweetList } from "~/components/TweetList"
import React from "react"

export const ProfileView = React.memo(function ProfileView() {

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <div className="mb-4 flex items-center">
          <img
            src="/default-profile.png"
            alt="Profile Picture"
            className="mr-4 size-16 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">Username</h1>
            <p>@username</p>
          </div>
        </div>
        <TweetList tweets={[]} />
      </main>
    </div>
  )
})
