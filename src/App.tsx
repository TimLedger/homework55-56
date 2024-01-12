import React, { useState } from 'react';
import { ingredients } from './ingredients';
import IngredientButton from './components/IngredientButton';
import Burger from './components/Burger';

const App: React.FC = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<{ name: string; count: number }[]>([]);

  const handleAddIngredient = (ingredientName: string) => {
    const updatedIngredients = [...selectedIngredients];

    const existingIngredient = updatedIngredients.find((ingredient) => ingredient.name === ingredientName);

    if (existingIngredient) {
      existingIngredient.count += 1;
    } else {
      updatedIngredients.push({ name: ingredientName, count: 1 });
    }

    setSelectedIngredients(updatedIngredients);
  };

  const handleRemoveIngredient = (ingredientName: string) => {
    const updatedIngredients = [...selectedIngredients];

    const existingIngredientIndex = updatedIngredients.findIndex((ingredient) => ingredient.name === ingredientName);

    if (existingIngredientIndex !== -1) {
      const existingIngredient = updatedIngredients[existingIngredientIndex];
      if (existingIngredient.count > 1) {
        existingIngredient.count -= 1;
      } else {
        updatedIngredients.splice(existingIngredientIndex, 1);
      }
    }

    setSelectedIngredients(updatedIngredients);
  };

  return (
    <div>
      <div>
        <h2>Ingredients</h2>
        {ingredients.map((ingredient) => (
          <IngredientButton
            key={ingredient.name}
            ingredient={ingredient}
            onAdd={() => handleAddIngredient(ingredient.name)}
            onRemove={() => handleRemoveIngredient(ingredient.name)}
          />
        ))}


      </div>
      <div>
        <h2>Burger</h2>
        <Burger ingredients={selectedIngredients} />
        <button onClick={() => setSelectedIngredients([])}>Clear All</button>
      </div>
    </div>
  );
};

export default App;
