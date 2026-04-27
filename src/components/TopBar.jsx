import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import BackIcon from '../assets/images/back.svg';

const TopBar = ({ navigation, step }) => {
  const TOTAL_STEPS = 9;

  const progressWidth = `${(step / TOTAL_STEPS) * 100}%`;

  return (
    <View style={styles.topBar}>
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={{ marginRight: 5 }}
      >
        <BackIcon width={24} height={24} />
      </TouchableOpacity>

      <View style={styles.progressContainer}>
        <View style={[styles.progressFill, { width: progressWidth }]} />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 10,
  },

  progressContainer: {
    flex: 1,
    height: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },

  progressFill: {
    width: '20%',
    height: 5,
    backgroundColor: '#6CFF1A',
    borderRadius: 5,
  },
});
