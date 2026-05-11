import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const DeviceCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Connected Devices</Text>

      <View style={styles.deviceBox}>
        <View>
          <Text style={styles.deviceName}>Apple Watch</Text>

          <Text style={styles.connected}>Connected</Text>
        </View>

        <View style={styles.dot} />
      </View>
    </View>
  );
};

export default DeviceCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E6F5E6',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1.5,
    borderColor: '#E6F5E6',
  },

  heading: {
    fontSize: 18,
    marginBottom: 16,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  deviceBox: {
    backgroundColor: '#F8FFF5',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  deviceName: {
    fontSize: 16,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  connected: {
    marginTop: 3,
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#6CFF1A',
  },
});
