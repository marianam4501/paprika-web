import { Link } from "react-router-dom";
import Mixpanel from "../../services/mixpanel.js";

export default function RecepiesColumn({ post }) {

  return (
    <div 
      id={post.id}
      key={`product_${post.id}`}
    >
      <Link to={`/recipe/${post.id}` } 
        onClick={() => {
        Mixpanel.track(Mixpanel.TYPES.VIEW_RECIPE);
        }}
      >
        <img
          className="object-cover relative h-60 w-44 rounded-lg"
          src={post.image}
          alt={post.name}
        />
      </Link>
      <label className="text-black text-sm ">{post.name}</label>
    </div>
  );
}
