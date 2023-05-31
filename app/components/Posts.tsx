import { getSortedPostData } from "@/lib/post";
import React from "react";
import ListItem from "./ListItem";

type Props = {};

const Posts = (props: Props) => {
  const posts = getSortedPostData();
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold text-white/90">Blog</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default Posts;
