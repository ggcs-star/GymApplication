import React from 'react';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const  TrainingNavigation  = ({
  techniques,

  currentIndex,
}) => {
  const navigation = useNavigation();

  const handleNext = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex < techniques.length) {
      navigation.replace('TrainingSession', {
        item: techniques[nextIndex],

        techniques,

        currentIndex: nextIndex,
      });
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity style={styles.finishBtn} onPress={handleNext}>
      <Text style={styles.finishText}>FINISH TRAINING</Text>
    </TouchableOpacity>
  );
};

export default TrainingNavigation;

const styles = StyleSheet.create({
  finishBtn: {
    backgroundColor: '#6CFF1A',

    padding: 16,

    borderRadius: 14,

    alignItems: 'center',
  },

  finishText: {
    fontSize: 15,

    color: '#111',

    fontFamily: 'Poppins-Bold',
  },
});
