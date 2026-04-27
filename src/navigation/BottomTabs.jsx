import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HomeIcon from '../assets/images/house.svg';
import WorkoutIcon from '../assets/images/dumbbell1.svg';
import DietIcon from '../assets/images/diet.svg';
import CommunityIcon from "../assets/images/users2.svg";
import UserIcon from '../assets/images/user.svg';

import HomeScreen from '../screens/HomeScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import DietScreen from '../screens/DietScreen';
import CommunityScreen from "../screens/CommunityScreen";
import UserScreen from '../screens/UserScreen';

const Tab = createBottomTabNavigator();

const TabItem = ({ Icon, label, focused }) => {
  return (
    <View style={styles.item}>
      <Icon width={24} height={24} />
      <Text style={[styles.label, { color: focused ? '#000000' : '#5F6368' }]}>
        {label}
      </Text>

      {focused && <View style={styles.dot} />}
    </View>
  );
};

const BottomTabs = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          flex: 1,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 4,
        },
        tabBarIconStyle: {
          flex: 1,
          width: '100%',
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 16 + insets.bottom,
         marginHorizontal:20,
          alignSelf: 'center',
          height: 70,
          borderRadius: 25,
          backgroundColor: '#F8FFF5',
          borderTopWidth: 0,
          elevation: 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.12,
          shadowRadius: 10,
          paddingBottom: 0,
          paddingTop: 0,
          overflow:'hidden'
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem Icon={HomeIcon} label="Home" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Workout"
        component={WorkoutScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem Icon={WorkoutIcon} label="Workout" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Diet"
        component={DietScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem Icon={DietIcon} label="Diet" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem Icon={CommunityIcon} label="Community" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem Icon={UserIcon} label="Profile" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    gap: 2,
  },
  label: {
    fontSize: 10,
    marginTop: 2,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    includeFontPadding: false,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#4CAF50',
    marginTop: 3,
  },
});
