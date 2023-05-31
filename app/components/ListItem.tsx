import getFormattedDate from "@/lib/date-formatter";
import Link from "next/link";
import React from "react";

type Props = {
  post: BlogPost;
};

const ListItem = ({ post }: Props) => {
  const { id, title, date } = post;
  return (
    <li className="mt-4 text-2xl text-white/90">
      <Link href={`/posts/${id}`} className="underline hover:text-black/70 hover:text-white">
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{getFormattedDate(date)}</p>
    </li>
  );
};

export default ListItem;
