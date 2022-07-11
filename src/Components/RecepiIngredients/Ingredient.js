import React from "react";

export default function Ingredient({ ingredient }) {
  return (
    <tr className="border-y-white border">
      <th className="text-base font-normal">{ingredient.name} </th>
      <th className="text-base font-normal"> {ingredient.quantity}</th>
      <th className="text-base font-normal"> {ingredient.measure}</th>
    </tr>
  );
}
