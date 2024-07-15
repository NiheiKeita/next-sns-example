
import React from "react"
import { Tweet } from "~/types/Tweet"

type Props = {
  tweets: Tweet[];
}

export const TweetList = React.memo<Props>(function TweetList({
  tweets
}) {
  return (
    <div>
      {tweets.map((tweet) => (
        <div key={tweet.id} className="flex space-x-4 border-b p-4">
          <img
            src={tweet.user.avatar}
            alt={`${tweet.user.username}'s avatar`}
            className="size-12 rounded-full"
          />
          <div>
            <div className="font-bold">{tweet.user.username}</div>
            <p>{tweet.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
})
