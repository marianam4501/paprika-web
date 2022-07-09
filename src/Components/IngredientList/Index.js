import React from 'react'
import IngredientForm from "../../Components/IngredientForm/Index";

export default function IngredientList({ ingredients, handleDeleteIngredient, handleInsertUpdate}) {
  return (
    ingredients.map(ingredient => {
      return <IngredientForm key={ingredient.id} ingredient={ingredient}  handleDeleteIngredient={handleDeleteIngredient } handleInsertUpdate={handleInsertUpdate}/>
    })
  )
}