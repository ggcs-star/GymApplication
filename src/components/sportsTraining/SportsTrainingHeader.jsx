import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import BackIcon from '../../assets/images/back.svg';

const SportsTrainingHeader = ({ navigation, sport }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <BackIcon width={20} height={20} />
      </TouchableOpacity>

      <Text style={styles.title}>{sport} Techniques</Text>

      <Text style={styles.sub}>Master professional level skills</Text>
    </View>
  );
};

export default SportsTrainingHeader;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 12,
  },

  title: {
    fontSize: 26,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  sub: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
});
