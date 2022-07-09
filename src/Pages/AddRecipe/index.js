import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer/Index";
import IngredientList from "../../Components/IngredientList/Index";

import { v4 as uuidv4 } from "uuid";

import { PlusIcon } from "@heroicons/react/outline";


export function AddRecipe() {
  const [ingredients, setIngredients] = useState([]);
  const [recepiPicture, setRecepiPicture] = useState(null);
  const [recipe,setRecipe] = useState();

  function handleAddIngredient(e) {
    setIngredients((prevIngredients) => {
      return [...prevIngredients, { id: uuidv4() }]; // use id?
    });
  }

  function handleDeleteIngredient(id) {
    const newIngredients = ingredients.filter(
      (ingredient) => ingredient.id !== id
    );
    setIngredients(newIngredients);
  }

  return (
    <div>
      <div className="pb-5">
        <Header />
      </div>
      <main className="h-full w-full mb-20 justify-center gap-y-5">
        <div className="mx-5 gap-y-5">
          <h2 className="py-5 tracking-wide text-center text-3xl font-semibold text-black">
            🥧 Add a recipe 🍕
          </h2>
          {/*Form*/}
          <h6 className="text-lg text-black">Name of the recipe:</h6>
          <input
            value={recipe.name}
            on
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding
            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-light-orange focus:outline-none"
            id="floatingInput"
            placeholder="best recipe ever"
          ></input>
          {/* IMAGE INPUT */}
          <label className="block text-lg  text-black">Meal Picture:</label>

          <div className="content-center mt-1 flex justify-center px-6 pt-5 pb-6 border-2 h-auto border-gray-300 border-dashed rounded-md">
            {!recepiPicture && (
              <div className=" space-y-1 text-center justify-center mt-5">
                <div className="columns-1 justify-center  text-sm text-gray-600">
                  <img
                    className="object-cover h-14 w-22 mb-3 mx-[92px]"
                    src="https://i.ibb.co/dBvR1v0/fast-food.png"
                    alt="Logo Paprika"
                  />
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-dark-orange hover:text-light-orange focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-light-orange"
                  >
                    {/* <span>Upload a Picture</span> */}
                    <input
                      id="recepiPicture"
                      onChange={(evt) => {
                        setRecepiPicture(evt.target.files[0]);
                      }}
                      name="file-upload"
                      type="file"
                      className="w-[185px]"
                    />
                  </label>
                </div>
              </div>
            )}

            {recepiPicture && (
              <div>
                <img
                  src={URL.createObjectURL(recepiPicture)}
                  alt="Product preview"
                  className="rounded-xl"
                />

                <button
                  onClick={() => {
                    setRecepiPicture(null);
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Eliminar
                </button>
              </div>
            )}
          </div>

          {/*  INGREDIENTS */}
          <label className="block text-lg  text-black">Ingredients:</label>

          <IngredientList
            ingredients={ingredients}
            handleDeleteIngredient={handleDeleteIngredient}
          />
          <button
            type="submit"
            className="inline-flex justify-center my-3 px-4 py-3 w-full border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-black hover:bg-dark-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            onClick={handleAddIngredient}
          >
            <PlusIcon className="h-6"></PlusIcon>
          </button>
          {/*Text area for the steps*/}
          <label class="form-label inline-block mb-2 text-black text-lg">
            Steps:
          </label>
          <textarea
            class="
            form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding
            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-light-orange focus:outline-none"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Steps to make the recipe"
          ></textarea>

          <button
            type="submit"
            className="inline-flex justify-center mt-10 px-4 py-3 w-full border border-transparent shadow-sm text-lg font-medium rounded-md text-black bg-light-orange hover:bg-dark-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            <a href="Add_recipe">Post your recipe! 🍜</a>
            
          </button>
        </div>
      </main>
      <div className="static inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
}
