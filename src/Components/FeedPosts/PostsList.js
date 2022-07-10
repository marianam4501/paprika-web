import React from "react";
import Post from "./Post";
import { v4 as uuidv4 } from "uuid";

export default function PostsList({ feed }) {
  return (
    <div className="grid grid-cols-2 gap-4 mx-7 mb-5">
        {feed.map((post) => {
          return <Post key={uuidv4()} post={post} />;
        })}
      </div>
  );
}
