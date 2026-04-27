import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SportsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sports Training</Text>
      <Text style={styles.subtitle}>
        Improve your skills & performance
      </Text>
    </View>
  );
};

export default SportsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
  },
});