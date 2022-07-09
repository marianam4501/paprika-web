import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { getRecipe } from "../../Slices/Recipes/Requests/getRecipeById";
// import { HeartIcon } from "@heroicons/react/solid";
// import { useState } from "react";

export default function RecepiesColumn({ post }) {
  const dispatch = useDispatch();
  return (
    <div id={post.id} key={`product_${post.id}`} className="px-1 flex flex-col space-y-5">
          <Link to="/recipe">
            <img
              className="object-cover relative h-60 w-44 rounded-lg m-0 -z-0"
              src={post.image}
              alt={post.name}
              onClick={() => {
                dispatch(getRecipe(post.id));
               }}
            />
          </Link>
          {/* <div className="columns-2"> */}
            
            <label className="text-black text-sm">{post.name}</label>
            </div>
           
  );
}
