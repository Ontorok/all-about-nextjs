import { getUser, getUserPosts } from "@/lib/user";
import React, { Suspense, use } from "react";
import UserPost from "./components/UserPost";
import { Metadata } from "next";

type Params = {
  params: { userId: string };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const user = await getUser(userId);
  return {
    title: user.name,
    description: `This is a page for ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userReq = getUser(userId);
  const postReq = getUserPosts(userId);
  // const [user, posts] = await Promise.all([userReq, postReq]);
  const user = await userReq;

  return (
    <div>
      <h1>{user.name}</h1>
      <br />
      <Suspense fallback={<h4>Loading post....</h4>}>
        {/* @ts-expect-error Async Server Component */}
        <UserPost promise={postReq} />
      </Suspense>
    </div>
  );
}
