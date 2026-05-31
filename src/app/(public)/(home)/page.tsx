import { TWEETS } from "@/shared/data/tweet.data";
import { Tweet } from "./Tweet";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6"> Home</h1>
      <div className="space-y-6">
        {TWEETS.map((tweet) => {
          return <Tweet key={tweet.author} tweet={tweet} />;
        })}
      </div>
    </div>
  );
}
