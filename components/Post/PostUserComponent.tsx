import { UserAPIInterface } from "@/types/User";
import { FC } from "react"

export interface PostUserComponentProps {
  user: UserAPIInterface
}

export const PostUserComponent: FC<PostUserComponentProps> = ({...props}) => {
  const { user } = props;
  return <div>
    {user.bio}
  </div>
  
}