import type { ITweet } from "@/shared/types/tweet.interface";
import Image from "next/image";

interface Props {
  tweet: ITweet;
}

export function Tweet({ tweet }: Props) {
  return (
    <div>
      <Image src="/x-logo.svg" alt="X Logo" width={24} height={24} />
      <p>{tweet.text}</p>
      <span>@{tweet.author}</span>
    </div>
  );
}
