import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ClockIcon from '../../assets/images/clock1.svg';
import RepeatIcon from '../../assets/images/repeat.svg';
import LavelIcon from '../../assets/images/lavel.svg';

const StatBox = ({ Icon, value, label }) => (
  <View style={styles.statBox}>
    <Icon width={24} height={24} />
    <Text style={styles.statValue} numberOfLines={1} adjustsFontSizeToFit>
      {value}
    </Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const WorkoutStats = ({item}) => {
  return (
    <View style={styles.statsContainer}>
      <StatBox
        Icon={RepeatIcon}
        value={`${item.sets} x ${item.reps}`}
         label="Sets x Reps"
      />

      <StatBox Icon={ClockIcon} value="60s" label="Rest Time" />

      <StatBox Icon={LavelIcon} value="Advanced" label="Level" />
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
    padding: 12,       
    borderRadius: 12,
    alignItems: 'flex-start',
    borderWidth: 1.5,
    borderColor: '#2E7D32',
    minHeight: 100,      
    justifyContent: 'space-between', 
  },

  statValue: {
    fontSize: 16,         
    fontFamily: 'Poppins-Bold',
    marginTop: 4,
  },

  statLabel: {
    fontSize: 12,         
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
});