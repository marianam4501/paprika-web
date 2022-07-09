import Header from "../../Components/Header/index.js";
import Footer from "../../Components/Footer/Index.js";
// import PostsList from "../../Components/FeedPosts/PostsList";
// import { HeartIcon } from "@heroicons/react/outline";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
// import { getRecipe } from "../../Slices/Recipes/Requests/getRecipeById.js";
// import { useDispatch } from "react-redux";

// const ID = uuidv4();

export default function Feed() {
  
  const [feed, setFeed] = useState(null);
  // const dispatch = useDispatch();

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

  return feed ? (
    <>
      <div className="pb-5">
        <Header />
      </div>
      <main>
        {/* <PostsList Posts={Posts} /> */}

        <div className="static inset-x-0 bottom-0">
          <Footer />
        </div> 
      </main>
    </>
  ): <div>
  Vacio
 </div> ;
}

//   return feed ? (
//     <div>
//       <SimpleHeader />
//       <div className="mx-5 columns-2 -z-0">
//         {feed.map((R) => {
//           return (
//             <div
//               key={`product_${R.id}`}
//               className="px-1 flex flex-col space-y-5 static"
//               onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
//             >
//               <div>
//                 <img
//                   className="object-cover relative h-auto w-auto rounded-lg mt-3"
//                   src={R.image}
//                   alt={R.name}
//                 />
            
//               </div>    
//               {isHovering && (
//                   <div className="bg-light-orange opacity-100 rounded-lg font-black mb-7">
//                     <button className="button_hover mb-8" >
//                       <img src={require("../../Images/like.png") } className="h-7 w-7" alt="like"/>
//                     </button>
//                     <h1 className="text-center opacity-100 static" >{R.name}</h1>
//                     <button className="button_hover mb-8" href="/recipe"
//                         onClick={() => {
//                           dispatch(getRecipe(R.id));
//                           <Navigate to="/recipe" />
//                          }}
//                     >
//                       <a>VER RECETA</a>
//                     </button>

//                   </div>
//                 )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   ): <div>
//       Vacio
//      </div> ;;
// }
