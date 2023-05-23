import { getAllUsers } from "@/lib/user";
import { type Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Users",
};
export default async function Users() {
  const users = await getAllUsers();

  const content = (
    <section>
      <button
        title="Not working ye"
        className="bg-indigo-900  px-4 py-1 rounded mb-1 text-white hover:scale-110 transition duration-150"
      >
        Back
      </button>

      <hr />
      {users.map((user) => {
        return (
          <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
        );
      })}
    </section>
  );
  return content;
}
