import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { getRecipe } from "../../Slices/Recipes/Requests/getRecipeById";
import Mixpanel from "../../services/mixpanel.js";

export default function RecepiesColumn({ post }) {
  const dispatch = useDispatch();
  return (
    <div 
      id={post.id}
      key={`product_${post.id}`}
    >
      <Link to="/recipe">
        <img
          className="object-cover h-60 w-44 rounded-lg"
          src={post.image}
          alt={post.name}
          onClick={() => {
            Mixpanel.track(Mixpanel.TYPES.VIEW_RECIPE);
            dispatch(getRecipe(post.id));
          }}
        />
      </Link>
      <label className="text-black text-base ">{post.name}</label>
    </div>
  );
}
