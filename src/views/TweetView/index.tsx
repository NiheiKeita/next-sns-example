import { Navbar } from "~/components/Navbar"
import { TweetBox } from "~/components/TweetBox"
import { TweetList } from "~/components/TweetList"
import React, { useState } from "react"

export const TweetView = React.memo(function TweetView() {
  const [tab, setTab] = useState('following')

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <div className="mb-4 flex space-x-4">
          <button
            className={`p-2 ${tab === 'following' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setTab('following')}
          >
            Following
          </button>
          <button
            className={`p-2 ${tab === 'recommended' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setTab('recommended')}
          >
            Recommended
          </button>
        </div>
        <TweetBox />
        {tab === 'following' ? <TweetList tweets={[]} /> : <TweetList tweets={[]} />}
      </main>
    </div>
  )
})
