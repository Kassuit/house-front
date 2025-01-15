import { FC } from "react";
import Image from "next/image";


export const HouseCat: FC = () => {
  return (
    <Image src={"/houseCat.jpg"}
    width={0}
    height={0}
    sizes="100vw"
    style={{ width: '30%', height: 'auto' }} alt={"House Cat"} />
  )
}