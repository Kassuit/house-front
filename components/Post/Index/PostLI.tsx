import { PostAPIInterface } from "@/types/Post";
import { UserAPIInterface } from "@/types/User";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";

export interface PostLIProps extends HTMLAttributes<HTMLLIElement> {
  post: PostAPIInterface
}

export const PostLI: FC<PostLIProps> = ({post, ... props}) => {
  if (!post) return <li>Loading...</li>

  return <li {...props}> 
    <Link href={`./${post.id}`}>
      {post.content} 
    </Link> 
  </li>
}