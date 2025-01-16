import { UserAPIInterface } from "@/types/User";
import { FC } from "react";

export interface UserBackgroundComponentProps {
  user: UserAPIInterface;
}

export const UserBackgroundComponent: FC<UserBackgroundComponentProps> = ({
  ...props
}) => {
  const { user } = props;
  return <div>{user.bio}</div>;
};
