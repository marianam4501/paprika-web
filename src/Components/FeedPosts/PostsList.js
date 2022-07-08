import React from "react";
import Post from "./Post";

export default function PostsList({ Posts }) {
  return (
    <div className="columns-2 justify-center mb-2 mx-5">
      {Posts.map((post) => {
        console.log(post.id);
        return <Post key={post.id} recepi={post} />;
      })}
    </div>
  );
}
