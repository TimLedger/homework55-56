import saladImage from './assets/saladImage.jpg';  
import cheeseImage from './assets/cheeseImage.jpg';  
import meatImage from './assets/meatImage.jpg';  
import baconImage from './assets/baconImage.jpg';

export type Ingredient = {
    name: string;
    price: number;
    image: string; 
    russianName: string;
};

export const ingredients: Ingredient[] = [
    { name: 'Salad', price: 10, image: saladImage, russianName: 'Салат'},
    { name: 'Cheese', price: 50, image: cheeseImage, russianName: 'Сыр'},
    { name: 'Meat', price: 80, image: meatImage, russianName: 'Котлета'},
    { name: 'Bacon', price: 60, image: baconImage, russianName: 'Бекон'},
  ];
 