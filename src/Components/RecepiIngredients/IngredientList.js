import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientList({ Recepi }) {
  console.log(Recepi)
  return (
    <div className="columns-1 justify-center mb-2 my-5">
      <table className="bg-light-orange rounded-lg table-fixed border-b-white w-full">
        <thead className="border-y-white border">
          <tr>
            <th className="text-base font-medium">Ingrediente </th>
            <th className="text-base font-medium"> Cantidad</th>
            <th className="text-base font-medium"> Medida</th>
          </tr>
        </thead>
        <tbody>

          {Recepi.ingredients.map((ingredient) => {
            return <Ingredient key={ingredient.id} ingredient={ingredient} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
