import { getPostData, getSortedPostData } from "@/lib/post";
import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import getFormattedDate from "@/lib/date-formatter";
import Link from "next/link";

type Props = {
  params: {
    postId: string;
  };
};

export function generateStaticParams() {
  const posts = getSortedPostData(); // deduped

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata(props: Props): Metadata {
  const {
    params: { postId },
  } = props;

  const posts = getSortedPostData(); // deduped
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    return {
      title: "Post not found",
    };
  }
  return {
    title: post.title,
  };
}

const Post = async (props: Props) => {
  const {
    params: { postId },
  } = props;

  const posts = getSortedPostData(); // deduped
  const isFoundPost: boolean = !!posts.find((post) => post.id === postId);

  if (!isFoundPost) return notFound();

  const { title, contentHtml, date } = await getPostData(postId);
  const publishedDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{publishedDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href={"/"}>← Back to Home</Link>
        </p>
      </article>
    </main>
  );
};

export default Post;
