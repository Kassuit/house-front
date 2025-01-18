import { PostAPIInterface } from "@/types/Post";
import { FC, PropsWithChildren } from "react";
import { HTMLAttributes } from "react";
import { PostLI } from "./PostLI";

export interface PostULProps extends HTMLAttributes<HTMLUListElement> {
  posts: PostAPIInterface[]
}

export const PostUL: FC<PostULProps> = ({posts, ...props}) => {
  
  // Es necesario incluir aqui el key, 
  // así React tiene una referencia de qué cambio y qué no 
  // (el enter, update y exit).
  const listItems = posts.map( (post) => <PostLI post={post} key={post.id}/> )
  
  return <ul {...props}>{listItems}</ul>
}
