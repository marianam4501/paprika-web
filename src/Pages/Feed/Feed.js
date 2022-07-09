import Header from "../../Components/Header/index.js";
import Footer from "../../Components/Footer/Index.js";
import PostsList from "../../Components/FeedPosts/PostsList";
// import { HeartIcon } from "@heroicons/react/outline";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { getRecipe } from "../../Slices/Recipes/Requests/getRecipeById.js";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";


// const ID = uuidv4();
export default function Feed() {
  const [feed, setFeed] = useState(null);
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
  
  return  feed ? (
    <>
      <div className="pb-5">
        <Header />
      </div>
      <main>
        <PostsList feed={feed} />

        <div className="static inset-x-0 bottom-0">
          <Footer />
        </div>
      </main>
    </>
  ): <div>
      Vacio
    </div> ;
}
