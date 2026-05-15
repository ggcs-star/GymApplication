import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const WorkoutHeader = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current Workout</Text>

      <View style={styles.timeBox}>
        <Text style={styles.time}>{item.time} min</Text>
      </View>
    </View>
  );
};

export default WorkoutHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  heading: {
    fontSize: 28,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  timeBox: {
    backgroundColor: '#EAF7EA',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 30,
  },

  time: {
    color: '#2E7D32',
    fontFamily: 'Poppins-Bold',
  },
});
