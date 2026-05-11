import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const XPCard = ({ title, desc, xp, btn }) => (
  <View style={styles.card}>
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.xp}>+{xp} XP</Text>
    </View>

    <Text style={styles.desc}>{desc}</Text>

    <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
      <Text style={styles.btnText}>{btn}</Text>
    </TouchableOpacity>
  </View>
);

const EarnMoreXP = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Earn More XP</Text>

      <XPCard
        title="Complete Football Drill"
        desc="Agility and sprint intervals to boost match readiness."
        xp="50"
        btn="Start Drill"
      />

      <XPCard
        title="Log Daily Macros"
        desc="Track your protein, carbs, and fats to maintain optimal fuel."
        xp="20"
        btn="Log Meals"
      />
    </View>
  );
};

export default EarnMoreXP;

const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
  },

  heading: {
    fontSize: 20,
    color: '#111',
    marginBottom: 16,
    fontFamily: 'Poppins-Bold',
  },

  card: {
    backgroundColor: '#EAF7EA',
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1.5,
    borderColor: '#D7EED7',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 15,
    color: '#111',
    fontFamily: 'Poppins-Bold',
    flex: 1,
    marginRight: 10,
  },

  xp: {
    color: '#2E7D32',
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
  },

  desc: {
    fontSize: 13,
    color: '#666',
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 16,
    fontFamily: 'Poppins-Regular',
  },

  btn: {
    height: 46,
    backgroundColor: '#6CFF1A',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color: '#111',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
});
