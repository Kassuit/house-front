"use client";

import { PostUL } from "@/components/Post/Index/PostUL";
import { PostAPIInterface } from "@/types/Post";
import ApiRequest from "@/utils/api_request";
import host from "@/utils/host_getter";
import { useEffect, useState } from "react";

export default function Home() {

  const [posts, setPosts] = useState<PostAPIInterface[]>([]);
  const api_handler = new ApiRequest(host);

  // Get Posts
  useEffect(() => {
    api_handler.GetPosts().then(setPosts)
  }, []);


  return (<>
    <h1> POSTS </h1>
    <PostUL posts={posts}/>
  </>
  );
}
