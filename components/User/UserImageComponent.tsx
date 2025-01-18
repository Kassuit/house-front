import { UserAPIInterface } from "@/types/User";
import { FC } from "react";

export interface UserImageComponentProps {
  user: UserAPIInterface;
}

export const UserImageComponent: FC<UserImageComponentProps> = ({
  ...props
}) => {
  const { user } = props;
  return <div>{user.image}</div>;
};
