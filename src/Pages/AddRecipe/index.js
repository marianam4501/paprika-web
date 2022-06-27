//import { Link } from "react-router-dom";
import React from "react";
import Header from "../../Components/Header/Index";
import Footer from "../../Components/Footer/Index";
import AddIngredientForm from "../../Components/Add_ingredient_form/Index";
import { PlusIcon } from "@heroicons/react/outline";
export function AddRecipe() {
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
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding
            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-light-orange focus:outline-none"
            id="floatingInput"
            placeholder="best recipe ever"
          ></input>
          {/* IMAGE INPUT */}
          <label className="block text-lg  text-black">Meal Picture:</label>
          <div className="content-center mt-1 flex justify-center px-6 pt-5 pb-6 border-2 h-[200px] border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center justify-center mt-5">
              <img
                className="object-cover h-14 w-22 justify-self-center ml-20"
                src="https://i.ibb.co/dBvR1v0/fast-food.png"
                alt="Logo Paprika"
              />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-dark-orange hover:text-light-orange focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-light-orange"
                >
                  <span>Upload a Picture</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
          <div className="py-3 bg-gray-50 sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-light-orange hover:bg-dark-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Upload
            </button>
          </div>

          <label className="block text-lg  text-black">Ingredients:</label>
          <AddIngredientForm/>
          <button
            type="submit"
            className="inline-flex justify-center my-3 px-4 py-3 w-full border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-black hover:bg-dark-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
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
            Post your recipe!    🍜
          </button>
        </div>
      </main>
      <div className="static inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
}
