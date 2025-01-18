import { FC } from "react";
import {
  UserBackgroundComponent,
  UserBackgroundComponentProps,
} from "./UserBackgroundComponent";
import {
  UserImageComponent,
  UserImageComponentProps,
} from "./UserImageComponent";

export const UserBannerComponent: FC<
  UserBackgroundComponentProps & UserImageComponentProps
> = ({ ...props }) => {
  const { user } = props;

  return (
    <div className="user-banner">
      <UserBackgroundComponent user={user} />
      <UserImageComponent user={user} />
    </div>
  );
};
