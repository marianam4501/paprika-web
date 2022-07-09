import SimpleHeader from "../../Components/Header/index.js";
import { useEffect, useState } from "react";
import { getRecipe } from "../../Slices/Recipes/Requests/getRecipeById.js";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";


export default function Feed() {
  const [feed, setFeed] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const dispatch = useDispatch();

  useEffect (() => {
    const feedFetch = async() => {
      const fetchFeed = await fetch (`https://paprika-api.herokuapp.com/recipes/feed`);
      const feedJSON = await fetchFeed.json();
      if (fetchFeed.status === 200) {
        setFeed(feedJSON);
      } else {
        console.log("Error al cargar el feed");
      }
    };
    feedFetch();
  },[]);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return feed ? (
    <div>
      <SimpleHeader />
      <div className="mx-5 columns-2 -z-0">
        {feed.map((R) => {
          return (
            <div
              key={`product_${R.id}`}
              className="px-1 flex flex-col space-y-5 static"
              onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
            >
              <div>
                <img
                  className="object-cover relative h-auto w-auto rounded-lg mt-3"
                  src={R.image}
                  alt={R.name}
                />
            
              </div>    
              {isHovering && (
                  <div className="bg-light-orange opacity-100 rounded-lg font-black mb-7">
                    <button className="button_hover mb-8" >
                      <img src={require("../../Images/like.png") } className="h-7 w-7" alt="like"/>
                    </button>
                    <h1 className="text-center opacity-100 static" >{R.name}</h1>
                    <button className="button_hover mb-8" href="/recipe"
                        onClick={() => {
                          dispatch(getRecipe(R.id));
                          <Navigate to="/recipe" />
                         }}
                    >
                      <a>VER RECETA</a>
                    </button>

                  </div>
                )}
            </div>
          );
        })}
      </div>
    </div>
  ): <div>
      Vacio
     </div> ;;
}
