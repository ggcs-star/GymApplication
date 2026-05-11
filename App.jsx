import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { MealsProvider } from "./src/context/MealsContext";

const App = () => {
  return (
    <MealsProvider>
      <AppNavigator />
    </MealsProvider>
  );
};

export default App;