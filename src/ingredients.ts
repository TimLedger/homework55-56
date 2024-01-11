import saladImage from './assets/saladImage.jpg';  
import cheeseImage from './assets/cheeseImage.jpg';  
import meatImage from './assets/meatImage.jpg';  
import baconImage from './assets/baconImage.jpg';

export type Ingredient = {
    name: string;
    price: number;
    image: string;
    className: string;
};

export const ingredients: Ingredient[] = [
    { name: 'Салат', price: 10, image: saladImage, className: 'Salad'},
    { name: 'Сыр', price: 50, image: cheeseImage, className: 'Cheese'},
    { name: 'Мясо', price: 80, image: meatImage, className: 'Meat'},
    { name: 'Бекон', price: 60, image: baconImage, className: 'Bacon'},
  ];
