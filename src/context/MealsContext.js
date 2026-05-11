import React, { createContext, useContext, useState } from 'react';

const MealsContext = createContext();

export const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState({
    Breakfast: [],
    'Mid-Morning Snack': [],
    Lunch: [],
    'Evening Snack': [],
    Dinner: [],
  });

  const addMealItems = (mealType, items) => {
    setMeals(prev => ({
      ...prev,
      [mealType]: [...(prev[mealType] || []), ...items],
    }));
  };

  return (
    <MealsContext.Provider value={{ meals, addMealItems }}>
      {children}
    </MealsContext.Provider>
  );
};

export const useMeals = () => useContext(MealsContext);