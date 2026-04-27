import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkoutHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upper Body Workout</Text>
      <Text style={styles.sub}>
        AI-personalized for muscle gain
      </Text>
    </View>
  );
};

export default WorkoutHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
  },
  sub: {
    fontSize: 13,
    color: '#666',
    fontFamily:"Poppins-Regular"
  },
});