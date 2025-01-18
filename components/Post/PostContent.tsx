import { PostAPIInterface } from "@/types/Post";
import { FC } from "react"

export interface PostContentProps {
  post: PostAPIInterface
}

export const PostContent: FC<PostContentProps> = ({...props}) => {
  const { post } = props;
  return <div>
    {post.content}
  </div>
  
}