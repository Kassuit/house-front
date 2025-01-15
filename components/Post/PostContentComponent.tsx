import { PostAPIInterface } from "@/types/Post";
import { FC } from "react"

export interface PostContentComponentProps {
  post: PostAPIInterface
}

export const PostContentComponent: FC<PostContentComponentProps> = ({...props}) => {
  const { post } = props;
  return <div>
    {post.content}
  </div>
  
}