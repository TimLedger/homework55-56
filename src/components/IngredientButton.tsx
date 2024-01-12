import React from 'react';
import { Ingredient } from '../ingredients';

type IngredientButtonProps = {
  ingredient: Ingredient;
  onAdd: () => void;
  onRemove: () => void;
  count: number;
};

const IngredientButton: React.FC<IngredientButtonProps> = ({ ingredient, onAdd, onRemove, count }) => {
  return (
    <div className='ingredient'>
      <img src={ingredient.image} alt={ingredient.name} />
      <strong>{ingredient.russianName}</strong>
      <p>Цена: {ingredient.price} сом</p>
      <p>x{count}</p>
      <div className='ingredient-btns'>
        <button onClick={onAdd}>+</button>
        <button onClick={onRemove}>-</button>
      </div> 
    </div>
  );
};

export default IngredientButton;
