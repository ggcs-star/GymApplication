import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const GoalsCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Fitness Goals</Text>

     

      <View style={styles.row}>
        <Text style={styles.label}>Goal</Text>

        <Text style={styles.green}>Muscle Gain</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Fitness Level</Text>

        <Text style={styles.value}>Intermediate</Text>
      </View>
    </View>
  );
};

export default GoalsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E6F5E6',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1.5,
    borderColor: '#E6F5E6',
  },

  heading: {
    fontSize: 18,
    marginBottom: 16,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  label: {
    color: '#666',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },

  value: {
    color: '#111',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },

  green: {
    color: '#2E7D32',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
});
