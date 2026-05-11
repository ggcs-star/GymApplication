import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import FireIcon from '../../assets/images/fire.svg';
import TrophyIcon from '../../assets/images/trophy1.svg';

const StatBox = ({ value, label, Icon }) => (
  <View style={styles.box}>
    <Icon width={28} height={28} />

    <Text style={styles.value}>{value}</Text>

    <Text style={styles.label}>{label}</Text>
  </View>
);

const ProfileStats = () => {
  return (
    <View style={styles.row}>
      <StatBox value="14" label="Day Streak" Icon={FireIcon} />

      <StatBox value="85/100" label="Score" Icon={TrophyIcon} />
    </View>
  );
};

export default ProfileStats;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  box: {
    width: '48%',
    backgroundColor: '#E6F5E6',
    borderRadius: 16,
    paddingVertical: 22,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#2E7D32',
  },

  value: {
    fontSize: 24,
    color: '#111',
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
  },

  label: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
});
