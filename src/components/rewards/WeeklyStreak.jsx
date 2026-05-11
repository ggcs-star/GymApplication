import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const WeeklyStreak = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.heading}>7-Day Burn</Text>

        <Text style={styles.streak}>5 Day Streak!</Text>
      </View>

      <View style={styles.daysRow}>
        {days.map((day, index) => (
          <View key={index} style={styles.dayBox}>
            <Text style={styles.dayText}>{day}</Text>

            <View style={[styles.dot, index < 5 && styles.activeDot]} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default WeeklyStreak;

const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
    alignItems: 'center',
  },

  heading: {
    fontSize: 20,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  streak: {
    color: '#2E7D32',
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
  },

  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dayBox: {
    alignItems: 'center',
  },

  dayText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
    fontFamily: 'Poppins-Medium',
  },

  dot: {
    width: 18,
    height: 18,
    borderRadius: 20,
    backgroundColor: '#D6D6D6',
  },

  activeDot: {
    backgroundColor: '#6CFF1A',
  },
});
