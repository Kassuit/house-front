"use client";

import { UserBannerComponent } from "@/components/User/UserBanner";
import { UserAPIInterface } from "@/types/User";
import ApiRequest from "@/utils/api_request";
import host from "@/utils/host_getter";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const userId = parseInt(id);

  const api_handler = new ApiRequest(host);

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
