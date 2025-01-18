import { FC } from "react";

import { PostUser, PostUserProps } from "./PostUser";
import { PostContent, PostContentProps } from "./PostContent";

export const Post: FC<(PostUserProps | undefined) & (PostContentProps | undefined)> = ({...props}) => {

  const {user, post} = props;

  if (!user || !post) return <> Loading... </>

  return <div className="flex flex-col">
    <PostUser user={user} />
    <PostContent post={post}/>
  </div>
}
