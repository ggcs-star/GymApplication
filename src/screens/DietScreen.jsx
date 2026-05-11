// import React, { useState } from 'react';
// import { ScrollView, View, Text, StyleSheet } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';

// import {
//   ToggleTabs,
//   CalorieCard,
//   MacroCard,
//   MealCard,
//   OrderMealCard,
//   HydrationCard,
//   AddMealButton,
// } from '../components/diet';

// import dietData from '../data/dietData';

// const DietScreen = () => {
//   const [type, setType] = useState('veg');
//   const insets = useSafeAreaInsets();
//   const navigation = useNavigation();

//   return (
//     <ScrollView
//       style={styles.container}
//       showsVerticalScrollIndicator={false}
//       contentContainerStyle={{
//         paddingBottom: insets.bottom + 90,
//       }}
//     >
//       <View style={styles.header}>
//         <Text style={styles.title}>Diet Plan</Text>
//         <Text style={styles.subText}>Track your daily nutrition</Text>
//       </View>

//       <ToggleTabs selected={type} setSelected={setType} />

//       <CalorieCard />
       

//       <Text style={styles.section}>Macros Today</Text>

//       <View style={styles.macroRow}>
//         <MacroCard title="Protein" value={142} total={180} />
//         <MacroCard title="Carbs" value={168} total={220} />
//         <MacroCard title="Fats" value={45} total={60} />
//       </View>
//       <HydrationCard
//         glasses={6}
//         total={8}
//         onAdd={() => console.log('Add water')}
//       />

//       <OrderMealCard onPress={() => console.log('Navigate to order')} />
//         {/* <AddMealButton onPress={() => navigation.navigate('AddMeal')} /> */}

//       <Text style={styles.section}>Today's Meals</Text>

//       {dietData[type]?.map((meal, index) => (
//         <MealCard
//           key={index}
//           title={meal.title}
//           time={meal.time}
//           calories={meal.calories}
//           items={meal.items}
//         />
//       ))}

     
//     </ScrollView>
//   );
// };

// export default DietScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8FFF5',
//     paddingHorizontal: 20,
//   },

//   header: {
//     marginTop: 20,
//     marginBottom: 15,
//   },

//   title: {
//     fontSize: 22,
//     fontFamily: 'Poppins-Bold',
//     color: '#1A1A1A',
//   },

//   subText: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//     fontFamily: 'Poppins-Regular',
//   },

//   section: {
//     fontSize: 16,
//     fontFamily: 'Poppins-Bold',
//     marginTop: 15,
//     marginBottom: 10,
//     color: '#1A1A1A',
//   },

//   macroRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
// });



















import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMeals } from '../context/MealsContext';

import {
  ToggleTabs,
  CalorieCard,
  MacroCard,
  MealCard,
  OrderMealCard,
  HydrationCard,
} from '../components/diet';

const MEAL_GOALS = {
  Breakfast: 500,
  'Mid-Morning Snack': 200,
  Lunch: 700,
  'Evening Snack': 300,
  Dinner: 500,
};

const DietScreen = () => {
  const [type, setType] = useState('veg');
  const insets = useSafeAreaInsets();
  const { meals } = useMeals(); 

  const getCalories = (meal) =>
    meals[meal]?.reduce((acc, item) => acc + (item.calories || 0), 0) || 0;

  const getMealStats = (meal) => {
    const consumed = getCalories(meal);
    const goal = MEAL_GOALS[meal] || 0;
    const remaining = Math.max(goal - consumed, 0);
    const extra = consumed > goal ? consumed - goal : 0;
    return { consumed, goal, remaining, extra };
  };

  const totalCalories = Object.keys(meals).reduce(
    (acc, meal) => acc + getCalories(meal),
    0
  );

  const mealList = [
    { title: 'Breakfast', time: '8:00 AM' },
    { title: 'Mid-Morning Snack', time: '11:00 AM' },
    { title: 'Lunch', time: '2:00 PM' },
    { title: 'Evening Snack', time: '5:00 PM' },
    { title: 'Dinner', time: '8:30 PM' },
  ];

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: insets.bottom + 90 }}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Diet Plan</Text>
        <Text style={styles.subText}>Track your daily nutrition</Text>
      </View>

      <ToggleTabs selected={type} setSelected={setType} />
      <CalorieCard consumed={totalCalories} goal={2200} />

      <Text style={styles.section}>Macros Today</Text>
      <View style={styles.macroRow}>
        <MacroCard title="Protein" value={142} total={180} />
        <MacroCard title="Carbs" value={168} total={220} />
        <MacroCard title="Fats" value={45} total={60} />
      </View>

      <HydrationCard
        glasses={6}
        total={8}
        onAdd={() => console.log('Add water')}
      />
      <OrderMealCard onPress={() => console.log('Navigate')} />

      <Text style={styles.section}>Today's Meals</Text>

      {mealList.map((meal, index) => {
        const stats = getMealStats(meal.title);
        return (
          <MealCard
            key={index}
            title={meal.title}
            time={meal.time}
            consumed={stats.consumed}
            goal={stats.goal}
            remaining={stats.remaining}
            extra={stats.extra}
            items={meals[meal.title]}
            dietType={type}
          />
        );
      })}
    </ScrollView>
  );
};

export default DietScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#1A1A1A',
  },
  subText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },
  section: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#1A1A1A',
  },
  macroRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});