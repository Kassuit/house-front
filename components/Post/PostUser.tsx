import { UserAPIInterface } from "@/types/User";
import { FC } from "react"

export interface PostUserProps {
  user: UserAPIInterface
}

export const PostUser: FC<PostUserProps> = ({...props}) => {
  const { user } = props;
  return <div>
    {user.image}
  </div>
  
}