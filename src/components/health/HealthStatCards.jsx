import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import ReportsIcon from '../../assets/images/reports.svg';

const Card = ({ title, value, status }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>

    <Text style={styles.value}>{value}</Text>

    <Text style={styles.status}>{status}</Text>
  </View>
);

const HealthStatCards = () => {
  return (
    <View>
      <View style={styles.headingRow}>
        <ReportsIcon width={24} height={24} />

        <Text style={styles.heading}>Recent Reports</Text>
      </View>

      <View style={styles.grid}>
        <Card title="Blood Sugar" value="92 mg/dL" status="Normal" />

        <Card title="Cholesterol" value="185 mg/dL" status="Good" />

        <Card title="Blood Pressure" value="118/76" status="Normal" />

        <Card title="Body Fat %" value="18.5%" status="Athletic" />
      </View>
    </View>
  );
};

export default HealthStatCards;

const styles = StyleSheet.create({
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  heading: {
    fontSize: 20,
    marginLeft: 10,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#E6F5E6',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: '#2E7D32',
  },

  cardTitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
  },

  value: {
    fontSize: 22,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  status: {
    marginTop: 6,
    color: '#2E7D32',
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
  },
});
