import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function IngedientForm({
  ingredient,
  handleDeleteIngredient,
  handleInsertUpdate,
}) {
  const [ingredient_, setIngredient_] = useState({
    id: uuidv4(),
    name: "",
    quantity: "",
    measurement: "",
  });
  
  
  const handleChange = (key, value) => {
    setIngredient_({
      ...ingredient_,
      [key]: value,
    });
    handleInsertUpdate(ingredient_);
  };

  function handleDeleteClick() {
    handleDeleteIngredient(ingredient.id);
  }
  return (
    <div id={ingredient.id}>
      <main>
        <div className="flex justify-center ">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm w-full gap-3">
            <label className="block text-lg  text-black">Nombre:</label>
            <input
              value={ingredient_.name}
              onChange={(evt) => {
                handleChange("name", evt.target.value);
              }}
              type="text"
              className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border-[2px]
                 border-solid border-gray-300  dark:border-gray-300 rounded-lg transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-light-orange focus:outline-none"
              placeholder="Ingredientes"
            />
            <label className="block text-lg text-black">Cantidad:</label>
            <div className="columns-2">
              <input
                value={ingredient_.quantity}
                onChange={(evt) => {
                  handleChange("quantity", evt.target.value);
                }}
                type="number"
                className="
                form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                bg-white bg-clip-padding border-[2px] border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-light-orange focus:outline-none"
                placeholder="cantidad"
              />
              <input
                value={ingredient_.measurement}
                onChange={(evt) => {
                  handleChange("measure", evt.target.value);
                }}
                type="text"
                className="
                form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                bg-white bg-clip-padding border-[2px] border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-light-orange focus:outline-none"
                placeholder="medida"
              />
            </div>

            <button
              type="button"
              className=" inline-block px-6 py-2.5 mt-5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out"
              onClick={handleDeleteClick}
            >
              Borrar ingrediente
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
