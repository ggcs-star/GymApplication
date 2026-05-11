import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import HeartIcon from '../../assets/images/heart-pulse.svg';

const HealthSummaryCard = () => {
  return (
    <View>
      <View style={styles.headingRow}>
        <HeartIcon width={24} height={24} />

        <Text style={styles.mainHeading}>Notes</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.point}>
          • Your blood sugar levels are balanced and healthy.
        </Text>

        <Text style={styles.point}>
          • Cholesterol improved by 12% from last month.
        </Text>

        <Text style={styles.point}>
          • Keep following your current diet and hydration.
        </Text>
      </View>
    </View>
  );
};

export default HealthSummaryCard;

const styles = StyleSheet.create({
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  mainHeading: {
    fontSize: 20,
    color: '#111',
    marginLeft: 10,
    fontFamily: 'Poppins-Bold',
  },

  card: {
    backgroundColor: '#EAF7EA',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1.5,
    borderColor: '#2E7D32',
    marginBottom: 24,
  },

  point: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
    lineHeight: 22,
    fontFamily: 'Poppins-Regular',
  },
});
