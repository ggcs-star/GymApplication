import React from 'react';

import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import PlayIcon from '../../assets/images/play2.svg';

const StartWorkoutButton = ({ exercises }) => {
  const navigation = useNavigation();

  const handleStartWorkout = () => {
    if (exercises && exercises.length > 0) {
      navigation.navigate('ExerciseDetail', {
        item: exercises[0],
      });
    }
  };

  return (
    <TouchableOpacity
      style={styles.btn}
      activeOpacity={0.8}
      onPress={handleStartWorkout}
    >
      <View style={styles.iconWrapper}>
        <PlayIcon width={16} height={16} />
      </View>

      <Text style={styles.text}>Start Full Workout</Text>
    </TouchableOpacity>
  );
};

export default StartWorkoutButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#6CFF1A',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 25,
    shadowColor: '#2E7D32',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },

  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      {
        translateY: -1,
      },
    ],
  },

  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    marginLeft: 8,
  },
});
