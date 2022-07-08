import React from "react";

export default function Ingedient({ ingredient }) {
  return (
    <>
      <thead className="border-y-white border" id={ingredient.id}>
          <tr>
            <th className="text-base font-normal">{ingredient.name} </th>
            <th className="text-base font-normal"> {ingredient.quantity}</th>
            <th className="text-base font-normal w-20"> {ingredient.measurement}</th>
          </tr>
        </thead>
    </>
  );
}
