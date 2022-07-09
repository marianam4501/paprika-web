import React from "react";
import Post from "./Post";
import { v4 as uuidv4 } from "uuid";

export default function PostsList({ feed }) {
  return (
    <div className="mx-5 columns-2 my-5 h-full">
      <div className="px-1 space-y-1 my-5">
        {feed.map((post) => {
          return <Post key={uuidv4()} post={post} />;
        })}
      </div>
    </div>
  );
}
