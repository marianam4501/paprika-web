import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { getRecipe } from "../../Slices/Recipes/Requests/getRecipeById";


export default function RecepiesColumn({ post }) {
  const dispatch = useDispatch();
  return (
    <div 
      id={post.id}
      key={`product_${post.id}`}
      className=""
    >
      <Link to="/recipe">
        <img
          className="object-cover relative h-60 w-44 rounded-lg"
          src={post.image}
          alt={post.name}
          onClick={() => {
            dispatch(getRecipe(post.id));
          }}
        />
      </Link>
      <label className="text-black text-sm ">{post.name}</label>
    </div>
  );
}
