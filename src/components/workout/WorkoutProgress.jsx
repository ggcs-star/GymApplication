import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkoutProgress = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Workout Progress</Text>
        <Text style={styles.count}>0/4</Text>
      </View>

      <View style={styles.bar}>
        <View style={styles.fill} />
      </View>
    </View>
  );
};

export default WorkoutProgress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6F5E6',
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
    color: '#666',
    fontFamily:"Poppins-Regular"
  },
  count: {
    fontSize: 12,
    color: '#2E7D32',
    fontFamily: 'Poppins-Bold',
  },
  bar: {
    height: 6,
    backgroundColor: '#cfe9cf',
    borderRadius: 10,
  },
  fill: {
    width: '30%',
    height: 6,
    backgroundColor: '#6CFF1A',
    borderRadius: 10,
  },
});