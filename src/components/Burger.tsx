import React from 'react';
import '../App.css';

type BurgerProps = {
  ingredients: { name: string; count: number}[];
};

const Burger: React.FC<BurgerProps> = ({ ingredients }) => {
  const calculateTotalPrice = (): number => {
    return ingredients.reduce((total, ingredient) => {
      return total + ingredient.count * 80;
    }, 30); 
  };

  return ( 
    <div>    
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {ingredients.map((ingredient) => (
        <div key={ingredient.name} className={ingredient.name}></div>
      ))}
      <div className="BreadBottom"></div>
    </div> 
      <div className="burgerInfo">
        <h2>Ваш бургер</h2> 
        <div className="TotalPrice">Общая стоимость: {calculateTotalPrice()} сом</div>
      </div> 
    </div>
  );
};

export default Burger;
