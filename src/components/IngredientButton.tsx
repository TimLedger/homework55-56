import React from 'react';
import { Ingredient } from '../ingredients';

type IngredientButtonProps = {
  ingredient: Ingredient;
  onAdd: () => void;
  onRemove: () => void;
};

const IngredientButton: React.FC<IngredientButtonProps> = ({ ingredient, onAdd, onRemove }) => {
  return (
    <div>
      <button onClick={onAdd}>Add</button>
      <button onClick={onRemove}>Remove</button>
      <img src={ingredient.image} alt={ingredient.name} />
      <span>{ingredient.name}</span>
    </div>
  );
};

export default IngredientButton;
