import React from 'react';
import { View } from 'react-native';
import ExerciseCard from './ExerciseCard';

const WorkoutList = ({ data }) => {
  return (
    <View>
      {data.map((item, index) => (
        <ExerciseCard key={index} item={item} />
      ))}
    </View>
  );
};

export default WorkoutList;