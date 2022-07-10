import { Link } from "react-router-dom";
import Mixpanel from "../../services/mixpanel.js";

export default function MyRecepies({ post }) {
  return (
    <div id={post.id} key={`product_${post.id}`}>
      <div className="h-auto w-auto">
        <div>
          <div className="mb-2 w-auto">
            <Link
              to={`/recipe/${post.id}`}
              onClick={() => {
                Mixpanel.track(Mixpanel.TYPES.VIEW_RECIPE);
              }}
            >
              <img
                className="object-cover relative h-32 w-32 rounded-lg"
                src={post.image}
                alt={post.name}
              />
            </Link>
          </div>
          <label className="text-sm font-semibold text-black">
            {post.name}
          </label>
        </div>
      </div>
    </div>
  );
}
