import React from "react";
import { Link } from "react-router-dom";
// import { HeartIcon } from "@heroicons/react/solid";
// import { useState } from "react";

export default function RecepiesColumn({ recepi }) {
  // const [likes, setLikes] = useState(100);
  // const [liked, setLiked] = useState(false);

  // function handleLike(){
  //   setLiked(!liked)
  //   handleNumLike()
  // }

  // function handleNumLike() {
    
  //   if(!liked){
  //     setLikes(likes + 1)
  //   }else{
  //     setLikes(likes - 1)
  //   }
    
  // }

  return (
    <div id={recepi.id} key={`product_${recepi.id}`} className="px-1 flex flex-col space-y-5">
          <Link to="/recipe">
            <img
              className="object-cover relative h-60 w-44 rounded-lg m-0 -z-0"
              src={recepi.image}
              alt={recepi.name}
            />
          </Link>
          {/* <div className="columns-2"> */}
            
            <label className="text-black text-sm">{recepi.name}</label>
            </div>
           
  );
}
