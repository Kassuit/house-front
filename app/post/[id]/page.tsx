"use client";
import { PostComponent } from "@/components/Post/Post";
import { PostAPIInterface } from "@/types/Post";
import { UserAPIInterface } from "@/types/User";
import ApiRequest from "@/utils/api_request";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id);

  const api_handler = new ApiRequest(
    process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:3000"
  );

  const [post, setPost] = useState<PostAPIInterface>();
  const [user, setUser] = useState<UserAPIInterface>();

  useEffect(() => {
    api_handler.GetPostWithUser(postId).then((post) => {
      setPost(post);
      const { user } = post;
      setUser(user);
    });
  }, []);

  if (!user || !post) return <div>Loading...</div>;
  return <PostComponent user={user} post={post} />;
}
