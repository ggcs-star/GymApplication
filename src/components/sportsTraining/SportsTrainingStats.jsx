import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import TechIcon from '../../assets/images/tech.svg';
import TimerIcon from '../../assets/images/timer.svg';

const StatBox = ({ Icon, value, label }) => (
  <View style={styles.box}>
    <Icon width={26} height={26} />

    <Text style={styles.value} numberOfLines={1} adjustsFontSizeToFit>
      {value}
    </Text>

    <Text style={styles.label}>{label}</Text>
  </View>
);

const SportsTrainingStats = () => {
  return (
    <View style={styles.row}>
      <StatBox Icon={TechIcon} value="5" label="Techniques" />

      <StatBox Icon={TimerIcon} value="120m" label="Content" />
    </View>
  );
};

export default SportsTrainingStats;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  box: {
    backgroundColor: '#E6F5E6',
    flex: 1,
    marginHorizontal: 5,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#2E7D32',
    minHeight: 105,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  value: {
    fontSize: 20,
    color: '#111',
    fontFamily: 'Poppins-Bold',
    marginTop: 6,
    width: '100%',
  },

  label: {
    marginTop: 4,
    color: '#666',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
});
