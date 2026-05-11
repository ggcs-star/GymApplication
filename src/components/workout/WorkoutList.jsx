import React from 'react';
import { View } from 'react-native';
import ExerciseCard from './ExerciseCard';

const WorkoutList = ({ data }) => {
  return (
    <View>
      {data.map((item, index) => (
        <ExerciseCard
          key={index}
          item={item}
          exercises={data}
          currentIndex={index}
        />
      ))}
    </View>
  );
};

export default WorkoutList;
