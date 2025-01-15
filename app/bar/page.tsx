"use client";
import ApiRequest from "@/utils/api_request";
import { useEffect, useState } from "react";

export default function Home() {
  const [clickQty, setClickQty] = useState<Array<number>>([0, 0]);
  const apiHandler = new ApiRequest(
    process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:3000"
  );

  const fooBar = function () {
    setClickQty([...clickQty, 1]);
  };

  useEffect(() => {
    apiHandler.GetPosts().then((post) => console.log(post));
  }, [clickQty]);

  return (
    <div onClick={fooBar} className="font-bold">
      {clickQty} : uwu
    </div>
  );
}
