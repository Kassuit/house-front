import { UserAPIInterface } from "@/types/User";
import host from "@/utils/host_getter";
import Image from "next/image";
import { FC } from "react";

export interface UserImageComponentProps {
  user: UserAPIInterface;
}

export const UserImageComponent: FC<UserImageComponentProps> = ({
  ...props
}) => {
  const { user } = props;
  return <Image 
    src={`http://${host}/images/${user.image}`} 
    alt={user.image} 
    width={0}
    height={0}
    sizes="100vw"
    style={{ width: '30%', height: 'auto' }} />;
}
