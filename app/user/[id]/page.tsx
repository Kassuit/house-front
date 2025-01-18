"use client";

import { UserBannerComponent } from "@/components/User/UserBanner";
import { UserAPIInterface } from "@/types/User";
import ApiRequest from "@/utils/api_request";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const userId = parseInt(id);

  const api_handler = new ApiRequest(
    process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:3000"
  );

  const [user, setUser] = useState<UserAPIInterface>();

  useEffect(() => {
    api_handler.GetUsers(userId).then(setUser);
  }, []);

  if (!user) return <>Loading...</>;
  return (
    <>
      <>
        <UserBannerComponent user={user} />
      </>
      <>Post info</>
    </>
  );
}
