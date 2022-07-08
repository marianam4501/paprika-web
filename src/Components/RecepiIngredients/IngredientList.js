import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientList({ Ingredients }) {
  return (
    <div className="columns-1 justify-center mb-2 mx-5 my-5">
      <table className="bg-light-orange rounded-lg table-fixed border-b-white w-80">
        <thead className="border-y-white border">
          <tr>
            <th className="text-base font-medium">Ingrediente </th>
            <th className="text-base font-medium"> Cantidad</th>
            <th className="text-base font-medium w-20"> Medida</th>
          </tr>
        </thead>
        {Ingredients.map((ingredient) => {
          console.log(ingredient.id);
          return <Ingredient key={ingredient.id} ingredient={ingredient} />;
        })}
      </table>
    </div>
  );
}
