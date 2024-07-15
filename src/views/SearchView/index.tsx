import { Navbar } from "~/components/Navbar"
import { TweetList } from "~/components/TweetList"
import React from "react"

export const SearchView = React.memo(function SearchView() {


  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <input
          type="text"
          className="mb-2 w-full border p-2"
          placeholder="Search"
        />
        <button
          className="w-full rounded bg-blue-500 p-2 text-white"
        >
          Search
        </button>
        <TweetList tweets={[]} />
      </main>
    </div>
  )
})
