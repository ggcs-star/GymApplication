import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import SplashScreen from '../screens/SplashScreen';
import NameScreen from '../screens/NameScreen';
import AgeScreen from '../screens/AgeScreen';
import GenderScreen from '../screens/GenderScreen';
import WeightScreen from '../screens/WeightScreen';
import HeightScreen from '../screens/HeightScreen';
import FitnessLevelScreen from '../screens/FitnessLevelScreen';
import GoalScreen from '../screens/GoalScreen';
import HealthConditionScreen from '../screens/HealthConditionScreen';
import WorkoutDaysScreen from '../screens/WorkoutDaysScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import BottomTabs from './BottomTabs';
import SportsScreen from '../screens/SportsScreen';
import ProgressScreen from '../screens/ProgressScreen';
import AddMealScreen from '../screens/AddMealScreen';
import ExerciseDetailScreen from '../screens/ExerciseDetailScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import SportsTrainingScreen from '../screens/SportsTrainingScreen';
import TechniqueDetailScreen from '../screens/TechniqueDetailScreen';
import HealthScreen from '../screens/HealthScreen';
import UserScreen from '../screens/UserScreen';
import UploadReportScreen from '../screens/UploadReportScreen';
import RewardScreen from '../screens/RewardScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Name" component={NameScreen} />
        <Stack.Screen name="Age" component={AgeScreen} />
        <Stack.Screen name="GenderScreen" component={GenderScreen} />
        <Stack.Screen name="Weight" component={WeightScreen} />
        <Stack.Screen name="Height" component={HeightScreen} />
        <Stack.Screen name="FitnessLevel" component={FitnessLevelScreen} />
        <Stack.Screen name="Goal" component={GoalScreen} />
        <Stack.Screen
          name="HealthCondition"
          component={HealthConditionScreen}
        />
        <Stack.Screen name="WorkoutDays" component={WorkoutDaysScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MainTabs" component={BottomTabs} />
        <Stack.Screen name="Sports" component={SportsScreen} />
        <Stack.Screen name="Progress" component={ProgressScreen} />
        <Stack.Screen name="ExerciseDetail" component={ExerciseDetailScreen} />
        <Stack.Screen name="AddMeal" component={AddMealScreen} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
        <Stack.Screen name="SportsTraining" component={SportsTrainingScreen} />
        <Stack.Screen
          name="TechniqueDetail"
          component={TechniqueDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Health" component={HealthScreen} />
        <Stack.Screen name="UploadReport" component={UploadReportScreen} />
        <Stack.Screen name="Reward" component={RewardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
