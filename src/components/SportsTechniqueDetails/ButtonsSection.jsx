import React from 'react';

import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonsSection = () => {
  return (
    <>
      <TouchableOpacity style={styles.startBtn}>
        <Text style={styles.startText}>Start Training</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.skipBtn}>
        <Text style={styles.skipText}>Skip Technique →</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonsSection;

const styles = StyleSheet.create({
  startBtn: {
    backgroundColor: '#6CFF1A',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  startText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
  },

  skipBtn: {
    alignItems: 'center',
    marginTop: 12,
  },

  skipText: {
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
});
