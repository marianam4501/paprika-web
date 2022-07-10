import React from "react";
import Post from "./Post";
import { v4 as uuidv4 } from "uuid";

export default function RecepiesBlock({ recipes }) {
  return (
    <div className="grid grid-cols-2 gap-9 mb-5">
        {recipes.map((post) => {
          return <Post key={uuidv4()} post={post} />;
        })}    
    </div>
  );
}
