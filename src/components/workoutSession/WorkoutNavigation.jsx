import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const WorkoutNavigation = ({ exercises, currentIndex }) => {
  const navigation = useNavigation();

  const handleNextWorkout = () => {
    if (!exercises || currentIndex === undefined) {
      return;
    }

    const nextIndex = currentIndex + 1;

    if (nextIndex < exercises.length) {
      navigation.replace('WorkoutSession', {
        item: exercises[nextIndex],

        exercises: exercises,

        currentIndex: nextIndex,
      });
    } else {
      navigation.goBack();
    }
  };

  return (
    <View>
      <View style={styles.row}></View>

      <TouchableOpacity style={styles.finishBtn} onPress={handleNextWorkout}>
        <Text style={styles.finishText}>FINISH WORKOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutNavigation;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 16,
  },

  finishBtn: {
    backgroundColor: '#6CFF1A',

    padding: 16,

    borderRadius: 14,

    alignItems: 'center',
  },

  finishText: {
    color: '#000',

    fontSize: 15,

    fontFamily: 'Poppins-Bold',
  },
});
