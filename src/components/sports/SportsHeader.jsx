import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import BackIcon from '../../assets/images/back.svg';

const SportsHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
        activeOpacity={0.8}
      >
        <BackIcon width={24} height={24} />
      </TouchableOpacity>

      <Text style={styles.title}>Train Like a Champion</Text>

      <Text style={styles.subtitle}>
        Choose your sport and unlock AI-powered drills
      </Text>
    </View>
  );
};

export default SportsHeader;

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 12,
  },

  title: {
    fontSize: 24,
    color: '#1A1A1A',
    fontFamily: 'Poppins-Bold',
    lineHeight: 30,
  },

  subtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 5,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
    width: '92%',
  },
});
