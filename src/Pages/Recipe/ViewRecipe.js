import Header from "../../Components/Header/Index.js";
import Footer from "../../Components/Footer/Index.js";
import IngredientList from "../../Components/RecepiIngredients/IngredientList";
import {  useState } from "react";
import { useSelector } from "react-redux";

import { HeartIcon, ClockIcon, BookmarkIcon } from "@heroicons/react/solid";



export default function ViewRecipe() {
  const [likes, setLikes] = useState(100);
  const [liked, setLiked] = useState(false);
  const time = 13;
  const [save, setSave] = useState("Save");
  const [isSaved, setIsSaved] = useState();

  function handleLike(){
    setLiked(!liked)
    handleNumLike()
  }

  function handleSave(){
    setIsSaved(!isSaved)
    setSaveText()
  }

  function setSaveText() {
    
    if(!isSaved){
      setSave("Saved!")
    }else{
      setSave("Save")
    }
    
  }

  function handleNumLike() {
    
    if(!liked){
      setLikes(likes + 1)
    }else{
      setLikes(likes - 1)
    }
    
  }

  const Recipe = useSelector(
    (state) => state.recipe
  );

  return  Recipe ? (
    
    <>
      <div>
        <Header />
      </div>
      <main className="mx-10 pt-5 h-full justify-center content-center">
        <label className="py-5 text-center text-2xl font-normal text-black ">
         {Recipe.recipe.name}
        </label>
        <div className="justify-center items-center  my-5">
          <div className="flex flex-row">
            <div>
              <img
                src={Recipe.recipe.image}
                alt="fotography"
                className="object-cover relative h-72 w-72 rounded-lg shadow-xl"
              />
            </div>

            <div className="columns-1 w-auto ">
              <div
                className=" content-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:trasnparent duration-300"
              >

                <button type="button" onClick={handleLike}>
                {!liked && (
                  <HeartIcon className="text-black h-8"></HeartIcon>
                )}
                {liked && (
                  <HeartIcon className="text-red-600 h-8"></HeartIcon>
                )}
                  
                  <label className="text-black text-sm">{likes}</label>
                </button>
              </div>

              <div
                className="content-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:trasnparent duration-300"
              >
                <button type="button">
                  <ClockIcon className="text-black h-8"></ClockIcon>

                  <label className="text-black text-sm">{time}min</label>
                </button>
              </div>

              <div
                className="content-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:trasnparent duration-300"
              >
                <button type="button" onClick={handleSave}>
                {!isSaved && (
                  <BookmarkIcon className="text-black h-8"></BookmarkIcon>
                )}
                {isSaved && (
                  <BookmarkIcon className="text-light-orange h-8"></BookmarkIcon>
                )}
                  <label className="text-black text-sm">{save}</label>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <label className="ext-base font-normal text-black ">
         Pasos:
        </label>

        <div className="shadow-xl  bg-black rounded-lg h-40 w-full my-5">
          <div className="mx-5 py-2">
              <p className="text-white font-normal text-sm">{Recipe.recipe.steps}</p>
          </div>
        </div>
        
        <label className=" text-base font-normal text-black ">
         Ingredientes:
        </label>

        {/* INGREDIENTS */}
        <IngredientList Recepi={Recipe.recipe} />

        
      </main>
      <div className="static inset-x-0 bottom-0 mt-32">
          <Footer />
        </div>
    </>
  ): <div>
  Vacio
</div>;;
}
