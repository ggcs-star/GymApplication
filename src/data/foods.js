// const foods = {
//   Breakfast: [
//     { id: 1, name: 'Oats', calories: 389, protein: 17, carbs: 66, fat: 7, type: 'veg' },
//     { id: 2, name: 'Boiled Egg', calories: 78, protein: 6, carbs: 1, fat: 5, type: 'nonveg' },
//     { id: 3, name: 'Egg White (2)', calories: 34, protein: 7, carbs: 0, fat: 0, type: 'nonveg' },
//     { id: 4, name: 'Milk (Low Fat)', calories: 120, protein: 8, carbs: 10, fat: 4, type: 'veg' },
//     { id: 5, name: 'Banana', calories: 105, protein: 1, carbs: 27, fat: 0, type: 'veg' },
//     { id: 6, name: 'Peanut Butter (1 tbsp)', calories: 95, protein: 4, carbs: 3, fat: 8, type: 'veg' },
//     { id: 7, name: 'Brown Bread (2 slice)', calories: 160, protein: 6, carbs: 30, fat: 2, type: 'veg' },
//     { id: 8, name: 'Upma', calories: 180, protein: 5, carbs: 28, fat: 6, type: 'veg' },
//     { id: 9, name: 'Poha', calories: 200, protein: 6, carbs: 35, fat: 5, type: 'veg' },
//     { id: 10, name: 'Idli (2)', calories: 140, protein: 5, carbs: 28, fat: 1, type: 'veg' },
//   ],

//   'Mid-Morning Snack': [
//     { id: 11, name: 'Apple', calories: 95, protein: 0, carbs: 25, fat: 0, type: 'veg' },
//     { id: 12, name: 'Orange', calories: 62, protein: 1, carbs: 15, fat: 0, type: 'veg' },
//     { id: 13, name: 'Almonds (10)', calories: 70, protein: 3, carbs: 3, fat: 6, type: 'veg' },
//     { id: 14, name: 'Walnuts (5)', calories: 90, protein: 2, carbs: 2, fat: 9, type: 'veg' },
//     { id: 15, name: 'Greek Yogurt', calories: 100, protein: 10, carbs: 4, fat: 4, type: 'veg' },
//     { id: 16, name: 'Buttermilk', calories: 40, protein: 3, carbs: 5, fat: 1, type: 'veg' },
//   ],

//   Lunch: [
//     { id: 17, name: 'Brown Rice', calories: 112, protein: 2.5, carbs: 23, fat: 0.9, type: 'veg' },
//     { id: 18, name: 'White Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3, type: 'veg' },
//     { id: 19, name: 'Roti (2)', calories: 240, protein: 6, carbs: 36, fat: 4, type: 'veg' },
//     { id: 20, name: 'Dal', calories: 180, protein: 12, carbs: 25, fat: 3, type: 'veg' },
//     { id: 21, name: 'Rajma', calories: 215, protein: 13, carbs: 40, fat: 1, type: 'veg' },
//     { id: 22, name: 'Chole', calories: 210, protein: 12, carbs: 35, fat: 4, type: 'veg' },
//     { id: 23, name: 'Paneer', calories: 180, protein: 20, carbs: 3, fat: 10, type: 'veg' },
//     { id: 24, name: 'Chicken Curry', calories: 250, protein: 25, carbs: 5, fat: 15, type: 'nonveg' },
//     { id: 25, name: 'Vegetable Sabzi', calories: 100, protein: 3, carbs: 12, fat: 4, type: 'veg' },
//     { id: 26, name: 'Salad', calories: 50, protein: 2, carbs: 10, fat: 0, type: 'veg' },
//   ],

//   'Evening Snack': [
//     { id: 27, name: 'Peanuts (30g)', calories: 170, protein: 7, carbs: 6, fat: 14, type: 'veg' },
//     { id: 28, name: 'Protein Shake', calories: 150, protein: 25, carbs: 5, fat: 2, type: 'veg' },
//     { id: 29, name: 'Banana', calories: 105, protein: 1, carbs: 27, fat: 0, type: 'veg' },
//     { id: 30, name: 'Boiled Corn', calories: 90, protein: 3, carbs: 19, fat: 1, type: 'veg' },
//     { id: 31, name: 'Sprouts', calories: 120, protein: 9, carbs: 20, fat: 1, type: 'veg' },
//     { id: 32, name: 'Green Tea', calories: 5, protein: 0, carbs: 0, fat: 0, type: 'veg' },
//   ],

