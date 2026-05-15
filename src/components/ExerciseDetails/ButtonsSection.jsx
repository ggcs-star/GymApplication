import React from 'react';

import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const ButtonsSection = ({ exercises, currentIndex }) => {
  const navigation = useNavigation();

  const handleSkip = () => {
    if (!exercises || currentIndex === undefined) {
      return;
    }

    const nextIndex = currentIndex + 1;

    if (nextIndex < exercises.length) {
      navigation.replace('ExerciseDetail', {
        item: exercises[nextIndex],

        exercises: exercises,

        currentIndex: nextIndex,
      });
    } else {
      navigation.goBack();
    }
  };

  return (
    <>
      <TouchableOpacity
        style={styles.startBtn}
        onPress={() =>
          navigation.navigate('WorkoutSession', {
            item: exercises[currentIndex],
            exercises: exercises,
            currentIndex: currentIndex,
          })
        }
      >
        <Text style={styles.startText}>Start Workout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.skipBtn} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip Exercise →</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonsSection;

const styles = StyleSheet.create({
  startBtn: {
    backgroundColor: '#6CFF1A',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  startText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
  },

  skipBtn: {
    alignItems: 'center',
    marginTop: 12,
  },

  skipText: {
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
});
