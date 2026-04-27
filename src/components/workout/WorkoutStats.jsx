import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ClockIcon from '../../assets/images/clock.svg';
import TargetIcon from '../../assets/images/target1.svg';
import PlayIcon from '../../assets/images/play.svg';


const StatBox = ({ Icon, value, label }) => (
  <View style={styles.statBox}>
    <Icon width={26} height={26} />

    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const WorkoutStats = () => {
  return (
    <View style={styles.statsContainer}>
      
      <StatBox
        Icon={ClockIcon}
        value="45 min"
        label="Duration"
      />

      <StatBox
        Icon={TargetIcon}
        value="320 cal"
        label="Target"
      />

      <StatBox
        Icon={PlayIcon}
        value="8"
        label="Exercises"
      />

    </View>
  );
};

export default WorkoutStats;

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  statBox: {
    backgroundColor: '#E6F5E6',
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 12,

    alignItems: 'flex-start', 

    borderWidth: 1.5,
    borderColor: '#2E7D32',
  },

  statValue: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    marginTop: 6,
  },

  statLabel: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
});