//   Dinner: [
//     { id: 33, name: 'Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6, type: 'nonveg' },
//     { id: 34, name: 'Grilled Fish', calories: 200, protein: 22, carbs: 0, fat: 10, type: 'nonveg' },
//     { id: 35, name: 'Paneer', calories: 180, protein: 20, carbs: 3, fat: 10, type: 'veg' },
//     { id: 36, name: 'Tofu', calories: 144, protein: 15, carbs: 3, fat: 8, type: 'veg' },
//     { id: 37, name: 'Vegetable Sabzi', calories: 100, protein: 3, carbs: 12, fat: 4, type: 'veg' },
//     { id: 38, name: 'Roti (2)', calories: 240, protein: 6, carbs: 36, fat: 4, type: 'veg' },
//     { id: 39, name: 'Quinoa', calories: 120, protein: 4, carbs: 21, fat: 2, type: 'veg' },
//     { id: 40, name: 'Dal', calories: 180, protein: 12, carbs: 25, fat: 3, type: 'veg' },
//   ],
// };

// export default foods;

















import foodImages from './foodImages';

const getImage = (name) => {
  const key = name.toLowerCase().replace(/ /g, '_');
  return foodImages[key];
};

const foods = {
  Breakfast: [
    { id: 1, name: 'Oats', calories: 389, protein: 17, carbs: 66, fat: 7, type: 'veg', image: getImage('Oats') },
    { id: 2, name: 'Milk', calories: 120, protein: 8, carbs: 10, fat: 4, type: 'veg', image: getImage('Milk') },
    { id: 3, name: 'Banana', calories: 105, protein: 1, carbs: 27, fat: 0, type: 'veg', image: getImage('Banana') },
    { id: 4, name: 'Brown Bread', calories: 160, protein: 6, carbs: 30, fat: 2, type: 'veg', image: getImage('Brown Bread') },
    { id: 5, name: 'Upma', calories: 180, protein: 5, carbs: 28, fat: 6, type: 'veg', image: getImage('Upma') },
    { id: 6, name: 'Poha', calories: 200, protein: 6, carbs: 35, fat: 5, type: 'veg', image: getImage('Poha') },
    { id: 7, name: 'Idli', calories: 140, protein: 5, carbs: 28, fat: 1, type: 'veg', image: getImage('Idli') },
    { id: 8, name: 'Peanut Butter Toast', calories: 220, protein: 8, carbs: 20, fat: 12, type: 'veg', image: getImage('Peanut Butter Toast') },
    { id: 9, name: 'Fruit Bowl', calories: 150, protein: 2, carbs: 35, fat: 1, type: 'veg', image: getImage('Fruit Bowl') },
    { id: 10, name: 'Smoothie', calories: 180, protein: 6, carbs: 30, fat: 4, type: 'veg', image: getImage('Smoothie') },

    { id: 11, name: 'Boiled Egg', calories: 78, protein: 6, carbs: 1, fat: 5, type: 'nonveg', image: getImage('Boiled Egg') },
    { id: 12, name: 'Egg White Omelette', calories: 120, protein: 20, carbs: 2, fat: 2, type: 'nonveg', image: getImage('Egg White Omelette') },
    { id: 13, name: 'Egg Sandwich', calories: 250, protein: 14, carbs: 30, fat: 10, type: 'nonveg', image: getImage('Egg Sandwich') },
    { id: 14, name: 'Chicken Sausage', calories: 180, protein: 12, carbs: 2, fat: 14, type: 'nonveg', image: getImage('Chicken Sausage') },
    { id: 15, name: 'Chicken Sandwich', calories: 260, protein: 18, carbs: 30, fat: 9, type: 'nonveg', image: getImage('Chicken Sandwich') },
    { id: 16, name: 'Boiled Chicken', calories: 165, protein: 31, carbs: 0, fat: 3.6, type: 'nonveg', image: getImage('Boiled Chicken') },
    { id: 17, name: 'Chicken Omelette', calories: 220, protein: 18, carbs: 2, fat: 14, type: 'nonveg', image: getImage('Chicken Omelette') },
    { id: 18, name: 'Egg Roll', calories: 230, protein: 12, carbs: 30, fat: 8, type: 'nonveg', image: getImage('Egg Roll') },
    { id: 19, name: 'Tuna Sandwich', calories: 240, protein: 20, carbs: 28, fat: 8, type: 'nonveg', image: getImage('Tuna Sandwich') },
    { id: 20, name: 'Fish Toast', calories: 210, protein: 18, carbs: 22, fat: 7, type: 'nonveg', image: getImage('Fish Toast') },
  ],

  'Mid-Morning Snack': [
    { id: 21, name: 'Apple', calories: 95, protein: 0, carbs: 25, fat: 0, type: 'veg', image: getImage('Apple') },
    { id: 22, name: 'Orange', calories: 62, protein: 1, carbs: 15, fat: 0, type: 'veg', image: getImage('Orange') },
    { id: 23, name: 'Almonds', calories: 70, protein: 3, carbs: 3, fat: 6, type: 'veg', image: getImage('Almonds') },
    { id: 24, name: 'Walnuts', calories: 90, protein: 2, carbs: 2, fat: 9, type: 'veg', image: getImage('Walnuts') },
    { id: 25, name: 'Greek Yogurt', calories: 100, protein: 10, carbs: 4, fat: 4, type: 'veg', image: getImage('Greek Yogurt') },
    { id: 26, name: 'Buttermilk', calories: 40, protein: 3, carbs: 5, fat: 1, type: 'veg', image: getImage('Buttermilk') },
    { id: 27, name: 'Paneer Cubes', calories: 120, protein: 8, carbs: 2, fat: 9, type: 'veg', image: getImage('Paneer Cubes') },
    { id: 28, name: 'Fruit Salad', calories: 140, protein: 2, carbs: 30, fat: 1, type: 'veg', image: getImage('Fruit Salad') },
    { id: 29, name: 'Sprouts', calories: 120, protein: 9, carbs: 20, fat: 1, type: 'veg', image: getImage('Sprouts') },
    { id: 30, name: 'Protein Shake', calories: 150, protein: 25, carbs: 5, fat: 2, type: 'veg', image: getImage('Protein Shake') },
    { id: 31, name: 'Boiled Egg', calories: 78, protein: 6, carbs: 1, fat: 5, type: 'nonveg', image: getImage('Boiled Egg') },
    { id: 32, name: 'Chicken Slice', calories: 90, protein: 12, carbs: 0, fat: 3, type: 'nonveg', image: getImage('Chicken Slice') },
    { id: 33, name: 'Tuna Chunks', calories: 120, protein: 20, carbs: 0, fat: 1, type: 'nonveg', image: getImage('Tuna Chunks') },
    { id: 34, name: 'Egg Whites', calories: 60, protein: 12, carbs: 1, fat: 0, type: 'nonveg', image: getImage('Egg Whites') },
    { id: 35, name: 'Chicken Salad', calories: 180, protein: 25, carbs: 5, fat: 6, type: 'nonveg', image: getImage('Chicken Salad') },
    { id: 36, name: 'Boiled Chicken', calories: 165, protein: 31, carbs: 0, fat: 3, type: 'nonveg', image: getImage('Boiled Chicken') },
    { id: 37, name: 'Fish Snack', calories: 140, protein: 18, carbs: 3, fat: 4, type: 'nonveg', image: getImage('Fish Snack') },
    { id: 38, name: 'Egg Sandwich Half', calories: 150, protein: 8, carbs: 15, fat: 6, type: 'nonveg', image: getImage('Egg Sandwich Half') },
    { id: 39, name: 'Chicken Roll', calories: 200, protein: 15, carbs: 20, fat: 7, type: 'nonveg', image: getImage('Chicken Roll') },
    { id: 40, name: 'Turkey Slice', calories: 110, protein: 18, carbs: 1, fat: 2, type: 'nonveg', image: getImage('Turkey Slice') },
  ],

  Lunch: [
    { id: 41, name: 'Brown Rice', calories: 112, protein: 2.5, carbs: 23, fat: 0.9, type: 'veg', image: getImage('Brown Rice') },
    { id: 42, name: 'White Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3, type: 'veg', image: getImage('White Rice') },
    { id: 43, name: 'Dal', calories: 180, protein: 12, carbs: 25, fat: 3, type: 'veg', image: getImage('Dal') },
    { id: 44, name: 'Rajma', calories: 215, protein: 13, carbs: 40, fat: 1, type: 'veg', image: getImage('Rajma') },
    { id: 45, name: 'Chole', calories: 210, protein: 12, carbs: 35, fat: 4, type: 'veg', image: getImage('Chole') },
    { id: 46, name: 'Paneer', calories: 180, protein: 20, carbs: 3, fat: 10, type: 'veg', image: getImage('Paneer') },
    { id: 47, name: 'Roti', calories: 120, protein: 3, carbs: 18, fat: 2, type: 'veg', image: getImage('Roti') },
    { id: 48, name: 'Vegetable Sabzi', calories: 100, protein: 3, carbs: 12, fat: 4, type: 'veg', image: getImage('Vegetable Sabzi') },
    { id: 49, name: 'Salad', calories: 50, protein: 2, carbs: 10, fat: 0, type: 'veg', image: getImage('Salad') },
    { id: 50, name: 'Quinoa', calories: 120, protein: 4, carbs: 21, fat: 2, type: 'veg', image: getImage('Quinoa') },
    { id: 51, name: 'Chicken Curry', calories: 250, protein: 25, carbs: 5, fat: 15, type: 'nonveg', image: getImage('Chicken Curry') },
    { id: 52, name: 'Fish Curry', calories: 220, protein: 20, carbs: 4, fat: 12, type: 'nonveg', image: getImage('Fish Curry') },
    { id: 53, name: 'Egg Curry', calories: 230, protein: 14, carbs: 6, fat: 16, type: 'nonveg', image: getImage('Egg Curry') },
    { id: 54, name: 'Grilled Chicken', calories: 200, protein: 30, carbs: 0, fat: 5, type: 'nonveg', image: getImage('Grilled Chicken') },
    { id: 55, name: 'Chicken Biryani', calories: 350, protein: 20, carbs: 45, fat: 10, type: 'nonveg', image: getImage('Chicken Biryani') },
    { id: 56, name: 'Fish Fry', calories: 280, protein: 22, carbs: 5, fat: 18, type: 'nonveg', image: getImage('Fish Fry') },
    { id: 57, name: 'Chicken Soup', calories: 120, protein: 15, carbs: 3, fat: 3, type: 'nonveg', image: getImage('Chicken Soup') },
    { id: 58, name: 'Egg Fried Rice', calories: 300, protein: 14, carbs: 40, fat: 10, type: 'nonveg', image: getImage('Egg Fried Rice') },
    { id: 59, name: 'Chicken Wrap', calories: 280, protein: 18, carbs: 30, fat: 9, type: 'nonveg', image: getImage('Chicken Wrap') },
    { id: 60, name: 'Tuna Salad', calories: 180, protein: 22, carbs: 5, fat: 6, type: 'nonveg', image: getImage('Tuna Salad') },
  ],

  'Evening Snack': [
    { id: 61, name: 'Peanuts', calories: 170, protein: 7, carbs: 6, fat: 14, type: 'veg', image: getImage('Peanuts') },
    { id: 62, name: 'Corn', calories: 90, protein: 3, carbs: 19, fat: 1, type: 'veg', image: getImage('Corn') },
    { id: 63, name: 'Sprouts', calories: 120, protein: 9, carbs: 20, fat: 1, type: 'veg', image: getImage('Sprouts') },
    { id: 64, name: 'Paneer Sandwich', calories: 200, protein: 12, carbs: 25, fat: 8, type: 'veg', image: getImage('Paneer Sandwich') },
    { id: 65, name: 'Green Tea', calories: 5, protein: 0, carbs: 0, fat: 0, type: 'veg', image: getImage('Green Tea') },
    { id: 66, name: 'Fruit Juice', calories: 110, protein: 1, carbs: 25, fat: 0, type: 'veg', image: getImage('Fruit Juice') },
    { id: 67, name: 'Boiled Potato', calories: 130, protein: 3, carbs: 30, fat: 0, type: 'veg', image: getImage('Boiled Potato') },
    { id: 68, name: 'Protein Bar', calories: 200, protein: 15, carbs: 20, fat: 8, type: 'veg', image: getImage('Protein Bar') },
    { id: 69, name: 'Yogurt Bowl', calories: 120, protein: 6, carbs: 10, fat: 5, type: 'veg', image: getImage('Yogurt Bowl') },
    { id: 70, name: 'Chana', calories: 160, protein: 8, carbs: 25, fat: 2, type: 'veg', image: getImage('Chana') },
    { id: 71, name: 'Boiled Egg', calories: 78, protein: 6, carbs: 1, fat: 5, type: 'nonveg', image: getImage('Boiled Egg') },
    { id: 72, name: 'Chicken Nuggets', calories: 220, protein: 14, carbs: 12, fat: 12, type: 'nonveg', image: getImage('Chicken Nuggets') },
    { id: 73, name: 'Egg Roll', calories: 220, protein: 12, carbs: 30, fat: 8, type: 'nonveg', image: getImage('Egg Roll') },
    { id: 74, name: 'Chicken Snack', calories: 180, protein: 15, carbs: 8, fat: 8, type: 'nonveg', image: getImage('Chicken Snack') },
    { id: 75, name: 'Fish Snack', calories: 150, protein: 18, carbs: 5, fat: 5, type: 'nonveg', image: getImage('Fish Snack') },
    { id: 76, name: 'Tuna Sandwich', calories: 200, protein: 18, carbs: 20, fat: 6, type: 'nonveg', image: getImage('Tuna Sandwich') },
    { id: 77, name: 'Chicken Roll', calories: 250, protein: 16, carbs: 30, fat: 10, type: 'nonveg', image: getImage('Chicken Roll') },
    { id: 78, name: 'Egg Sandwich', calories: 210, protein: 10, carbs: 22, fat: 8, type: 'nonveg', image: getImage('Egg Sandwich') },
    { id: 79, name: 'Chicken Soup', calories: 120, protein: 15, carbs: 3, fat: 3, type: 'nonveg', image: getImage('Chicken Soup') },
    { id: 80, name: 'Turkey Slice', calories: 110, protein: 18, carbs: 1, fat: 2, type: 'nonveg', image: getImage('Turkey Slice') },
  ],

  Dinner: [
    { id: 81, name: 'Paneer', calories: 180, protein: 20, carbs: 3, fat: 10, type: 'veg', image: getImage('Paneer') },
    { id: 82, name: 'Tofu', calories: 144, protein: 15, carbs: 3, fat: 8, type: 'veg', image: getImage('Tofu') },
    { id: 83, name: 'Dal', calories: 180, protein: 12, carbs: 25, fat: 3, type: 'veg', image: getImage('Dal') },
    { id: 84, name: 'Roti', calories: 120, protein: 3, carbs: 18, fat: 2, type: 'veg', image: getImage('Roti') },
    { id: 85, name: 'Vegetable Soup', calories: 80, protein: 3, carbs: 10, fat: 2, type: 'veg', image: getImage('Vegetable Soup') },
    { id: 86, name: 'Quinoa', calories: 120, protein: 4, carbs: 21, fat: 2, type: 'veg', image: getImage('Quinoa') },
    { id: 87, name: 'Mixed Veg', calories: 110, protein: 4, carbs: 15, fat: 3, type: 'veg', image: getImage('Mixed Veg') },
    { id: 88, name: 'Salad Bowl', calories: 90, protein: 3, carbs: 12, fat: 2, type: 'veg', image: getImage('Salad Bowl') },
    { id: 89, name: 'Khichdi', calories: 200, protein: 8, carbs: 30, fat: 4, type: 'veg', image: getImage('Khichdi') },
    { id: 90, name: 'Curd Rice', calories: 220, protein: 6, carbs: 35, fat: 5, type: 'veg', image: getImage('Curd Rice') },
    { id: 91, name: 'Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6, type: 'nonveg', image: getImage('Chicken Breast') },
    { id: 92, name: 'Grilled Fish', calories: 200, protein: 22, carbs: 0, fat: 10, type: 'nonveg', image: getImage('Grilled Fish') },
    { id: 93, name: 'Egg Bhurji', calories: 200, protein: 14, carbs: 4, fat: 14, type: 'nonveg', image: getImage('Egg Bhurji') },
    { id: 94, name: 'Chicken Soup', calories: 120, protein: 15, carbs: 3, fat: 3, type: 'nonveg', image: getImage('Chicken Soup') },
    { id: 95, name: 'Fish Curry', calories: 220, protein: 20, carbs: 4, fat: 12, type: 'nonveg', image: getImage('Fish Curry') },
    { id: 96, name: 'Chicken Curry', calories: 250, protein: 25, carbs: 5, fat: 15, type: 'nonveg', image: getImage('Chicken Curry') },
    { id: 97, name: 'Egg Curry', calories: 230, protein: 14, carbs: 6, fat: 16, type: 'nonveg', image: getImage('Egg Curry') },
    { id: 98, name: 'Chicken Grill', calories: 200, protein: 30, carbs: 0, fat: 5, type: 'nonveg', image: getImage('Chicken Grill') },
    { id: 99, name: 'Fish Fry', calories: 280, protein: 22, carbs: 5, fat: 18, type: 'nonveg', image: getImage('Fish Fry') },
    { id: 100, name: 'Tuna Salad', calories: 180, protein: 22, carbs: 5, fat: 6, type: 'nonveg', image: getImage('Tuna Salad') },
  ],
};

export default foods;