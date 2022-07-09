import React from "react";
import Post from "./Post";

export default function PostsList({ feed }) {
  return (
    <div className="mx-5 columns-2 -z-0">
      <div className="px-1 flex flex-col space-y-5 my-5">
      {feed.map((post) => {
        console.log(post.id);
        return <Post key={post.id} post={post} />;
      })}
    </div>
    </div>
  );
}
