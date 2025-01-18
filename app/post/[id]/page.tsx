"use client";
import { Post } from "@/components/Post/Post";
import { PostAPIInterface } from "@/types/Post";
import { UserAPIInterface } from "@/types/User";
import ApiRequest from "@/utils/api_request";
import host from "@/utils/host_getter";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id);


  const api_handler = new ApiRequest(host);

  const [ post, setPost ] = useState<PostAPIInterface>();
  const [ user, setUser ] = useState<UserAPIInterface>();

  useEffect(() => {
    api_handler.GetPostWithUser(postId)
      .then((post) => {
        setPost(post)
        const { user } = post;
        setUser(user);
      });
  }, [])

  if (!user || !post) return <div>Loading...</div>;
  return <Post user={user} post={post} />
}
