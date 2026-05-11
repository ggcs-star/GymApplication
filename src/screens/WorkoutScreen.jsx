import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import WorkoutHeader from '../components/workout/WorkoutHeader';
import WorkoutProgress from '../components/workout/WorkoutProgress';
import WorkoutStats from '../components/workout/WorkoutStats';
import WorkoutList from '../components/workout/WorkoutList';
import StartWorkoutButton from '../components/workout/StartWorkoutButton';

import data from "../data/data.js"

const WorkoutScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: insets.bottom + 70,
        }}
      >
        <WorkoutHeader />
        <WorkoutProgress />
        <WorkoutStats />

        <Text style={styles.section}>Exercises</Text>

        <WorkoutList  data={data} />

          <StartWorkoutButton  exercises={data} />
      </ScrollView>

    
    </View>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    paddingHorizontal: 20,
  },
  section: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
  },
});





