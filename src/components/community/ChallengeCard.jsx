import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ChallengeCard = ({ title, participants, days, bgColor, btnColor }) => {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: bgColor,
          borderColor: btnColor,
        },
      ]}
    >
      <View style={styles.row}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <View style={styles.daysContainer}>
          <Text style={styles.days}>{days} days</Text>
          <Text style={styles.remaining}>remaining</Text>
        </View>
      </View>

      <Text style={styles.sub}>{participants} participants</Text>

      <TouchableOpacity
        style={[styles.button, { borderColor: btnColor }]}
        activeOpacity={0.7}
      >
        <Text style={styles.btnText}>Join Challenge</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChallengeCard;

const styles = StyleSheet.create({
  card: {
    width: 240,
    padding: 15,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // 🔥 fix vertical alignment
  },

  title: {
    flex: 1, // 🔥 IMPORTANT
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#1A1A1A',
    marginRight: 6, // 🔥 spacing from days
  },
  days: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },

  sub: {
    fontSize: 12,
    color: '#666',
    marginVertical: 6,
  },

  button: {
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',

    backgroundColor: '#fff',
    borderWidth: 1.5,
  },

  btnText: {
    fontWeight: 'bold',
    color: '#000',
  },
  remaining: {
    fontSize: 10,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
});
