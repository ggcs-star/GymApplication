import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FireIcon from '../../assets/images/fire.svg';
import StepsIcon from '../../assets/images/steps.svg';
import WaterIcon from '../../assets/images/water.svg';

const StatsCard = () => {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.statBox}>
        <FireIcon width={26} height={26} />
        <Text style={styles.statValue}>1,847</Text>
        <Text style={styles.statLabel}>Calories</Text>
      </View>

      <View style={styles.statBox}>
        <StepsIcon width={26} height={26} />
        <Text style={styles.statValue}>8,432</Text>
        <Text style={styles.statLabel}>Steps</Text>
      </View>

      <View style={styles.statBox}>
        <WaterIcon width={26} height={26} />
        <Text style={styles.statValue}>6/8</Text>
        <Text style={styles.statLabel}>Water</Text>
      </View>
    </View>
  );
};

export default StatsCard;

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
  },

  statLabel: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins-Regular', 
  },
});