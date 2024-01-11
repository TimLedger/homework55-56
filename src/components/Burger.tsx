import React from 'react';

type BurgerProps = {
  ingredients: { name: string; count: number }[];
};

const Burger: React.FC<BurgerProps> = ({ ingredients }) => {
  const calculateTotalPrice = (): number => {
    return ingredients.reduce((total, ingredient) => {
      return total + ingredient.count * 80;
    }, 30); 
  };

  return (
    <div>
      <h3>Burger</h3>
      <div>
        {ingredients.map((ingredient) => (
          <div key={ingredient.name}>
            {ingredient.name} x{ingredient.count}
          </div>
        ))}
      </div>
      <div>
        <strong>Total Price: {calculateTotalPrice()} сом</strong>
      </div>
    </div>
  );
};

export default Burger;
