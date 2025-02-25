import { useState, useEffect } from "react";
import { BlogPosts } from "../components/Blog/BlogPosts";
import { NewPost } from "../components/Blog/NewPost";

import { Post } from "../components/Blog/BlogPosts.types";

export function Chapter8() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    let didCancel = false;

    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );

      if (!didCancel) setPosts(await response.json());
    }

    fetchPosts();

    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <main
      style={{
        border: "solid 1px #aaa",
        padding: "1rem",
        borderRadius: "0.5rem",
        backgroundColor: "#fff",
      }}
    >
      <NewPost />
      <BlogPosts posts={posts} />
    </main>
  );
}
