import classes from "./BlogPosts.module.css";
import { Post } from "./BlogPosts.types";

export function BlogPosts({ posts }: { posts: Post[] }) {
  return (
    <ul className={classes.list}>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
