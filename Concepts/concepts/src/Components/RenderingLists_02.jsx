import React from "react";
import { recipes } from "./recipeData";

export default function RenderList_02() {
    
    const listOfRecepies = recipes.map((recipe) => (
        <div key={recipe.id}>
          <h1>{recipe.name} </h1>
    
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>
                <ul> {ingredient}</ul>
              </li>
            ))}
          </ul>
        </div>
      ));
    
      return (
        <div>
          <h1>Recipes</h1>
          {listOfRecepies}
        </div>
      );
}