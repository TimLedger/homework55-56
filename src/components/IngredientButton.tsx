import React from 'react';
import { Ingredient } from '../ingredients';

type IngredientButtonProps = {
  ingredient: Ingredient;
  onAdd: () => void;
};

const IngredientButton: React.FC<IngredientButtonProps> = ({ ingredient, onAdd }) => {
  return (
    <button onClick={onAdd}>
      <img src={ingredient.image} alt={ingredient.name} />
      <span>{ingredient.name}</span>
    </button>
  );
};

export default IngredientButton;
