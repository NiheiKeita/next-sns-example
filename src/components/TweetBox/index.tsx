import React from "react"

export const TweetBox = React.memo(function TweetBox() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-white">Twitter Clone</h1>
      </div>
    </nav>
  )
})
