import { FC } from "react";
import { PostUserComponent, PostUserComponentProps } from "./PostUserComponent";
import {
  PostContentComponent,
  PostContentComponentProps,
} from "./PostContentComponent";

export const PostComponent: FC<
  PostUserComponentProps & PostContentComponentProps
> = ({ ...props }) => {
  const { user, post } = props;

  return (
    <div className="flex flex-col">
      <PostUserComponent user={user} />
      <PostContentComponent post={post} />
    </div>
  );
};
