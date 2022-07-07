import React from "react";

export default function IngedientForm({ingredient, handleDeleteIngredient}) {
  function handleDeleteClick() {
    handleDeleteIngredient(ingredient.id)
  }
  return (
    <div id={ingredient.id}>
      <main>
        <div class="flex justify-center ">
          <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm w-full gap-3">
            <label className="block text-lg  text-black">
                Name:
            </label>
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-light-orange focus:outline-none"
              id="exampleFormControlInput3"
              placeholder="Ingedient"
            />
            <label className="block text-lg text-black">Quantity:</label>
            <div className="columns-2">
              <input
                type="number"
                class="
                form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-light-orange focus:outline-none"
                id="1"
                placeholder="quantity"
              />
              <select
                id="Measure"
                class="bg-white border-gray-700 text-black text-sm rounded-lg focus:ring-offset-light-orange focus:border-dark-orange block w-full p-2.5"
              >
                <option selected>Measure</option>
                <option value="Kg">Kilograms</option>
                <option value="L">Liters</option>
                <option value="g">Grams</option>
                <option value="Cups">Cups</option>
              </select>
            </div>

            <button
              type="button"
              class=" inline-block px-6 py-2.5 mt-5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out"
              onClick={handleDeleteClick}
            >
              Delete Ingredient
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
